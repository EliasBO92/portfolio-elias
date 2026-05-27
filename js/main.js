const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const translations = {
  en: {
    "Aller au contenu": "Skip to content",
    "Changer la langue": "Change language",
    "Navigation principale": "Main navigation",
    "Ouvrir le menu": "Open menu",
    "Accueil": "Home",
    "Projets": "Projects",
    "Parcours": "Path",
    "Contact": "Contact",
    "Télécharger le CV": "Download CV",
    "Voir le CV": "View CV",
    "Me découvrir": "Get to know me",
    "Envoyer le message": "Send message",
    "Nom": "Name",
    "Message": "Message",
    "Coordonnées": "Details",
    "Localisation: Île-de-France": "Location: Île-de-France, France",
    "Le CV original en anglais est disponible au format PDF.": "My CV is available as a PDF.",
    "Réalisations": "Work",
    "Des projets étudiants avec de vraies contraintes.": "Student projects with real constraints.",
    "Voici une sélection structurée à partir de mon parcours en BUT Informatique: vision par ordinateur, applications de gestion, sites web, bases de données et système.": "Here is a structured selection from my Computer Science degree: computer vision, management apps, websites, databases and systems.",
    "Tout": "All",
    "IA": "AI",
    "Web": "Web",
    "Logiciel": "Software",
    "Data": "Data",
    "Filtrer les projets": "Filter projects",
    "Détection automatique de cartes de bridge": "Automatic bridge card detection",
    "Système combinant vision par ordinateur, IA et traitement vidéo pour enregistrer et analyser des parties de bridge à la demande d’un client.": "A system combining computer vision, AI and video processing to record and analyze bridge games for a client.",
    "Application de gestion des Jeux Olympiques 2024": "2024 Olympic Games management app",
    "Conception et développement d’une application Java avec fonctionnalités de planning, gestion de données et conduite de projet informatique.": "Design and development of a Java application with scheduling, data management and IT project management features.",
    "Site de vote sur des lois proposées": "Voting website for proposed laws",
    "Site web connecté à une base de données permettant aux utilisateurs de voter, consulter des propositions et interagir avec les données.": "Database-backed website allowing users to vote, view proposals and interact with stored data.",
    "Mini-ordinateur Raspberry Pi": "Raspberry Pi mini-computer",
    "Installation, configuration et optimisation d’un mini-ordinateur, avec une approche système concrète et orientée usage.": "Installation, configuration and optimization of a mini-computer, with a concrete system-oriented approach.",
    "Base de données client": "Customer database",
    "Modélisation et exploitation d’une base simulant les interactions client au sein d’une entreprise: requêtes, structuration et analyse.": "Modeling and use of a database simulating customer interactions in a company: queries, structure and analysis.",
    "Site pour une école fictive": "Website for a fictional school",
    "Création d’un site HTML/CSS avec structuration du contenu, design d’interface et adaptation aux besoins d’un établissement fictif.": "Creation of an HTML/CSS website with content structure, interface design and adaptation to a fictional school’s needs.",
    "Gestion": "Management",
    "Projet": "Project",
    "Vidéo": "Video",
    "Base de données": "Database",
    "Système": "System",
    "Architecture": "Architecture",
    "Modélisation": "Modeling",
    "Requêtes": "Queries",
    "Interface": "Interface",
    "BUT Informatique · Paris-Saclay": "Computer Science degree · Paris-Saclay",
    "Développeur junior qui aime comprendre avant de construire.": "Junior developer who likes to understand before building.",
    "Je m’appelle Elias, j’ai 21 ans et je suis en troisième année de BUT Informatique à l’IUT d’Orsay. Je travaille sur des projets web, data, IA et logiciels avec une préférence pour les interfaces claires et les systèmes qui ont du sens.": "My name is Elias, I am 21 and I am in my third year of a Computer Science degree at IUT Orsay. I work on web, data, AI and software projects, with a preference for clear interfaces and meaningful systems.",
    "Résumé du profil": "Profile summary",
    "Étudiant en informatique, basé en Île-de-France.": "Computer science student based in Île-de-France.",
    "Formation": "Education",
    "BUT Informatique 3e année": "3rd-year Computer Science degree",
    "Université": "University",
    "Langues": "Languages",
    "Questionnaire rapide": "Quick quiz",
    "Pour mieux me connaître": "To get to know me",
    "Choisis une réponse": "Choose an answer",
    "Le questionnaire avance seulement après ton choix.": "The quiz only moves forward after your choice.",
    "Ce que je peux apporter.": "What I can bring.",
    "Un profil encore en formation, mais déjà habitué à passer de l’idée au prototype: comprendre le besoin, organiser les données, coder proprement et présenter le résultat.": "A profile still in training, but already used to moving from idea to prototype: understanding needs, organizing data, coding cleanly and presenting the result.",
    "Développement logiciel": "Software development",
    "Deux stages chez Auxia dans la même équipe, avec progression, logique applicative et découverte des exigences d’un environnement professionnel.": "Two internships at Auxia in the same team, with progression, application logic and exposure to professional standards.",
    "Recherche & signaux": "Research & signals",
    "Stage au Laboratoire Images, Signaux & Systèmes Intelligents, avec un contexte technique lié à l’analyse et aux systèmes intelligents.": "Internship at the Images, Signals and Intelligent Systems Laboratory, in a technical context linked to analysis and intelligent systems.",
    "Contact & terrain": "People & field experience",
    "Expériences chez Monoprix et Paul: relation client, autonomie, rythme d’équipe et sens du service.": "Experiences at Monoprix and Paul: customer relations, autonomy, teamwork pace and service mindset.",
    "Une trajectoire qui s’est clarifiée vers l’informatique.": "A path that became clearer through computer science.",
    "Après un début en santé puis en mesures physiques, j’ai trouvé dans le BUT Informatique un terrain qui mélange logique, construction concrète et créativité.": "After starting in health studies and then physical measurements, I found in computer science a field that combines logic, concrete building and creativity.",
    "Depuis septembre 2023": "Since September 2023",
    "BUT Informatique · IUT d’Orsay": "Computer Science degree · IUT Orsay",
    "Formation à Paris-Saclay, actuellement en troisième année. Projets web, logiciels, bases de données, systèmes et travail d’équipe.": "Training at Paris-Saclay, currently in my third year. Web, software, database, systems and teamwork projects.",
    "Janvier - mai 2026": "January - May 2026",
    "Stage développement logiciel · Auxia, Malakoff Humanis": "Software development internship · Auxia, Malakoff Humanis",
    "Stage de cinq mois chez Auxia, dans la même équipe que le stage précédent, pour approfondir les missions de développement et consolider les compétences acquises en BUT Informatique.": "Five-month internship at Auxia, in the same team as the previous internship, to deepen development work and strengthen skills acquired during my degree.",
    "Juillet - août 2025": "July - August 2025",
    "Stage · Laboratoire Images, Signaux & Systèmes Intelligents": "Internship · Images, Signals and Intelligent Systems Laboratory",
    "Stage d’un mois dans un environnement de recherche technique, autour des images, signaux et systèmes intelligents.": "One-month internship in a technical research environment focused on images, signals and intelligent systems.",
    "Avril - juin 2025": "April - June 2025",
    "Stage de trois mois en développement logiciel. Découverte d’un contexte professionnel, des méthodes de travail en entreprise et de l’importance d’un code clair, fiable et maintenable.": "Three-month software development internship. Introduction to a professional context, company work methods and the importance of clear, reliable and maintainable code.",
    "Été 2023": "Summer 2023",
    "Employé polyvalent · Monoprix, Antony": "Versatile employee · Monoprix, Antony",
    "Gestion de rayons, contact client et encaissement. Une expérience utile pour renforcer l’autonomie, l’organisation et l’adaptation rapide.": "Shelf management, customer contact and checkout. A useful experience to strengthen autonomy, organization and quick adaptation.",
    "Stage d’observation · Boulangerie Paul, Antony": "Observation internship · Paul Bakery, Antony",
    "Découverte du monde professionnel avec des missions d’aide en vente et en cuisine, dans un cadre rythmé par le service et le travail d’équipe.": "First exposure to the professional world through sales and kitchen support tasks, in a service- and teamwork-driven environment.",
    "Février - août 2023": "February - August 2023",
    "BUT Mesures Physiques · Paris-Saclay": "Physical Measurements degree · Paris-Saclay",
    "Passage par une formation scientifique appliquée avant l’orientation définitive vers l’informatique.": "Applied science training before my final move toward computer science.",
    "Baccalauréat général · Mention assez bien": "French Baccalaureate · Honors",
    "Spécialités mathématiques et physique-chimie, option mathématiques expertes.": "Mathematics and physics-chemistry majors, with advanced mathematics option.",
    "Profil en quelques lignes": "Profile in a few lines",
    "Je suis à l’aise dans les environnements où il faut apprendre, tester, corriger et expliquer. Mes expériences de vente et de stage m’ont aussi donné une meilleure compréhension du terrain et du contact humain.": "I am comfortable in environments where I need to learn, test, correct and explain. My sales and internship experiences also gave me a better understanding of field work and human contact.",
    "21 ans": "21 years old",
    "Permis B": "Driving license",
    "Anglais B1/B2": "English B1/B2",
    "Espagnol B1": "Spanish B1",
    "Expérience professionnelle.": "Professional Experience.",
    "Une progression concrète entre développement, laboratoire, service client et découverte du monde professionnel.": "A concrete progression through development, laboratory work, customer service and first professional exposure.",
    "Stage développement logiciel": "Software development internship",
    "Auxia, Malakoff Humanis. Deuxième stage dans la même équipe, avec plus de continuité, d’autonomie et de pratique sur des missions de développement concrètes.": "Auxia, Malakoff Humanis. Second internship in the same team, with more continuity, autonomy and hands-on development work.",
    "Stage en laboratoire": "Laboratory internship",
    "Laboratoire Images, Signaux & Systèmes Intelligents. Stage d’un mois dans un cadre technique et scientifique lié aux images, aux signaux et aux systèmes intelligents.": "Images, Signals and Intelligent Systems Laboratory. One-month internship in a technical and scientific setting linked to images, signals and intelligent systems.",
    "Auxia, Malakoff Humanis. Première immersion en développement, avec rigueur, compréhension du contexte métier et maintenance du code.": "Auxia, Malakoff Humanis. First immersion in development, with rigor, understanding of the business context and code maintenance.",
    "Employé polyvalent": "Versatile employee",
    "Monoprix, Antony. Gestion de rayon, caisse, relation client et organisation dans un environnement rapide.": "Monoprix, Antony. Shelf management, checkout, customer relations and organization in a fast-paced environment.",
    "Stage d’observation": "Observation internship",
    "Boulangerie Paul, Antony. Première découverte du monde professionnel, de la vente, de l’aide en cuisine et du travail d’équipe.": "Paul Bakery, Antony. First discovery of the professional world, sales, kitchen support and teamwork.",
    "Compétences.": "Skills.",
    "Un socle encore en évolution, mais déjà assez large pour relier développement, données, interfaces et systèmes.": "A foundation still evolving, but already broad enough to connect development, data, interfaces and systems.",
    "Langages & web": "Languages & web",
    "Données & systèmes": "Data & systems",
    "Bases de données": "Databases",
    "Centres d’intérêt": "Interests",
    "Football": "Football",
    "Basketball": "Basketball",
    "Voyage": "Travel",
    "Art": "Art",
    "Cinéma": "Cinema",
    "Musique": "Music",
    "Parlons stage, alternance ou projet utile.": "Let’s talk internship, work-study or useful project.",
    "Je suis ouvert aux opportunités liées au développement web, logiciel, données ou projets étudiants ambitieux.": "I am open to opportunities related to web development, software, data or ambitious student projects."
  }
};

