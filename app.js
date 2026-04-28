// ===== STATE =====
let currentQuestion = null;
let score = 0;
let total = 0;
let streak = 0;
let activeCategory = "All";
let isRecording = false;
let mediaRecorder = null;
let audioChunks = [];
let recognitionMode = "luxasr"; // "luxasr" or "browser"
let browserRecognition = null;
let browserAlternatives = [];

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initCategories();
    initRecognition();
    nextQuestion();
});

function initCategories() {
    const bar = document.getElementById("categoryBar");
    const allBtn = document.createElement("button");
    allBtn.className = "category-btn active";
    allBtn.textContent = "All";
    allBtn.onclick = () => selectCategory("All", allBtn);
    bar.appendChild(allBtn);

    CATEGORIES.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.textContent = cat;
        btn.onclick = () => selectCategory(cat, btn);
        bar.appendChild(btn);
    });
}

function selectCategory(cat, btn) {
    activeCategory = cat;
    document.getElementById("currentCategory").textContent = cat;
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    nextQuestion();
}

// ===== RECOGNITION SETUP =====
async function initRecognition() {
    // Check microphone access
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(t => t.stop()); // Release immediately

        // Default to LuxASR
        recognitionMode = "luxasr";
        updateModeUI();
        setStatus("🎤 Microphone ready — using LuxASR (Luxembourgish recognition)", "ready");
    } catch (e) {
        setStatus("⚠️ Microphone not available — type your answers below", "warning");
    }

    // Also set up browser recognition as fallback
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
        browserRecognition = new SR();
        browserRecognition.continuous = true;
        browserRecognition.interimResults = true;
        browserRecognition.maxAlternatives = 10;
        browserRecognition.lang = "de-DE";
        browserRecognition.onresult = handleBrowserResult;
        browserRecognition.onerror = (e) => { if (e.error !== "aborted") console.log("Browser SR error:", e.error); };
        browserRecognition.onend = () => { if (isRecording && recognitionMode === "browser") try { browserRecognition.start(); } catch(e) {} };
    }

    // Always show manual input
    document.getElementById("manualInputArea").classList.add("visible");
}

function updateModeUI() {
    const luxBtn = document.getElementById("modeLuxasr");
    const brBtn = document.getElementById("modeBrowser");
    if (luxBtn && brBtn) {
        luxBtn.classList.toggle("active", recognitionMode === "luxasr");
        brBtn.classList.toggle("active", recognitionMode === "browser");
    }
}

function setRecognitionMode(mode) {
    recognitionMode = mode;
    updateModeUI();
    if (mode === "luxasr") {
        setStatus("🎤 Using LuxASR — real Luxembourgish speech recognition", "ready");
    } else {
        setStatus("🎤 Using browser recognition (German proxy)", "ready");
    }
}

function setStatus(text, cls) {
    const el = document.getElementById("micStatus");
    el.textContent = text;
    el.className = "mic-status " + cls;
}

// ===== QUESTIONS =====
function getFilteredQuestions() {
    if (activeCategory === "All") return QUESTIONS;
    return QUESTIONS.filter(q => q.category === activeCategory);
}

function nextQuestion() {
    const pool = getFilteredQuestions();
    if (pool.length === 0) return;

    let q;
    do {
        q = pool[Math.floor(Math.random() * pool.length)];
    } while (pool.length > 1 && q === currentQuestion);

    currentQuestion = q;
    browserAlternatives = [];

    document.getElementById("questionText").textContent = q.question;
    document.getElementById("questionTranslation").textContent = q.translation;
    document.getElementById("hintText").textContent = q.hint;
    document.getElementById("hintText").classList.remove("visible");
    document.getElementById("yourAnswer").textContent = "—";
    document.getElementById("yourAnswer").classList.remove("listening");
    document.getElementById("rawRecognition").textContent = "";
    document.getElementById("rawRecognition").style.display = "none";
    document.getElementById("feedback").classList.remove("visible", "correct", "partial", "incorrect");
    document.getElementById("manualInput").value = "";
}

// ===== TEXT-TO-SPEECH =====
function speakQuestion() {
    if (!currentQuestion) return;

    const utterance = new SpeechSynthesisUtterance(currentQuestion.question);
    const rate = parseFloat(document.getElementById("speechRate").value);
    utterance.rate = rate;

    const voices = speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.startsWith("de")) ||
                        voices.find(v => v.lang.startsWith("fr")) ||
                        voices[0];
    if (germanVoice) utterance.voice = germanVoice;
    utterance.lang = "de-DE";

    const btn = document.getElementById("btnListen");
    btn.textContent = "🔊 Playing...";
    btn.disabled = true;
    utterance.onend = () => { btn.textContent = "🔊 Listen"; btn.disabled = false; };

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();

