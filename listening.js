// ===== LISTENING ASSISTANT =====
// Records audio → sends to LuxASR → transcribes → sends to Gemini for answer

let listenRecorder = null;
let listenChunks = [];
let isListening = false;

function initListeningAssistant() {
    document.getElementById("listenResult").innerHTML = '<p style="color:#888;text-align:center">Click "🎤 Listen" when a question is being asked in Luxembourgish.<br>The app will transcribe it and provide the answer.</p>';
}

async function toggleListening() {
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

async function startListening() {
    listenChunks = [];
    isListening = true;

    const btn = document.getElementById("listenBtn");
    btn.classList.add("recording");
    btn.innerHTML = "⏹️ Stop Listening";
    document.getElementById("listenStatus").textContent = "🔴 Listening... (speak the question now)";
    document.getElementById("listenStatus").className = "listen-status recording";
    document.getElementById("listenResult").innerHTML = "";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
            ? "audio/webm;codecs=opus"
            : "audio/webm";

        listenRecorder = new MediaRecorder(stream, { mimeType });
        listenRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) listenChunks.push(e.data);
        };
        listenRecorder.start();
    } catch (e) {
        document.getElementById("listenStatus").textContent = "⚠️ Could not access microphone: " + e.message;
        document.getElementById("listenStatus").className = "listen-status error";
        isListening = false;
        btn.classList.remove("recording");
        btn.innerHTML = "🎤 Listen";
    }
}

function stopListening() {
    isListening = false;
    const btn = document.getElementById("listenBtn");
    btn.classList.remove("recording");
    btn.innerHTML = "🎤 Listen";

    if (listenRecorder && listenRecorder.state !== "inactive") {
        listenRecorder.onstop = async () => {
            listenRecorder.stream.getTracks().forEach(t => t.stop());

            if (listenChunks.length === 0) {
                document.getElementById("listenStatus").textContent = "⚠️ No audio recorded";
                document.getElementById("listenStatus").className = "listen-status error";
                return;
            }

            const audioBlob = new Blob(listenChunks, { type: listenRecorder.mimeType });
            document.getElementById("listenStatus").textContent = "⏳ Sending to LuxASR for transcription...";
            document.getElementById("listenStatus").className = "listen-status processing";

            await processListeningAudio(audioBlob);
        };
        listenRecorder.stop();
    }
}

async function processListeningAudio(audioBlob) {
    let transcript = "";

    // Step 1: Send to LuxASR
    try {
        const formData = new FormData();
        const ext = audioBlob.type.includes("webm") ? "webm" : "ogg";
        formData.append("audio_file", audioBlob, `recording.${ext}`);

        const response = await fetch(
            "https://luxasr.uni.lu/v2/asr?diarization=Disabled&outfmt=json&language=lb",
            { method: "POST", body: formData }
        );

        if (!response.ok) throw new Error(`LuxASR error: ${response.status}`);

        const data = await response.json();

        if (typeof data === "string") transcript = data;
        else if (data.text) transcript = data.text;
        else if (data.segments) transcript = data.segments.map(s => s.text).join(" ");
        else if (Array.isArray(data)) transcript = data.map(s => s.text || s).join(" ");

        transcript = transcript.trim();
    } catch (e) {
        // LuxASR failed (likely CORS) — fall back to showing manual input
        document.getElementById("listenStatus").textContent = "⚠️ LuxASR unavailable (CORS). Type what you heard instead:";
        document.getElementById("listenStatus").className = "listen-status error";
        document.getElementById("manualListenInput").style.display = "flex";
        return;
    }

    if (!transcript) {
        document.getElementById("listenStatus").textContent = "⚠️ Could not detect speech. Try again or type below.";
        document.getElementById("listenStatus").className = "listen-status error";
        document.getElementById("manualListenInput").style.display = "flex";
        return;
    }

    // Show transcript
    document.getElementById("listenStatus").textContent = "✅ Transcribed! Now generating answer...";
    document.getElementById("listenStatus").className = "listen-status success";

    displayTranscriptAndAnswer(transcript);
}

async function submitManualListen() {
    const input = document.getElementById("manualListenText").value.trim();
    if (!input) return;
    document.getElementById("manualListenInput").style.display = "none";
    document.getElementById("listenStatus").textContent = "✅ Generating answer...";
    document.getElementById("listenStatus").className = "listen-status success";
    displayTranscriptAndAnswer(input);
}

async function displayTranscriptAndAnswer(transcript) {
    const resultDiv = document.getElementById("listenResult");

    // Show what was heard
    resultDiv.innerHTML = `
        <div class="listen-transcript">
            <div class="listen-label">🎧 Question heard:</div>
            <div class="listen-text">${transcript}</div>
        </div>
        <div class="listen-answer-loading">⏳ Generating answer with AI...</div>
    `;

    // Step 2: Send to Gemini for answer
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
                <div class="listen-label">⚠️ Could not generate answer:</div>
                <div class="listen-answer-text">${e.message}</div>
            </div>
        `;
    }

    document.getElementById("listenStatus").textContent = "🎤 Ready — click Listen for the next question";
    document.getElementById("listenStatus").className = "listen-status ready";
}

async function getAnswerFromGemini(question) {
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

    const systemPrompt = `You are a Luxembourgish language assistant. A student is listening to questions in Luxembourgish and needs help answering them.

Given a question in Luxembourgish, provide:
1. The English translation of the question
2. A suggested answer in Luxembourgish (personalized for Sourabh: Indian, lives in Steinsel, works at Amazon as Product Manager for 10 years, married, student pilot, speaks English/Hindi/Luxembourgish)
3. The English translation of your suggested answer

Format your response exactly like this:
QUESTION (English): [translation]
ANSWER (Lëtzebuergesch): [your suggested answer]
ANSWER (English): [translation of answer]

Keep answers simple, A1/A2 level. Use the Perfekt tense for past, Futur proche for future.
If the question is not clear or not a question, just explain what was said.`;

    const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: "user", parts: [{ text: `Question heard: "${question}"` }] }],
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
        .replace(/QUESTION \(English\):/g, "<strong>📘 Question (English):</strong>")
        .replace(/ANSWER \(Lëtzebuergesch\):/g, "<strong>🇱🇺 Answer (Lëtzebuergesch):</strong>")
        .replace(/ANSWER \(English\):/g, "<strong>📘 Answer (English):</strong>");
}