const getSavedLanguage = () => localStorage.getItem("portfolio-language") || "fr";
let currentLanguage = getSavedLanguage();

const translateText = (value, lang) => {
  if (lang === "fr") {
    return value;
  }

  return translations[lang]?.[value] || value;
};

const translateElementTextNodes = (root, lang) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    if (!node.datasetOriginalText) {
      node.datasetOriginalText = node.textContent;
    }

    const original = node.datasetOriginalText;
    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const key = original.trim();
    node.textContent = `${leading}${translateText(key, lang)}${trailing}`;
  });
};

const translateAttributes = (lang) => {
  const attrNames = ["aria-label", "alt", "title", "placeholder", "content"];

  document.querySelectorAll("*").forEach((element) => {
    attrNames.forEach((attr) => {
      if (!element.hasAttribute(attr)) {
        return;
      }

      const storageKey = `original${attr.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`;
      if (!element.dataset[storageKey]) {
        element.dataset[storageKey] = element.getAttribute(attr);
      }

      element.setAttribute(attr, translateText(element.dataset[storageKey], lang));
    });
  });
};

const createLanguageSwitcher = () => {
  const nav = document.querySelector(".nav-shell");

  if (!nav || document.querySelector("[data-language-switcher]")) {
    return;
  }

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.dataset.languageSwitcher = "";
  switcher.setAttribute("aria-label", "Changer la langue");
  switcher.innerHTML = `
    <button type="button" data-lang="fr">FR</button>
    <button type="button" data-lang="en">EN</button>
  `;
  nav.append(switcher);

  switcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
};

