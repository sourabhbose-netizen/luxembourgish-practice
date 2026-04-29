// ===== GRAMMAR REFERENCE =====
const GRAMMAR_SECTIONS = [
    {
        title: "Nouns & Articles",
        icon: "📦",
        topics: [
            {
                term: "Noun",
                english: "A word that names a person, place, thing, or idea.",
                examples: ["dog, city, happiness, Maria"],
                luxembourgish: "In Luxembourgish, every noun has a gender: masculine (de/den), feminine (d'), or neutral (d'/dat). You must learn the gender with each noun.",
                lbExamples: ["<strong>de</strong> Mann (the man) — masculine", "<strong>d'</strong>Fra (the woman) — feminine", "<strong>d'</strong>Kand (the child) — neutral"]
            },
            {
                term: "Article (Definite & Indefinite)",
                english: "<strong>Definite</strong> = 'the' — refers to a specific thing.<br><strong>Indefinite</strong> = 'a/an' — refers to any one thing.",
                examples: ["<strong>The</strong> dog is big. (specific dog)", "<strong>A</strong> dog is barking. (any dog)"],
                luxembourgish: "Luxembourgish articles change based on gender:",
                lbExamples: ["Definite: <strong>den</strong> Hond (masc), <strong>d'</strong>Kaz (fem), <strong>d'</strong>Haus (neutral)", "Indefinite: <strong>en</strong> Hond (masc), <strong>eng</strong> Kaz (fem), <strong>en</strong> Haus (neutral)"]
            },
            {
                term: "Gender (Masculine, Feminine, Neutral)",
                english: "In English, only people and animals have gender (he/she). Objects are 'it'.<br>In Luxembourgish (like German), ALL nouns have a grammatical gender — even tables and chairs.",
                examples: ["English: The table → it", "Luxembourgish: Den Dësch → hien (he!)"],
                luxembourgish: "There are some patterns (Miranda says ~40-45% of words), but mostly you have to memorize the gender with each noun.",
                lbExamples: ["Masculine: de Bureau (office), de Bus", "Feminine: d'Aarbecht (work), d'Schoul (school)", "Neutral: d'Kand (child), d'Haus (house)"]
            },
            {
                term: "Plural",
                english: "More than one of something. In English, usually add -s or -es.",
                examples: ["dog → dog<strong>s</strong>", "child → <strong>children</strong> (irregular)"],
                luxembourgish: "Luxembourgish plurals are irregular — you need to learn them. Common pattern: add -en or change the vowel.",
                lbExamples: ["Kand → Kanner (child → children)", "Dag → Deeg (day → days)", "Sprooch → Sproochen (language → languages)"]
            }
        ]
    },
    {
        title: "Pronouns",
        icon: "👤",
        topics: [
            {
                term: "Personal Pronouns (Subject)",
                english: "Words that replace nouns as the subject (doer) of a sentence: <strong>I, you, he, she, it, we, they</strong>.",
                examples: ["<strong>She</strong> works at Amazon.", "<strong>They</strong> live in Luxembourg."],
                luxembourgish: "Luxembourgish pronouns with verb conjugation:",
                lbExamples: ["<strong>Ech</strong> (I) — ech schaffen", "<strong>Du</strong> (you informal) — du schaffs", "<strong>Hien</strong> (he) / <strong>Si</strong> (she) / <strong>Et</strong> (it) — hien/si/et schafft", "<strong>Mir</strong> (we) — mir schaffen", "<strong>Dir</strong> (you formal/plural) — dir schafft", "<strong>Si</strong> (they) — si schaffen"]
            },
            {
                term: "Possessive Pronouns",
                english: "Words that show ownership: <strong>my, your, his, her, our, their</strong>.",
                examples: ["<strong>My</strong> name is Sourabh.", "<strong>Her</strong> family lives in India."],
                luxembourgish: "In Luxembourgish, possessives change based on the gender of the thing owned (not the owner!):",
                lbExamples: ["<strong>Mäin</strong> Numm (my name — masc)", "<strong>Meng</strong> Fra (my wife — fem)", "<strong>Säin</strong> Auto (his car — masc)", "<strong>Hir</strong> Famill (her family — fem)", "<strong>Hiren</strong> Numm (her name — masc)"]
            },
            {
                term: "Formal vs Informal 'You'",
                english: "English uses 'you' for everyone. Many European languages have two forms.",
                examples: ["Informal: talking to friends, children", "Formal: talking to strangers, officials, at work"],
                luxembourgish: "<strong>Du</strong> = informal (friends, family). <strong>Dir</strong> = formal (strangers, officials, Sproochentest!).<br>Always use <strong>Dir</strong> in the Sproochentest.",
                lbExamples: ["Informal: <strong>Du</strong> bass wéi al? (How old are you?)", "Formal: <strong>Dir</strong> sidd wéi al? (How old are you?)"]
            }
        ]
    },
    {
        title: "Verbs & Tenses",
        icon: "⏰",
        topics: [
            {
                term: "Verb",
                english: "A word that describes an action or state: <strong>run, eat, be, have</strong>.",
                examples: ["I <strong>work</strong> at Amazon.", "She <strong>is</strong> married."],
                luxembourgish: "Luxembourgish verbs change form (conjugate) based on who is doing the action, just like English 'I am' vs 'he is'.",
                lbExamples: ["schaffen (to work): ech schaff<strong>en</strong>, du schaff<strong>s</strong>, hien schaff<strong>t</strong>"]
            },
            {
                term: "Infinitive",
                english: "The base form of a verb, usually with 'to': <strong>to eat, to go, to work</strong>. It's the form you find in the dictionary.",
                examples: ["I want <strong>to eat</strong>.", "She likes <strong>to read</strong>."],
                luxembourgish: "Luxembourgish infinitives usually end in <strong>-en</strong>:",
                lbExamples: ["schaff<strong>en</strong> (to work)", "iess<strong>en</strong> (to eat)", "go<strong>en</strong> (to go)", "schwätz<strong>en</strong> (to speak)"]
            },
            {
                term: "Conjugation",
                english: "Changing a verb's form to match the subject. In English, we mostly just add -s for he/she/it.",
                examples: ["I <strong>work</strong> → He <strong>works</strong>", "I <strong>am</strong> → She <strong>is</strong> → They <strong>are</strong>"],
                luxembourgish: "Luxembourgish has more conjugation changes than English. You need to learn the pattern for each pronoun.",
                lbExamples: ["sinn (to be): ech <strong>si</strong>, du <strong>bass</strong>, hien <strong>ass</strong>, mir <strong>sinn</strong>, dir <strong>sidd</strong>, si <strong>sinn</strong>", "hunn (to have): ech <strong>hunn</strong>, du <strong>hues</strong>, hien <strong>huet</strong>, mir <strong>hunn</strong>, dir <strong>hutt</strong>, si <strong>hunn</strong>"]
            },
            {
                term: "Present Tense",
                english: "Describes what is happening <strong>now</strong> or what happens <strong>regularly</strong>.",
                examples: ["I <strong>work</strong> at Amazon. (regular)", "She <strong>is cooking</strong> right now. (now)"],
                luxembourgish: "Luxembourgish present tense works the same way:",
                lbExamples: ["Ech <strong>schaffen</strong> bei Amazon. (I work at Amazon)", "Ech <strong>wunnen</strong> zu Steinsel. (I live in Steinsel)"]
            },
            {
                term: "Past Participle ⭐",
                english: "The form of a verb used to describe a <strong>completed action</strong>. In English, it's the 3rd form of a verb — the one used with 'have'.",
                examples: ["go → went → <strong>gone</strong> (past participle)", "eat → ate → <strong>eaten</strong>", "work → worked → <strong>worked</strong>", "I have <strong>eaten</strong> pizza. / I have <strong>gone</strong> home."],
                luxembourgish: "This is the <strong>most important concept for the Sproochentest</strong>. In Luxembourgish Perfekt, the past participle goes to the END of the sentence:",
                lbExamples: ["schaffen → <strong>geschafft</strong> (worked)", "iessen → <strong>giess</strong> (eaten)", "goen → <strong>gaangen</strong> (gone)", "kachen → <strong>gekacht</strong> (cooked)", "kucken → <strong>gekuckt</strong> (watched)", "kréien → <strong>kritt</strong> (received/got)", "maachen → <strong>gemaach</strong> (done/made)"]
            },
            {
                term: "Perfekt (Past Tense) ⭐",
                english: "A past tense formed with a <strong>helper verb + past participle</strong>. In English: 'I <strong>have gone</strong>', 'I <strong>have eaten</strong>'.<br><br>In everyday English we often use simple past ('I went') instead, but in Luxembourgish, Perfekt is the <strong>main way to talk about the past</strong>.",
                examples: ["I <strong>have worked</strong> all day.", "She <strong>has gone</strong> home."],
                luxembourgish: "Structure: <strong>Subject + hunn/sinn + complements + past participle (at the END!)</strong>",
                lbExamples: ["Ech <strong>hunn</strong> am Bureau <strong>geschafft</strong>. (I worked in the office)", "Ech <strong>si</strong> heem <strong>gaangen</strong>. (I went home)", "Ech <strong>hunn</strong> eng Pizza <strong>giess</strong>. (I ate a pizza)", "⚠️ Movement verbs use <strong>sinn</strong>: goen, reesen, kommen", "⚠️ All other verbs use <strong>hunn</strong>"]
            },
            {
                term: "Preterit (Simple Past)",
                english: "A past tense that describes a state or condition, not an action. In English: 'I <strong>was</strong> at home', 'It <strong>was</strong> cold'.",
                examples: ["I <strong>was</strong> tired.", "The weather <strong>was</strong> nice."],
                luxembourgish: "In Luxembourgish, Preterit is <strong>rarely used</strong> — only for descriptions of states. Use Perfekt for actions.",
                lbExamples: ["Ech <strong>war</strong> doheem. (I was at home)", "Et <strong>war</strong> schéin. (It was nice)", "Et <strong>war</strong> kal. (It was cold)", "⚠️ For actions, always use Perfekt: Ech <strong>hunn geschafft</strong> (NOT: Ech schafte)"]
            },
            {
                term: "Auxiliary / Helper Verb",
                english: "A verb that helps form tenses. In English: <strong>have, be, do, will</strong>.",
                examples: ["I <strong>have</strong> eaten. ('have' helps form past)", "She <strong>is</strong> running. ('is' helps form continuous)"],
                luxembourgish: "In Perfekt, the helper verbs are <strong>hunn</strong> (to have) and <strong>sinn</strong> (to be):",
                lbExamples: ["<strong>Hunn</strong>: used with most verbs — Ech <strong>hunn</strong> gekacht", "<strong>Sinn</strong>: used with movement verbs — Ech <strong>si</strong> gaangen"]
            }
        ]
    },
    {
        title: "Sentence Structure",
        icon: "🏗️",
        topics: [
            {
                term: "Subject",
                english: "The person or thing doing the action in a sentence.",
                examples: ["<strong>She</strong> works at Amazon.", "<strong>The dog</strong> is sleeping."],
                luxembourgish: "Same concept in Luxembourgish:",
                lbExamples: ["<strong>Ech</strong> schaffen bei Amazon. (I work at Amazon)", "<strong>D'Kaz</strong> schléift. (The cat is sleeping)"]
            },
            {
                term: "Verb Position (V2 Rule) ⭐",
                english: "In English, the verb usually comes after the subject: 'I work'. In Luxembourgish, the verb <strong>always stays in position 2</strong> of the sentence.",
                examples: ["English: Yesterday <strong>I went</strong> home. (verb in position 3)"],
                luxembourgish: "When you start with something other than the subject (like a time word), the verb and subject <strong>swap</strong>:",
                lbExamples: ["Normal: <strong>Ech</strong>(1) <strong>si</strong>(2) heem gaangen.", "With time: <strong>Gëschter</strong>(1) <strong>si</strong>(2) <strong>ech</strong>(3) heem gaangen.", "⚠️ The verb ALWAYS stays in position 2!"]
            },
            {
                term: "Inversion",
                english: "Swapping the normal order of subject and verb. In English, we do this for questions: 'Are you?' instead of 'You are'.",
                examples: ["Statement: You <strong>are</strong> married.", "Question: <strong>Are</strong> you married?"],
                luxembourgish: "In Luxembourgish, inversion happens whenever the sentence starts with anything other than the subject:",
                lbExamples: ["<strong>Ech</strong> hunn geschafft. (normal)", "<strong>Gëschter</strong> hunn <strong>ech</strong> geschafft. (inversion — time first)", "<strong>Am Bureau</strong> hunn <strong>ech</strong> geschafft. (inversion — place first)"]
            },
            {
                term: "Negation",
                english: "Making a sentence negative using 'not'.",
                examples: ["I do <strong>not</strong> work.", "She has <strong>not</strong> eaten."],
                luxembourgish: "<strong>Net</strong> = not. It goes next to the verb it negates. In Perfekt, it goes <strong>before the past participle</strong>:",
                lbExamples: ["Present: Ech schaffen <strong>net</strong>. (I don't work)", "Perfekt: Ech hunn <strong>net</strong> geschafft. (I didn't work)", "Perfekt: Ech hunn d'Hausaufgab <strong>net gemaach</strong>. (I didn't do the homework)"]
            },
            {
                term: "Complement",
                english: "The extra information in a sentence that completes the meaning — where, when, what, how.",
                examples: ["I work <strong>at Amazon</strong>. (where)", "She ate <strong>a pizza</strong>. (what)"],
                luxembourgish: "In Perfekt, complements go between the helper verb and the past participle:",
                lbExamples: ["Ech hunn <strong>am Bureau</strong> geschafft. (complement: am Bureau)", "Ech hunn <strong>eng Pizza</strong> giess. (complement: eng Pizza)", "Structure: Subject + hunn/sinn + <strong>COMPLEMENT</strong> + past participle"]
            }
        ]
    },
    {
        title: "Cases (Nominative, Accusative, Dative)",
        icon: "🎯",
        topics: [
            {
                term: "What are Cases?",
                english: "Cases show the <strong>role</strong> a noun plays in a sentence. English mostly uses word order for this, but Luxembourgish (like German) changes articles and pronouns based on the case.",
                examples: ["<strong>I</strong> see <strong>him</strong>. (I = subject/nominative, him = object/accusative)", "In English, 'I' changes to 'me/him/her' — that's cases!"],
                luxembourgish: "Luxembourgish has 3 cases. At A1 level, you mainly need Nominative and Dative.",
                lbExamples: ["Don't panic — you already use cases in English without thinking about it!"]
            },
            {
                term: "Nominative Case",
                english: "The case for the <strong>subject</strong> — the person/thing doing the action.",
                examples: ["<strong>The dog</strong> bites the man. (dog = nominative, it's doing the biting)"],
                luxembourgish: "Articles in nominative:",
                lbExamples: ["Masculine: <strong>den</strong> Hond (the dog)", "Feminine: <strong>d'</strong>Kaz (the cat)", "Neutral: <strong>d'</strong>Kand (the child)", "<strong>Den</strong> Hond ass grouss. (The dog is big)"]
            },
            {
                term: "Accusative Case",
                english: "The case for the <strong>direct object</strong> — the person/thing receiving the action directly.",
                examples: ["The dog bites <strong>the man</strong>. (man = accusative, he's being bitten)", "I see <strong>her</strong>. (her = accusative)"],
                luxembourgish: "In Luxembourgish, accusative looks the same as nominative for most nouns. The main change is with masculine articles:",
                lbExamples: ["Ech gesinn <strong>den</strong> Hond. (I see the dog)", "Ech iessen <strong>eng</strong> Pizza. (I eat a pizza)"]
            },
            {
                term: "Dative Case ⭐",
                english: "The case for the <strong>indirect object</strong> — the person/thing that benefits from or is affected by the action. Often answers 'to whom?' or 'for whom?'.<br><br>Also used after certain <strong>prepositions</strong> (in, at, with, to).",
                examples: ["I give the book <strong>to her</strong>. (her = dative)", "I live <strong>in the</strong> city. (after preposition 'in')"],
                luxembourgish: "Dative is very common in Luxembourgish because many prepositions require it:",
                lbExamples: ["<strong>an engem</strong> Haus (in a house) — 'engem' is dative", "<strong>mat dem</strong> Auto (with the car) — 'dem' is dative", "<strong>bei engem</strong> Dokter (at a doctor's) — dative", "Ech wunnen <strong>an engem Appartement</strong>. (I live in an apartment)", "Ech schaffen <strong>bei engem Dokter</strong>. (I work at a doctor's)"]
            },
            {
                term: "Prepositions that trigger Dative",
                english: "Prepositions are small words like 'in, at, with, from, to'. In Luxembourgish, many common prepositions require the dative case, which changes the article.",
                examples: ["in → an", "with → mat", "at/near → bei", "from → vun", "to → zu"],
                luxembourgish: "Article changes in dative:",
                lbExamples: ["Masculine: den → <strong>dem</strong> (mat <strong>dem</strong> Bus)", "Feminine: d' → <strong>der</strong> (an <strong>der</strong> Stad)", "Neutral: d' → <strong>dem</strong> (an <strong>dem</strong> Haus)", "Indefinite masc: en → <strong>engem</strong> (an <strong>engem</strong> Restaurant)", "Indefinite fem: eng → <strong>enger</strong> (an <strong>enger</strong> Schoul)"]
            }
        ]
    },
    {
        title: "Useful Linguistic Terms",
        icon: "📖",
        topics: [
            {
                term: "Adjective",
                english: "A word that describes a noun: big, small, nice, cold.",
                examples: ["The <strong>big</strong> dog.", "A <strong>nice</strong> day."],
                luxembourgish: "Adjectives in Luxembourgish can change form based on gender (but at A1, you mostly use them as-is):",
                lbExamples: ["Et ass <strong>schéin</strong>. (It is nice)", "En <strong>schwaarzen</strong> Auto. (A black car — adjective changes!)"]
            },
            {
                term: "Adverb",
                english: "A word that describes how, when, or where an action happens.",
                examples: ["She speaks <strong>slowly</strong>.", "I go <strong>often</strong>."],
                luxembourgish: "Common Luxembourgish adverbs:",
                lbExamples: ["<strong>gär</strong> (gladly/like to) — Ech liesen gär", "<strong>heiansdo</strong> (sometimes)", "<strong>ëmmer</strong> (always)", "<strong>ni</strong> (never)"]
            },
            {
                term: "Preposition",
                english: "A small word that shows relationship between things: <strong>in, on, at, with, from, to</strong>.",
                examples: ["I live <strong>in</strong> Luxembourg.", "I go <strong>to</strong> work <strong>by</strong> car."],
                luxembourgish: "Key Luxembourgish prepositions:",
                lbExamples: ["<strong>zu</strong> (to/in — for cities): zu Lëtzebuerg", "<strong>an</strong> (in): an der Stad", "<strong>mat</strong> (with): mat dem Auto", "<strong>bei</strong> (at/near): bei Amazon", "<strong>vun</strong> (from): vun Indien", "<strong>aus</strong> (from/out of): aus Indien"]
            },
            {
                term: "Clause",
                english: "A group of words with a subject and a verb. A sentence can have one or more clauses.",
                examples: ["<strong>I work</strong> at Amazon. (one clause)", "<strong>I am happy</strong> that <strong>it is Friday</strong>. (two clauses)"],
                luxembourgish: "In Luxembourgish, when you connect two clauses with 'dass' (that), 'well' (because), etc., the verb goes to the END of the second clause:",
                lbExamples: ["Ech si frou, <strong>dass et Freideg ass</strong>. (I am happy that it is Friday)", "Notice: 'ass' goes to the end in the dass-clause"]
            }
        ]
    }
];

