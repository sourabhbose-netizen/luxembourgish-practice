// ===== INLL TEXTBOOK: Audio + Answers =====
const AUDIO_BASE = "https://sdl.inll.lu/wp-content/uploads/2023/03/";

const TEXTBOOK = [
    {
        chapter: "Kapitel 1",
        title: "Moien! Greetings, Introductions, Countries & Languages",
        pdfAnswers: "https://sdl.inll.lu/wp-content/uploads/2023/03/leisungen_a1_kapitel-1_2021_0.1.pdf",
        pdfExtra: "https://sdl.inll.lu/wp-content/uploads/2023/03/zousazmaterial-k1_2020_1.0a.pdf",
        sections: [
            {
                title: "Moien! …an Äddi! (Säit 9)",
                exercises: [
                    { audio: 1, desc: "Lauschtert d'Begréissungen", answer: null },
                    { audio: 2, desc: "Wat soen d'Leit? Kräizt un.", answer: "1: Gudde Moien + Äddi | 2: Gudde Moien + Schéine Mëtteg | 3: Salut | 4: Bonjour + Schéinen Owend | 5: Gudde Moien + Awar + Gutt Nuecht | 6: Gudde Mëtteg | 7: Moien | 8: Gudden Owend + Awar" },
                ]
            },
            {
                title: "Wéi geet et? (Säit 10)",
                exercises: [
                    { audio: 3, desc: "Wat soen d'Leit? Schreift d'Zuel bei d'Bild.", answer: "1: ganz gutt/tipptopp | 2: schlecht/net gutt | 3: gutt/net immens | 4: ganz gutt/tipptopp | 5: ganz schlecht/guer net gutt" },
                    { audio: 4, desc: "Wat fir e Bild passt bei wat fir en Dialog?", answer: "Dialog 1 = B | Dialog 2 = C | Dialog 3 = A | Dialog 4 = D" },
                ]
            },
            {
                title: "Wéi heescht Dir? (Säit 11)",
                exercises: [
                    { audio: 5, desc: "Dialog 1 — Formell oder informell?", answer: "Dialog 1 = Foto B (informell)" },
                    { audio: 6, desc: "Dialog 2", answer: "Dialog 2 = Foto C (formell)" },
                    { audio: 7, desc: "Dialog 3", answer: "Dialog 3 = Foto E (informell)" },
                    { audio: 8, desc: "Dialog 4", answer: "Dialog 4 = Foto A (formell)" },
                    { audio: 9, desc: "Dialog 5", answer: "Dialog 5 = Foto D (formell)" },
                ]
            },
            {
                title: "D'Alphabet (Säit 12)",
                exercises: [
                    { audio: 10, desc: "D'Alphabet op Lëtzebuergesch", answer: null },
                    { audio: 11, desc: "Lauschtert a schreift d'Buschtawen.", answer: null },
                    { audio: 12, desc: "Wéi heeschen d'Leit? Dialog 1", answer: "Niels Hartjes" },
                    { audio: 13, desc: "Wéi heeschen d'Leit? Dialog 2", answer: "Stephanopoulos" },
                    { audio: 14, desc: "Wéi heeschen d'Leit? Dialog 3", answer: "Bruno Bianchi" },
                    { audio: 15, desc: "Wéi heeschen d'Leit? Dialog 4", answer: "Sandrine Zeimetz-Winandy" },
                ]
            },
            {
                title: "Wien ass dat? (Säit 13)",
                exercises: [
                    { audio: 16, desc: "Den, de oder d'? Lauschtert.", answer: "1: de Philip | 2: den Tom | 3: d'Paula | 4: d'Sandra | 5: den Här Klein | 6: d'Madamm Weber | 7: den Eric | 8: d'Anne-Marie | 9: de Marc | 10: de Dylan" },
                    { audio: 17, desc: "Lauschtert d'Dialogen.", answer: null },
                ]
            },
            {
                title: "Vu wou kommt Dir? (Säit 14-15)",
                exercises: [
                    { audio: 18, desc: "Liest a lauschtert den Text.", answer: null },
                    { audio: 19, desc: "Lauschtert d'Beschreiwung vun de Fändelen.", answer: "Faarwen vun de Fändelen — see answer key" },
                    { audio: 20, desc: "Dialog 1 — Vu wou kommen d'Leit?", answer: "Dimitri Kalinin: Griicheland, Athen | Proff: Lëtzebuerg, Diddeleng" },
                    { audio: 21, desc: "Dialog 2", answer: "Paul Becker: Schwäiz, Basel | François: Frankräich, Nanzeg" },
                    { audio: 22, desc: "Dialog 3", answer: "Nic: Irland, Dublin | Nathalie: Belsch, Léck" },
                ]
            },
            {
                title: "Länner, Leit a Sproochen (Säit 16-17)",
                exercises: [
                    { audio: 23, desc: "Text 1 — Sascha Smirnov", answer: "Russland, Moskau. Schwätzt Russesch a Polnesch. Léiert Lëtzebuergesch." },
                    { audio: 24, desc: "Text 2 — Fan Ying", answer: "China. Schwätzt Chineesesch, Englesch, e bësse Franséisch a Lëtzebuergesch." },
                    { audio: 25, desc: "Text 3 — Fatima", answer: "Portugal, Porto. Schwätzt Portugisesch a Spuenesch. Léiert Lëtzebuergesch." },
                    { audio: 26, desc: "Text 4 — Marianne", answer: "Franséisin. Mann ass Italieener. Schwätzt Franséisch a Lëtzebuergesch." },
                    { audio: 27, desc: "Text 5 — Mike", answer: "Amerika. Schwätzt Englesch, kee Däitsch, kee Franséisch, e bësse Lëtzebuergesch." },
                    { audio: 28, desc: "Lauschtert d'Gespréich. Richteg oder falsch?", answer: "1: R (Yuko schwätzt Englesch) | 2: F (Yuko schwätzt kee Franséisch) | 3: R (Julien schwätzt Franséisch) | 4: F (Julien schwätzt Lëtzebuergesch) | 5: R | 6: F (Giulia schwätzt kee Spuenesch) | 7: F (Giulia schwätzt Franséisch)" },
                ]
            },
            {
                title: "An der Sproocheschoul (Säit 18)",
                exercises: [
                    { audio: 29, desc: "Lauschtert den Dialog.", answer: null },
                    { audio: 30, desc: "Lauschtert a fëllt aus.", answer: "Markus: Däitschland, schwätzt Däitsch an Englesch, kee Franséisch. Isabel: Portugal, schwätzt Portugisesch a Franséisch, kee Spuenesch. Béid léieren Lëtzebuergesch." },
                ]
            },
            {
                title: "Aussprooch (Säit 19)",
                exercises: [
                    { audio: 31, desc: "Lauschtert a wiederholt.", answer: null },
                    { audio: 32, desc: "Lauschtert a wiederholt.", answer: null },
                ]
            },
        ]
    },
    {
        chapter: "Kapitel 2",
        title: "Numbers, Dates, Phone Numbers, Address, Family",
        pdfAnswers: "https://sdl.inll.lu/wp-content/uploads/2023/03/leisungen-kapitel-2_2020_1.0.pdf",
        pdfExtra: "https://sdl.inll.lu/wp-content/uploads/2023/03/zousazmaterial-k2_2020_1.0a.pdf",
        sections: [
            {
                title: "1, 2, 3, ... (Säit 23)",
                exercises: [
                    { audio: 33, desc: "D'Zuelen — Lauschtert.", answer: null },
                    { audio: 34, desc: "Lauschtert a wiederholt d'Zuelen.", answer: null },
                    { audio: 35, desc: "Lauschtert d'Zuelen.", answer: null },
                    { audio: 36, desc: "Lauschtert d'Froen an äntwert.", answer: "Nationalfeierdag: Am Juni | Ouschteren: Am Mäerz oder am Abrëll | Chrëschtdag: Am Dezember | Grouss Vakanz: Am Summer (Mëtt Juli bis Mëtt September)" },
                ]
            },
            {
                title: "D'Zuelen (Säit 24)",
                exercises: [
                    { audio: 37, desc: "Wat fir Zuelen héiert Dir? Notéiert.", answer: "1: 3 | 2: 74 | 3: 18 | 4: 10 | 5: 40 | 6: 14 | 7: 7 | 8: 66" },
                ]
            },
            {
                title: "Wéi ass d'Telefonsnummer? (Säit 25)",
                exercises: [
                    { audio: 38, desc: "Dialog 1 — Notéiert d'Telefonsnummer.", answer: "Telefon: 47 96 22 00" },
                    { audio: 39, desc: "Dialog 2 — Notéiert d'Telefonsnummer.", answer: "Telefon: 27 57-1" },
                    { audio: 40, desc: "Dialog 3 — Notéiert d'Telefonsnummer.", answer: "Telefon: 43 69 911 | Fax: 42 24 423" },
                ]
            },
            {
                title: "Wat fir en Dag ass haut? (Säit 26)",
                exercises: [
                    { audio: 41, desc: "Lauschtert d'Deeg vun der Woch.", answer: null },
                    { audio: 42, desc: "Lauschtert d'Méint.", answer: null },
                    { audio: 43, desc: "Wat feelt? Lauschtert a fëllt aus.", answer: "E Joer huet 365 oder 366 Deeg. E Joer huet 4 Joreszäiten. All Joreszäit huet 3 Méint. D'Fréijoer: Mäerz–Juni. De Summer: Juni–September. Den Hierscht: September–Dezember. De Wanter: Dezember–Mäerz. 12 Méint. Eng Woch huet 7 Deeg: Méindeg, Dënschdeg, Mëttwoch, Donneschdeg, Freideg, Samschdeg, Sonndeg." },
                ]
            },
            {
                title: "Wéini hutt Dir Gebuertsdag? (Säit 27)",
                exercises: [
                    { audio: 44, desc: "Kuckt d'Biller a lauschtert. Nummeréiert.", answer: "Zeen 1 = Bild B | Zeen 2 = Bild D | Zeen 3 = Bild A | Zeen 4 = Bild C" },
                    { audio: 45, desc: "Lauschtert d'Dialogen.", answer: null },
                    { audio: 46, desc: "Lauschtert d'Texter an notéiert d'Datumen.", answer: "den éischten Abrëll | de siechzéngte Juni | den eenandrëssegsten Dezember | den zweeanzwanzegsten Oktober | den drëtten August | den nénganzwanzegsten November | de siwwenzéngte Februar | den aachte Mäerz" },
                ]
            },
            {
                title: "Wou wunnt Dir? (Säit 28)",
                exercises: [
                    { audio: 47, desc: "Wou wunnen d'Persounen? Lauschtert.", answer: "D'Fabienne wunnt an Italien, zu Mailand. De Marco wunnt zu Lëtzebuerg, zu Esch." },
                    { audio: 48, desc: "Lauschtert nach eng Kéier — Visittekaart.", answer: "Marco Fratoni, 118 Lëtzebuerger Strooss, L-4221 Esch-Uelzecht" },
                ]
            },
            {
                title: "Wéi ass Är E-Mail-Adress? (Säit 29)",
                exercises: [
                    { audio: 49, desc: "Lauschtert den Dialog a fëllt de Formulaire aus.", answer: "Numm: Feider | Virnumm: Michel | Adress: Parkstrooss Nr 7, L-3394 Réiser | Handy: 681 342567 | E-Mail: feimich@inter-net.lu" },
                ]
            },
            {
                title: "Aussprooch: ue - ou - o (Säit 30)",
                exercises: [
                    { audio: 50, desc: "Lauschtert a wiederholt.", answer: null },
                    { audio: 51, desc: "Wat héiert Dir? ue, ou oder o?", answer: "1: ue | 2: ou | 3: o | 4: ue | 5: ou | 6: o | 7: ue | 8: ou" },
                ]
            },
            {
                title: "Sidd Dir bestuet? (Säit 31)",
                exercises: [
                    { audio: 52, desc: "Presentatioun 1 — Yves", answer: "Gebuertsdatum: 16. Januar 1974 | Wunnuert: Ettelbréck" },
                    { audio: 53, desc: "Presentatioun 2 — Angèle", answer: "Alter: 28 | Wunnuert: Belsch, Arel" },
                    { audio: 54, desc: "Presentatioun 3 — Luc", answer: "Gebuertsdatum: 1. September 1965 | gescheet, 2 Kanner" },
                    { audio: 55, desc: "Presentatioun 4 — Ella", answer: "Alter: 5 | Wunnuert: Miersch" },
                    { audio: 56, desc: "Presentatioun 5 — Nadia", answer: "Wunnuert: Metz, Frankräich | bestuet, 1 Kand" },
                    { audio: 57, desc: "Presentatioun 6 — Simon", answer: "Wunnuert: Lëtzebuerg | Jonggesell" },
                    { audio: 58, desc: "Presentatioun 7 — Lena", answer: "Gebuertsdatum: 7. Februar 1977 | gepacst, 3 Kanner" },
                    { audio: 59, desc: "Presentatioun 8 — Paul", answer: "Alter: 42 | Wunnuert: Däitschland" },
                ]
            },
            {
                title: "Um Bierger-Center (Säit 32)",
                exercises: [
                    { audio: 60, desc: "Lauschtert den Dialog um Bierger-Center.", answer: "Philippe Majerus | 24.7.1970 | 15 rue du Nord, L-1972 Bouneweg | gescheet | 1 Kand: Bob, 15.05.2011 | Tel: 98 76 54 | E-Mail: phil.maj@web.lu" },
                ]
            },
            {
                title: "Land a Leit: Fester a Feierdeeg (Säit 35)",
                exercises: [
                    { audio: 61, desc: "Lauschtert iwwer Fester a Feierdeeg zu Lëtzebuerg.", answer: "Kleeserchersdag: 6. Dezember | Nationalfeierdag: 23. Juni (Owend: 22. Juni) | Liichtmëssdag: 2. Februar | Chrëschtdag: 25. Dezember | Sprangpressessioun: Päischtdënschdeg | Dag vun der Aarbecht: 1. Mee | Mammendag: 2. Sonndeg am Juni | Pappendag: 1. Sonndeg am Oktober | Schueberfouer: Enn August bis Ufank September" },
                ]
            },
        ]
    },
    {
        chapter: "Kapitel 3",
        title: "Work, Professions, Transport & Time",
        pdfAnswers: "https://sdl.inll.lu/wp-content/uploads/2023/03/leisungen_a1_kapitel-3_2021_0.1.pdf",
        pdfExtra: "https://sdl.inll.lu/wp-content/uploads/2023/03/zousazmaterial-k3_2020_1.0a.pdf",
        sections: [
            {
                title: "Op der Aarbecht (Säit 37)",
                exercises: [
                    { audio: 62, desc: "Kuckt d'Biller a lauschtert. Nummeréiert d'Zeenen.", answer: "Zeen 1–7: Informatiker (Zeen 4) | Direktesch (Zeen 5) | Informatikerin (Zeen 4) | Employé (Zeen 5) | Aarbechter (Zeen 7) | Botzfra (Zeen 3) | Mecanicien (Zeen 1) | Receptionnist (Zeen 6) | Sekretärin (Zeen 2)" },
                    { audio: 63, desc: "Lauschtert d'Dialogen.", answer: null },
                ]
            },
            {
                title: "Wat schaffe si? (Säit 38-39)",
                exercises: [
                    { audio: 64, desc: "Wou sinn d'Leit? Dialog 1", answer: "An enger Bäckerei" },
                    { audio: 65, desc: "Wou sinn d'Leit? Dialog 2", answer: "Bei engem Dokter" },
                    { audio: 66, desc: "Wou sinn d'Leit? Dialog 3", answer: "Op enger Gare" },
                    { audio: 67, desc: "Liest d'Sätz a lauschtert. Richteg (R) oder falsch (F)?", answer: "1: R (Julia schafft an enger Schoul) | 2: F (Grégory mécht net Fotoe vu Persounen) | 3: R (Jenny fiert mam Bus 22) | 4: F (Victor schafft net an engem Hotel) | 5: R (Tom schafft zu Sandweiler) | 6: R (Steve verkeeft Handyen a Computeren) | 7: F (Marise schafft net an enger Firma) | 8: F (Fränz schafft net als Iwwersetzer)" },
                ]
            },
            {
                title: "Wou schaffe si? (Säit 40-41)",
                exercises: [
                    { audio: 68, desc: "Lauschtert den Dialog.", answer: null },
                    { audio: 69, desc: "Aarbechtsannoncen — Dialog 1", answer: "Dialog 1 = Annonce 4 (Alex)" },
                    { audio: 70, desc: "Aarbechtsannoncen — Dialog 2", answer: "Dialog 2 = Annonce 1 (Annette)" },
                    { audio: 71, desc: "Aarbechtsannoncen — Dialog 3", answer: "Dialog 3 = Annonce 2 (Myriam)" },
                ]
            },
            {
                title: "Wéi vill Auer ass et? (Säit 44)",
                exercises: [
                    { audio: 72, desc: "Wéi vill Auer ass et? Lauschtert an notéiert.", answer: "1: Et ass 6 Auer (sechs Auer) | 2: Et ass 12 Auer (zwielef Auer) | 3: Et ass 7 Auer (siwen Auer)" },
                    { audio: 73, desc: "Lauschtert d'Auerzäiten.", answer: null },
                    { audio: 74, desc: "Lauschtert a wiederholt.", answer: null },
                    { audio: 75, desc: "Wat héiert Dir? Lauschtert a kräizt un.", answer: "1: 18:30 | 2: 10:30 | 3: 12:25 | 4: 20:35 | 5: 17:05" },
                    { audio: 76, desc: "Wéini fänke si un? Wéini hale si op? — Persoun 1", answer: "Ufank: um 17:00 (fënnef Auer mëttes) | Schluss: um 01:30 (hallwer zwou nuets)" },
                    { audio: 77, desc: "Persoun 2", answer: "Ufank: um 8:00 (aacht Auer moies) | Schluss: um 17:30 (hallwer sechs owes)" },
                    { audio: 78, desc: "Persoun 3", answer: "Ufank: um 6:00 (sechs Auer moies) | Schluss: um 13:30 (hallwer zwou mëttes)" },
                    { audio: 79, desc: "Persoun 4", answer: "Ufank: um 7:30 (hallwer aacht moies) | Schluss: um 15:45 (Véierel vir véier mëttes)" },
                    { audio: 80, desc: "Persoun 5", answer: "Ufank: um 8:30 (hallwer néng moies) | Schluss: um 18:00 (sechs Auer owes)" },
                ]
            },
            {
                title: "Aussprooch: éi - ei - äi (Säit 45)",
                exercises: [
                    { audio: 81, desc: "Lauschtert a wiederholt.", answer: null },
                    { audio: 82, desc: "Wat héiert Dir? éi, ei oder äi?", answer: "1: éi | 2: ei | 3: äi | 4: éi | 5: ei | 6: äi | 7: éi | 8: ei" },
                ]
            },
            {
                title: "Ass d'Plaz nach fräi? (Säit 46)",
                exercises: [
                    { audio: 83, desc: "Lauschtert den Dialog.", answer: "Claudine Hausemer sicht Aarbecht als Babysitter. Schafft am Summer als Monitrice. 19 Joer al. | Madame Scheier brauch Babysitter fir dënschdes an donneschdes owes. Bezilt 10€/Stonn, Weekend 15€/Stonn. | Claudine fiert mam Bus op de Lampertsbierg. Madame Scheier wunnt Rue Victor Hugo Nr 10." },
                    { audio: 84, desc: "Lauschtert den Dialog nach eng Kéier.", answer: null },
                ]
            },
            {
                title: "Aussprooch: w - v (Säit 47)",
                exercises: [
                    { audio: 85, desc: "Lauschtert a wiederholt — w.", answer: null },
                    { audio: 86, desc: "Lauschtert a wiederholt — v.", answer: null },
                    { audio: 87, desc: "Lauschtert: w oder v?", answer: null },
                    { audio: 88, desc: "Lauschtert a wiederholt.", answer: null },
                ]
            },
        ]
    }
];