const updateLanguageSwitcher = (lang) => {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem("portfolio-language", lang);
  document.documentElement.lang = lang;
  translateElementTextNodes(document.body, lang);
  translateAttributes(lang);
  updateLanguageSwitcher(lang);
  updateDocumentTitle(lang);
  updateCvLinks(lang);

  if (typeof renderQuestion === "function") {
    renderQuestion();
  }
};

const updateDocumentTitle = (lang) => {
  const pageTitles = {
    "index.html": { fr: "Elias Ben-Othman | Portfolio", en: "Elias Ben-Othman | Portfolio" },
    "projets.html": { fr: "Elias Ben-Othman | Projets", en: "Elias Ben-Othman | Projects" },
    "parcours.html": { fr: "Elias Ben-Othman | Parcours", en: "Elias Ben-Othman | Path" },
    "contact.html": { fr: "Elias Ben-Othman | Contact", en: "Elias Ben-Othman | Contact" }
  };
  const page = location.pathname.split("/").pop() || "index.html";
  document.title = pageTitles[page]?.[lang] || pageTitles["index.html"][lang];
};

const updateCvLinks = (lang) => {
  const cvFiles = {
    fr: {
      href: "assets/docs/cv-elias-ben-othman-fr.pdf",
      download: "CV-Elias-Ben-Othman-FR.pdf"
    },
    en: {
      href: "assets/docs/cv-elias-ben-othman-en.pdf",
      download: "CV-Elias-Ben-Othman-EN.pdf"
    }
  };
  const file = cvFiles[lang] || cvFiles.fr;

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.setAttribute("href", file.href);
    link.setAttribute("download", file.download);
  });
};