// ===== RECORDING (shared for both modes) =====
async function toggleRecording() {
    if (isRecording) {
        stopRecording();
    } else {
        startRecording();
    }
}

async function startRecording() {
    isRecording = true;
    audioChunks = [];
    browserAlternatives = [];

    document.getElementById("btnRecord").classList.add("recording");
    document.getElementById("btnRecord").innerHTML = "⏹️ Stop & Check";
    document.getElementById("yourAnswer").textContent = "🎤 Speak now...";
    document.getElementById("yourAnswer").classList.add("listening");
    document.getElementById("feedback").classList.remove("visible");
    document.getElementById("rawRecognition").textContent = "";
    document.getElementById("rawRecognition").style.display = "none";
    setStatus("🔴 Recording... speak your answer in Lëtzebuergesch", "recording");

    if (recognitionMode === "luxasr") {
        // Record audio via MediaRecorder for LuxASR
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            // Use wav-compatible format; browsers typically support webm/ogg
            const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
                ? "audio/webm;codecs=opus"
                : MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
                    ? "audio/ogg;codecs=opus"
                    : "audio/webm";

            mediaRecorder = new MediaRecorder(stream, { mimeType });
            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunks.push(e.data);
            };
            mediaRecorder.start();
        } catch (e) {
            setStatus("⚠️ Could not access microphone: " + e.message, "warning");
            isRecording = false;
            resetRecordButton();
            return;
        }
    } else {
        // Browser recognition
        if (browserRecognition) {
            try { browserRecognition.start(); } catch(e) {}
        }
    }
}

function stopRecording() {
    isRecording = false;
    resetRecordButton();
    document.getElementById("yourAnswer").classList.remove("listening");

    if (recognitionMode === "luxasr") {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
            mediaRecorder.onstop = async () => {
                // Stop all tracks
                mediaRecorder.stream.getTracks().forEach(t => t.stop());

                if (audioChunks.length === 0) {
                    setStatus("⚠️ No audio recorded — try again", "warning");
                    return;
                }

                const audioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType });
                setStatus("⏳ Sending to LuxASR for Luxembourgish recognition...", "warning");
                document.getElementById("yourAnswer").textContent = "⏳ Recognizing...";

                await sendToLuxASR(audioBlob);
            };
            mediaRecorder.stop();
        }
    } else {
        // Browser recognition
        if (browserRecognition) {
            try { browserRecognition.stop(); } catch(e) {}
        }
        setStatus("🎤 Microphone ready", "ready");
        const text = document.getElementById("yourAnswer").textContent;
        if (text && text !== "—" && !text.startsWith("🎤")) {
            validateAnswer(text, browserAlternatives);
        }
    }
}

function resetRecordButton() {
    document.getElementById("btnRecord").classList.remove("recording");
    document.getElementById("btnRecord").innerHTML = "🎤 Answer";
}

