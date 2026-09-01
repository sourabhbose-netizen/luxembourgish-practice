// ===== INLL A2 TEXTBOOK: Audio + Answers =====
// Audio URL pattern for A2 book: https://sdl.inll.lu/wp-content/uploads/2023/03/AudioN.mp3
// (no zero-padding, no dash) — verified working for Audio1..Audio180+
//
// NOTE: The A2 book reuses A1 Kapitel 1 & 2, then adds A2-specific chapters.
// Audio numbers and answers below are placeholders to be filled in as you
// go through the book in class. Ask in chat: "Audio 105 answer is ..." and
// it will be added here.

const AUDIO_BASE_A2 = "https://sdl.inll.lu/wp-content/uploads/2023/03/";

const TEXTBOOK_A2 = [
    {
        chapter: "Kapitel 1",
        title: "Wiederhuelung A1 — Begréissung, Famill, Zuelen",
        note: "The A2 book starts by revising A1 content.",
        sections: [
            {
                title: "Fräizäit a Kontakter (audio numbers to confirm)",
                exercises: [
                    { audio: 100, desc: "Wat maachen d'Leit gär? (fill in when covered)", answer: null },
                    { audio: 101, desc: "Fräizäitaktivitéiten — Text 1", answer: null },
                    { audio: 102, desc: "Fräizäitaktivitéiten — Text 2", answer: null },
                    { audio: 103, desc: "Fräizäitaktivitéiten — Text 3", answer: null },
                    { audio: 104, desc: "Fräizäitaktivitéiten — Text 4", answer: null },
                ]
            }
        ]
    },
    {
        chapter: "Kapitel 2",
        title: "Aarbecht & Deeglaf (Work & Daily Routine)",
        note: "Confirm audio numbers with your book.",
        sections: [
            {
                title: "Vu moies bis owes (Daily routine)",
                exercises: [
                    { audio: 105, desc: "Deeglaf — Persoun 1 (fill in when covered)", answer: null },
                    { audio: 106, desc: "Deeglaf — Persoun 2", answer: null },
                ]
            }
        ]
    }
];

// ===== RENDER A2 TEXTBOOK =====
let exerciseCounterA2 = 10000; // offset to avoid clashing with A1 ids

function initTextbookA2() {
    const container = document.getElementById("textbookA2Content");
    if (!container) return;
    container.innerHTML = "";

    TEXTBOOK_A2.forEach(chapter => {
        const chDiv = document.createElement("div");
        chDiv.className = "tb-chapter";

        let sectionsHtml = chapter.sections.map(sec => {
            let exercisesHtml = sec.exercises.map(ex => {
                const id = `a2ex-${exerciseCounterA2++}`;
                const audioSrc = `${AUDIO_BASE_A2}Audio${ex.audio}.mp3`;

                let answerHtml;
                if (ex.answer) {
                    const formattedAnswer = ex.answer.replace(/\s*\|\s*/g, "<br>");
                    answerHtml = `
                        <button class="tb-answer-btn" id="btn-${id}" disabled onclick="toggleAnswer('${id}', this)">
                            🔒 Listen first, then show answer
                        </button>
                        <div class="tb-answer" id="ans-${id}">${formattedAnswer}</div>
                    `;
                } else {
                    answerHtml = `<div class="tb-no-answer">📝 Answer not added yet — ask in chat to fill it in</div>`;
                }

                return `
                    <div class="tb-exercise">
                        <div class="tb-exercise-header">
                            <span class="tb-audio-label">Audio ${ex.audio}</span>
                            <span class="tb-desc">${ex.desc}</span>
                        </div>
                        <audio controls preload="none" class="tb-audio-player" id="audio-${id}"
                               onplay="unlockAnswer('${id}')" onended="highlightAnswer('${id}')">
                            <source src="${audioSrc}" type="audio/mpeg">
                        </audio>
                        ${answerHtml}
                    </div>
                `;
            }).join("");

            return `
                <div class="tb-section">
                    <h4>${sec.title}</h4>
                    ${exercisesHtml}
                </div>
            `;
        }).join("");

        const noteHtml = chapter.note
            ? `<p style="color:#888;font-size:0.8rem;font-style:italic;margin-bottom:10px">${chapter.note}</p>`
            : "";

        chDiv.innerHTML = `
            <div class="tb-chapter-header" onclick="this.parentElement.classList.toggle('open')">
                <h3>${chapter.chapter}: ${chapter.title}</h3>
                <span class="tb-toggle">▼</span>
            </div>
            <div class="tb-chapter-body">
                ${noteHtml}
                <div class="tb-links">
                    <a href="https://sdl.inll.lu/book-a2-2017/" target="_blank">📖 INLL A2 Book Website</a>
                </div>
                ${sectionsHtml}
            </div>
        `;

        container.appendChild(chDiv);
    });
}
