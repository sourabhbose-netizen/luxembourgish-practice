// ===== STATE =====
let currentQuestion = null;
let score = 0;
let total = 0;
let streak = 0;
let activeCategory = "All";
let isRecording = false;
let recognition = null;
let hasRecognitionSupport = false;
let allAlternatives = [];

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    initCategories();
    checkSpeechSupport();
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

function checkSpeechSupport() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        hasRecognitionSupport = true;
        setupRecognition(SpeechRecognition);
        document.getElementById("micStatus").textContent = "🎤 Microphone ready (using German recognition as proxy)";
        document.getElementById("micStatus").className = "mic-status ready";
    } else {
        document.getElementById("browserWarning").classList.add("visible");
        document.getElementById("micStatus").textContent = "⚠️ Speech recognition not available — type your answers below";
        document.getElementById("micStatus").className = "mic-status warning";
    }
    // Always show manual input as a reliable fallback
    document.getElementById("manualInputArea").classList.add("visible");
}

function setupRecognition(SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 10; // Get as many alternatives as possible
    recognition.lang = "de-DE"; // German is closest to Luxembourgish

    recognition.onresult = handleRecognitionResult;
    recognition.onerror = handleRecognitionError;
    recognition.onend = handleRecognitionEnd;
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
    allAlternatives = [];

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
    utterance.onend = () => {
        btn.textContent = "🔊 Listen";
        btn.disabled = false;
    };

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();

// ===== SPEECH RECOGNITION =====
function toggleRecording() {
    if (!hasRecognitionSupport) {
        document.getElementById("manualInput").focus();
        return;
    }

    if (isRecording) {
        stopRecording();
        // Validate with whatever we have
        const text = document.getElementById("yourAnswer").textContent;
        if (text && text !== "—" && text !== "Listening..." && text !== "🎤 Speak now...") {
            validateAnswer(text, allAlternatives);
        }
    } else {
        startRecording();
    }
}

function startRecording() {
    if (!recognition) return;

    allAlternatives = [];
    isRecording = true;
    document.getElementById("btnRecord").classList.add("recording");
    document.getElementById("btnRecord").innerHTML = "⏹️ Stop & Check";
    document.getElementById("yourAnswer").textContent = "🎤 Speak now...";
    document.getElementById("yourAnswer").classList.add("listening");
    document.getElementById("feedback").classList.remove("visible");
    document.getElementById("rawRecognition").textContent = "";
    document.getElementById("rawRecognition").style.display = "none";
    document.getElementById("micStatus").textContent = "🔴 Recording... speak your answer";
    document.getElementById("micStatus").className = "mic-status recording";

    try {
        recognition.start();
    } catch (e) {
        console.log("Recognition restart:", e.message);
    }
}

function stopRecording() {
    isRecording = false;
    document.getElementById("btnRecord").classList.remove("recording");
    document.getElementById("btnRecord").innerHTML = "🎤 Answer";
    document.getElementById("yourAnswer").classList.remove("listening");
    document.getElementById("micStatus").textContent = "🎤 Microphone ready";
    document.getElementById("micStatus").className = "mic-status ready";

    try {
        recognition.stop();
    } catch (e) {
        console.log("Recognition stop:", e.message);
    }
}

function handleRecognitionResult(event) {
    let interimTranscript = "";
    let finalTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript;

        if (result.isFinal) {
            finalTranscript += transcript;
            // Collect ALL alternatives from this final result
            for (let j = 0; j < result.length; j++) {
                allAlternatives.push(result[j].transcript.trim());
            }
        } else {
            interimTranscript += transcript;
        }
    }

    const display = finalTranscript || interimTranscript;
    if (display) {
        document.getElementById("yourAnswer").textContent = display;
    }

    // Show raw recognition data for debugging
    if (allAlternatives.length > 0) {
        const rawEl = document.getElementById("rawRecognition");
        rawEl.style.display = "block";
        const unique = [...new Set(allAlternatives)];
        rawEl.textContent = "Heard: " + unique.slice(0, 5).join(" | ");
    }
}

