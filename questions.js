// Luxembourgish Practice Questions - Based on A1 Sproochentest topics
// Each question has: category, question (in Luxembourgish), translation, 
// accepted answers (array), hint, and difficulty

const QUESTIONS = [
    // ===== GREETINGS & BASICS =====
    {
        category: "Greetings",
        question: "Moien! Wéi geet et?",
        translation: "Hello! How are you?",
        answers: [
            "ganz gutt", "gutt", "et geet gutt", "et geet mer gutt",
            "alles gutt", "tip top", "super", "ganz gutt merci"
        ],
        hint: "Answer with how you're doing. 'Gutt' = good, 'Ganz gutt' = very good",
        difficulty: 1
    },
    {
        category: "Greetings",
        question: "Wéi heescht Dir?",
        translation: "What is your name? (formal)",
        answers: [
            "ech heeschen", "mäin numm ass", "ech si", "ech heeschen sourabh"
        ],
        hint: "Start with 'Ech heeschen...' (I am called...) or 'Mäin Numm ass...' (My name is...)",
        difficulty: 1
    },
    {
        category: "Greetings",
        question: "Wou wunnt Dir?",
        translation: "Where do you live? (formal)",
        answers: [
            "ech wunnen zu", "ech wunnen an", "ech wunne zu", 
            "zu lëtzebuerg", "zu steinsel", "ech wunnen hei"
        ],
        hint: "Start with 'Ech wunnen zu...' (I live in...) + city name",
        difficulty: 1
    },
    {
        category: "Greetings",
        question: "Wou kënnt Dir hier?",
        translation: "Where do you come from? (formal)",
        answers: [
            "ech kommen aus", "ech komme vun", "ech kommen aus indien",
            "aus indien", "ech si vun"
        ],
        hint: "Start with 'Ech kommen aus...' (I come from...)",
        difficulty: 1
    },
    {
        category: "Greetings",
        question: "Schwätzt Dir Lëtzebuergesch?",
        translation: "Do you speak Luxembourgish?",
        answers: [
            "jo e bëssen", "jo ech schwätzen e bëssen lëtzebuergesch",
            "jo e bësschen", "ech léieren lëtzebuergesch",
            "jo awer net gutt", "ech schwätzen e bëssen"
        ],
        hint: "'Jo, e bëssen' = Yes, a little. 'Ech léieren...' = I am learning...",
        difficulty: 1
    },
    {
        category: "Greetings",
        question: "Wat fir Sproochen schwätzt Dir?",
        translation: "What languages do you speak?",
        answers: [
            "ech schwätzen englesch", "ech schwätzen englesch an hindi",
            "ech schwätze franséisch", "ech schwätzen zwou sproochen",
            "englesch hindi an e bëssen lëtzebuergesch"
        ],
        hint: "Start with 'Ech schwätzen...' then list languages: Englesch, Hindi, Franséisch, Lëtzebuergesch",
        difficulty: 1
    },

    // ===== FAMILY & PERSONAL =====
    {
        category: "Family",
        question: "Sidd Dir bestuet?",
        translation: "Are you married?",
        answers: [
            "jo ech si bestuet", "jo ech sinn bestuet", "nee ech si net bestuet",
            "nee", "jo", "ech si bestuet"
        ],
        hint: "'Jo, ech si bestuet' = Yes, I am married. 'Nee' = No",
        difficulty: 1
    },
    {
        category: "Family",
        question: "Hutt Dir Kanner?",
        translation: "Do you have children?",
        answers: [
            "jo ech hunn kanner", "nee ech hunn keng kanner",
            "jo ech hunn een kand", "jo ech hunn zwee kanner",
            "nee keng kanner", "nee"
        ],
        hint: "'Jo, ech hunn Kanner' = Yes, I have children. 'Nee, ech hunn keng Kanner' = No, I have no children",
        difficulty: 1
    },
    {
        category: "Family",
        question: "Wéi vill Kanner hutt Dir?",
        translation: "How many children do you have?",
        answers: [
            "ech hunn een kand", "ech hunn zwee kanner", "ech hunn dräi kanner",
            "ech hunn keng kanner", "een", "zwee", "dräi"
        ],
        hint: "een Kand = 1 child, zwee Kanner = 2 children, dräi Kanner = 3 children",
        difficulty: 1
    },
    {
        category: "Family",
        question: "Wéi al sidd Dir?",
        translation: "How old are you?",
        answers: [
            "ech si", "ech sinn", "joer al", "ech si drësseg joer al",
            "ech si véierzeg joer al", "ech si fënnefandrësseg joer al"
        ],
        hint: "Answer: 'Ech si [number] Joer al' = I am [number] years old",
        difficulty: 1
    },

    // ===== WORK =====
    {
        category: "Work",
        question: "Wat schafft Dir?",
        translation: "What do you do for work?",
        answers: [
            "ech schaffen bei amazon", "ech si programméierer",
            "ech schaffen am bureau", "ech schaffen an der informatik",
            "ech schaffe bei", "ech sinn ingenieur"
        ],
        hint: "'Ech schaffen bei...' = I work at... 'Ech schaffen am Bureau' = I work in the office",
        difficulty: 2
    },
    {
        category: "Work",
        question: "Wou schafft Dir?",
        translation: "Where do you work?",
        answers: [
            "ech schaffen zu lëtzebuerg", "ech schaffen am kirchberg",
            "ech schaffen bei amazon", "am bureau", "zu kirchberg",
            "ech schaffe vun doheem"
        ],
        hint: "'Ech schaffen zu...' = I work in... 'Am Kierchbierg' = In Kirchberg",
        difficulty: 2
    },
    {
        category: "Work",
        question: "Wéi laang schafft Dir schonn hei?",
        translation: "How long have you been working here?",
        answers: [
            "zënter engem joer", "zënter zwee joer", "zënter dräi joer",
            "ech schaffen hei zënter", "een joer", "e puer méint"
        ],
        hint: "'Zënter engem Joer' = Since one year. 'Zënter zwee Joer' = Since two years",
        difficulty: 2
    },

    // ===== DAILY LIFE =====
    {
        category: "Daily Life",
        question: "Wat maacht Dir gär?",
        translation: "What do you like to do?",
        answers: [
            "ech liesen gär", "ech kachen gär", "ech reesen gär",
            "ech kucken gär filmer", "ech spillen gär fussball",
            "ech ginn gär spadséieren", "ech maachen gär sport"
        ],
        hint: "Use 'gär' after the verb: 'Ech liesen gär' = I like to read. 'Ech reesen gär' = I like to travel",
        difficulty: 2
    },
    {
        category: "Daily Life",
        question: "Wat maacht Dir owes?",
        translation: "What do you do in the evening?",
        answers: [
            "ech kucken telé", "ech liesen", "ech kachen",
            "ech gi schlofen", "ech schwätze mat menger fra",
            "ech kucken eng serie", "ech iessen"
        ],
        hint: "'Owes' = in the evening. 'Ech kucken Telé' = I watch TV. 'Ech kachen' = I cook",
        difficulty: 2
    },
    {
        category: "Daily Life",
        question: "Wéi kënnt Dir op d'Aarbecht?",
        translation: "How do you get to work?",
        answers: [
            "mat dem auto", "mat dem bus", "mat dem zuch",
            "ech fueren mat dem auto", "ech gi mat dem bus",
            "zu fouss", "mat der tram"
        ],
        hint: "'Mat dem Auto' = By car. 'Mat dem Bus' = By bus. 'Zu Fouss' = On foot",
        difficulty: 2
    },

    // ===== PAST TENSE (PERFEKT) =====
    {
        category: "Past Tense",
        question: "Wat hutt Dir gëschter gemaach?",
        translation: "What did you do yesterday?",
        answers: [
            "ech hunn geschafft", "ech si gaangen", "ech hunn giess",
            "ech hunn gekacht", "ech hunn gelies", "ech hunn sport gemaach",
            "ech hunn am bureau geschafft", "ech si heem gaangen"
        ],
        hint: "Use Perfekt: 'Ech hunn + ... + past participle'. E.g., 'Ech hunn geschafft' = I worked",
        difficulty: 3
    },
    {
        category: "Past Tense",
        question: "Wou sidd Dir gëschter gaangen?",
        translation: "Where did you go yesterday?",
        answers: [
            "ech si an de supermarché gaangen", "ech si heem gaangen",
            "ech si an d'stad gaangen", "ech si op d'aarbecht gaangen",
            "ech si an de park gaangen", "ech si niergends gaangen"
        ],
        hint: "Verbs of movement use 'sinn': 'Ech si ... gaangen' = I went to...",
        difficulty: 3
    },
    {
        category: "Past Tense",
        question: "Hutt Dir gëschter owend gekacht?",
        translation: "Did you cook yesterday evening?",
        answers: [
            "jo ech hunn gekacht", "nee ech hunn net gekacht",
            "jo ech hunn eng pizza gemaach", "nee ech hunn bestallt",
            "jo", "nee"
        ],
        hint: "'Jo, ech hunn gekacht' = Yes, I cooked. 'Nee, ech hunn net gekacht' = No, I didn't cook",
        difficulty: 3
    },
    {
        category: "Past Tense",
        question: "Wat hutt Dir d'lescht Woch gemaach?",
        translation: "What did you do last week?",
        answers: [
            "ech hunn geschafft", "ech si gereest", "ech hunn sport gemaach",
            "ech si an d'kino gaangen", "ech hunn meng famill besicht",
            "ech hunn eng serie gekuckt"
        ],
        hint: "'D'lescht Woch' = last week. Use Perfekt tense for your answer.",
        difficulty: 3
    },
    {
        category: "Past Tense",
        question: "Sidd Dir schonn eng Kéier an Holland gaangen?",
        translation: "Have you ever been to the Netherlands?",
        answers: [
            "jo ech si schonn an holland gaangen", "nee nach net",
            "jo eng kéier", "jo e puer mol", "nee ech war nach ni do"
        ],
        hint: "'Jo, ech si schonn ... gaangen' = Yes, I have already gone to... 'Nee, nach net' = No, not yet",
        difficulty: 3
    },
    {
        category: "Past Tense",
        question: "Wéi war d'Wieder gëschter?",
        translation: "How was the weather yesterday?",
        answers: [
            "et war schéin", "et war sonneg", "et war kal",
            "et war gro", "et huet gereent", "d'wieder war gutt",
            "et war waarm"
        ],
        hint: "'Et war schéin' = It was nice. 'Et war sonneg' = It was sunny. 'Et war kal' = It was cold",
        difficulty: 3
    },

    // ===== LOCATION & NEIGHBORHOOD =====
    {
        category: "Neighborhood",
        question: "Beschreift Äre Quartier.",
        translation: "Describe your neighborhood.",
        answers: [
            "et ass roueg", "et ass schéin", "et ass am norden",
            "et ass e klengt duerf", "et läit bei", "et ass gréng",
            "et ass no bei der stad"
        ],
        hint: "'Et ass roueg' = It is quiet. 'Et ass schéin' = It is nice. 'Et läit am Norden' = It is in the north",
        difficulty: 2
    },
    {
        category: "Neighborhood",
        question: "Wat ass bei Iech an der Géigend?",
        translation: "What is in your area?",
        answers: [
            "et gëtt e supermarché", "et gëtt eng schoul",
            "et gëtt e park", "et gëtt eng busarrêt",
            "et gëtt geschäfter", "et gëtt e restaurant"
        ],
        hint: "'Et gëtt...' = There is... 'E Supermarché' = a supermarket, 'Eng Schoul' = a school",
        difficulty: 2
    },
    {
        category: "Neighborhood",
        question: "Wunnt Dir gär do?",
        translation: "Do you like living there?",
        answers: [
            "jo ech wunne gär do", "jo et ass schéin", "jo et ass roueg",
            "nee et ass ze deier", "jo awer et ass e bëssen wäit",
            "jo ech fannen et gutt"
        ],
        hint: "'Jo, ech wunne gär do' = Yes, I like living there. 'Et ass ze deier' = It is too expensive",
        difficulty: 2
    },

    // ===== WEATHER =====
    {
        category: "Weather",
        question: "Wéi ass d'Wieder haut?",
        translation: "How is the weather today?",
        answers: [
            "et ass schéin", "et ass sonneg", "et ass kal",
            "et reent", "et ass gro", "et ass waarm",
            "d'sonn schéngt", "et ass wantereg"
        ],
        hint: "'Et ass schéin' = nice, 'Et ass sonneg' = sunny, 'Et reent' = it's raining, 'Et ass kal' = cold",
        difficulty: 1
    },
    {
        category: "Weather",
        question: "Wéi ass d'Wieder am Wanter zu Lëtzebuerg?",
        translation: "How is the weather in winter in Luxembourg?",
        answers: [
            "et ass kal", "et ass gro", "et reent vill",
            "et schnéit heiansdo", "et ass kal an gro",
            "d'wieder ass net gutt"
        ],
        hint: "'Am Wanter' = in winter. 'Et ass kal' = It is cold. 'Et schnéit' = It snows",
        difficulty: 2
    },

    // ===== NUMBERS & TIME =====
    {
        category: "Numbers",
        question: "Wéi vill ass dräi an zwee?",
        translation: "How much is three and two?",
        answers: ["fënnef", "et ass fënnef", "dräi an zwee ass fënnef"],
        hint: "dräi (3) + zwee (2) = fënnef (5)",
        difficulty: 1
    },
    {
        category: "Numbers",
        question: "Wéi spéit ass et?",
        translation: "What time is it?",
        answers: [
            "et ass néng auer", "et ass zéng auer", "et ass mëtteg",
            "et ass hallwer zwielef", "et ass aacht auer"
        ],
        hint: "'Et ass ... Auer' = It is ... o'clock. néng=9, zéng=10, eelef=11, zwielef=12",
        difficulty: 2
    },

    // ===== FOOD & SHOPPING =====
    {
        category: "Food",
        question: "Wat iess Dir gär?",
        translation: "What do you like to eat?",
        answers: [
            "ech iesse gär pizza", "ech iesse gär rais",
            "ech iesse gär fleesch", "ech iesse gär uebst",
            "ech iesse gär geméis", "ech iesse gär pasta"
        ],
        hint: "'Ech iesse gär...' = I like to eat... Pizza, Rais (rice), Fleesch (meat), Uebst (fruit)",
        difficulty: 2
    },
    {
        category: "Food",
        question: "Wat drénkt Dir gär?",
        translation: "What do you like to drink?",
        answers: [
            "ech drénke gär kaffi", "ech drénke gär téi",
            "ech drénke gär waasser", "ech drénke gär béier",
            "ech drénke gär wäin", "eng taass téi"
        ],
        hint: "'Ech drénke gär...' = I like to drink... Kaffi (coffee), Téi (tea), Waasser (water)",
        difficulty: 2
    },
    {
        category: "Food",
        question: "Ech hätt gär eng Taass Kaffi.",
        translation: "I would like a cup of coffee. — Now you order a tea!",
        answers: [
            "ech hätt gär eng taass téi", "eng taass téi wann ech gelift",
            "ech kréien eng taass téi", "eng taass téi"
        ],
        hint: "'Ech hätt gär eng Taass Téi' = I would like a cup of tea. 'Wann ech gelift' = please",
        difficulty: 2
    },

    // ===== POLITE EXPRESSIONS =====
    {
        category: "Expressions",
        question: "Wéi seet een 'sorry' op Lëtzebuergesch?",
        translation: "How do you say 'sorry' in Luxembourgish?",
        answers: [
            "entschëllegt", "sorry", "et deet mer leed",
            "pardon", "entschëllegt mech"
        ],
        hint: "'Entschëllegt' = Sorry/Excuse me. 'Et deet mer leed' = I'm sorry (it hurts me)",
        difficulty: 1
    },
    {
        category: "Expressions",
        question: "Wéi seet een 'thank you' op Lëtzebuergesch?",
        translation: "How do you say 'thank you' in Luxembourgish?",
        answers: [
            "merci", "merci villmools", "villmools merci", "merci vill"
        ],
        hint: "'Merci' = Thank you. 'Merci villmools' = Thank you very much",
        difficulty: 1
    },
    {
        category: "Expressions",
        question: "Wéi seet een 'please' op Lëtzebuergesch?",
        translation: "How do you say 'please' in Luxembourgish?",
        answers: [
            "wann ech gelift", "wannechgelift", "w.e.g."
        ],
        hint: "'Wann ech gelift' (abbreviated w.e.g.) = Please (literally: if I please)",
        difficulty: 1
    },

    // ===== DIRECTIONS =====
    {
        category: "Neighborhood",
        question: "Wou ass de Supermarché?",
        translation: "Where is the supermarket?",
        answers: [
            "et ass riets", "et ass lénks", "et ass geradeaus",
            "et ass no bei", "et ass an der strooss", "ech weess net"
        ],
        hint: "'Riets' = right, 'Lénks' = left, 'Geradeaus' = straight ahead, 'No bei' = nearby",
        difficulty: 2
    },

    // ===== TRANSPORT =====
    {
        category: "Daily Life",
        question: "Fuert Dir mat dem Auto oder mat dem Bus?",
        translation: "Do you go by car or by bus?",
        answers: [
            "mat dem auto", "mat dem bus", "ech fuere mat dem auto",
            "ech gi mat dem bus", "heiansdo mat dem auto heiansdo mat dem bus",
            "zu fouss"
        ],
        hint: "'Mat dem Auto' = by car, 'Mat dem Bus' = by bus, 'Zu Fouss' = on foot",
        difficulty: 2
    },

    // ===== WEEKEND =====
    {
        category: "Past Tense",
        question: "Wat hutt Dir de Weekend gemaach?",
        translation: "What did you do on the weekend?",
        answers: [
            "ech hunn relaxéiert", "ech si spadséiere gaangen",
            "ech hunn mat menger famill iergendeppes gemaach",
            "ech hunn gekacht", "ech si an d'stad gaangen",
            "ech hunn geschlof", "ech hunn näischt gemaach"
        ],
        hint: "Use Perfekt: 'Ech hunn relaxéiert' = I relaxed. 'Ech si spadséiere gaangen' = I went for a walk",
        difficulty: 3
    },

    // ===== INTRODUCING OTHERS =====
    {
        category: "Greetings",
        question: "Presentéiert eng Persoun: Si heescht Maria, si kënnt aus Portugal.",
        translation: "Introduce a person: Her name is Maria, she comes from Portugal. — Try it!",
        answers: [
            "si heescht maria", "hiren numm ass maria",
            "si kënnt aus portugal", "si heescht maria an si kënnt aus portugal"
        ],
        hint: "'Si heescht...' = She is called... 'Si kënnt aus...' = She comes from... 'Hiren Numm ass...' = Her name is...",
        difficulty: 2
    },

    // ===== HOUSING =====
    {
        category: "Neighborhood",
        question: "Wunnt Dir an engem Haus oder an engem Appartement?",
        translation: "Do you live in a house or an apartment?",
        answers: [
            "ech wunnen an engem appartement", "ech wunnen an engem haus",
            "an engem appartement", "an engem haus",
            "ech wunne mat menger famill an engem haus"
        ],
        hint: "'An engem Appartement' = in an apartment. 'An engem Haus' = in a house",
        difficulty: 2
    }
];

// Categories derived from questions
const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];