// ===== RENDER TEXTBOOK =====
let exerciseCounter = 0;

function initTextbook() {
    const container = document.getElementById("textbookContent");
    container.innerHTML = "";
    exerciseCounter = 0;

    TEXTBOOK.forEach(chapter => {
        const chDiv = document.createElement("div");
        chDiv.className = "tb-chapter";

        let sectionsHtml = chapter.sections.map(sec => {
            let exercisesHtml = sec.exercises.map(ex => {
                const id = `ex-${exerciseCounter++}`;
                const audioSrc = `${AUDIO_BASE}Audio-${String(ex.audio).padStart(2, '0')}.mp3`;

                let answerHtml;
                if (ex.answer) {
                    // Format answer: replace | with line breaks for readability
                    const formattedAnswer = ex.answer.replace(/\s*\|\s*/g, "<br>");
                    answerHtml = `
                        <button class="tb-answer-btn" id="btn-${id}" disabled onclick="toggleAnswer('${id}', this)">
                            🔒 Listen first, then show answer
                        </button>
                        <div class="tb-answer" id="ans-${id}">${formattedAnswer}</div>
                    `;
                } else {
                    answerHtml = `<div class="tb-no-answer">🎧 Listening / pronunciation exercise</div>`;
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

        chDiv.innerHTML = `
            <div class="tb-chapter-header" onclick="this.parentElement.classList.toggle('open')">
                <h3>${chapter.chapter}: ${chapter.title}</h3>
                <span class="tb-toggle">▼</span>
            </div>
            <div class="tb-chapter-body">
                <div class="tb-links">
                    <a href="${chapter.pdfAnswers}" target="_blank">📄 Full Answer Key (PDF)</a>
                    <a href="${chapter.pdfExtra}" target="_blank">📄 Supplementary Material</a>
                    <a href="https://sdl.inll.lu/book-a1-2017-2018-2020-2021/" target="_blank">📖 INLL Website</a>
                </div>
                ${sectionsHtml}
            </div>
        `;

        container.appendChild(chDiv);
    });
}

function unlockAnswer(id) {
    const btn = document.getElementById(`btn-${id}`);
    if (btn && btn.disabled) {
        btn.disabled = false;
        btn.textContent = "👁️ Show Answer";
        btn.classList.add("unlocked");
    }
}

function highlightAnswer(id) {
    const btn = document.getElementById(`btn-${id}`);
    if (btn) {
        btn.classList.add("pulse-hint");
        setTimeout(() => btn.classList.remove("pulse-hint"), 2000);
    }
}

function toggleAnswer(id, btn) {
    const ans = document.getElementById(`ans-${id}`);
    if (!ans) return;
    const showing = ans.classList.toggle("visible");
    btn.textContent = showing ? "🙈 Hide Answer" : "👁️ Show Answer";
}