// ===== RENDER GRAMMAR REFERENCE =====
function initGrammarRef() {
    const container = document.getElementById("grammarRefContent");
    container.innerHTML = "";

    GRAMMAR_SECTIONS.forEach(section => {
        const secDiv = document.createElement("div");
        secDiv.className = "gr-section";

        const topicsHtml = section.topics.map(topic => `
            <div class="gr-topic">
                <div class="gr-topic-header" onclick="this.parentElement.classList.toggle('open')">
                    <span class="gr-term">${topic.term}</span>
                    <span class="gr-toggle">+</span>
                </div>
                <div class="gr-topic-body">
                    <div class="gr-block">
                        <div class="gr-block-label">📘 In English</div>
                        <p>${topic.english}</p>
                        <div class="gr-examples">${topic.examples.map(e => `<div class="gr-example">${e}</div>`).join("")}</div>
                    </div>
                    <div class="gr-block lb-block">
                        <div class="gr-block-label">🇱🇺 In Lëtzebuergesch</div>
                        <p>${topic.luxembourgish}</p>
                        <div class="gr-examples">${topic.lbExamples.map(e => `<div class="gr-example">${e}</div>`).join("")}</div>
                    </div>
                </div>
            </div>
        `).join("");

        secDiv.innerHTML = `
            <div class="gr-section-header" onclick="this.parentElement.classList.toggle('open')">
                <h3>${section.icon} ${section.title}</h3>
                <span class="gr-toggle">▼</span>
            </div>
            <div class="gr-section-body">${topicsHtml}</div>
        `;

        container.appendChild(secDiv);
    });
}
