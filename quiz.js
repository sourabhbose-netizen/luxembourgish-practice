// ===== A1 MULTIPLE CHOICE QUIZ =====

const QUIZ_QUESTIONS = [
    // ===== GREETINGS =====
    {
        category: "Greetings",
        question: "Wéi seet een 'Good morning' op Lëtzebuergesch?",
        options: ["Gudden Owend", "Gudde Moien", "Gutt Nuecht", "Äddi"],
        correct: 1,
        explanation: "'Gudde Moien' = Good morning. 'Gudden Owend' = Good evening. 'Gutt Nuecht' = Good night."
    },
    {
        category: "Greetings",
        question: "Wat heescht 'Äddi'?",
        options: ["Hello", "Please", "Goodbye", "Thank you"],
        correct: 2,
        explanation: "'Äddi' = Goodbye. 'Moien' = Hello. 'Merci' = Thank you."
    },
    {
        category: "Greetings",
        question: "Wéi äntwert een op 'Wéi geet et?'",
        options: ["Ech heeschen Tom", "Ganz gutt, merci", "Ech kommen aus Indien", "Äddi"],
        correct: 1,
        explanation: "'Ganz gutt, merci' = Very good, thank you — the standard reply to 'How are you?'"
    },
    {
        category: "Greetings",
        question: "'Wann ech gelift' heescht op Englesch:",
        options: ["Thank you", "Excuse me", "Please", "Sorry"],
        correct: 2,
        explanation: "'Wann ech gelift' (w.e.g.) = Please. 'Merci' = Thank you. 'Entschëllegt' = Excuse me."
    },
    {
        category: "Greetings",
        question: "Wéi seet een 'I'm sorry' op Lëtzebuergesch?",
        options: ["Merci villmools", "Wann ech gelift", "Et deet mer leed", "Ganz gutt"],
        correct: 2,
        explanation: "'Et deet mer leed' = I'm sorry (literally: it hurts me). Also 'Entschëllegt' works."
    },

    // ===== PERSONAL INFO =====
    {
        category: "Personal",
        question: "Wéi seet een 'My name is Maria'?",
        options: ["Ech kommen aus Maria", "Ech heeschen Maria", "Ech schaffen Maria", "Ech wunnen Maria"],
        correct: 1,
        explanation: "'Ech heeschen...' = I am called... / My name is..."
    },
    {
        category: "Personal",
        question: "'Ech kommen aus Indien' heescht:",
        options: ["I live in India", "I work in India", "I come from India", "I travel to India"],
        correct: 2,
        explanation: "'Ech kommen aus...' = I come from... 'Ech wunnen zu...' = I live in..."
    },
    {
        category: "Personal",
        question: "Wéi seet een 'I am married'?",
        options: ["Ech si bestuet", "Ech hunn Kanner", "Ech si Jonggesell", "Ech si gescheet"],
        correct: 0,
        explanation: "'Bestuet' = married. 'Jonggesell' = single. 'Gescheet' = divorced."
    },
    {
        category: "Personal",
        question: "'Ech si fënnefandrësseg Joer al' — Wéi al ass déi Persoun?",
        options: ["25", "30", "35", "45"],
        correct: 2,
        explanation: "'Fënnefandrësseg' = 35 (fënnef = 5, drësseg = 30)."
    },
    {
        category: "Personal",
        question: "Wat heescht 'Kanner'?",
        options: ["Parents", "Children", "Brothers", "Friends"],
        correct: 1,
        explanation: "'Kanner' = children. 'Een Kand' = one child. 'Zwee Kanner' = two children."
    },

    // ===== PRONOUNS & CONJUGATION =====
    {
        category: "Grammar",
        question: "Wat ass déi richteg Form? 'Hien ___ Dokter.'",
        options: ["si", "ass", "sinn", "sidd"],
        correct: 1,
        explanation: "Hien/Si/Et + ass. 'Hien ass Dokter' = He is a doctor."
    },
    {
        category: "Grammar",
        question: "'Mir ___ zwee Kanner.' — Wat feelt?",
        options: ["huet", "hues", "hunn", "hutt"],
        correct: 2,
        explanation: "Mir + hunn. 'Mir hunn zwee Kanner' = We have two children."
    },
    {
        category: "Grammar",
        question: "Wat ass richteg? 'Dir ___ zu Lëtzebuerg.'",
        options: ["wunnen", "wunnt", "wunns", "wunne"],
        correct: 1,
        explanation: "Dir + wunnt. 'Dir wunnt zu Lëtzebuerg' = You live in Luxembourg (formal)."
    },
    {
        category: "Grammar",
        question: "'Si schwätzt Englesch' — Wien ass 'si'?",
        options: ["They", "She (one person)", "We", "You (formal)"],
        correct: 1,
        explanation: "'Si schwätzt' (singular verb) = She speaks. 'Si schwätzen' (plural verb) = They speak."
    },
    {
        category: "Grammar",
        question: "Wat ass de Possessiv fir 'her' mat engem feminine Wuert?",
        options: ["säin", "mäin", "hir", "seng"],
        correct: 2,
        explanation: "'Hir' = her (feminine). 'Hiren' = her (masculine). 'Seng' = his (feminine)."
    },

    // ===== WORK =====
    {
        category: "Work",
        question: "'Ech schaffen am Bureau' heescht:",
        options: ["I work at home", "I work in the office", "I work in a school", "I work in a shop"],
        correct: 1,
        explanation: "'Am Bureau' = in the office. 'Doheem' = at home. 'An enger Schoul' = in a school."
    },
    {
        category: "Work",
        question: "Wéi seet een 'since two years'?",
        options: ["Zënter zwee Joer", "Bis zwee Joer", "Viru zwee Joer", "An zwee Joer"],
        correct: 0,
        explanation: "'Zënter' = since. 'Zënter zwee Joer' = since two years."
    },
    {
        category: "Work",
        question: "Wat ass en 'Kach'?",
        options: ["A teacher", "A cook", "A driver", "A doctor"],
        correct: 1,
        explanation: "'Kach' = cook/chef. 'Léierin' = teacher. 'Dokter' = doctor."
    },

    // ===== DAILY LIFE =====
    {
        category: "Daily Life",
        question: "'Ech liesen gär' heescht:",
        options: ["I read fast", "I read a lot", "I like to read", "I can read"],
        correct: 2,
        explanation: "'Gär' after a verb = like to. 'Ech liesen gär' = I like to read."
    },
    {
        category: "Daily Life",
        question: "Wéi seet een 'by car'?",
        options: ["Mat dem Bus", "Zu Fouss", "Mat dem Auto", "Mat dem Zuch"],
        correct: 2,
        explanation: "'Mat dem Auto' = by car. 'Mat dem Bus' = by bus. 'Zu Fouss' = on foot."
    },
    {
        category: "Daily Life",
        question: "'Ech kucken Telé' heescht:",
        options: ["I listen to music", "I watch TV", "I read a book", "I play games"],
        correct: 1,
        explanation: "'Kucken' = to watch/look. 'Telé' = TV."
    },

    // ===== PAST TENSE (PERFEKT) =====
    {
        category: "Past Tense",
        question: "Wat ass déi richteg Perfekt-Form? 'Ech ___ geschafft.'",
        options: ["si", "hunn", "war", "ginn"],
        correct: 1,
        explanation: "'Schaffen' uses 'hunn' in Perfekt. 'Ech hunn geschafft' = I worked."
    },
    {
        category: "Past Tense",
        question: "'Ech si gaangen' — Firwat 'sinn' an net 'hunn'?",
        options: ["Because it's a question", "Because it's negative", "Because 'goen' is a verb of movement", "Because it's formal"],
        correct: 2,
        explanation: "Verbs of movement (goen, reesen, etc.) use 'sinn' instead of 'hunn' in Perfekt."
    },
    {
        category: "Past Tense",
        question: "Wou steet de Partizip am Perfekt?",
        options: ["At the beginning", "After the subject", "Before the verb", "At the end of the sentence"],
        correct: 3,
        explanation: "In Perfekt, the past participle always goes to the END: 'Ech hunn eng Pizza giess.'"
    },
    {
        category: "Past Tense",
        question: "'Gëschter hunn ech gekacht' — Firwat ass 'hunn' virum 'ech'?",
        options: ["It's a question", "Verb-subject inversion (time indicator first)", "It's negative", "It's formal"],
        correct: 1,
        explanation: "When starting with a time indicator (Gëschter), verb and subject swap: Gëschter + hunn + ech."
    },
    {
        category: "Past Tense",
        question: "Wat ass de Partizip vu 'kucken'?",
        options: ["gekuckt", "gekucken", "kuckt", "gekuck"],
        correct: 0,
        explanation: "'Kucken' → 'gekuckt'. 'Ech hunn eng Serie gekuckt' = I watched a series."
    },
    {
        category: "Past Tense",
        question: "'Ech hunn d'Hausaufgab net gemaach' — Wou steet 'net'?",
        options: ["At the beginning", "After 'ech'", "Before the past participle", "At the very end"],
        correct: 2,
        explanation: "'Net' goes before the past participle: '...net gemaach'. It stays next to the verb it negates."
    },
    {
        category: "Past Tense",
        question: "Wéi seet een 'I went home' am Perfekt?",
        options: ["Ech hunn heem gaangen", "Ech si heem gaangen", "Ech war heem gaangen", "Ech ginn heem"],
        correct: 1,
        explanation: "'Goen' is a verb of movement → uses 'sinn'. 'Ech si heem gaangen' = I went home."
    },

    // ===== WEATHER =====
    {
        category: "Weather",
        question: "'Et ass sonneg' heescht:",
        options: ["It is cold", "It is raining", "It is sunny", "It is cloudy"],
        correct: 2,
        explanation: "'Sonneg' = sunny. 'Kal' = cold. 'Et reent' = it's raining."
    },
    {
        category: "Weather",
        question: "Wéi seet een 'The sky is grey'?",
        options: ["D'Sonn schéngt", "Et ass waarm", "Den Himmel ass gro", "Et schnéit"],
        correct: 2,
        explanation: "'Den Himmel ass gro' = The sky is grey. 'Gro' = grey."
    },
    {
        category: "Weather",
        question: "'Et war kal' — Wat fir eng Zäitform ass dat?",
        options: ["Present", "Perfekt", "Preterit", "Future"],
        correct: 2,
        explanation: "'Et war' = It was — this is Preterit, used for descriptions of states (weather, feelings)."
    },

    // ===== NUMBERS =====
    {
        category: "Numbers",
        question: "Wat ass 'siechzéng'?",
        options: ["6", "16", "60", "66"],
        correct: 1,
        explanation: "'Siechzéng' = 16. 'Sechs' = 6. 'Siechzeg' = 60."
    },
    {
        category: "Numbers",
        question: "Wéi seet een '27' op Lëtzebuergesch?",
        options: ["Zwanzeg-siwen", "Siwenanzwanzeg", "Zweeansiwenzeg", "Siwenzéng"],
        correct: 1,
        explanation: "Like German: units first, then tens. 'Siwenanzwanzeg' = 7 and 20 = 27."
    },
    {
        category: "Numbers",
        question: "'Hallwer zwielef' — Wéi vill Auer ass et?",
        options: ["12:00", "11:30", "12:30", "11:00"],
        correct: 1,
        explanation: "'Hallwer zwielef' = half twelve = 11:30 (half TO twelve, not half past)."
    },
    {
        category: "Numbers",
        question: "'Véierel op sechs' — Wéi vill Auer ass et?",
        options: ["5:45", "6:15", "6:45", "5:15"],
        correct: 1,
        explanation: "'Véierel op sechs' = quarter past six = 6:15."
    },

    // ===== FOOD & DRINK =====
    {
        category: "Food",
        question: "'Ech hätt gär eng Taass Téi' heescht:",
        options: ["I have a cup of tea", "I would like a cup of tea", "I drink tea every day", "I don't like tea"],
        correct: 1,
        explanation: "'Ech hätt gär...' = I would like... 'Eng Taass Téi' = a cup of tea."
    },
    {
        category: "Food",
        question: "Wat ass 'Geméis'?",
        options: ["Fruit", "Meat", "Vegetables", "Bread"],
        correct: 2,
        explanation: "'Geméis' = vegetables. 'Uebst' = fruit. 'Fleesch' = meat. 'Brout' = bread."
    },

    // ===== NEIGHBORHOOD =====
    {
        category: "Neighborhood",
        question: "'Et gëtt e Supermarché' heescht:",
        options: ["I go to the supermarket", "There is a supermarket", "The supermarket is closed", "I like the supermarket"],
        correct: 1,
        explanation: "'Et gëtt...' = There is... Used to describe what exists in an area."
    },
    {
        category: "Neighborhood",
        question: "'Et ass ze deier' heescht:",
        options: ["It is very nice", "It is too far", "It is too expensive", "It is very quiet"],
        correct: 2,
        explanation: "'Ze deier' = too expensive. 'Ze' = too. 'Deier' = expensive."
    },
    {
        category: "Neighborhood",
        question: "Wéi seet een 'It is quiet'?",
        options: ["Et ass schéin", "Et ass roueg", "Et ass gréng", "Et ass grouss"],
        correct: 1,
        explanation: "'Roueg' = quiet. 'Schéin' = nice/beautiful. 'Gréng' = green."
    },

    // ===== COUNTRIES & LANGUAGES =====
    {
        category: "Languages",
        question: "Wéi heescht 'Germany' op Lëtzebuergesch?",
        options: ["Frankräich", "Däitschland", "Belsch", "Schwäiz"],
        correct: 1,
        explanation: "'Däitschland' = Germany. 'Frankräich' = France. 'Belsch' = Belgium."
    },
    {
        category: "Languages",
        question: "'Ech schwätzen Englesch an Hindi' — Wat heescht 'schwätzen'?",
        options: ["To write", "To read", "To speak", "To understand"],
        correct: 2,
        explanation: "'Schwätzen' = to speak. 'Liesen' = to read. 'Schreiwen' = to write."
    },
    {
        category: "Languages",
        question: "Wéi vill offiziell Sproochen huet Lëtzebuerg?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Luxembourg has 3 official languages: Lëtzebuergesch, Däitsch (German), and Franséisch (French)."
    },

    // ===== SENTENCE STRUCTURE =====
    {
        category: "Grammar",
        question: "Wat ass richteg? 'Gëschter ___ ech heem gaangen.'",
        options: ["hunn", "si", "sinn", "war"],
        correct: 1,
        explanation: "Inversion: Gëschter + si (verb) + ech (subject). 'Goen' uses 'sinn'."
    },
    {
        category: "Grammar",
        question: "An engem Lëtzebuergeschen Haaptsaz steet de Verb ëmmer op Plaz:",
        options: ["1", "2", "3", "At the end"],
        correct: 1,
        explanation: "The verb always stays in position 2 in a main clause — this is a key rule!"
    },
    {
        category: "Grammar",
        question: "Wéi seet een 'I don't understand'?",
        options: ["Ech verstinn net", "Ech schwätzen net", "Ech héieren net", "Ech weess net"],
        correct: 0,
        explanation: "'Ech verstinn net' = I don't understand. 'Ech weess net' = I don't know."
    },
];