createLanguageSwitcher();

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((item) => revealObserver.observe(item));

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const quizQuestionsByLanguage = {
  fr: [
    {
      question: "Qui est Elias quand il ne code pas ?",
      options: ["Un profil sport, voyage et culture", "Un collectionneur de claviers sous-marins", "Un dresseur officiel de pixels"],
      correct: 0,
      answer: "Un étudiant curieux, sportif, attiré par le voyage, l’art, le cinéma et la musique. Ce mélange donne un profil technique, mais pas enfermé dans la technique."
    },
    {
      question: "Quel projet résume le mieux son année actuelle ?",
      options: ["Détection automatique de cartes de bridge", "Machine à prédire la météo des chaussettes", "Simulateur de sieste en Java"],
      correct: 0,
      answer: "Un système de détection automatique de cartes à jouer combinant vision par ordinateur, intelligence artificielle, traitement vidéo, interface HTML et base de données."
    },
    {
      question: "Quelle expérience professionnelle a renforcé son côté terrain ?",
      options: ["Stages techniques et expériences de terrain", "Ambassadeur de la touche Entrée", "Responsable des pauses café imaginaires"],
      correct: 0,
      answer: "Son parcours réunit un stage de janvier à mai 2026 chez Auxia dans la même équipe, un stage au Laboratoire Images, Signaux & Systèmes Intelligents, un premier stage chez Auxia, puis Monoprix et Paul qui ajoutent autonomie, contact client et sens du service."
    },
    {
      question: "Sur quelles bases techniques peut-on compter ?",
      options: ["Python, C++, SQL, HTML/CSS, Java, PHP", "HTML peint à la main", "Un tableur magique qui code tout seul"],
      correct: 0,
      answer: "Des bases variées: Python, C++, SQL, HTML/CSS, Java, PHP, systèmes, architecture et gestion de bases de données."
    },
    {
      question: "Que cherche ce portfolio à montrer ?",
      options: ["Une progression solide et humaine", "Une encyclopédie des bugs célèbres", "Un musée du bouton beige"],
      correct: 0,
      answer: "Une progression: apprendre, construire, comprendre les usages et rendre les projets plus clairs pour les personnes qui les découvrent."
    },
    {
      question: "Où Elias suit-il son BUT Informatique ?",
      options: ["À l’IUT d’Orsay, Université Paris-Saclay", "Sur une île secrète réservée aux développeurs", "Dans une salle de serveurs avec vue sur la lune"],
      correct: 0,
      answer: "Elias est en troisième année de BUT Informatique à l’IUT d’Orsay, au sein de l’Université Paris-Saclay."
    },
    {
      question: "Quel stage apparaît en premier dans son CV français ?",
      options: ["Laboratoire Images, Signaux & Systèmes Intelligents", "Centre national du rangement de câbles", "Institut supérieur du copier-coller"],
      correct: 0,
      answer: "Le CV indique un stage d’un mois au Laboratoire Images, Signaux & Systèmes Intelligents en juillet-août 2025."
    },
    {
      question: "Quelle expérience montre son côté relation client ?",
      options: ["Monoprix à Antony, avec rayon et caisse", "Vendeur de nuages en format PDF", "Conseiller en choix de fonds d’écran"],
      correct: 0,
      answer: "Son expérience d’équipier polyvalent à Monoprix à Antony montre sa capacité à gérer le contact client, la caisse et l’organisation en rayon."
    },
    {
      question: "Quel outil ressort fortement dans ses projets de données ?",
      options: ["SQL et bases de données", "Une calculatrice qui fait du suspense", "Des post-it connectés en Bluetooth"],
      correct: 0,
      answer: "SQL et les bases de données reviennent dans plusieurs projets: modélisation, requêtes, stockage et exploitation des informations."
    },
    {
      question: "Quel type de projet web a-t-il déjà réalisé ?",
      options: ["Un site de vote avec base de données", "Un site pour commander des idées au kilo", "Un formulaire qui répond uniquement en rimes"],
      correct: 0,
      answer: "Il a réalisé un site web avec base de données permettant de voter sur des propositions de loi, en PHP et HTML."
    },
    {
      question: "Quelle qualité ressort de son parcours ?",
      options: ["S’adapter et progresser dans des contextes différents", "Compiler du code en fermant les yeux", "Transformer le Wi-Fi en jus d’orange"],
      correct: 0,
      answer: "Son parcours montre une vraie capacité d’adaptation: santé, mesures physiques, informatique, recherche, développement et expériences de terrain."
    },
    {
      question: "Quelles langues peut-il mobiliser ?",
      options: ["Français, anglais B1/B2 et espagnol B1", "Morse, latin spatial et binaire chanté", "Uniquement le langage des commentaires CSS"],
      correct: 0,
      answer: "Son CV indique français langue maternelle, anglais niveau B1/B2 et espagnol niveau B1."
    }
  ],
  en: [
    {
      question: "Who is Elias when he is not coding?",
      options: ["A sports, travel and culture profile", "An underwater keyboard collector", "An official pixel trainer"],
      correct: 0,
      answer: "A curious student who enjoys sport, travel, art, cinema and music. This gives him a technical profile without being locked inside technology only."
    },
    {
      question: "Which project best represents his current year?",
      options: ["Automatic bridge card detection", "A machine predicting sock weather", "A Java nap simulator"],
      correct: 0,
      answer: "A playing-card detection system combining computer vision, artificial intelligence, video processing, an HTML interface and a database."
    },
    {
      question: "Which experience strengthened his practical side?",
      options: ["Technical internships and field experience", "Ambassador of the Enter key", "Manager of imaginary coffee breaks"],
      correct: 0,
      answer: "His path includes a January-May 2026 internship at Auxia in the same team, an internship at LISSI, a first internship at Auxia, plus Monoprix and Paul for autonomy, customer contact and service mindset."
    },
    {
      question: "Which technical foundations can you count on?",
      options: ["Python, C++, SQL, HTML/CSS, Java, PHP", "Hand-painted HTML", "A magic spreadsheet that codes alone"],
      correct: 0,
      answer: "A varied foundation: Python, C++, SQL, HTML/CSS, Java, PHP, systems, architecture and database management."
    },
    {
      question: "What does this portfolio try to show?",
      options: ["Solid and human progression", "An encyclopedia of famous bugs", "A museum of beige buttons"],
      correct: 0,
      answer: "Progression: learning, building, understanding uses and making projects clearer for the people discovering them."
    },
    {
      question: "Where does Elias study computer science?",
      options: ["At IUT Orsay, Paris-Saclay University", "On a secret island for developers", "In a server room with a moon view"],
      correct: 0,
      answer: "Elias is in the third year of a Computer Science degree at IUT Orsay, Paris-Saclay University."
    },
    {
      question: "Which internship appears first on his French CV?",
      options: ["Images, Signals and Intelligent Systems Laboratory", "National Cable Tidying Center", "Advanced Copy-Paste Institute"],
      correct: 0,
      answer: "The CV mentions a one-month internship at the Images, Signals and Intelligent Systems Laboratory in July-August 2025."
    },
    {
      question: "Which experience shows his customer-facing side?",
      options: ["Monoprix in Antony, with shelves and checkout", "PDF cloud seller", "Wallpaper choice advisor"],
      correct: 0,
      answer: "His versatile employee experience at Monoprix in Antony shows his ability to handle customer contact, checkout and shelf organization."
    },
    {
      question: "Which tool appears strongly in his data projects?",
      options: ["SQL and databases", "A suspenseful calculator", "Bluetooth-connected sticky notes"],
      correct: 0,
      answer: "SQL and databases appear across several projects: modeling, queries, storage and data use."
    },
    {
      question: "What kind of web project has he already built?",
      options: ["A voting site with a database", "A website for ordering ideas by the kilo", "A form that only answers in rhymes"],
      correct: 0,
      answer: "He built a database-backed website allowing users to vote on proposed laws, using PHP and HTML."
    },
    {
      question: "Which quality stands out from his path?",
      options: ["Adapting and progressing in different contexts", "Compiling code with his eyes closed", "Turning Wi-Fi into orange juice"],
      correct: 0,
      answer: "His path shows real adaptability: health studies, physical measurements, computer science, research, development and field experience."
    },
    {
      question: "Which languages can he use?",
      options: ["French, English B1/B2 and Spanish B1", "Morse, space Latin and sung binary", "Only the language of CSS comments"],
      correct: 0,
      answer: "His CV lists French as a native language, English at B1/B2 and Spanish at B1."
    }
  ]
};

