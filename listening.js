// ===== LISTENING ASSISTANT =====
// Two modes:
// 1. "Read Question" — app speaks a Sproochentest question, you practice answering
// 2. "Listen" — records what someone says, sends to Gemini for answer

// Sproochentest questions bank
const SPROOCHENTEST_QUESTIONS = [
    // FESTER
    { theme: "Fester", question: "Vu wou kommt Dir?", english: "Where do you come from?" },
    { theme: "Fester", question: "Wat fir Fester feiert Dir an Ärem Land?", english: "What celebrations do you celebrate in your country?" },
    { theme: "Fester", question: "Wat fir e Fest hutt Dir am léifsten? Firwat?", english: "What celebration do you like most? Why?" },
    { theme: "Fester", question: "Wat fir e Fest hutt Dir fir d'lescht gefeiert?", english: "What celebration did you last celebrate?" },
    { theme: "Fester", question: "Wéini war dat?", english: "When was that?" },
    { theme: "Fester", question: "Wie war do invitéiert?", english: "Who was invited?" },
    { theme: "Fester", question: "Mat wiem waart Dir do?", english: "With whom were you there?" },
    { theme: "Fester", question: "Hutt Dir e Kaddo matgeholl?", english: "Did you bring a present?" },
    { theme: "Fester", question: "Gitt Dir gär op Hochzäiten?", english: "Do you like going to weddings?" },
    { theme: "Fester", question: "Wéi ass eng typesch Hochzäit an Ärem Land?", english: "What's a typical wedding like in your country?" },
    { theme: "Fester", question: "Wéi laang dauert eng Hochzäit bei Iech?", english: "How long does a wedding last in your country?" },
    { theme: "Fester", question: "Wien ass normalerweis invitéiert?", english: "Who is normally invited?" },
    { theme: "Fester", question: "Wat ass en typeschen Hochzäitskaddo?", english: "What's a typical wedding gift?" },
    { theme: "Fester", question: "Feiert Dir Äre Gebuertsdag?", english: "Do you celebrate your birthday?" },
    { theme: "Fester", question: "Wéi organiséiert Dir Äre Gebuertsdag?", english: "How do you organize your birthday?" },
    { theme: "Fester", question: "Wien invitéiert Dir deen Dag?", english: "Who do you invite that day?" },
    { theme: "Fester", question: "Wou feiert Dir am léifsten?", english: "Where do you prefer to celebrate?" },
    { theme: "Fester", question: "Wat hätt Dir gär als Kaddo fir Äre Gebuertsdag?", english: "What would you like as a gift for your birthday?" },
    { theme: "Fester", question: "Wat fir eng Zort Fest feiert Dir als nächst?", english: "What kind of celebration is next for you?" },
    // SCHLOF AN ENTSPANUNG
    { theme: "Schlof", question: "Um wéi vill Auer stitt Dir normalerweis op?", english: "What time do you normally get up?" },
    { theme: "Schlof", question: "Um wéi vill Auer gitt Dir normalerweis schlofen?", english: "What time do you normally go to sleep?" },
    { theme: "Schlof", question: "Wéi wichteg ass Schlof fir Iech?", english: "How important is sleep for you?" },
    { theme: "Schlof", question: "Wéi vill Stonnen hutt Dir als Kand geschlof?", english: "How many hours did you sleep as a child?" },
    { theme: "Schlof", question: "Wéi vill Stonne Schlof braucht Dir generell?", english: "How many hours of sleep do you generally need?" },
    { theme: "Schlof", question: "Wéi laang schlooft Dir normalerweis?", english: "How long do you normally sleep?" },
    { theme: "Schlof", question: "Fannt Dir, dass dat genuch ass?", english: "Do you think that's enough?" },
    { theme: "Schlof", question: "Wéi sinn Är Schlofzäiten de Weekend?", english: "What are your sleep times on the weekend?" },
    { theme: "Schlof", question: "Wat maacht Dir, wann Dir net aschlofe kënnt?", english: "What do you do when you can't fall asleep?" },
    { theme: "Schlof", question: "Wéini hutt Dir Iech fir d'lescht verschlof?", english: "When did you last oversleep?" },
    { theme: "Schlof", question: "Wou kënnt Dir Iech am beschten entspanen?", english: "Where can you relax best?" },
    { theme: "Schlof", question: "Wat maacht Dir fir manner Stress ze hunn?", english: "What do you do to have less stress?" },
    { theme: "Schlof", question: "Wat maacht Dir an der Vakanz fir ze relaxen?", english: "What do you do on vacation to relax?" },
    { theme: "Schlof", question: "Wat fir Musek entspaant Iech?", english: "What music relaxes you?" },
    { theme: "Schlof", question: "Wat fir Hobbyen entspaanen Iech?", english: "What hobbies relax you?" },
    { theme: "Schlof", question: "Géingt Dir gär e Wellness-Weekend maachen?", english: "Would you like to do a wellness weekend?" },
    // AARBECHT
    { theme: "Aarbecht", question: "Hutt Dir Är Aarbecht gär?", english: "Do you like your job?" },
    { theme: "Aarbecht", question: "Wat maacht Dir op der Aarbecht?", english: "What do you do at work?" },
    { theme: "Aarbecht", question: "Wéi vill Stonne schafft Dir pro Dag?", english: "How many hours do you work per day?" },
    { theme: "Aarbecht", question: "Wéini fänkt Är Aarbecht un?", english: "When does your work start?" },
    { theme: "Aarbecht", question: "Schafft Dir léiwer moies oder owes?", english: "Do you prefer working morning or evening?" },
    { theme: "Aarbecht", question: "Schafft Dir eleng oder am Team?", english: "Do you work alone or in a team?" },
    { theme: "Aarbecht", question: "Wat ass dat Bescht un Ärer Aarbecht?", english: "What's the best thing about your job?" },
    { theme: "Aarbecht", question: "Wat ass schwéier un Ärer Aarbecht?", english: "What's difficult about your job?" },
    { theme: "Aarbecht", question: "Hutt Dir vill Reuniounen op der Aarbecht?", english: "Do you have many meetings at work?" },
    { theme: "Aarbecht", question: "Wéi kommt Dir op d'Aarbecht?", english: "How do you get to work?" },
    // TRANSPORT
    { theme: "Transport", question: "Wéi dacks flitt Dir mam Fliger?", english: "How often do you fly by plane?" },
    { theme: "Transport", question: "Huelt Dir heiansdo en Taxi?", english: "Do you sometimes take a taxi?" },
    { theme: "Transport", question: "Ass den ëffentlechen Transport gutt an Ärer Stad?", english: "Is public transport good in your city?" },
    { theme: "Transport", question: "Wéi laang dauert Äre Wee op d'Aarbecht?", english: "How long does your way to work take?" },
    { theme: "Transport", question: "Reest Dir léiwer mam Zuch oder mam Auto?", english: "Do you prefer traveling by train or car?" },
];