function handleRecognitionError(event) {
    console.log("Recognition error:", event.error);
    const statusEl = document.getElementById("micStatus");

    if (event.error === "no-speech") {
        statusEl.textContent = "⚠️ No speech detected — try speaking louder or closer to the mic";
        statusEl.className = "mic-status warning";
    } else if (event.error === "not-allowed") {
        statusEl.textContent = "❌ Microphone blocked — click the 🔒 icon in your address bar to allow mic access";
        statusEl.className = "mic-status error";
        document.getElementById("yourAnswer").textContent = "Mic access denied — type your answer below";
    } else if (event.error === "aborted") {
        // Normal when we call stop()
        return;
    } else {
        statusEl.textContent = `⚠️ Error: ${event.error} — try again or type your answer`;
        statusEl.className = "mic-status warning";
    }
}

function handleRecognitionEnd() {
    if (isRecording) {
        // Auto-restart to keep listening
        try {
            recognition.start();
        } catch (e) {
            stopRecording();
        }
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
    const spokenClean = normalize(spoken);

    let bestMatch = 0;
    let bestAnswer = "";

    // Check all alternatives from speech recognition
    const allToCheck = [spoken, ...alternatives];

    for (const alt of allToCheck) {
        const altClean = normalize(alt);
        for (const ans of accepted) {
            const ansClean = normalize(ans);

            // Exact match
            if (altClean === ansClean) {
                bestMatch = 1;
                bestAnswer = ans;
                break;
            }

            // Full string similarity
            const sim = similarity(altClean, ansClean);
            if (sim > bestMatch) {
                bestMatch = sim;
                bestAnswer = ans;
            }

            // Check if spoken contains the answer or vice versa
            if (altClean.includes(ansClean)) {
                const containSim = Math.max(sim, 0.85);
                if (containSim > bestMatch) {
                    bestMatch = containSim;
                    bestAnswer = ans;
                }
            }
            if (ansClean.includes(altClean) && altClean.length > 2) {
                const containSim = Math.max(sim, 0.7);
                if (containSim > bestMatch) {
                    bestMatch = containSim;
                    bestAnswer = ans;
                }
            }

            // Word-level matching (more forgiving for speech recognition)
            const wordSim = wordOverlap(altClean, ansClean);
            if (wordSim > bestMatch) {
                bestMatch = wordSim;
                bestAnswer = ans;
            }

            // Phonetic similarity (handles common speech recognition substitutions)
            const phoneticSim = phoneticSimilarity(altClean, ansClean);
            if (phoneticSim > bestMatch) {
                bestMatch = phoneticSim;
                bestAnswer = ans;
            }
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
        score++;
        streak++;
        feedbackEl.classList.add("correct");
        iconEl.textContent = "✅";
        if (bestMatch >= 0.85) {
            textEl.textContent = "Perfekt! Ganz gutt gemaach! 🎉";
        } else {
            textEl.textContent = "Gutt! Close enough — well done! 👍 (Speech recognition isn't perfect for Luxembourgish)";
        }
        expectedEl.innerHTML = `<strong>Your answer matched:</strong> ${bestAnswer}<br><small style="color:#888">Match confidence: ${Math.round(bestMatch * 100)}%</small>`;
    } else if (bestMatch >= 0.35) {
        streak = 0;
        feedbackEl.classList.add("partial");
        iconEl.textContent = "🟡";
        textEl.textContent = "Almost there! The recognition might have misheard you. Check the expected answers — if you said something similar, you're doing great!";
        expectedEl.innerHTML = `<strong>Accepted answers:</strong><br>${accepted.slice(0, 5).join("<br>")}<br><br><small style="color:#888">💡 Tip: If the mic isn't catching your words, try typing your answer instead.</small>`;
    } else {
        streak = 0;
        feedbackEl.classList.add("incorrect");
        iconEl.textContent = "❌";
        textEl.textContent = "Not quite — but speech recognition for Luxembourgish is tricky! Review the answers below.";
        expectedEl.innerHTML = `<strong>Accepted answers:</strong><br>${accepted.slice(0, 5).join("<br>")}<br><br><small style="color:#888">💡 The mic uses German recognition as a proxy, so it may mishear Luxembourgish words. Typing is more reliable for checking your spelling.</small>`;
    }

    speakCorrectAnswer(bestAnswer || accepted[0]);
    updateScore();
}

function speakCorrectAnswer(answer) {
    const utterance = new SpeechSynthesisUtterance(answer);
    utterance.rate = 0.75;
    const voices = speechSynthesis.getVoices();
    const germanVoice = voices.find(v => v.lang.startsWith("de")) || voices[0];
    if (germanVoice) utterance.voice = germanVoice;
    utterance.lang = "de-DE";
    setTimeout(() => {
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    }, 600);
}

// ===== SIMILARITY FUNCTIONS =====
function normalize(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"()\-–—]/g, "")
        .replace(/\s+/g, " ")
        .replace(/ë/g, "e")
        .replace(/é/g, "e")
        .replace(/ä/g, "a")
        .replace(/ü/g, "u")
        .replace(/ö/g, "o")
        .replace(/ß/g, "ss")
        .trim();
}

// Phonetic normalization for common speech recognition confusions
function phoneticNormalize(text) {
    return text
        .replace(/sch/g, "sh")
        .replace(/ch/g, "k")
        .replace(/ck/g, "k")
        .replace(/ph/g, "f")
        .replace(/th/g, "t")
        .replace(/ei/g, "ai")
        .replace(/ie/g, "i")
        .replace(/eu/g, "oi")
        .replace(/au/g, "ow")
        .replace(/tz/g, "ts")
        .replace(/dt/g, "t")
        .replace(/nn/g, "n")
        .replace(/mm/g, "m")
        .replace(/ll/g, "l")
        .replace(/ss/g, "s")
        .replace(/ff/g, "f")
        .replace(/tt/g, "t")
        .replace(/pp/g, "p")
        .replace(/bb/g, "b")
        .replace(/dd/g, "d")
        .replace(/gg/g, "g");
}

function phoneticSimilarity(a, b) {
    const pa = phoneticNormalize(a);
    const pb = phoneticNormalize(b);
    return levenshteinSimilarity(pa, pb);
}

function wordOverlap(a, b) {
    const wordsA = a.split(" ").filter(w => w.length > 1);
    const wordsB = b.split(" ").filter(w => w.length > 1);

    if (wordsA.length === 0 || wordsB.length === 0) return 0;

    let matchCount = 0;
    const usedB = new Set();

    for (const wa of wordsA) {
        let bestWordMatch = 0;
        let bestIdx = -1;

        for (let i = 0; i < wordsB.length; i++) {
            if (usedB.has(i)) continue;
            const wb = wordsB[i];

            if (wa === wb) {
                bestWordMatch = 1;
                bestIdx = i;
                break;
            }

            const wSim = levenshteinSimilarity(wa, wb);
            if (wSim > bestWordMatch && wSim > 0.6) {
                bestWordMatch = wSim;
                bestIdx = i;
            }

            // Phonetic word match
            const pSim = levenshteinSimilarity(phoneticNormalize(wa), phoneticNormalize(wb));
            if (pSim > bestWordMatch && pSim > 0.65) {
                bestWordMatch = pSim;
                bestIdx = i;
            }
        }

        if (bestIdx >= 0) {
            matchCount += bestWordMatch;
            usedB.add(bestIdx);
        }
    }

    const maxLen = Math.max(wordsA.length, wordsB.length);
    return matchCount / maxLen;
}

function similarity(a, b) {
    if (a === b) return 1;
    if (!a || !b) return 0;

    const charSim = levenshteinSimilarity(a, b);
    const wSim = wordOverlap(a, b);
    const pSim = phoneticSimilarity(a, b);

    return Math.max(charSim, wSim, pSim);
}

function levenshteinSimilarity(a, b) {
    const dist = levenshteinDistance(a, b);
    const maxLen = Math.max(a.length, b.length);
    if (maxLen === 0) return 1;
    return 1 - dist / maxLen;
}

function levenshteinDistance(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            );
        }
    }
    return dp[m][n];
}

// ===== UI HELPERS =====
function showHint() {
    document.getElementById("hintText").classList.toggle("visible");
}

function showExpectedAnswer() {
    if (!currentQuestion) return;
    const feedbackEl = document.getElementById("feedback");
    const iconEl = document.getElementById("feedbackIcon");
    const textEl = document.getElementById("feedbackText");
    const expectedEl = document.getElementById("expectedAnswer");

    feedbackEl.classList.remove("correct", "partial", "incorrect");
    feedbackEl.classList.add("visible", "partial");
    iconEl.textContent = "📖";
    textEl.textContent = "Here are the accepted answers — practice saying them out loud!";
    expectedEl.innerHTML = `<strong>Accepted answers:</strong><br>${currentQuestion.answers.join("<br>")}`;
}

function updateScore() {
    document.getElementById("scoreDisplay").textContent = `${score} / ${total}`;
    document.getElementById("streakDisplay").textContent = `${streak} 🔥`;
}