// ===== LUXASR API =====
async function sendToLuxASR(audioBlob) {
    const formData = new FormData();
    // LuxASR accepts wav, mp3, m4a — we send webm and hope it handles it,
    // or we convert. Let's try directly first.
    const ext = audioBlob.type.includes("webm") ? "webm" : "ogg";
    formData.append("audio_file", audioBlob, `recording.${ext}`);

    try {
        const response = await fetch(
            "https://luxasr.uni.lu/v2/asr?diarization=Disabled&outfmt=json&language=lb",
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error(`LuxASR returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        let transcript = "";

        // Parse LuxASR JSON response
        if (typeof data === "string") {
            transcript = data;
        } else if (data.text) {
            transcript = data.text;
        } else if (data.segments) {
            transcript = data.segments.map(s => s.text).join(" ");
        } else if (Array.isArray(data)) {
            transcript = data.map(s => s.text || s).join(" ");
        } else {
            // Try to extract text from whatever structure
            transcript = JSON.stringify(data);
        }

        transcript = transcript.trim();

        if (transcript) {
            document.getElementById("yourAnswer").textContent = transcript;
            const rawEl = document.getElementById("rawRecognition");
            rawEl.style.display = "block";
            rawEl.textContent = "LuxASR recognized: " + transcript;
            setStatus("✅ LuxASR recognition complete", "ready");
            validateAnswer(transcript, [transcript]);
        } else {
            document.getElementById("yourAnswer").textContent = "No speech detected";
            setStatus("⚠️ LuxASR didn't detect speech — try speaking louder", "warning");
        }
    } catch (e) {
        console.error("LuxASR error:", e);

        if (e.message.includes("Failed to fetch") || e.message.includes("NetworkError") || e.message.includes("CORS")) {
            // CORS issue — fall back to browser recognition
            setStatus("⚠️ LuxASR blocked by CORS — switching to browser mode. Retrying...", "warning");
            document.getElementById("yourAnswer").textContent = "LuxASR unavailable from browser — use typing or browser mic";

            // Show CORS explanation
            const rawEl = document.getElementById("rawRecognition");
            rawEl.style.display = "block";
            rawEl.textContent = "Note: LuxASR doesn't allow direct browser calls (CORS). Using browser recognition as fallback.";

            // Auto-switch to browser mode
            setRecognitionMode("browser");
        } else {
            setStatus("⚠️ LuxASR error: " + e.message, "warning");
            document.getElementById("yourAnswer").textContent = "Recognition failed — try typing instead";
        }
    }
}

// ===== BROWSER RECOGNITION HANDLER =====
function handleBrowserResult(event) {
    let interim = "", final = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) {
            final += r[0].transcript;
            for (let j = 0; j < r.length; j++) browserAlternatives.push(r[j].transcript.trim());
        } else {
            interim += r[0].transcript;
        }
    }
    const display = final || interim;
    if (display) document.getElementById("yourAnswer").textContent = display;
    if (browserAlternatives.length) {
        const el = document.getElementById("rawRecognition");
        el.style.display = "block";
        el.textContent = "Browser heard: " + [...new Set(browserAlternatives)].slice(0, 5).join(" | ");
    }
}

// ===== MANUAL INPUT =====
function submitManual() {
    const input = document.getElementById("manualInput").value.trim();
    if (!input) return;
    document.getElementById("yourAnswer").textContent = input;
    validateAnswer(input, [input]);
}

// ===== ANSWER VALIDATION =====
function validateAnswer(spoken, alternatives) {
    if (!currentQuestion) return;

    const accepted = currentQuestion.answers;
    let bestMatch = 0;
    let bestAnswer = "";

    const allToCheck = [spoken, ...alternatives];

    for (const alt of allToCheck) {
        const altClean = normalize(alt);
        for (const ans of accepted) {
            const ansClean = normalize(ans);

            if (altClean === ansClean) { bestMatch = 1; bestAnswer = ans; break; }

            const sim = similarity(altClean, ansClean);
            if (sim > bestMatch) { bestMatch = sim; bestAnswer = ans; }

            if (altClean.includes(ansClean)) {
                const s = Math.max(sim, 0.85);
                if (s > bestMatch) { bestMatch = s; bestAnswer = ans; }
            }
            if (ansClean.includes(altClean) && altClean.length > 2) {
                const s = Math.max(sim, 0.7);
                if (s > bestMatch) { bestMatch = s; bestAnswer = ans; }
            }

            const ws = wordOverlap(altClean, ansClean);
            if (ws > bestMatch) { bestMatch = ws; bestAnswer = ans; }

            const ps = phoneticSimilarity(altClean, ansClean);
            if (ps > bestMatch) { bestMatch = ps; bestAnswer = ans; }
        }
        if (bestMatch >= 1) break;
    }

    total++;
    const feedbackEl = document.getElementById("feedback");
    const iconEl = document.getElementById("feedbackIcon");
    const textEl = document.getElementById("feedbackText");
    const expectedEl = document.getElementById("expectedAnswer");

    feedbackEl.classList.remove("correct", "partial", "incorrect");
    feedbackEl.classList.add("visible");

    if (bestMatch >= 0.6) {
        score++; streak++;
        feedbackEl.classList.add("correct");
        iconEl.textContent = "✅";
        textEl.textContent = bestMatch >= 0.85
            ? "Perfekt! Ganz gutt gemaach! 🎉"
            : "Gutt! Close enough — well done! 👍";
        expectedEl.innerHTML = `<strong>Matched:</strong> ${bestAnswer}<br><small style="color:#888">Confidence: ${Math.round(bestMatch * 100)}%</small>`;
    } else if (bestMatch >= 0.35) {
        streak = 0;
        feedbackEl.classList.add("partial");
        iconEl.textContent = "🟡";
        textEl.textContent = "Almost! Check the expected answers below.";
        expectedEl.innerHTML = `<strong>Accepted answers:</strong><br>${accepted.slice(0, 5).join("<br>")}`;
    } else {
        streak = 0;
        feedbackEl.classList.add("incorrect");
        iconEl.textContent = "❌";
        textEl.textContent = "Not quite — review the answers below.";
        expectedEl.innerHTML = `<strong>Accepted answers:</strong><br>${accepted.slice(0, 5).join("<br>")}`;
    }

    speakCorrectAnswer(bestAnswer || accepted[0]);
    updateScore();
}

function speakCorrectAnswer(answer) {
    const u = new SpeechSynthesisUtterance(answer);
    u.rate = 0.75;
    const voices = speechSynthesis.getVoices();
    const v = voices.find(v => v.lang.startsWith("de")) || voices[0];
    if (v) u.voice = v;
    u.lang = "de-DE";
    setTimeout(() => { speechSynthesis.cancel(); speechSynthesis.speak(u); }, 600);
}

// ===== SIMILARITY FUNCTIONS =====
function normalize(text) {
    return text.toLowerCase()
        .replace(/[.,!?;:'"()\-–—]/g, "")
        .replace(/\s+/g, " ")
        .replace(/ë/g, "e").replace(/é/g, "e").replace(/ä/g, "a")
        .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ß/g, "ss")
        .trim();
}

function phoneticNormalize(text) {
    return text
        .replace(/sch/g, "sh").replace(/ch/g, "k").replace(/ck/g, "k")
        .replace(/ph/g, "f").replace(/th/g, "t").replace(/ei/g, "ai")
        .replace(/ie/g, "i").replace(/eu/g, "oi").replace(/au/g, "ow")
        .replace(/tz/g, "ts").replace(/dt/g, "t")
        .replace(/nn/g, "n").replace(/mm/g, "m").replace(/ll/g, "l")
        .replace(/ss/g, "s").replace(/ff/g, "f").replace(/tt/g, "t")
        .replace(/pp/g, "p").replace(/bb/g, "b").replace(/dd/g, "d").replace(/gg/g, "g");
}

function phoneticSimilarity(a, b) { return levenshteinSimilarity(phoneticNormalize(a), phoneticNormalize(b)); }

function wordOverlap(a, b) {
    const wa = a.split(" ").filter(w => w.length > 1), wb = b.split(" ").filter(w => w.length > 1);
    if (!wa.length || !wb.length) return 0;
    let mc = 0; const used = new Set();
    for (const w of wa) {
        let bm = 0, bi = -1;
        for (let i = 0; i < wb.length; i++) {
            if (used.has(i)) continue;
            if (w === wb[i]) { bm = 1; bi = i; break; }
            let s = levenshteinSimilarity(w, wb[i]);
            if (s > bm && s > 0.6) { bm = s; bi = i; }
            let p = levenshteinSimilarity(phoneticNormalize(w), phoneticNormalize(wb[i]));
            if (p > bm && p > 0.65) { bm = p; bi = i; }
        }
        if (bi >= 0) { mc += bm; used.add(bi); }
    }
    return mc / Math.max(wa.length, wb.length);
}

function similarity(a, b) {
    if (a === b) return 1; if (!a || !b) return 0;
    return Math.max(levenshteinSimilarity(a, b), wordOverlap(a, b), phoneticSimilarity(a, b));
}

function levenshteinSimilarity(a, b) {
    const d = levenshteinDistance(a, b), mx = Math.max(a.length, b.length);
    return mx === 0 ? 1 : 1 - d / mx;
}

function levenshteinDistance(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    return dp[m][n];
}

// ===== UI HELPERS =====
function showHint() { document.getElementById("hintText").classList.toggle("visible"); }

function showExpectedAnswer() {
    if (!currentQuestion) return;
    const fb = document.getElementById("feedback");
    fb.classList.remove("correct", "partial", "incorrect");
    fb.classList.add("visible", "partial");
    document.getElementById("feedbackIcon").textContent = "📖";
    document.getElementById("feedbackText").textContent = "Accepted answers — practice saying them out loud!";
    document.getElementById("expectedAnswer").innerHTML = `<strong>Accepted:</strong><br>${currentQuestion.answers.join("<br>")}`;
}

function updateScore() {
    document.getElementById("scoreDisplay").textContent = `${score} / ${total}`;
    document.getElementById("streakDisplay").textContent = `${streak} 🔥`;
}