let currentSpokenQuestion = null;

function initListeningAssistant() {
    document.getElementById("listenResult").innerHTML = '<p style="color:#888;text-align:center">Click "🔊 Read a Question" to hear a Sproochentest question spoken aloud.<br>Practice answering, then click "Show Answer" to check.</p>';
    renderThemeFilter();
}

function renderThemeFilter() {
    const themes = [...new Set(SPROOCHENTEST_QUESTIONS.map(q => q.theme))];
    const bar = document.getElementById("listenThemeBar");
    if (!bar) return;
    bar.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.className = "category-btn active";
    allBtn.textContent = "All";
    allBtn.onclick = () => { bar.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active")); allBtn.classList.add("active"); };
    bar.appendChild(allBtn);
    themes.forEach(t => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.textContent = t;
        btn.onclick = () => { bar.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active")); btn.classList.add("active"); };
        bar.appendChild(btn);
    });
}

function speakRandomQuestion() {
    const activeBtn = document.querySelector("#listenThemeBar .category-btn.active");
    const theme = activeBtn ? activeBtn.textContent : "All";
    const pool = theme === "All" ? SPROOCHENTEST_QUESTIONS : SPROOCHENTEST_QUESTIONS.filter(q => q.theme === theme);

    let q;
    do {
        q = pool[Math.floor(Math.random() * pool.length)];
    } while (pool.length > 1 && q === currentSpokenQuestion);

    currentSpokenQuestion = q;

    // Show question text (hidden English until "Show Answer")
    document.getElementById("listenResult").innerHTML = `
        <div class="listen-transcript">
            <div class="listen-label">🗣️ Question:</div>
            <div class="listen-text">${q.question}</div>
            <div style="color:#555;font-size:0.8rem;margin-top:5px">[Theme: ${q.theme}]</div>
        </div>
        <div style="text-align:center;margin-top:12px">
            <button class="btn btn-hint" onclick="showSpokenAnswer()">👁️ Show English + Suggested Answer</button>
            <button class="btn btn-listen" onclick="repeatQuestion()" style="margin-left:8px">🔁 Repeat</button>
        </div>
        <div id="spokenAnswerArea" style="display:none;margin-top:15px"></div>
    `;

    // Speak it
    speakText(q.question);
}

function repeatQuestion() {
    if (currentSpokenQuestion) speakText(currentSpokenQuestion.question);
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith("de")) || voices.find(v => v.lang.startsWith("fr")) || voices[0];
    if (voice) utterance.voice = voice;
    utterance.lang = "de-DE";
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

async function showSpokenAnswer() {
    if (!currentSpokenQuestion) return;
    const area = document.getElementById("spokenAnswerArea");
    area.style.display = "block";
    area.innerHTML = `
        <div class="listen-transcript" style="margin-bottom:10px">
            <div class="listen-label">📘 English:</div>
            <div style="color:#a0a0b0;font-size:1rem">${currentSpokenQuestion.english}</div>
        </div>
        <div class="listen-answer-loading">⏳ Generating your personalized answer...</div>
    `;

    try {
        const answer = await getAnswerFromGemini(currentSpokenQuestion.question);
        area.innerHTML = `
            <div class="listen-transcript" style="margin-bottom:10px">
                <div class="listen-label">📘 English:</div>
                <div style="color:#a0a0b0;font-size:1rem">${currentSpokenQuestion.english}</div>
            </div>
            <div class="listen-answer">
                <div class="listen-label">💡 Suggested Answer:</div>
                <div class="listen-answer-text">${formatListenAnswer(answer)}</div>
            </div>
        `;
    } catch (e) {
        area.innerHTML = `
            <div class="listen-transcript" style="margin-bottom:10px">
                <div class="listen-label">📘 English:</div>
                <div style="color:#a0a0b0;font-size:1rem">${currentSpokenQuestion.english}</div>
            </div>
            <div class="listen-answer error">
                <div class="listen-label">⚠️ Error:</div>
                <div class="listen-answer-text">${e.message}</div>
            </div>
        `;
    }
}

// ===== BROWSER SPEECH RECOGNITION (kept for mic listening mode) =====
let isListening = false;
let listenRecognition = null;
let listenTranscript = "";

function setupListenRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
        listenRecognition = new SR();
        listenRecognition.continuous = true;
        listenRecognition.interimResults = true;
        listenRecognition.maxAlternatives = 5;
        listenRecognition.lang = "de-DE";

        listenRecognition.onresult = (event) => {
            let interim = "", final = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) final += event.results[i][0].transcript;
                else interim += event.results[i][0].transcript;
            }
            if (final) listenTranscript += final + " ";
            document.getElementById("listenLiveText").textContent = listenTranscript + interim;
        };
        listenRecognition.onerror = (e) => { if (e.error !== "aborted") console.log("Listen SR error:", e.error); };
        listenRecognition.onend = () => { if (isListening) try { listenRecognition.start(); } catch(e) {} };
    }
}