const getQuizQuestions = () => quizQuestionsByLanguage[currentLanguage] || quizQuestionsByLanguage.fr;

const quizRoot = document.querySelector("[data-quiz]");
let renderQuestion = null;

if (quizRoot) {
  const questionText = quizRoot.querySelector("[data-question]");
  const answerText = quizRoot.querySelector("[data-answer]");
  const optionsBox = quizRoot.querySelector("[data-options]");
  const progress = quizRoot.querySelector("[data-progress]");
  const feedbackTitle = quizRoot.querySelector("[data-feedback-title]");
  const continueButton = quizRoot.querySelector("[data-continue]");
  const continueLabel = quizRoot.querySelector("[data-continue-label]");
  const answerPanel = quizRoot.querySelector(".answer-panel");
  let current = 0;
  let isLocked = false;

  const goNext = () => {
    current = (current + 1) % getQuizQuestions().length;
    renderQuestion();
  };

  renderQuestion = () => {
    const questions = getQuizQuestions();
    if (current >= questions.length) {
      current = 0;
    }

    const item = questions[current];
    isLocked = false;
    questionText.textContent = item.question;
    feedbackTitle.textContent = currentLanguage === "en" ? "Choose an answer" : "Choisis une réponse";
    answerText.textContent = currentLanguage === "en" ? "The quiz only moves forward after your choice." : "Le questionnaire avance seulement après ton choix.";
    answerPanel.classList.remove("is-revealed", "is-wrong", "is-correct");
    continueButton.hidden = true;
    continueButton.classList.remove("is-wrong", "is-correct");
    progress.style.width = `${((current + 1) / questions.length) * 100}%`;

    optionsBox.innerHTML = "";
    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;

      button.addEventListener("click", () => {
        if (isLocked) {
          return;
        }

        const isCorrect = index === item.correct;
        isLocked = true;

        button.classList.add(isCorrect ? "is-correct" : "is-wrong");
        answerPanel.classList.add("is-revealed", isCorrect ? "is-correct" : "is-wrong");
        feedbackTitle.textContent = isCorrect
          ? currentLanguage === "en" ? "Nice one!" : "Bien vu !"
          : currentLanguage === "en" ? "Not exactly" : "Pas exactement";
        answerText.textContent = item.answer;
        continueLabel.textContent = isCorrect
          ? currentLanguage === "en" ? "Click here for the next question" : "Clique ici pour la question suivante"
          : currentLanguage === "en" ? "Click here to continue" : "Clique ici pour continuer";
        continueButton.hidden = false;
        continueButton.classList.add(isCorrect ? "is-correct" : "is-wrong");

        if (!isCorrect) {
          const correctButton = optionsBox.children[item.correct];
          correctButton.classList.add("is-correct");
        }
      });

      optionsBox.append(button);
    });
  };

  continueButton.addEventListener("click", goNext);
  renderQuestion();
}

setLanguage(currentLanguage);

const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}
