// ===== LISTENING ASSISTANT =====
// Records via browser speech recognition → sends to Gemini for answer

let isListening = false;
let listenRecognition = null;
let listenTranscript = "";

function initListeningAssistant() {
    document.getElementById("listenResult").innerHTML = '<p style="color:#888;text-align:center">Click "🎤 Listen" when a question is being asked in Luxembourgish.<br>The app will transcribe it and provide the answer.</p>';

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
        listenRecognition = new SR();
        listenRecognition.continuous = true;
        listenRecognition.interimResults = true;
        listenRecognition.maxAlternatives = 5;
        listenRecognition.lang = "de-DE"; // German as proxy for Luxembourgish

        listenRecognition.onresult = (event) => {
            let interim = "", final = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    final += event.results[i][0].transcript;
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            if (final) listenTranscript += final + " ";
            document.getElementById("listenLiveText").textContent = listenTranscript + interim;
        };

        listenRecognition.onerror = (e) => {
            if (e.error === "aborted") return;
            document.getElementById("listenStatus").textContent = "⚠️ " + e.error;
            document.getElementById("listenStatus").className = "listen-status error";
        };

        listenRecognition.onend = () => {
            if (isListening) try { listenRecognition.start(); } catch(e) {}
        };
    } else {
        document.getElementById("listenStatus").textContent = "⚠️ Speech recognition not available. Use Chrome.";
        document.getElementById("listenStatus").className = "listen-status error";
    }
}

async function toggleListening() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

function startListening() {
    if (!listenRecognition) return;

    listenTranscript = "";
    isListening = true;
    document.getElementById("listenBtn").classList.add("recording");
    document.getElementById("listenBtn").innerHTML = "⏹️ Stop & Get Answer";
    document.getElementById("listenStatus").textContent = "🔴 Listening... speak the question now";
    document.getElementById("listenStatus").className = "listen-status recording";
    document.getElementById("listenLiveText").textContent = "";
    document.getElementById("listenLiveBox").style.display = "block";
    document.getElementById("listenResult").innerHTML = "";

    try { listenRecognition.start(); } catch(e) {}
}

async function stopListening() {
    isListening = false;
    document.getElementById("listenBtn").classList.remove("recording");
    document.getElementById("listenBtn").innerHTML = "🎤 Listen";
    try { listenRecognition.stop(); } catch(e) {}

    const transcript = listenTranscript.trim() || document.getElementById("listenLiveText").textContent.trim();

    if (!transcript) {
        document.getElementById("listenStatus").textContent = "⚠️ No speech detected. Try again or type below.";
        document.getElementById("listenStatus").className = "listen-status error";
        document.getElementById("manualListenInput").style.display = "flex";
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
    document.getElementById("listenStatus").textContent = "✅ Generating answer...";
    document.getElementById("listenStatus").className = "listen-status success";
    await displayTranscriptAndAnswer(input);
}

async function displayTranscriptAndAnswer(transcript) {
    const resultDiv = document.getElementById("listenResult");

    resultDiv.innerHTML = `
        <div class="listen-transcript">
            <div class="listen-label">🎧 Question heard:</div>
            <div class="listen-text">${transcript}</div>
        </div>
        <div class="listen-answer-loading">⏳ Generating answer with AI...</div>
    `;

    try {
        const answer = await getAnswerFromGemini(transcript);
        resultDiv.innerHTML = `
            <div class="listen-transcript">
                <div class="listen-label">🎧 Question heard:</div>
                <div class="listen-text">${transcript}</div>
            </div>
            <div class="listen-answer">
                <div class="listen-label">💡 Answer:</div>
                <div class="listen-answer-text">${formatListenAnswer(answer)}</div>
            </div>
        `;
    } catch (e) {
        resultDiv.innerHTML = `
            <div class="listen-transcript">
                <div class="listen-label">🎧 Question heard:</div>
                <div class="listen-text">${transcript}</div>
            </div>
            <div class="listen-answer error">
                <div class="listen-label">⚠️ Error:</div>
                <div class="listen-answer-text">${e.message}</div>
            </div>
        `;
    }

    document.getElementById("listenStatus").textContent = "🎤 Ready — click Listen for the next question";
    document.getElementById("listenStatus").className = "listen-status ready";
    document.getElementById("listenLiveBox").style.display = "none";
}

async function getAnswerFromGemini(question) {
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const systemPrompt = `You are a Luxembourgish language assistant. A student is listening to questions in Luxembourgish and needs help answering them.

The speech recognition uses German as a proxy, so the transcription may not be perfect Luxembourgish spelling. Interpret it as best you can.

Given a question (possibly imperfectly transcribed from Luxembourgish), provide:
1. What the question likely is in proper Luxembourgish
2. The English translation
3. A suggested answer in Luxembourgish (personalized for Sourabh: Indian from Delhi, lives in Steinsel, works at Amazon as Product Manager in EU Compliance for 10 years, married, student pilot, speaks English/Hindi/Luxembourgish)
4. The English translation of the answer

Format your response like this:
🇱🇺 Question: [corrected Luxembourgish]
📘 English: [translation]
🇱🇺 Answer: [suggested answer in Luxembourgish]
📘 Answer (English): [translation]

Keep answers simple, A1/A2 level. Use Perfekt for past, Futur proche for future.`;

    const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: "user", parts: [{ text: `Transcribed question: "${question}"` }] }],
            generationConfig: { temperature: 0.5, maxOutputTokens: 512 }
        })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || `API error ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate answer.";
}

function formatListenAnswer(text) {
    return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>")
        .replace(/🇱🇺/g, "🇱🇺")
        .replace(/📘/g, "📘");
}