async function toggleListening() {
    if (!listenRecognition) setupListenRecognition();
    if (isListening) { stopListening(); } else { startListening(); }
}

function startListening() {
    if (!listenRecognition) { setupListenRecognition(); if (!listenRecognition) return; }
    listenTranscript = "";
    isListening = true;
    document.getElementById("listenMicBtn").classList.add("recording");
    document.getElementById("listenMicBtn").innerHTML = "⏹️ Stop & Get Answer";
    document.getElementById("listenStatus").textContent = "🔴 Listening...";
    document.getElementById("listenStatus").className = "listen-status recording";
    document.getElementById("listenLiveText").textContent = "";
    document.getElementById("listenLiveBox").style.display = "block";
    try { listenRecognition.start(); } catch(e) {}
}

async function stopListening() {
    isListening = false;
    document.getElementById("listenMicBtn").classList.remove("recording");
    document.getElementById("listenMicBtn").innerHTML = "🎤 Listen to someone";
    try { listenRecognition.stop(); } catch(e) {}

    const transcript = listenTranscript.trim() || document.getElementById("listenLiveText").textContent.trim();
    document.getElementById("listenLiveBox").style.display = "none";

    if (!transcript) {
        document.getElementById("listenStatus").textContent = "⚠️ No speech detected.";
        document.getElementById("listenStatus").className = "listen-status error";
        return;
    }

    document.getElementById("listenStatus").textContent = "✅ Got it! Generating answer...";
    document.getElementById("listenStatus").className = "listen-status success";
    await displayTranscriptAndAnswer(transcript);
}