const QUIZ_CATEGORIES = [...new Set(QUIZ_QUESTIONS.map(q => q.category))];

// ===== QUIZ STATE =====
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizTotal = 10; // questions per quiz

function initQuiz() {
    renderQuizCategories();
}

function renderQuizCategories() {
    const catBar = document.getElementById("quizCategoryBar");
    catBar.innerHTML = "";

    const allBtn = document.createElement("button");
    allBtn.className = "category-btn active";
    allBtn.textContent = "All Topics";
    allBtn.onclick = () => {
        catBar.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        allBtn.classList.add("active");
    };
    catBar.appendChild(allBtn);

    QUIZ_CATEGORIES.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.textContent = cat;
        btn.onclick = () => {
            catBar.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        };
        catBar.appendChild(btn);
    });
}

function startQuiz() {
    const activeBtn = document.querySelector("#quizCategoryBar .category-btn.active");
    const category = activeBtn ? activeBtn.textContent : "All Topics";
    const countSelect = document.getElementById("quizCount");
    quizTotal = parseInt(countSelect.value) || 10;

    let pool = category === "All Topics" ? [...QUIZ_QUESTIONS] : QUIZ_QUESTIONS.filter(q => q.category === category);

    // Shuffle and pick
    pool = shuffleArray(pool);
    quizQuestions = pool.slice(0, Math.min(quizTotal, pool.length));
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;

    document.getElementById("quizSetup").style.display = "none";
    document.getElementById("quizPlay").style.display = "block";
    document.getElementById("quizResult").style.display = "none";

    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const q = quizQuestions[quizIndex];
    quizAnswered = false;

    document.getElementById("quizProgress").textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
    document.getElementById("quizScoreDisplay").textContent = `Score: ${quizScore}/${quizIndex}`;
    document.getElementById("quizQuestionText").textContent = q.question;
    document.getElementById("quizExplanation").style.display = "none";

    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerHTML = `<span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span> ${opt}`;
        btn.onclick = () => selectQuizAnswer(i, btn);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("quizNextBtn").style.display = "none";
}

