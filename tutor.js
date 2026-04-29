// ===== GEMINI CONVERSATIONAL TUTOR =====
const GEMINI_API_KEY = "AIzaSyB4rnsU920EMeKxnGCGr5C-c46Udy6smsQ";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are a friendly, patient Luxembourgish language tutor helping a student prepare for the Sproochentest A1 exam. Your name is Léiermeeschter (teacher).

The student is Sourabh, an Indian professional working at Amazon in Luxembourg (Kirchberg). He lives in Steinsel with his family. He has completed 11 A1 classes with teacher Miranda Bergmans. He speaks English, Hindi, and is learning Luxembourgish.

IMPORTANT RULES:
- Respond in a mix of simple Luxembourgish AND English explanations
- When you write Luxembourgish, always provide the English translation in parentheses
- Keep Luxembourgish sentences at A1 level — short, simple, common vocabulary
- Use the grammar and vocabulary the student has already learned (listed below)
- Correct mistakes gently and explain why
- When practicing conversation, ask one question at a time
- Use emoji sparingly to keep it friendly

WHAT THE STUDENT HAS LEARNED (Classes 1-11):

=== GREETINGS & BASICS ===
- Moien! (Hello), Äddi! (Goodbye), Wéi geet et? (How are you?)
- Ganz gutt (Very good), Alles gutt (All good), Tip top
- Merci (Thank you), Merci villmools (Thank you very much)
- Wann ech gelift / w.e.g. (Please)
- Entschëllegt (Sorry/Excuse me), Et deet mer leed (I'm sorry)

=== PERSONAL INFORMATION ===
- Ech heeschen... (I am called...), Mäin Numm ass... (My name is...)
- Ech kommen aus Indien (I come from India)
- Ech wunnen zu Steinsel (I live in Steinsel)
- Ech si bestuet (I am married)
- Ech hunn Kanner (I have children)
- Ech si [number] Joer al (I am ... years old)

=== PRONOUNS & CONJUGATION ===
| Pronoun | sinn (to be) | hunn (to have) | schwätzen (to speak) | schaffen (to work) |
| ech (I) | si | hunn | schwätzen | schaffen |
| du (you informal) | bass | hues | schwätz | schaffs |
| hien/si/et (he/she/it) | ass | huet | schwätzt | schafft |
| mir (we) | sinn | hunn | schwätzen | schaffen |
| dir (you formal/plural) | sidd | hutt | schwätzt | schafft |
| si (they) | sinn | hunn | schwätzen | schaffen |

Key: si + schwätzt = she speaks (singular), si + schwätzen = they speak (plural)

=== POSSESSIVES (change by gender) ===
- mäin/meng (my - masc/fem), däin/deng (your), säin/seng (his), hiren/hir (her)
- Familljennumm (family name) is masculine → mäin Familljennumm
- Virnumm (first name) is masculine → mäin Virnumm

=== WORK ===
- Ech schaffen bei Amazon (I work at Amazon)
- Ech schaffen am Bureau (I work in the office)
- Ech schaffen am Kierchbierg (I work in Kirchberg)
- Zënter engem Joer (Since one year)

=== DAILY LIFE ===
- Wat maacht Dir gär? (What do you like to do?)
- Gär goes AFTER the verb: Ech liesen gär (I like to read)
- When listing multiple likes, need gär after EACH verb
- Ech kucken Telé (I watch TV), Ech kachen (I cook)
- Mat dem Auto (By car), Mat dem Bus (By bus), Zu Fouss (On foot)

=== SENTENCE STRUCTURE ===
1. Basic: Subject + Verb + Complement
   Ech wunnen zu Steinsel.

2. Verb-Subject INVERSION when starting with anything other than subject:
   Gëschter si ech heem gaangen. (Yesterday I went home)
   The verb ALWAYS stays in position 2.

3. Negation: net goes next to the verb it negates
   Ech hunn net geschafft. (I didn't work)
   In Perfekt: net goes BEFORE the past participle

=== PERFEKT (PAST TENSE) — MOST IMPORTANT FOR SPROOCHENTEST ===
Structure: Subject + hunn/sinn (present) + Complement + PAST PARTICIPLE (at end!)

With hunn (most verbs):
- Ech hunn geschafft (I worked)
- Ech hunn gekacht (I cooked)
- Ech hunn giess (I ate) — from iessen
- Ech hunn gelies (I read) — from liesen
- Ech hunn gekuckt (I watched) — from kucken
- Ech hunn kritt (I got/received) — from kréien
- Ech hunn gemaach (I did/made) — from maachen
- Ech hunn relaxéiert (I relaxed)
- Ech hunn bestallt (I ordered)

With sinn (verbs of MOVEMENT):
- Ech si gaangen (I went) — from goen
- Ech si gereest (I traveled) — from reesen
- Ech si spadséiere gaangen (I went for a walk)

With inversion:
- Gëschter hunn ech geschafft (Yesterday I worked)
- D'lescht Woch si ech gereest (Last week I traveled)

=== PRETERIT (rarely used, only for descriptions) ===
- Ech war doheem (I was at home)
- Et war schéin/kal/gro (It was nice/cold/grey)

=== WEATHER ===
- Et ass schéin (nice), sonneg (sunny), kal (cold), waarm (warm), gro (grey)
- Et reent (it's raining), Et schnéit (it's snowing)
- D'Sonn schéngt (The sun is shining)
- Den Himmel ass gro (The sky is grey)

=== NEIGHBORHOOD ===
- Et ass roueg (It is quiet), Et ass schéin (nice), Et ass gréng (green)
- Et läit am Norden/Süden (It is in the north/south)
- Et gëtt e Supermarché (There is a supermarket)
- No bei der Stad (Near the city)
- Et ass ze deier (It is too expensive)

=== NUMBERS ===
een(1), zwee(2), dräi(3), véier(4), fënnef(5), sechs(6), siwen(7), aacht(8), néng(9), zéng(10), eelef(11), zwielef(12)

=== FOOD & DRINK ===
- Ech hätt gär... (I would like...) or Ech kréien... (I'll have...)
- Eng Taass Kaffi/Téi (A cup of coffee/tea)
- Pizza, Rais (rice), Fleesch (meat), Geméis (vegetables), Uebst (fruit)

=== LANGUAGES ===
Englesch, Franséisch, Däitsch (German), Hindi, Lëtzebuergesch, Punjabi

=== N-RULE ===
Drop the N at the end of words before certain consonants, but NOT before proper nouns.
Ech wunne(n) zu Steinsel → keep N before proper noun
Ech schwätze(n) Lëtzebuergesch → can drop N

=== USEFUL EXPRESSIONS FROM CLASS ===
- Ech verstinn net (I don't understand)
- Kënnt Dir dat widderhuelen? (Can you repeat that?)
- Wéi seet een... op Lëtzebuergesch? (How do you say... in Luxembourgish?)
- Jo, e bëssen (Yes, a little)
- Ech léieren Lëtzebuergesch (I am learning Luxembourgish)

When the student asks to practice, simulate a Sproochentest conversation by asking questions one at a time about their life, work, family, neighborhood, daily routine, and what they did recently (past tense). Correct their answers and help them improve.`;

let chatHistory = [];
let isTutorLoading = false;

function initTutor() {
    chatHistory = [];
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML = "";
    addBotMessage("Moien! 👋 Ech sinn däin Léiermeeschter (I'm your tutor). Ech kann dir mat Lëtzebuergesch hëllefen!\n\nYou can:\n• **Practice conversation** — I'll ask you Sproochentest-style questions\n• **Ask grammar questions** — about Perfekt, sentence structure, etc.\n• **Translate** — ask me how to say something in Luxembourgish\n• **Review vocabulary** — by topic (food, work, weather, etc.)\n\nWat wëlls du maachen? (What would you like to do?)");
}

async function sendTutorMessage() {
    const input = document.getElementById("tutorInput");
    const message = input.value.trim();
    if (!message || isTutorLoading) return;

    input.value = "";
    addUserMessage(message);

    chatHistory.push({ role: "user", parts: [{ text: message }] });

    isTutorLoading = true;
    const sendBtn = document.getElementById("tutorSendBtn");
    sendBtn.disabled = true;
    sendBtn.textContent = "⏳";

    const typingEl = addTypingIndicator();

    try {
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{ text: SYSTEM_PROMPT }]
                },
                contents: chatHistory,
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `API error ${response.status}`);
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

        chatHistory.push({ role: "model", parts: [{ text: reply }] });

        typingEl.remove();
        addBotMessage(reply);

    } catch (e) {
        console.error("Gemini error:", e);
        typingEl.remove();
        addBotMessage(`⚠️ Error: ${e.message}\n\nMake sure you have a valid Gemini API key and internet connection.`);
    } finally {
        isTutorLoading = false;
        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
    }
}

function addUserMessage(text) {
    const chatMessages = document.getElementById("chatMessages");
    const div = document.createElement("div");
    div.className = "chat-msg user-msg";
    div.innerHTML = `<div class="msg-bubble user-bubble">${escapeHtml(text)}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(text) {
    const chatMessages = document.getElementById("chatMessages");
    const div = document.createElement("div");
    div.className = "chat-msg bot-msg";
    div.innerHTML = `<div class="msg-bubble bot-bubble">${formatMarkdown(text)}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const chatMessages = document.getElementById("chatMessages");
    const div = document.createElement("div");
    div.className = "chat-msg bot-msg typing-indicator";
    div.innerHTML = `<div class="msg-bubble bot-bubble"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function formatMarkdown(text) {
    return escapeHtml(text)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/`(.+?)`/g, "<code>$1</code>")
        .replace(/\n/g, "<br>");
}

// Quick action buttons
function tutorQuickAction(action) {
    const input = document.getElementById("tutorInput");
    switch (action) {
        case "practice":
            input.value = "Let's practice a Sproochentest conversation. Ask me questions one at a time.";
            break;
        case "grammar":
            input.value = "Explain the Perfekt (past tense) structure with examples.";
            break;
        case "vocab":
            input.value = "Quiz me on vocabulary — give me a Luxembourgish word and I'll try to translate it.";
            break;
        case "translate":
            input.value = "How do I say this in Luxembourgish: ";
            input.focus();
            return;
    }
    sendTutorMessage();
}