async function submitManualListen() {
    const input = document.getElementById("manualListenText").value.trim();
    if (!input) return;
    document.getElementById("manualListenInput").style.display = "none";
    await displayTranscriptAndAnswer(input);
}

async function displayTranscriptAndAnswer(transcript) {
    const resultDiv = document.getElementById("listenResult");
    resultDiv.innerHTML = `
        <div class="listen-transcript"><div class="listen-label">🎧 Heard:</div><div class="listen-text">${transcript}</div></div>
        <div class="listen-answer-loading">⏳ Generating answer...</div>
    `;
    try {
        const answer = await getAnswerFromGemini(transcript);
        resultDiv.innerHTML = `
            <div class="listen-transcript"><div class="listen-label">🎧 Heard:</div><div class="listen-text">${transcript}</div></div>
            <div class="listen-answer"><div class="listen-label">💡 Answer:</div><div class="listen-answer-text">${formatListenAnswer(answer)}</div></div>
        `;
    } catch (e) {
        resultDiv.innerHTML = `
            <div class="listen-transcript"><div class="listen-label">🎧 Heard:</div><div class="listen-text">${transcript}</div></div>
            <div class="listen-answer error"><div class="listen-label">⚠️ Error:</div><div class="listen-answer-text">${e.message}</div></div>
        `;
    }
    document.getElementById("listenStatus").textContent = "🎤 Ready";
    document.getElementById("listenStatus").className = "listen-status ready";
}

async function getAnswerFromGemini(question) {
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    const systemPrompt = `You are a Luxembourgish language assistant helping with Sproochentest preparation.

Given a question (possibly imperfectly transcribed), provide:
1. The corrected Luxembourgish question
2. English translation
3. A suggested answer in Luxembourgish (2-3 sentences, personalized for Sourabh: Indian from Delhi, lives in Steinsel, Product Manager at Amazon EU Compliance for 10 years, married, student pilot, speaks English/Hindi/Luxembourgish)
4. English translation of the answer

Format:
🇱🇺 Question: [corrected]
📘 English: [translation]
🇱🇺 Answer: [suggested answer]
📘 Answer (English): [translation]

Keep A1/A2 level. Use Perfekt for past, Futur proche for future.`;

    const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: "user", parts: [{ text: `Question: "${question}"` }] }],
            generationConfig: { temperature: 0.5, maxOutputTokens: 512 }
        })
    });
    if (!response.ok) { const err = await response.json().catch(() => ({})); throw new Error(err.error?.message || `API error ${response.status}`); }
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate answer.";
}

function formatListenAnswer(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}