function selectQuizAnswer(index, btn) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = quizQuestions[quizIndex];
    const options = document.querySelectorAll(".quiz-option");

    // Mark correct and wrong
    options.forEach((opt, i) => {
        opt.classList.add("disabled");
        if (i === q.correct) {
            opt.classList.add("correct");
        }
        if (i === index && i !== q.correct) {
            opt.classList.add("wrong");
        }
    });

    if (index === q.correct) {
        quizScore++;
    }

    // Show explanation
    const expDiv = document.getElementById("quizExplanation");
    expDiv.style.display = "block";
    expDiv.innerHTML = `<strong>${index === q.correct ? "✅ Richteg!" : "❌ Falsch!"}</strong> ${q.explanation}`;
    expDiv.className = `quiz-explanation ${index === q.correct ? "correct" : "wrong"}`;

    document.getElementById("quizScoreDisplay").textContent = `Score: ${quizScore}/${quizIndex + 1}`;
    document.getElementById("quizNextBtn").style.display = "inline-flex";
}

function nextQuizQuestion() {
    quizIndex++;
    renderQuizQuestion();
}

function showQuizResult() {
    document.getElementById("quizPlay").style.display = "none";
    document.getElementById("quizResult").style.display = "block";

    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    let emoji, message;

    if (pct >= 90) { emoji = "🏆"; message = "Exzellent! Du bass prett fir de Sproochentest!"; }
    else if (pct >= 70) { emoji = "👏"; message = "Ganz gutt! Keep practicing!"; }
    else if (pct >= 50) { emoji = "💪"; message = "Net schlecht! Review the topics you missed."; }
    else { emoji = "📚"; message = "Keep learning — you'll get there! Weider maachen!"; }

    document.getElementById("quizResultContent").innerHTML = `
        <div class="quiz-result-emoji">${emoji}</div>
        <div class="quiz-result-score">${quizScore} / ${quizQuestions.length}</div>
        <div class="quiz-result-pct">${pct}%</div>
        <div class="quiz-result-msg">${message}</div>
    `;
}

function restartQuiz() {
    document.getElementById("quizSetup").style.display = "block";
    document.getElementById("quizPlay").style.display = "none";
    document.getElementById("quizResult").style.display = "none";
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
