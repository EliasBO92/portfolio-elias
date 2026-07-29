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
    "Localisation": "Location",
    "Antony, Île-de-France": "Antony, Île-de-France, France",
    "Le CV est disponible au format PDF.": "My CV is available as a PDF.",
    "Réalisations": "Work",
    "Des projets étudiants avec de vraies contraintes.": "Student projects with real constraints.",
    "Des projets étudiants avec de vraies contraintes": "Student projects with real constraints",
    "Voici une sélection structurée à partir de mon parcours en BUT Informatique: vision par ordinateur, applications de gestion, sites web, bases de données et système.": "Here is a structured selection from my Computer Science degree: computer vision, management apps, websites, databases and systems.",
    "Tout": "All",
    "IA": "AI",
    "Web": "Web",
    "Logiciel": "Software",
    "Data": "Data",
    "Voir le détail": "View details",
    "Fermer le détail du projet": "Close project details",
    "Contexte": "Context",
    "Rôle": "Role",
    "Approche": "Approach",
    "Résultat": "Result",
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
    "Alternant en cybersécurité et data, avec un socle solide en développement": "Cybersecurity and data work-study student with a solid software development foundation",
    "Je m’appelle Elias, j’ai 22 ans et je suis en troisième année de BUT Informatique à l’IUT d’Orsay. Je travaille sur des projets web, data, IA et logiciels avec une préférence pour les interfaces claires et les systèmes qui ont du sens.": "My name is Elias, I am 22 and I am in my third year of a Computer Science degree at IUT Orsay. I work on web, data, AI and software projects, with a preference for clear interfaces and meaningful systems.",
    "Résumé du profil": "Profile summary",
    "Étudiant en informatique, basé en Île-de-France.": "Computer science student based in Île-de-France.",
    "Formation": "Education",
    "BUT Informatique 3e année": "3rd-year Computer Science degree",
    "Université": "University",
    "Langues": "Languages",
    "Questionnaire rapide": "Quick quiz",
    "Pour mieux me connaître": "To get to know me",
    "Mes infos essentielles": "My essential info",
    "Choisis une réponse": "Choose an answer",
    "Le questionnaire avance seulement après ton choix.": "The quiz only moves forward after your choice.",
    "Ce que je peux apporter.": "What I can bring.",
    "Ce que je peux apporter": "What I can bring",
    "Un profil encore en formation, mais déjà habitué à passer de l’idée au prototype: comprendre le besoin, organiser les données, coder proprement et présenter le résultat.": "A profile still in training, but already used to moving from idea to prototype: understanding needs, organizing data, coding cleanly and presenting the result.",
    "Développement logiciel": "Software development",
    "Deux stages chez Auxia dans la même équipe, avec progression, logique applicative et découverte des exigences d’un environnement professionnel.": "Two internships at Auxia in the same team, with progression, application logic and exposure to professional standards.",
    "Recherche & signaux": "Research & signals",
    "Stage au Laboratoire Images, Signaux & Systèmes Intelligents, avec un contexte technique lié à l’analyse et aux systèmes intelligents.": "Internship at the Images, Signals and Intelligent Systems Laboratory, in a technical context linked to analysis and intelligent systems.",
    "Contact & terrain": "People & field experience",
    "Expériences chez Monoprix et Paul: relation client, autonomie, rythme d’équipe et sens du service.": "Experiences at Monoprix and Paul: customer relations, autonomy, teamwork pace and service mindset.",
    "Une trajectoire qui s’est clarifiée vers l’informatique.": "A path that became clearer through computer science.",
    "Une trajectoire construite entre développement, data et cybersécurité": "A path built across software development, data and cybersecurity",
    "Un parcours qui avance par curiosité, méthode et terrain": "A path shaped by curiosity, method and hands-on experience",
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
    "Passage par une formation scientifique appliquée avant l’orientation définitive vers l’informatique. Année validée.": "Applied science training before my final move toward computer science. Year completed.",
    "2022 - février 2023": "2022 - February 2023",
    "PASS avec mineure sciences fondamentales · Université Paris-Saclay à Orsay": "PASS with fundamental sciences minor · Paris-Saclay University, Orsay",
    "Première année en parcours santé avec mineure sciences fondamentales, avant la réorientation vers une formation scientifique appliquée.": "First year in health studies with a fundamental sciences minor, before switching to applied science training.",
    "Baccalauréat général · Mention assez bien": "French Baccalaureate · Honors",
    "Spécialités mathématiques et physique-chimie, option mathématiques expertes.": "Mathematics and physics-chemistry majors, with advanced mathematics option.",
    "Diplôme national du brevet · Mention très bien": "French lower secondary certificate · Highest honors",
    "Obtention du diplôme national du brevet avec mention très bien.": "French lower secondary certificate obtained with highest honors.",
    "Profil en quelques lignes": "Profile in a few lines",
    "Je suis à l’aise dans les environnements où il faut apprendre, tester, corriger et expliquer. Mes expériences de vente et de stage m’ont aussi donné une meilleure compréhension du terrain et du contact humain.": "I am comfortable in environments where I need to learn, test, correct and explain. My sales and internship experiences also gave me a better understanding of field work and human contact.",
    "Carte des lieux": "Location map",
    "Carte des lieux du parcours d'Elias": "Map of Elias’s path locations",
    "Choisir un lieu à afficher sur la carte": "Choose a place to show on the map",
    "Carte IUT d’Orsay": "IUT Orsay map",
    "IUT d’Orsay": "IUT Orsay",
    "IUT d’Orsay · Formation informatique et parcours scientifique": "IUT Orsay · Computer science training and scientific path",
    "Orsay": "Orsay",
    "Malakoff": "Malakoff",
    "Vitry": "Vitry",
    "Antony": "Antony",
    "IUT d’Orsay, Paris-Saclay, PASS et Mesures Physiques": "IUT Orsay, Paris-Saclay, PASS and Physical Measurements",
    "Auxia, Malakoff Humanis": "Auxia, Malakoff Humanis",
    "Vitry-sur-Seine": "Vitry-sur-Seine",
    "Laboratoire Images, Signaux & Systèmes Intelligents": "Images, Signals and Intelligent Systems Laboratory",
    "Monoprix et Boulangerie Paul": "Monoprix and Paul Bakery",
    "22 ans": "22 years old",
    "Permis B": "Driving license",
    "Anglais B1/B2": "English B1/B2",
    "Espagnol B1": "Spanish B1",
    "Expérience professionnelle.": "Professional Experience.",
    "Expérience professionnelle": "Professional Experience",
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
    "Compétences": "Skills",
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
    "Parlons stage, alternance ou projet utile": "Let’s talk internship, work-study or useful project",
    "Je suis ouvert aux opportunités liées au développement web, logiciel, données ou projets étudiants ambitieux.": "I am open to opportunities related to web development, software, data or ambitious student projects.",
    "Ne pas remplir": "Do not fill this in",
    "Message envoyé, merci pour votre prise de contact.": "Message sent, thank you for getting in touch.",
    "Envoi impossible pour le moment. Vous pouvez me contacter directement par email.": "Unable to send right now. You can contact me directly by email."
  }
};

translations.zh = {
  ...translations.en,
  "Accueil": "首页",
  "Projets": "项目",
  "Parcours": "经历",
  "Contact": "联系",
  "Télécharger le CV": "下载简历",
  "Voir le CV": "查看简历",
  "Me découvrir": "了解我",
  "Master Cybersécurité & Data · Paris 8": "Cybersecurity & Data Master's · Paris 8",
  "Alternant en cybersécurité et data, avec un socle solide en développement": "网络安全与数据方向的工读学生，具备扎实的软件开发基础",
  "Je m’appelle Elias, j’ai 22 ans et je prépare un Master 1 Cybersécurité et Sciences des données à l’Université Paris 8 Vincennes-Saint-Denis, en alternance chez Auxia - Malakoff Humanis. Mon parcours relie développement logiciel, data, cybersécurité et projets concrets.": "我叫 Elias，22 岁，正在巴黎第八大学攻读网络安全与数据科学硕士一年级，并在 Auxia - Malakoff Humanis 进行工读。我的经历结合了软件开发、数据、网络安全和实际项目。",
  "Résumé du profil": "个人简介",
  "Alternant en informatique, basé en Île-de-France.": "信息技术工读学生，位于法兰西岛。",
  "Formation": "教育",
  "Alternance": "工读",
  "Langues": "语言",
  "Découverte rapide": "快速了解",
  "Tu veux faire le quiz ?": "想做小测验吗？",
  "Tu peux apprendre à me connaître avec quelques questions, ou afficher directement les informations essentielles.": "你可以通过几个问题了解我，也可以直接查看关键信息。",
  "Faire le quiz": "开始测验",
  "Voir mes infos": "查看信息",
  "Mes infos essentielles": "关键信息",
  "Un profil orienté développement, données et cybersécurité, avec une vraie curiosité pour les environnements techniques et internationaux.": "一个面向开发、数据与网络安全的个人背景，并对技术和国际环境保持强烈好奇心。",
  "Français langue maternelle": "法语母语",
  "Anglais B1/B2": "英语 B1/B2",
  "Espagnol B1": "西班牙语 B1",
  "Centres d’intérêt": "兴趣",
  "Voyages": "旅行",
  "Questionnaire rapide": "快速测验",
  "Pour mieux me connaître": "更好地了解我",
  "Choisis une réponse": "请选择一个答案",
  "Le questionnaire avance seulement après ton choix.": "选择答案后测验才会继续。",
  "Ce que je peux apporter": "我能带来的价值",
  "Développement logiciel": "软件开发",
  "Recherche & signaux": "研究与信号",
  "Contact & terrain": "沟通与实践",
  "Réalisations": "项目成果",
  "Des projets étudiants avec de vraies contraintes": "具有真实约束的学生项目",
  "Tout": "全部",
  "Logiciel": "软件",
  "Voir le détail": "查看详情",
  "Une trajectoire construite entre développement, data et cybersécurité": "一条连接开发、数据与网络安全的路径",
  "Après un parcours scientifique puis un BUT Informatique, je poursuis en Master Cybersécurité et Sciences des données, avec une alternance qui ancre mes compétences dans un contexte professionnel.": "在科学课程和计算机 BUT 之后，我继续攻读网络安全与数据科学硕士，并通过工读把技能应用到职业环境中。",
  "Fil conducteur": "主线",
  "Un parcours qui avance par curiosité, méthode et terrain": "由好奇心、方法和实践推动的经历",
  "Repères géographiques": "地理标记",
  "Les lieux de mon parcours montrent une progression entre formation, entreprise, recherche et expérience internationale.": "这些地点展示了我在学习、企业、研究和国际经历之间的成长。",
  "Carte des lieux": "地点地图",
  "Choisir un lieu à afficher sur la carte": "选择地图上显示的地点",
  "Master 1 cybersécurité et sciences des données.": "网络安全与数据科学硕士一年级。",
  "Alternance et deux stages en développement logiciel.": "软件开发工读和两段实习。",
  "Recherche appliquée sur une plateforme 6G/V2X.": "6G/V2X 平台上的应用研究。",
  "Images, signaux et systèmes intelligents.": "图像、信号与智能系统。",
  "BUT Informatique et parcours scientifique à Paris-Saclay.": "巴黎萨克雷的计算机 BUT 与科学背景。",
  "Expérience professionnelle": "职业经历",
  "Compétences": "技能",
  "Langages & web": "语言与 Web",
  "Données & systèmes": "数据与系统",
  "Parlons stage, alternance ou projet utile": "聊聊实习、工读或有用的项目",
  "Envoyer le message": "发送信息",
  "Coordonnées": "联系方式",
  "Localisation": "位置",
  "Le CV est disponible au format PDF.": "CV 提供 PDF 格式。"
};

translations.es = {
  ...translations.en,
  "Accueil": "Inicio",
  "Projets": "Proyectos",
  "Parcours": "Trayectoria",
  "Contact": "Contacto",
  "Télécharger le CV": "Descargar CV",
  "Voir le CV": "Ver CV",
  "Me découvrir": "Conóceme",
  "Master Cybersécurité & Data · Paris 8": "Máster Ciberseguridad y Datos · Paris 8",
  "Alternant en cybersécurité et data, avec un socle solide en développement": "Estudiante en alternancia en ciberseguridad y datos, con una base sólida en desarrollo",
  "Je m’appelle Elias, j’ai 22 ans et je prépare un Master 1 Cybersécurité et Sciences des données à l’Université Paris 8 Vincennes-Saint-Denis, en alternance chez Auxia - Malakoff Humanis. Mon parcours relie développement logiciel, data, cybersécurité et projets concrets.": "Me llamo Elias, tengo 22 años y preparo un Máster 1 en Ciberseguridad y Ciencias de Datos en la Universidad Paris 8 Vincennes-Saint-Denis, en alternancia en Auxia - Malakoff Humanis. Mi trayectoria conecta desarrollo de software, datos, ciberseguridad y proyectos concretos.",
  "Résumé du profil": "Resumen del perfil",
  "Alternant en informatique, basé en Île-de-France.": "Estudiante en alternancia en informática, ubicado en Île-de-France.",
  "Formation": "Formación",
  "Alternance": "Alternancia",
  "Langues": "Idiomas",
  "Découverte rapide": "Descubrimiento rápido",
  "Tu veux faire le quiz ?": "¿Quieres hacer el quiz?",
  "Tu peux apprendre à me connaître avec quelques questions, ou afficher directement les informations essentielles.": "Puedes conocerme con algunas preguntas o mostrar directamente la información esencial.",
  "Faire le quiz": "Hacer el quiz",
  "Voir mes infos": "Ver mi información",
  "Mes infos essentielles": "Mi información esencial",
  "Un profil orienté développement, données et cybersécurité, avec une vraie curiosité pour les environnements techniques et internationaux.": "Un perfil orientado al desarrollo, los datos y la ciberseguridad, con una verdadera curiosidad por los entornos técnicos e internacionales.",
  "Français langue maternelle": "Francés nativo",
  "Anglais B1/B2": "Inglés B1/B2",
  "Espagnol B1": "Español B1",
  "Centres d’intérêt": "Intereses",
  "Voyages": "Viajes",
  "Questionnaire rapide": "Quiz rápido",
  "Pour mieux me connaître": "Para conocerme mejor",
  "Choisis une réponse": "Elige una respuesta",
  "Le questionnaire avance seulement après ton choix.": "El quiz avanza solo después de tu elección.",
  "Ce que je peux apporter": "Lo que puedo aportar",
  "Développement logiciel": "Desarrollo de software",
  "Recherche & signaux": "Investigación y señales",
  "Contact & terrain": "Contacto y experiencia de campo",
  "Réalisations": "Proyectos",
  "Des projets étudiants avec de vraies contraintes": "Proyectos estudiantiles con restricciones reales",
  "Tout": "Todo",
  "Logiciel": "Software",
  "Voir le détail": "Ver detalle",
  "Une trajectoire construite entre développement, data et cybersécurité": "Una trayectoria construida entre desarrollo, datos y ciberseguridad",
  "Après un parcours scientifique puis un BUT Informatique, je poursuis en Master Cybersécurité et Sciences des données, avec une alternance qui ancre mes compétences dans un contexte professionnel.": "Después de una trayectoria científica y un BUT de Informática, continúo en un máster de Ciberseguridad y Ciencias de Datos, con una alternancia que sitúa mis competencias en un contexto profesional.",
  "Fil conducteur": "Hilo conductor",
  "Un parcours qui avance par curiosité, méthode et terrain": "Una trayectoria que avanza con curiosidad, método y práctica",
  "Repères géographiques": "Referencias geográficas",
  "Les lieux de mon parcours montrent une progression entre formation, entreprise, recherche et expérience internationale.": "Los lugares de mi trayectoria muestran una progresión entre formación, empresa, investigación y experiencia internacional.",
  "Carte des lieux": "Mapa de lugares",
  "Choisir un lieu à afficher sur la carte": "Elegir un lugar para mostrar en el mapa",
  "Master 1 cybersécurité et sciences des données.": "Máster 1 en ciberseguridad y ciencias de datos.",
  "Alternance et deux stages en développement logiciel.": "Alternancia y dos prácticas en desarrollo de software.",
  "Recherche appliquée sur une plateforme 6G/V2X.": "Investigación aplicada en una plataforma 6G/V2X.",
  "Images, signaux et systèmes intelligents.": "Imágenes, señales y sistemas inteligentes.",
  "BUT Informatique et parcours scientifique à Paris-Saclay.": "BUT de Informática y trayectoria científica en Paris-Saclay.",
  "Expérience professionnelle": "Experiencia profesional",
  "Compétences": "Competencias",
  "Langages & web": "Lenguajes y web",
  "Données & systèmes": "Datos y sistemas",
  "Parlons stage, alternance ou projet utile": "Hablemos de prácticas, alternancia o un proyecto útil",
  "Envoyer le message": "Enviar el mensaje",
  "Coordonnées": "Datos de contacto",
  "Localisation": "Ubicación",
  "Le CV est disponible au format PDF.": "El CV está disponible en formato PDF."
};

Object.assign(translations.en, {
  "Mon chemin m’a amené des sciences vers l’informatique, puis du développement vers la cybersécurité et la data. À chaque étape, j’ai cherché à comprendre les systèmes avant de les construire: apprendre vite, tester sérieusement, documenter clairement et transformer un besoin réel en solution utile.": "My path led me from science to computer science, then from software development to cybersecurity and data. At each step, I tried to understand systems before building them: learn quickly, test seriously, document clearly and turn a real need into a useful solution.",
  "Aujourd’hui, mon alternance chez Auxia - Malakoff Humanis donne une continuité professionnelle à ce parcours. Elle complète mes expériences en laboratoire, mon stage de recherche à Xidian University en Chine et mes premières expériences de terrain, qui m’ont appris la rigueur, l’autonomie et le contact humain.": "Today, my work-study position at Auxia - Malakoff Humanis gives professional continuity to this path. It complements my laboratory experience, my research internship at Xidian University in China and my first field experiences, which taught me rigor, autonomy and human contact.",
  "Permis B et véhiculé": "Driving license and own vehicle",
  "À partir de septembre 2026": "From September 2026",
  "Juillet - août 2026": "July - August 2026",
  "Juillet 2026": "July 2026",
  "Juillet 2025": "July 2025",
  "Septembre 2023": "September 2023",
  "Master 1 Cybersécurité et Sciences des données · Université Paris 8": "Master 1 Cybersecurity and Data Science · Paris 8 University",
  "Stage de recherche · Xidian University, Xi’an": "Research internship · Xidian University, Xi’an",
  "Obtention du BUT Informatique · Université Paris-Saclay": "Computer Science BUT degree · Paris-Saclay University",
  "Début du BUT Informatique · IUT d’Orsay": "Start of the Computer Science BUT · IUT Orsay",
  "PASS · Mineure sciences fondamentales": "PASS · Fundamental sciences minor",
  "Formation orientée cybersécurité, sciences des données et systèmes informatiques, suivie en alternance chez Auxia - Malakoff Humanis.": "Training focused on cybersecurity, data science and computer systems, followed as a work-study program at Auxia - Malakoff Humanis.",
  "Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes, dans un contexte international de recherche appliquée.": "Contribution to a 6G/V2X co-simulation platform for connected and autonomous vehicles in an international applied research context.",
  "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Cette expérience a contribué à la validation du BUT Informatique.": "Second internship at Auxia, in the same team, with more autonomy and continuity. This experience contributed to validating the Computer Science BUT.",
  "Premier stage de développement logiciel en entreprise, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "First software development internship in a company, important for validating the Computer Science DUT and discovering a demanding business context.",
  "Mes expériences professionnelles m’ont progressivement amené du contact client vers le développement logiciel, la recherche appliquée et l’alternance, avec une même exigence: comprendre le contexte, être fiable et transformer les besoins en solutions concrètes.": "My professional experiences gradually led me from customer contact to software development, applied research and work-study, with the same requirement: understand the context, be reliable and turn needs into concrete solutions.",
  "Alternance développement logiciel": "Software development work-study",
  "Stage de recherche international": "International research internship",
  "Auxia, Malakoff Humanis. Alternance en développement logiciel dans la continuité de deux stages, avec davantage d’autonomie, de suivi projet et de compréhension des enjeux métier.": "Auxia, Malakoff Humanis. Software development work-study following two internships, with more autonomy, project follow-up and understanding of business needs.",
  "Un socle orienté développement, données, cybersécurité et systèmes, construit à travers la formation et les projets.": "A foundation focused on development, data, cybersecurity and systems, built through training and projects."
});

Object.assign(translations.es, {
  "Mon chemin m’a amené des sciences vers l’informatique, puis du développement vers la cybersécurité et la data. À chaque étape, j’ai cherché à comprendre les systèmes avant de les construire: apprendre vite, tester sérieusement, documenter clairement et transformer un besoin réel en solution utile.": "Mi camino me llevó de las ciencias a la informática, y luego del desarrollo a la ciberseguridad y los datos. En cada etapa, busqué comprender los sistemas antes de construirlos: aprender rápido, probar con seriedad, documentar con claridad y transformar una necesidad real en una solución útil.",
  "Aujourd’hui, mon alternance chez Auxia - Malakoff Humanis donne une continuité professionnelle à ce parcours. Elle complète mes expériences en laboratoire, mon stage de recherche à Xidian University en Chine et mes premières expériences de terrain, qui m’ont appris la rigueur, l’autonomie et le contact humain.": "Hoy, mi alternancia en Auxia - Malakoff Humanis da continuidad profesional a esta trayectoria. Complementa mis experiencias en laboratorio, mi práctica de investigación en Xidian University en China y mis primeras experiencias de campo, que me enseñaron rigor, autonomía y contacto humano.",
  "Permis B et véhiculé": "Permiso B y vehículo propio",
  "À partir de septembre 2026": "A partir de septiembre de 2026",
  "Juillet - août 2026": "Julio - agosto de 2026",
  "Juillet 2026": "Julio de 2026",
  "Juillet 2025": "Julio de 2025",
  "Septembre 2023": "Septiembre de 2023",
  "Master 1 Cybersécurité et Sciences des données · Université Paris 8": "Máster 1 Ciberseguridad y Ciencias de Datos · Universidad Paris 8",
  "Stage de recherche · Xidian University, Xi’an": "Práctica de investigación · Xidian University, Xi’an",
  "Obtention du BUT Informatique · Université Paris-Saclay": "Obtención del BUT de Informática · Universidad Paris-Saclay",
  "Début du BUT Informatique · IUT d’Orsay": "Inicio del BUT de Informática · IUT d’Orsay",
  "PASS · Mineure sciences fondamentales": "PASS · Minor en ciencias fundamentales",
  "Formation orientée cybersécurité, sciences des données et systèmes informatiques, suivie en alternance chez Auxia - Malakoff Humanis.": "Formación orientada a la ciberseguridad, las ciencias de datos y los sistemas informáticos, realizada en alternancia en Auxia - Malakoff Humanis.",
  "Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes, dans un contexte international de recherche appliquée.": "Contribución a una plataforma de co-simulación 6G/V2X para vehículos conectados y autónomos, en un contexto internacional de investigación aplicada.",
  "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Cette expérience a contribué à la validation du BUT Informatique.": "Segunda práctica en Auxia, en el mismo equipo, con más autonomía y continuidad. Esta experiencia contribuyó a la validación del BUT de Informática.",
  "Premier stage de développement logiciel en entreprise, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "Primera práctica de desarrollo de software en empresa, importante para la validación del DUT de Informática y el descubrimiento de un contexto profesional exigente.",
  "Mes expériences professionnelles m’ont progressivement amené du contact client vers le développement logiciel, la recherche appliquée et l’alternance, avec une même exigence: comprendre le contexte, être fiable et transformer les besoins en solutions concrètes.": "Mis experiencias profesionales me llevaron progresivamente del contacto con clientes al desarrollo de software, la investigación aplicada y la alternancia, con una misma exigencia: comprender el contexto, ser fiable y transformar necesidades en soluciones concretas.",
  "Alternance développement logiciel": "Alternancia en desarrollo de software",
  "Stage de recherche international": "Práctica internacional de investigación",
  "Auxia, Malakoff Humanis. Alternance en développement logiciel dans la continuité de deux stages, avec davantage d’autonomie, de suivi projet et de compréhension des enjeux métier.": "Auxia, Malakoff Humanis. Alternancia en desarrollo de software tras dos prácticas, con más autonomía, seguimiento de proyecto y comprensión de los retos del negocio.",
  "Un socle orienté développement, données, cybersécurité et systèmes, construit à travers la formation et les projets.": "Una base orientada al desarrollo, los datos, la ciberseguridad y los sistemas, construida mediante la formación y los proyectos."
});

Object.assign(translations.zh, {
  "Permis B et véhiculé": "B 类驾照，自有车辆",
  "À partir de septembre 2026": "自 2026 年 9 月起",
  "Juillet - août 2026": "2026 年 7 月 - 8 月",
  "Juillet 2026": "2026 年 7 月",
  "Juillet 2025": "2025 年 7 月",
  "Septembre 2023": "2023 年 9 月",
  "Expérience professionnelle": "职业经历",
  "Compétences": "技能",
  "Alternance développement logiciel": "软件开发工读",
  "Stage de recherche international": "国际研究实习"
});


const completeSiteTranslations = {
  en: {
    "Master Cybersécurité & Data · Paris 8": "Cybersecurity & Data Master's · Paris 8",
    "Master 1 Cybersécurité & Data": "Master 1 Cybersecurity & Data",
    "Alternance": "Work-study",
    "Auxia · Malakoff Humanis": "Auxia · Malakoff Humanis",
    "Focus": "Focus",
    "Data · Cyber · Dev": "Data · Cyber · Dev",
    "FR · EN B1/B2 · ES B1": "FR · EN B1/B2 · ES B1",
    "Découverte rapide": "Quick discovery",
    "Tu veux faire le quiz ?": "Want to take the quiz?",
    "Tu peux apprendre à me connaître avec quelques questions, ou afficher directement les informations essentielles.": "You can get to know me through a few questions, or display the essential information directly.",
    "Faire le quiz": "Take the quiz",
    "Voir mes infos": "View my info",
    "Un profil orienté développement, données et cybersécurité, avec une vraie curiosité pour les environnements techniques et internationaux.": "A profile focused on development, data and cybersecurity, with real curiosity for technical and international environments.",
    "Français langue maternelle": "Native French",
    "Fitness": "Fitness",
    "Musculation": "Strength training",
    "Voyages": "Travel",
    "Angleterre, Allemagne, Autriche, Algérie, Belgique, Canada, Chine, États-Unis, Émirats arabes unis, Italie, Maroc, Pays-Bas, Portugal, République tchèque et Tunisie.": "England, Germany, Austria, Algeria, Belgium, Canada, China, United States, United Arab Emirates, Italy, Morocco, Netherlands, Portugal, Czech Republic and Tunisia.",
    "Clique ici pour continuer": "Click here to continue",
    "Un profil qui relie développement, données et cybersécurité: comprendre le besoin, structurer l’information, coder avec méthode et livrer un résultat clair.": "A profile connecting development, data and cybersecurity: understanding needs, structuring information, coding methodically and delivering a clear result.",
    "Alternance chez Auxia - Malakoff Humanis, après deux stages dans la même structure: continuité, autonomie et compréhension progressive d’un environnement logiciel métier.": "Work-study at Auxia - Malakoff Humanis, after two internships in the same organization: continuity, autonomy and progressive understanding of a business software environment.",
    "Expérience en recherche au LISSI puis à Xidian University, sur des sujets liés aux systèmes intelligents, à la co-simulation 6G/V2X et aux véhicules connectés.": "Research experience at LISSI and then Xidian University, on topics related to intelligent systems, 6G/V2X co-simulation and connected vehicles.",
    "Expériences terrain chez Monoprix et Paul: contact client, rythme d’équipe, polyvalence et sens du service.": "Field experience at Monoprix and Paul: customer contact, team pace, versatility and service mindset.",
    "Après un parcours scientifique puis un BUT Informatique, je poursuis en Master Cybersécurité et Sciences des données, avec une alternance qui ancre mes compétences dans un contexte professionnel.": "After a scientific path and then a Computer Science BUT, I am continuing in a Cybersecurity and Data Science Master's program, with a work-study role that grounds my skills in a professional context.",
    "Fil conducteur": "Guiding thread",
    "Finalisation du BUT Informatique après trois années de formation, de projets collectifs et de mise en pratique du développement.": "Completion of the Computer Science BUT after three years of training, team projects and hands-on software development.",
    "Stage d’un mois dans un environnement technique et scientifique lié aux images, aux signaux et aux systèmes intelligents.": "One-month internship in a technical and scientific environment related to images, signals and intelligent systems.",
    "Obtention du DUT Informatique · Parcours développement": "Computer Science DUT · Development track",
    "Validation du diplôme intermédiaire du BUT Informatique, avec un socle solide en programmation, SQL, web et conduite de projet.": "Validation of the intermediate Computer Science BUT diploma, with a solid foundation in programming, SQL, web and project management.",
    "Entrée en informatique à Paris-Saclay, avec des projets en développement web, logiciel, bases de données, systèmes et architecture.": "Start in computer science at Paris-Saclay, with projects in web development, software, databases, systems and architecture.",
    "BUT Mesures Physiques · IUT d’Orsay": "Physical Measurements BUT · IUT Orsay",
    "Année validée dans une formation scientifique appliquée, utile pour consolider la méthode, la rigueur et l’analyse technique.": "Year completed in an applied science program, useful for strengthening method, rigor and technical analysis.",
    "Première année en parcours santé à l’Université Paris-Saclay, avant une réorientation progressive vers une formation scientifique appliquée.": "First year in health studies at Paris-Saclay University, before gradually switching to an applied science program.",
    "Spécialités mathématiques et physique-chimie, avec option mathématiques expertes.": "Mathematics and physics-chemistry majors, with advanced mathematics option.",
    "Repères géographiques": "Geographical landmarks",
    "Les lieux de mon parcours montrent une progression entre formation, entreprise, recherche et expérience internationale.": "The places in my path show progression between education, business, research and international experience.",
    "Université Paris 8 · Master Cybersécurité et Sciences des données": "Paris 8 University · Cybersecurity and Data Science Master's degree",
    "Master 1 cybersécurité et sciences des données.": "Master 1 Cybersecurity and Data Science.",
    "Alternance et deux stages en développement logiciel.": "Work-study and two software development internships.",
    "Xidian University": "Xidian University",
    "Recherche appliquée sur une plateforme 6G/V2X.": "Applied research on a 6G/V2X platform.",
    "Images, signaux et systèmes intelligents.": "Images, signals and intelligent systems.",
    "BUT Informatique et parcours scientifique à Paris-Saclay.": "Computer Science BUT and scientific path at Paris-Saclay.",
    "Xidian University, Xi’an, Chine. Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes.": "Xidian University, Xi’an, China. Contribution to a 6G/V2X co-simulation platform for connected and autonomous vehicles.",
    "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Une expérience importante pour la validation du BUT Informatique.": "Second internship at Auxia, in the same team, with more autonomy and continuity. An important experience for validating the Computer Science BUT.",
    "Laboratoire Images, Signaux & Systèmes Intelligents. Stage d’un mois dans un cadre technique et scientifique lié aux images, signaux et systèmes intelligents.": "Images, Signals and Intelligent Systems Laboratory. One-month internship in a technical and scientific setting related to images, signals and intelligent systems.",
    "Premier stage en développement logiciel chez Auxia, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "First software development internship at Auxia, important for validating the Computer Science DUT and discovering a demanding business context.",
    "Monoprix, Antony. Gestion de rayon, caisse et relation client dans un environnement rapide.": "Monoprix, Antony. Shelf management, checkout and customer relations in a fast-paced environment.",
    "HTML/CSS": "HTML/CSS"
  },
  es: {
    "Master 1 Cybersécurité & Data": "Máster 1 Ciberseguridad y Datos",
    "Auxia · Malakoff Humanis": "Auxia · Malakoff Humanis",
    "Focus": "Enfoque",
    "Data · Cyber · Dev": "Datos · Ciber · Dev",
    "FR · EN B1/B2 · ES B1": "FR · EN B1/B2 · ES B1",
    "Fitness": "Fitness",
    "Musculation": "Musculación",
    "Angleterre, Allemagne, Autriche, Algérie, Belgique, Canada, Chine, États-Unis, Émirats arabes unis, Italie, Maroc, Pays-Bas, Portugal, République tchèque et Tunisie.": "Inglaterra, Alemania, Austria, Argelia, Bélgica, Canadá, China, Estados Unidos, Emiratos Árabes Unidos, Italia, Marruecos, Países Bajos, Portugal, República Checa y Túnez.",
    "Clique ici pour continuer": "Haz clic aquí para continuar",
    "Un profil qui relie développement, données et cybersécurité: comprendre le besoin, structurer l’information, coder avec méthode et livrer un résultat clair.": "Un perfil que conecta desarrollo, datos y ciberseguridad: comprender la necesidad, estructurar la información, programar con método y entregar un resultado claro.",
    "Alternance chez Auxia - Malakoff Humanis, après deux stages dans la même structure: continuité, autonomie et compréhension progressive d’un environnement logiciel métier.": "Alternancia en Auxia - Malakoff Humanis, después de dos prácticas en la misma estructura: continuidad, autonomía y comprensión progresiva de un entorno de software empresarial.",
    "Expérience en recherche au LISSI puis à Xidian University, sur des sujets liés aux systèmes intelligents, à la co-simulation 6G/V2X et aux véhicules connectés.": "Experiencia en investigación en LISSI y luego en Xidian University, sobre sistemas inteligentes, co-simulación 6G/V2X y vehículos conectados.",
    "Expériences terrain chez Monoprix et Paul: contact client, rythme d’équipe, polyvalence et sens du service.": "Experiencias de campo en Monoprix y Paul: contacto con clientes, ritmo de equipo, polivalencia y sentido del servicio.",
    "Fil conducteur": "Hilo conductor",
    "Finalisation du BUT Informatique après trois années de formation, de projets collectifs et de mise en pratique du développement.": "Finalización del BUT de Informática tras tres años de formación, proyectos colectivos y práctica del desarrollo.",
    "Stage d’un mois dans un environnement technique et scientifique lié aux images, aux signaux et aux systèmes intelligents.": "Práctica de un mes en un entorno técnico y científico vinculado a imágenes, señales y sistemas inteligentes.",
    "Obtention du DUT Informatique · Parcours développement": "Obtención del DUT de Informática · Itinerario desarrollo",
    "Validation du diplôme intermédiaire du BUT Informatique, avec un socle solide en programmation, SQL, web et conduite de projet.": "Validación del diploma intermedio del BUT de Informática, con una base sólida en programación, SQL, web y gestión de proyectos.",
    "Entrée en informatique à Paris-Saclay, avec des projets en développement web, logiciel, bases de données, systèmes et architecture.": "Entrada en informática en Paris-Saclay, con proyectos de desarrollo web, software, bases de datos, sistemas y arquitectura.",
    "BUT Mesures Physiques · IUT d’Orsay": "BUT Medidas Físicas · IUT d’Orsay",
    "Année validée dans une formation scientifique appliquée, utile pour consolider la méthode, la rigueur et l’analyse technique.": "Año validado en una formación científica aplicada, útil para consolidar el método, el rigor y el análisis técnico.",
    "Première année en parcours santé à l’Université Paris-Saclay, avant une réorientation progressive vers une formation scientifique appliquée.": "Primer año en estudios de salud en la Universidad Paris-Saclay, antes de una reorientación progresiva hacia una formación científica aplicada.",
    "Spécialités mathématiques et physique-chimie, avec option mathématiques expertes.": "Especialidades de matemáticas y física-química, con opción de matemáticas avanzadas.",
    "Université Paris 8 · Master Cybersécurité et Sciences des données": "Universidad Paris 8 · Máster Ciberseguridad y Ciencias de Datos",
    "Xidian University": "Xidian University",
    "Xidian University, Xi’an, Chine. Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes.": "Xidian University, Xi’an, China. Contribución a una plataforma de co-simulación 6G/V2X para vehículos conectados y autónomos.",
    "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Une expérience importante pour la validation du BUT Informatique.": "Segunda práctica en Auxia, en el mismo equipo, con más autonomía y continuidad. Una experiencia importante para validar el BUT de Informática.",
    "Laboratoire Images, Signaux & Systèmes Intelligents. Stage d’un mois dans un cadre technique et scientifique lié aux images, signaux et systèmes intelligents.": "Laboratorio de Imágenes, Señales y Sistemas Inteligentes. Práctica de un mes en un marco técnico y científico relacionado con imágenes, señales y sistemas inteligentes.",
    "Premier stage en développement logiciel chez Auxia, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "Primera práctica de desarrollo de software en Auxia, importante para validar el DUT de Informática y descubrir un contexto profesional exigente.",
    "Monoprix, Antony. Gestion de rayon, caisse et relation client dans un environnement rapide.": "Monoprix, Antony. Gestión de sección, caja y relación con clientes en un entorno rápido.",
    "HTML/CSS": "HTML/CSS"
  },
  zh: {
    "Master 1 Cybersécurité & Data": "网络安全与数据硕士一年级",
    "Auxia · Malakoff Humanis": "Auxia · Malakoff Humanis",
    "Focus": "重点",
    "Data · Cyber · Dev": "数据 · 网络安全 · 开发",
    "FR · EN B1/B2 · ES B1": "法语 · 英语 B1/B2 · 西班牙语 B1",
    "Fitness": "健身",
    "Musculation": "力量训练",
    "Angleterre, Allemagne, Autriche, Algérie, Belgique, Canada, Chine, États-Unis, Émirats arabes unis, Italie, Maroc, Pays-Bas, Portugal, République tchèque et Tunisie.": "英国、德国、奥地利、阿尔及利亚、比利时、加拿大、中国、美国、阿联酋、意大利、摩洛哥、荷兰、葡萄牙、捷克共和国和突尼斯。",
    "Clique ici pour continuer": "点击继续",
    "Un profil qui relie développement, données et cybersécurité: comprendre le besoin, structurer l’information, coder avec méthode et livrer un résultat clair.": "一个连接开发、数据与网络安全的背景：理解需求、组织信息、有方法地编程，并交付清晰的结果。",
    "Alternance chez Auxia - Malakoff Humanis, après deux stages dans la même structure: continuité, autonomie et compréhension progressive d’un environnement logiciel métier.": "在 Auxia - Malakoff Humanis 工读，此前已在同一机构完成两段实习：连续性、自主性，以及对业务软件环境的逐步理解。",
    "Expérience en recherche au LISSI puis à Xidian University, sur des sujets liés aux systèmes intelligents, à la co-simulation 6G/V2X et aux véhicules connectés.": "在 LISSI 和西安电子科技大学的研究经历，主题涉及智能系统、6G/V2X 联合仿真和联网车辆。",
    "Expériences terrain chez Monoprix et Paul: contact client, rythme d’équipe, polyvalence et sens du service.": "在 Monoprix 和 Paul 的实践经历：客户沟通、团队节奏、多岗位能力和服务意识。",
    "Mon chemin m’a amené des sciences vers l’informatique, puis du développement vers la cybersécurité et la data. À chaque étape, j’ai cherché à comprendre les systèmes avant de les construire: apprendre vite, tester sérieusement, documenter clairement et transformer un besoin réel en solution utile.": "我的道路从科学走向计算机科学，再从开发走向网络安全和数据。每一步我都先理解系统再构建它们：快速学习、认真测试、清晰记录，并把真实需求转化为有用的解决方案。",
    "Aujourd’hui, mon alternance chez Auxia - Malakoff Humanis donne une continuité professionnelle à ce parcours. Elle complète mes expériences en laboratoire, mon stage de recherche à Xidian University en Chine et mes premières expériences de terrain, qui m’ont appris la rigueur, l’autonomie et le contact humain.": "如今，我在 Auxia - Malakoff Humanis 的工读为这条路径带来了职业连续性。它补充了我的实验室经历、在中国西安电子科技大学的研究实习，以及早期实践经历，这些都让我学会严谨、自主和人际沟通。",
    "Master 1 Cybersécurité et Sciences des données · Université Paris 8": "网络安全与数据科学硕士一年级 · 巴黎第八大学",
    "Formation orientée cybersécurité, sciences des données et systèmes informatiques, suivie en alternance chez Auxia - Malakoff Humanis.": "面向网络安全、数据科学和计算机系统的课程，并在 Auxia - Malakoff Humanis 以工读形式进行。",
    "Stage de recherche · Xidian University, Xi’an": "研究实习 · 西安电子科技大学，西安",
    "Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes, dans un contexte international de recherche appliquée.": "在国际应用研究背景下，为联网与自动驾驶车辆的 6G/V2X 联合仿真平台做出贡献。",
    "Obtention du BUT Informatique · Université Paris-Saclay": "获得计算机 BUT · 巴黎萨克雷大学",
    "Finalisation du BUT Informatique après trois années de formation, de projets collectifs et de mise en pratique du développement.": "完成三年的计算机 BUT 学习、团队项目和开发实践。",
    "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Cette expérience a contribué à la validation du BUT Informatique.": "在 Auxia 同一团队的第二段实习，拥有更多自主性和连续性。这段经历有助于验证计算机 BUT。",
    "Stage d’un mois dans un environnement technique et scientifique lié aux images, aux signaux et aux systèmes intelligents.": "在与图像、信号和智能系统相关的技术与科研环境中进行一个月实习。",
    "Obtention du DUT Informatique · Parcours développement": "获得计算机 DUT · 开发方向",
    "Validation du diplôme intermédiaire du BUT Informatique, avec un socle solide en programmation, SQL, web et conduite de projet.": "通过计算机 BUT 的中级文凭，具备编程、SQL、Web 和项目管理的扎实基础。",
    "Premier stage de développement logiciel en entreprise, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "第一次企业软件开发实习，对验证计算机 DUT 和了解严格的业务环境很重要。",
    "Début du BUT Informatique · IUT d’Orsay": "开始计算机 BUT · 奥赛 IUT",
    "Entrée en informatique à Paris-Saclay, avec des projets en développement web, logiciel, bases de données, systèmes et architecture.": "在巴黎萨克雷进入计算机科学领域，项目涵盖 Web 开发、软件、数据库、系统和架构。",
    "BUT Mesures Physiques · IUT d’Orsay": "物理测量 BUT · 奥赛 IUT",
    "Année validée dans une formation scientifique appliquée, utile pour consolider la méthode, la rigueur et l’analyse technique.": "完成应用科学课程，有助于巩固方法、严谨性和技术分析能力。",
    "PASS · Mineure sciences fondamentales": "PASS · 基础科学辅修",
    "Première année en parcours santé à l’Université Paris-Saclay, avant une réorientation progressive vers une formation scientifique appliquée.": "在巴黎萨克雷大学完成健康方向第一年，之后逐步转向应用科学课程。",
    "Spécialités mathématiques et physique-chimie, avec option mathématiques expertes.": "数学和物理化学专业方向，含高级数学选项。",
    "Université Paris 8 · Master Cybersécurité et Sciences des données": "巴黎第八大学 · 网络安全与数据科学硕士",
    "Xidian University": "西安电子科技大学",
    "Mes expériences professionnelles m’ont progressivement amené du contact client vers le développement logiciel, la recherche appliquée et l’alternance, avec une même exigence: comprendre le contexte, être fiable et transformer les besoins en solutions concrètes.": "我的职业经历逐步从客户接触走向软件开发、应用研究和工读，始终坚持同一要求：理解背景、保持可靠，并把需求转化为具体解决方案。",
    "Auxia, Malakoff Humanis. Alternance en développement logiciel dans la continuité de deux stages, avec davantage d’autonomie, de suivi projet et de compréhension des enjeux métier.": "Auxia, Malakoff Humanis。继两段实习之后的软件开发工读，拥有更多自主性、项目跟进和对业务问题的理解。",
    "Xidian University, Xi’an, Chine. Contribution à une plateforme de co-simulation 6G/V2X pour véhicules connectés et autonomes.": "西安电子科技大学，中国西安。参与联网与自动驾驶车辆 6G/V2X 联合仿真平台。",
    "Deuxième stage chez Auxia, dans la même équipe, avec plus d’autonomie et de continuité. Une expérience importante pour la validation du BUT Informatique.": "在 Auxia 同一团队的第二段实习，拥有更多自主性和连续性。对验证计算机 BUT 很重要。",
    "Laboratoire Images, Signaux & Systèmes Intelligents. Stage d’un mois dans un cadre technique et scientifique lié aux images, signaux et systèmes intelligents.": "图像、信号与智能系统实验室。在与图像、信号和智能系统相关的技术科研环境中进行一个月实习。",
    "Premier stage en développement logiciel chez Auxia, important pour la validation du DUT Informatique et la découverte d’un contexte métier exigeant.": "在 Auxia 的第一次软件开发实习，对验证计算机 DUT 和了解严格业务环境很重要。",
    "Monoprix, Antony. Gestion de rayon, caisse et relation client dans un environnement rapide.": "Monoprix，Antony。在快节奏环境中负责货架、收银和客户关系。",
    "Un socle orienté développement, données, cybersécurité et systèmes, construit à travers la formation et les projets.": "通过课程和项目建立的开发、数据、网络安全与系统基础。",
    "HTML/CSS": "HTML/CSS"
  }
};

Object.entries(completeSiteTranslations).forEach(([lang, entries]) => {
  Object.assign(translations[lang], entries);
});

Object.assign(translations.en, {
  "Elias Ben-Othman | Portfolio": "Elias Ben-Othman | Portfolio",
  "Elias Ben-Othman | Projets": "Elias Ben-Othman | Projects",
  "Elias Ben-Othman | Parcours": "Elias Ben-Othman | Path",
  "Elias Ben-Othman | Contact": "Elias Ben-Othman | Contact",
  "Je m’appelle Elias, j’ai 22 ans et je prépare un Master 1 Cybersécurité et Sciences des données à l’Université Paris 8 Vincennes-Saint-Denis, en alternance chez Auxia - Malakoff Humanis. Mon parcours relie développement logiciel, data, cybersécurité et projets concrets.": "My name is Elias, I am 22 and I am preparing a Master 1 in Cybersecurity and Data Science at Paris 8 Vincennes-Saint-Denis University, while doing a work-study program at Auxia - Malakoff Humanis. My path connects software development, data, cybersecurity and concrete projects.",
  "Alternant en informatique, basé en Île-de-France.": "Computer science work-study student based in Île-de-France."
});

Object.assign(translations.es, {
  "Elias Ben-Othman | Portfolio": "Elias Ben-Othman | Portfolio",
  "Elias Ben-Othman | Projets": "Elias Ben-Othman | Proyectos",
  "Elias Ben-Othman | Parcours": "Elias Ben-Othman | Trayectoria",
  "Elias Ben-Othman | Contact": "Elias Ben-Othman | Contacto"
});

Object.assign(translations.zh, {
  "Elias Ben-Othman | Portfolio": "Elias Ben-Othman | 作品集",
  "Elias Ben-Othman | Projets": "Elias Ben-Othman | 项目",
  "Elias Ben-Othman | Parcours": "Elias Ben-Othman | 经历",
  "Elias Ben-Othman | Contact": "Elias Ben-Othman | 联系"
});

Object.assign(translations.en, {
  "Portfolio d'Elias Ben-Othman, alternant en Master Cybersécurité et Sciences des données.": "Portfolio of Elias Ben-Othman, work-study student in a Cybersecurity and Data Science Master's program.",
  "Portrait d'Elias Ben-Othman": "Portrait of Elias Ben-Othman",
  "Projets informatiques d'Elias Ben-Othman: IA, web, Java, SQL et systèmes.": "Computer science projects by Elias Ben-Othman: AI, web, Java, SQL and systems.",
  "Formation et expériences d'Elias Ben-Othman, alternant en cybersécurité et sciences des données.": "Education and experience of Elias Ben-Othman, work-study student in cybersecurity and data science.",
  "Carte Paris 8": "Paris 8 map",
  "Logo Auxia Malakoff Humanis": "Auxia Malakoff Humanis logo",
  "Logo Xidian University": "Xidian University logo",
  "Logo LISSI": "LISSI logo",
  "Logo Monoprix": "Monoprix logo",
  "Logo Paul": "Paul logo",
  "Contacter Elias Ben-Othman pour stage, alternance ou projet informatique.": "Contact Elias Ben-Othman for an internship, work-study opportunity or computer science project."
});

Object.assign(translations.es, {
  "Portfolio d'Elias Ben-Othman, alternant en Master Cybersécurité et Sciences des données.": "Portfolio de Elias Ben-Othman, estudiante en alternancia de Máster en Ciberseguridad y Ciencias de Datos.",
  "Portrait d'Elias Ben-Othman": "Retrato de Elias Ben-Othman",
  "Projets informatiques d'Elias Ben-Othman: IA, web, Java, SQL et systèmes.": "Proyectos informáticos de Elias Ben-Othman: IA, web, Java, SQL y sistemas.",
  "Formation et expériences d'Elias Ben-Othman, alternant en cybersécurité et sciences des données.": "Formación y experiencias de Elias Ben-Othman, alternante en ciberseguridad y ciencias de datos.",
  "Carte Paris 8": "Mapa de Paris 8",
  "Logo Auxia Malakoff Humanis": "Logo de Auxia Malakoff Humanis",
  "Logo Xidian University": "Logo de Xidian University",
  "Logo LISSI": "Logo de LISSI",
  "Logo Monoprix": "Logo de Monoprix",
  "Logo Paul": "Logo de Paul",
  "Contacter Elias Ben-Othman pour stage, alternance ou projet informatique.": "Contactar con Elias Ben-Othman para prácticas, alternancia o proyecto informático."
});

Object.assign(translations.zh, {
  "Portfolio d'Elias Ben-Othman, alternant en Master Cybersécurité et Sciences des données.": "Elias Ben-Othman 的作品集，网络安全与数据科学硕士工读生。",
  "Portrait d'Elias Ben-Othman": "Elias Ben-Othman 肖像",
  "Projets informatiques d'Elias Ben-Othman: IA, web, Java, SQL et systèmes.": "Elias Ben-Othman 的计算机项目：人工智能、Web、Java、SQL 和系统。",
  "Formation et expériences d'Elias Ben-Othman, alternant en cybersécurité et sciences des données.": "Elias Ben-Othman 的教育与经历，网络安全和数据科学工读生。",
  "Carte Paris 8": "巴黎第八大学地图",
  "Logo Auxia Malakoff Humanis": "Auxia Malakoff Humanis 标志",
  "Logo Xidian University": "西安电子科技大学标志",
  "Logo LISSI": "LISSI 标志",
  "Logo Monoprix": "Monoprix 标志",
  "Logo Paul": "Paul 标志",
  "Contacter Elias Ben-Othman pour stage, alternance ou projet informatique.": "联系 Elias Ben-Othman，洽谈实习、工读或计算机项目。"
});

Object.assign(translations.es, {
  "Aller au contenu": "Ir al contenido",
  "Nom": "Nombre",
  "Name": "Nombre",
  "Email": "Correo electrónico",
  "Message": "Mensaje",
  "Antony, Île-de-France": "Antony, Île-de-France, Francia",
  "Je suis ouvert aux opportunités liées au développement web, logiciel, données ou projets étudiants ambitieux.": "Estoy abierto a oportunidades relacionadas con desarrollo web, software, datos o proyectos estudiantiles ambiciosos.",
  "Voici une sélection structurée à partir de mon parcours en BUT Informatique: vision par ordinateur, applications de gestion, sites web, bases de données et système.": "Aquí tienes una selección estructurada a partir de mi trayectoria en BUT de Informática: visión por computadora, aplicaciones de gestión, sitios web, bases de datos y sistemas.",
  "Filtrer les projets": "Filtrar proyectos",
  "Contexte": "Contexto",
  "Rôle": "Rol",
  "Approche": "Enfoque",
  "Résultat": "Resultado",
  "IA": "IA",
  "Logiciel": "Software",
  "Détection automatique de cartes de bridge": "Detección automática de cartas de bridge",
  "Automatic bridge card detection": "Detección automática de cartas de bridge",
  "Système combinant vision par ordinateur, IA et traitement vidéo pour enregistrer et analyser des parties de bridge à la demande d’un client.": "Sistema que combina visión por computadora, IA y procesamiento de vídeo para grabar y analizar partidas de bridge a petición de un cliente.",
  "A system combining computer vision, AI and video processing to record and analyze bridge games for a client.": "Sistema que combina visión por computadora, IA y procesamiento de vídeo para grabar y analizar partidas de bridge a petición de un cliente.",
  "Application de gestion des Jeux Olympiques 2024": "Aplicación de gestión de los Juegos Olímpicos 2024",
  "2024 Olympic Games management app": "Aplicación de gestión de los Juegos Olímpicos 2024",
  "Conception et développement d’une application Java avec fonctionnalités de planning, gestion de données et conduite de projet informatique.": "Diseño y desarrollo de una aplicación Java con funciones de planificación, gestión de datos y conducción de proyecto informático.",
  "Design and development of a Java application with scheduling, data management and IT project management features.": "Diseño y desarrollo de una aplicación Java con funciones de planificación, gestión de datos y conducción de proyecto informático.",
  "Site de vote sur des lois proposées": "Sitio de voto sobre propuestas de ley",
  "Voting website for proposed laws": "Sitio de voto sobre propuestas de ley",
  "Site web connecté à une base de données permettant aux utilisateurs de voter, consulter des propositions et interagir avec les données.": "Sitio web conectado a una base de datos que permite votar, consultar propuestas e interactuar con los datos.",
  "Database-backed website allowing users to vote, view proposals and interact with stored data.": "Sitio web conectado a una base de datos que permite votar, consultar propuestas e interactuar con los datos.",
  "Mini-ordinateur Raspberry Pi": "Miniordenador Raspberry Pi",
  "Raspberry Pi mini-computer": "Miniordenador Raspberry Pi",
  "Installation, configuration et optimisation d’un mini-ordinateur, avec une approche système concrète et orientée usage.": "Instalación, configuración y optimización de un miniordenador, con un enfoque concreto orientado a sistemas y al uso.",
  "Installation, configuration and optimization of a mini-computer, with a concrete system-oriented approach.": "Instalación, configuración y optimización de un miniordenador, con un enfoque concreto orientado a sistemas y al uso.",
  "Base de données client": "Base de datos de clientes",
  "Customer database": "Base de datos de clientes",
  "Modélisation et exploitation d’une base simulant les interactions client au sein d’une entreprise: requêtes, structuration et analyse.": "Modelado y explotación de una base que simula interacciones con clientes dentro de una empresa: consultas, estructuración y análisis.",
  "Modeling and use of a database simulating customer interactions in a company: queries, structure and analysis.": "Modelado y explotación de una base que simula interacciones con clientes dentro de una empresa: consultas, estructuración y análisis.",
  "Site pour une école fictive": "Sitio para una escuela ficticia",
  "Website for a fictional school": "Sitio para una escuela ficticia",
  "Création d’un site HTML/CSS avec structuration du contenu, design d’interface et adaptation aux besoins d’un établissement fictif.": "Creación de un sitio HTML/CSS con estructuración del contenido, diseño de interfaz y adaptación a las necesidades de un centro ficticio.",
  "Creation of an HTML/CSS website with content structure, interface design and adaptation to a fictional school’s needs.": "Creación de un sitio HTML/CSS con estructuración del contenido, diseño de interfaz y adaptación a las necesidades de un centro ficticio.",
  "Gestion": "Gestión",
  "Projet": "Proyecto",
  "Vidéo": "Vídeo",
  "Base de données": "Base de datos",
  "Système": "Sistema",
  "Bases de données": "Bases de datos",
  "Databases": "Bases de datos",
  "Architecture": "Arquitectura",
  "Modélisation": "Modelado",
  "Requêtes": "Consultas",
  "Interface": "Interfaz",
  "22 ans": "22 años",
  "Janvier - mai 2026": "Enero - mayo de 2026",
  "January - May 2026": "Enero - mayo de 2026",
  "Juillet - août 2025": "Julio - agosto de 2025",
  "July - August 2025": "Julio - agosto de 2025",
  "Avril - juin 2025": "Abril - junio de 2025",
  "April - June 2025": "Abril - junio de 2025",
  "Été 2023": "Verano de 2023",
  "Summer 2023": "Verano de 2023",
  "Février - août 2023": "Febrero - agosto de 2023",
  "2022 - février 2023": "2022 - febrero de 2023",
  "Stage développement logiciel · Auxia, Malakoff Humanis": "Práctica de desarrollo de software · Auxia, Malakoff Humanis",
  "Stage développement logiciel": "Práctica de desarrollo de software",
  "Software development internship": "Práctica de desarrollo de software",
  "Stage · Laboratoire Images, Signaux & Systèmes Intelligents": "Práctica · Laboratorio de Imágenes, Señales y Sistemas Inteligentes",
  "Stage en laboratoire": "Práctica en laboratorio",
  "Laboratory internship": "Práctica en laboratorio",
  "Baccalauréat général · Mention assez bien": "Bachillerato general · Mención bastante bien",
  "Diplôme national du brevet · Mention très bien": "Diploma nacional del brevet · Mención muy bien",
  "Obtention du diplôme national du brevet avec mention très bien.": "Obtención del diploma nacional del brevet con mención muy bien.",
  "French Baccalaureate · Honors": "Bachillerato general · Mención bastante bien",
  "French lower secondary certificate · Highest honors": "Diploma nacional del brevet · Mención muy bien",
  "French lower secondary certificate obtained with highest honors.": "Obtención del diploma nacional del brevet con mención muy bien.",
  "Laboratoire Images, Signaux & Systèmes Intelligents": "Laboratorio de Imágenes, Señales y Sistemas Inteligentes",
  "Employé polyvalent": "Empleado polivalente",
  "Versatile employee": "Empleado polivalente",
  "Stage d’observation": "Práctica de observación",
  "Observation internship": "Práctica de observación",
  "Boulangerie Paul, Antony. Première découverte du monde professionnel, de la vente, de l’aide en cuisine et du travail d’équipe.": "Boulangerie Paul, Antony. Primer descubrimiento del mundo profesional, la venta, la ayuda en cocina y el trabajo en equipo.",
  "Paul Bakery, Antony. First discovery of the professional world, sales, kitchen support and teamwork.": "Boulangerie Paul, Antony. Primer descubrimiento del mundo profesional, la venta, la ayuda en cocina y el trabajo en equipo.",
  "Football": "Fútbol",
  "Basketball": "Baloncesto",
  "Voyage": "Viaje",
  "Travel": "Viaje",
  "Art": "Arte",
  "Cinéma": "Cine",
  "Cinema": "Cine",
  "Musique": "Música",
  "Music": "Música"
});

Object.assign(translations.zh, {
  "Aller au contenu": "跳到内容",
  "Master Cybersécurité & Data · Paris 8": "网络安全与数据硕士 · 巴黎第八大学",
  "Nom": "姓名",
  "Name": "姓名",
  "Email": "电子邮箱",
  "Message": "留言",
  "Antony, Île-de-France": "Antony，法兰西岛，法国",
  "Je suis ouvert aux opportunités liées au développement web, logiciel, données ou projets étudiants ambitieux.": "我愿意了解与 Web 开发、软件、数据或有挑战性的学生项目相关的机会。",
  "Voici une sélection structurée à partir de mon parcours en BUT Informatique: vision par ordinateur, applications de gestion, sites web, bases de données et système.": "以下是我在计算机 BUT 学习中完成的项目精选：计算机视觉、管理应用、网站、数据库和系统。",
  "Filtrer les projets": "筛选项目",
  "Contexte": "背景",
  "Rôle": "角色",
  "Approche": "方法",
  "Résultat": "结果",
  "IA": "人工智能",
  "Détection automatique de cartes de bridge": "桥牌纸牌自动识别",
  "Automatic bridge card detection": "桥牌纸牌自动识别",
  "Système combinant vision par ordinateur, IA et traitement vidéo pour enregistrer et analyser des parties de bridge à la demande d’un client.": "一个结合计算机视觉、人工智能和视频处理的系统，用于根据客户需求记录并分析桥牌牌局。",
  "A system combining computer vision, AI and video processing to record and analyze bridge games for a client.": "一个结合计算机视觉、人工智能和视频处理的系统，用于根据客户需求记录并分析桥牌牌局。",
  "Application de gestion des Jeux Olympiques 2024": "2024 奥运会管理应用",
  "2024 Olympic Games management app": "2024 奥运会管理应用",
  "Conception et développement d’une application Java avec fonctionnalités de planning, gestion de données et conduite de projet informatique.": "设计并开发一个 Java 应用，包含计划安排、数据管理和信息项目管理功能。",
  "Design and development of a Java application with scheduling, data management and IT project management features.": "设计并开发一个 Java 应用，包含计划安排、数据管理和信息项目管理功能。",
  "Site de vote sur des lois proposées": "法律提案投票网站",
  "Voting website for proposed laws": "法律提案投票网站",
  "Site web connecté à une base de données permettant aux utilisateurs de voter, consulter des propositions et interagir avec les données.": "一个连接数据库的网站，用户可以投票、查看提案并与数据交互。",
  "Database-backed website allowing users to vote, view proposals and interact with stored data.": "一个连接数据库的网站，用户可以投票、查看提案并与数据交互。",
  "Mini-ordinateur Raspberry Pi": "Raspberry Pi 微型计算机",
  "Raspberry Pi mini-computer": "Raspberry Pi 微型计算机",
  "Installation, configuration et optimisation d’un mini-ordinateur, avec une approche système concrète et orientée usage.": "安装、配置并优化一台微型计算机，采用面向实际用途的系统方法。",
  "Installation, configuration and optimization of a mini-computer, with a concrete system-oriented approach.": "安装、配置并优化一台微型计算机，采用面向实际用途的系统方法。",
  "Base de données client": "客户数据库",
  "Customer database": "客户数据库",
  "Modélisation et exploitation d’une base simulant les interactions client au sein d’une entreprise: requêtes, structuration et analyse.": "建模并使用一个模拟企业客户交互的数据库：查询、结构化和分析。",
  "Modeling and use of a database simulating customer interactions in a company: queries, structure and analysis.": "建模并使用一个模拟企业客户交互的数据库：查询、结构化和分析。",
  "Site pour une école fictive": "虚构学校网站",
  "Website for a fictional school": "虚构学校网站",
  "Création d’un site HTML/CSS avec structuration du contenu, design d’interface et adaptation aux besoins d’un établissement fictif.": "创建一个 HTML/CSS 网站，包含内容结构、界面设计，并适配虚构学校的需求。",
  "Creation of an HTML/CSS website with content structure, interface design and adaptation to a fictional school’s needs.": "创建一个 HTML/CSS 网站，包含内容结构、界面设计，并适配虚构学校的需求。",
  "Gestion": "管理",
  "Projet": "项目",
  "Vidéo": "视频",
  "Base de données": "数据库",
  "Système": "系统",
  "Bases de données": "数据库",
  "Databases": "数据库",
  "Architecture": "架构",
  "Modélisation": "建模",
  "Requêtes": "查询",
  "Interface": "界面",
  "22 ans": "22 岁",
  "Janvier - mai 2026": "2026 年 1 月 - 5 月",
  "January - May 2026": "2026 年 1 月 - 5 月",
  "Juillet - août 2025": "2025 年 7 月 - 8 月",
  "July - August 2025": "2025 年 7 月 - 8 月",
  "Avril - juin 2025": "2025 年 4 月 - 6 月",
  "April - June 2025": "2025 年 4 月 - 6 月",
  "Été 2023": "2023 年夏季",
  "Summer 2023": "2023 年夏季",
  "Février - août 2023": "2023 年 2 月 - 8 月",
  "2022 - février 2023": "2022 年 - 2023 年 2 月",
  "Stage développement logiciel · Auxia, Malakoff Humanis": "软件开发实习 · Auxia, Malakoff Humanis",
  "Stage développement logiciel": "软件开发实习",
  "Software development internship": "软件开发实习",
  "Stage · Laboratoire Images, Signaux & Systèmes Intelligents": "实习 · 图像、信号与智能系统实验室",
  "Stage en laboratoire": "实验室实习",
  "Laboratory internship": "实验室实习",
  "Baccalauréat général · Mention assez bien": "普通高中毕业会考 · 良好",
  "Diplôme national du brevet · Mention très bien": "法国初中毕业证书 · 优秀",
  "Obtention du diplôme national du brevet avec mention très bien.": "获得法国初中毕业证书，成绩优秀。",
  "French Baccalaureate · Honors": "普通高中毕业会考 · 良好",
  "French lower secondary certificate · Highest honors": "法国初中毕业证书 · 优秀",
  "French lower secondary certificate obtained with highest honors.": "获得法国初中毕业证书，成绩优秀。",
  "Laboratoire Images, Signaux & Systèmes Intelligents": "图像、信号与智能系统实验室",
  "Employé polyvalent": "多岗位员工",
  "Versatile employee": "多岗位员工",
  "Stage d’observation": "观察实习",
  "Observation internship": "观察实习",
  "Boulangerie Paul, Antony. Première découverte du monde professionnel, de la vente, de l’aide en cuisine et du travail d’équipe.": "Paul 面包店，Antony。第一次了解职业世界、销售、厨房协助和团队合作。",
  "Paul Bakery, Antony. First discovery of the professional world, sales, kitchen support and teamwork.": "Paul 面包店，Antony。第一次了解职业世界、销售、厨房协助和团队合作。",
  "Football": "足球",
  "Basketball": "篮球",
  "Voyage": "旅行",
  "Travel": "旅行",
  "Art": "艺术",
  "Cinéma": "电影",
  "Cinema": "电影",
  "Musique": "音乐",
  "Music": "音乐"
});


Object.assign(translations.es, {
  "Logiciel": "Desarrollo",
  "Ne pas remplir": "No rellenar",
  "Do not fill this in": "No rellenar",
  "Software": "Desarrollo",
  "Management": "Gestión",
  "Project": "Proyecto",
  "Video": "Vídeo",
  "Database": "Base de datos",
  "System": "Sistema",
  "Modeling": "Modelado",
  "Queries": "Consultas",
  "Interface": "Interfaz",
  "AI": "IA",
  "Architecture": "Arquitectura"
});

Object.assign(translations.zh, {
  "Ne pas remplir": "请勿填写",
  "Do not fill this in": "请勿填写",
  "Software": "开发",
  "Management": "管理",
  "Project": "项目",
  "Video": "视频",
  "Database": "数据库",
  "System": "系统",
  "Modeling": "建模",
  "Queries": "查询",
  "Interface": "界面",
  "AI": "人工智能",
  "Architecture": "架构"
});

Object.assign(translations.en, {
  "Un aperçu plus personnel": "A more personal glimpse",
  "Quelques espaces pour montrer ce qui nourrit mon équilibre en dehors du code: voyages, sport, culture et moments qui racontent aussi une manière d’apprendre.": "A few spaces to show what keeps my balance outside code: travel, sport, culture and moments that also say something about how I learn.",
  "Sport": "Sport",
  "Culture": "Culture",
  "Une place pour quelques photos fortes: Chine, Canada, États-Unis, Émirats arabes unis, Europe ou Maghreb.": "A space for a few strong photos: China, Canada, the United States, the United Arab Emirates, Europe or the Maghreb.",
  "Football, basketball, fitness et musculation: des habitudes qui gardent le rythme et la discipline.": "Football, basketball, fitness and strength training: habits that keep rhythm and discipline.",
  "Art, cinéma et musique: des repères personnels qui ajoutent de la curiosité au profil technique.": "Art, cinema and music: personal references that add curiosity to the technical profile."
});

Object.assign(translations.es, {
  "Un aperçu plus personnel": "Una mirada más personal",
  "Quelques espaces pour montrer ce qui nourrit mon équilibre en dehors du code: voyages, sport, culture et moments qui racontent aussi une manière d’apprendre.": "Algunos espacios para mostrar lo que alimenta mi equilibrio fuera del código: viajes, deporte, cultura y momentos que también hablan de mi forma de aprender.",
  "Sport": "Deporte",
  "Culture": "Cultura",
  "Une place pour quelques photos fortes: Chine, Canada, États-Unis, Émirats arabes unis, Europe ou Maghreb.": "Un espacio para algunas fotos potentes: China, Canadá, Estados Unidos, Emiratos Árabes Unidos, Europa o el Magreb.",
  "Football, basketball, fitness et musculation: des habitudes qui gardent le rythme et la discipline.": "Fútbol, baloncesto, fitness y musculación: hábitos que mantienen el ritmo y la disciplina.",
  "Art, cinéma et musique: des repères personnels qui ajoutent de la curiosité au profil technique.": "Arte, cine y música: referencias personales que añaden curiosidad al perfil técnico."
});

Object.assign(translations.zh, {
  "Un aperçu plus personnel": "更个人的一面",
  "Quelques espaces pour montrer ce qui nourrit mon équilibre en dehors du code: voyages, sport, culture et moments qui racontent aussi une manière d’apprendre.": "这里预留几个空间，展示代码之外让我保持平衡的内容：旅行、运动、文化，以及能体现学习方式的瞬间。",
  "Sport": "运动",
  "Culture": "文化",
  "Une place pour quelques photos fortes: Chine, Canada, États-Unis, Émirats arabes unis, Europe ou Maghreb.": "这里可以放几张有代表性的照片：中国、加拿大、美国、阿联酋、欧洲或马格里布。",
  "Football, basketball, fitness et musculation: des habitudes qui gardent le rythme et la discipline.": "足球、篮球、健身和力量训练：这些习惯帮助我保持节奏和自律。",
  "Art, cinéma et musique: des repères personnels qui ajoutent de la curiosité au profil technique.": "艺术、电影和音乐：这些个人兴趣为技术背景增添了好奇心。"
});

const getSavedLanguage = () => localStorage.getItem("portfolio-language") || "fr";
let currentLanguage = getSavedLanguage();

const translateText = (value, lang) => {
  if (lang === "fr") {
    return value;
  }

  return translations[lang]?.[value] || translations.en?.[value] || value;
};

const usesEnglishFallback = () => currentLanguage !== "fr";

const uiMessages = {
  fr: {
    quizComplete: "Quiz terminé",
    wellDone: "Bien joué !",
    quizCompleteBody: "Tu es arrivé au bout du quiz. Tu peux maintenant afficher les informations essentielles du profil.",
    showInfo: "Afficher mes infos",
    chooseAnswer: "Choisis une réponse",
    waitingAnswer: "Le questionnaire avance seulement après ton choix.",
    correct: "Bien vu !",
    wrong: "Pas exactement",
    nextQuestion: "Clique ici pour la question suivante",
    continue: "Clique ici pour continuer"
  },
  en: {
    quizComplete: "Quiz complete",
    wellDone: "Well done!",
    quizCompleteBody: "You reached the end of the quiz. You can now display the essential profile information.",
    showInfo: "Show my info",
    chooseAnswer: "Choose an answer",
    waitingAnswer: "The quiz only moves forward after your choice.",
    correct: "Nice one!",
    wrong: "Not exactly",
    nextQuestion: "Click here for the next question",
    continue: "Click here to continue"
  },
  es: {
    quizComplete: "Quiz terminado",
    wellDone: "¡Bien hecho!",
    quizCompleteBody: "Has llegado al final del quiz. Ahora puedes mostrar la información esencial del perfil.",
    showInfo: "Mostrar mi información",
    chooseAnswer: "Elige una respuesta",
    waitingAnswer: "El quiz avanza solo después de tu elección.",
    correct: "¡Muy bien!",
    wrong: "No exactamente",
    nextQuestion: "Haz clic aquí para la siguiente pregunta",
    continue: "Haz clic aquí para continuar"
  },
  zh: {
    quizComplete: "测验完成",
    wellDone: "做得好！",
    quizCompleteBody: "你已经完成测验。现在可以显示个人关键信息。",
    showInfo: "显示我的信息",
    chooseAnswer: "请选择一个答案",
    waitingAnswer: "选择答案后测验才会继续。",
    correct: "答对了！",
    wrong: "不完全正确",
    nextQuestion: "点击进入下一题",
    continue: "点击继续"
  }
};

const uiText = (key) => uiMessages[currentLanguage]?.[key] || uiMessages.en[key] || uiMessages.fr[key];

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
    <button class="language-trigger" type="button" data-language-trigger aria-expanded="false" aria-label="Changer la langue">
      <img class="language-icon" src="assets/icons/language.svg" alt="" aria-hidden="true">
      <span data-current-language>FR</span>
    </button>
    <div class="language-menu" data-language-menu hidden>
      <button type="button" data-lang="fr">Français</button>
      <button type="button" data-lang="en">English</button>
      <button type="button" data-lang="zh">中文</button>
      <button type="button" data-lang="es">Español</button>
    </div>
  `;
  nav.append(switcher);

  const trigger = switcher.querySelector("[data-language-trigger]");
  const menu = switcher.querySelector("[data-language-menu]");

  trigger.addEventListener("click", () => {
    const isOpen = menu.hidden;
    menu.hidden = !isOpen;
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  switcher.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });
};

const updateLanguageSwitcher = (lang) => {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const currentLabel = document.querySelector("[data-current-language]");
  if (currentLabel) {
    currentLabel.textContent = lang.toUpperCase();
  }
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
  updateMapWidgetsLanguage();

  const openProject = getActiveProject();
  if (openProject && projectOverlay && !projectOverlay.hidden) {
    fillProjectDialog(openProject);
  }

  if (typeof renderQuestion === "function") {
    renderQuestion();
  }
};

const updateDocumentTitle = (lang) => {
  const pageTitles = {
    "index.html": { fr: "Elias Ben-Othman | Portfolio", en: "Elias Ben-Othman | Portfolio", es: "Elias Ben-Othman | Portfolio", zh: "Elias Ben-Othman | 作品集" },
    "projets.html": { fr: "Elias Ben-Othman | Projets", en: "Elias Ben-Othman | Projects", es: "Elias Ben-Othman | Proyectos", zh: "Elias Ben-Othman | 项目" },
    "parcours.html": { fr: "Elias Ben-Othman | Parcours", en: "Elias Ben-Othman | Path", es: "Elias Ben-Othman | Trayectoria", zh: "Elias Ben-Othman | 经历" },
    "contact.html": { fr: "Elias Ben-Othman | Contact", en: "Elias Ben-Othman | Contact", es: "Elias Ben-Othman | Contacto", zh: "Elias Ben-Othman | 联系" }
  };
  const page = location.pathname.split("/").pop() || "index.html";
  document.title = pageTitles[page]?.[lang] || pageTitles[page]?.en || pageTitles["index.html"].en;
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
  const file = lang === "fr" ? cvFiles.fr : cvFiles.en;

  document.querySelectorAll("[data-cv-link]").forEach((link) => {
    link.setAttribute("href", file.href);
    link.setAttribute("download", file.download);
  });
};

createLanguageSwitcher();

const mapLocations = {
  paris8: {
    label: { fr: "Paris 8", en: "Paris 8" },
    title: { fr: "Carte Université Paris 8", en: "Paris 8 University map" },
    caption: {
      fr: "Université Paris 8 · Master Cybersécurité et Sciences des données",
      en: "Paris 8 University · Cybersecurity and Data Science Master's degree"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.766898853589!2d2.3600775!3d48.9445494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e93156f3e13%3A0x80ea890ca4d21f05!2sUniversit%C3%A9%20Paris%208!5e0!3m2!1sfr!2sfr!4v1785290000000!5m2!1sfr!2sfr"
  },
  xidian: {
    label: { fr: "Xidian", en: "Xidian" },
    title: { fr: "Carte Xidian University", en: "Xidian University map" },
    caption: {
      fr: "Xidian University, Xi’an · Stage de recherche 6G/V2X",
      en: "Xidian University, Xi’an · 6G/V2X research internship"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.352925512577!2d108.915!3d34.2304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366377aa0e855555%3A0xf8c08cfb1798f563!2sXidian%20University!5e0!3m2!1sfr!2sfr!4v1785290000001!5m2!1sfr!2sfr"
  },
  iut: {
    label: { fr: "IUT d’Orsay", en: "IUT Orsay" },
    title: { fr: "Carte IUT d’Orsay", en: "IUT Orsay map" },
    caption: {
      fr: "IUT d’Orsay · Formation informatique et parcours scientifique",
      en: "IUT Orsay · Computer science training and scientific path"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.6707449933006!2d2.1679631765556637!3d48.711773871312666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8038e45f7c42fa25%3A0x9e4ad94895fa7e30!2zSVVUIGTigJlPcnNheQ!5e0!3m2!1sfr!2sfr!4v1780352961159!5m2!1sfr!2sfr"
  },
  auxia: {
    label: { fr: "Auxia", en: "Auxia" },
    title: { fr: "Carte Auxia", en: "Auxia map" },
    caption: {
      fr: "Auxia · Alternance et stages en développement logiciel",
      en: "Auxia · Work-study and software development internships"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3154537216433!2d2.3686577!3d48.833121299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67221a7965d47%3A0xa3ad93d153bcd6f1!2s2%20Rue%20Clisson%2C%2075013%20Paris!5e0!3m2!1sfr!2sfr!4v1780352895001!5m2!1sfr!2sfr"
  },
  lissi: {
    label: { fr: "LISSI", en: "LISSI" },
    title: { fr: "Carte LISSI", en: "LISSI map" },
    caption: {
      fr: "LISSI · Stage laboratoire images, signaux et systèmes intelligents",
      en: "LISSI · Images, signals and intelligent systems laboratory internship"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.266524282921!2d2.3707830895670376!3d48.776801797375064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673f6425dd35f%3A0x4192bace2d95fbaa!2sLaboratoire%20Images%2C%20Signaux%20Et%20Syst%C3%A8mes%20Intel...!5e0!3m2!1sfr!2sfr!4v1780352929445!5m2!1sfr!2sfr"
  },
  monoprix: {
    label: { fr: "Monoprix", en: "Monoprix" },
    title: { fr: "Carte Monoprix Antony", en: "Monoprix Antony map" },
    caption: {
      fr: "Monoprix Antony · Expérience employé polyvalent",
      en: "Monoprix Antony · Versatile employee experience"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.469123087246!2d2.3010546765579565!3d48.753836971318165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67719cd501831%3A0x47e82fe6cf803031!2sMONOPRIX!5e0!3m2!1sfr!2sfr!4v1780352989557!5m2!1sfr!2sfr"
  },
  paul: {
    label: { fr: "Paul", en: "Paul" },
    title: { fr: "Carte Paul Antony", en: "Paul Antony map" },
    caption: {
      fr: "Paul Antony · Stage d’observation",
      en: "Paul Antony · Observation internship"
    },
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.501144961851!2d2.3028933765579533!3d48.75322537131813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67719a848275d%3A0xacfc6746452f42bb!2sPAUL!5e0!3m2!1sfr!2sfr!4v1780353010158!5m2!1sfr!2sfr"
  }
};

Object.assign(mapLocations.paris8.title, { es: "Mapa Universidad Paris 8", zh: "巴黎第八大学地图" });
Object.assign(mapLocations.paris8.label, { es: "Paris 8", zh: "巴黎第八大学" });
Object.assign(mapLocations.paris8.caption, { es: "Universidad Paris 8 · Máster Ciberseguridad y Ciencias de Datos", zh: "巴黎第八大学 · 网络安全与数据科学硕士" });
Object.assign(mapLocations.xidian.title, { es: "Mapa Xidian University", zh: "西安电子科技大学地图" });
Object.assign(mapLocations.xidian.label, { es: "Xidian University", zh: "西安电子科技大学" });
Object.assign(mapLocations.xidian.caption, { es: "Xidian University, Xi’an · Práctica de investigación 6G/V2X", zh: "西安电子科技大学，西安 · 6G/V2X 研究实习" });
Object.assign(mapLocations.iut.title, { es: "Mapa IUT d’Orsay", zh: "奥赛 IUT 地图" });
Object.assign(mapLocations.iut.label, { es: "IUT d’Orsay", zh: "奥赛 IUT" });
Object.assign(mapLocations.iut.caption, { es: "IUT d’Orsay · Formación informática y trayectoria científica", zh: "奥赛 IUT · 计算机学习与科学背景" });
Object.assign(mapLocations.auxia.title, { es: "Mapa Auxia", zh: "Auxia 地图" });
Object.assign(mapLocations.auxia.label, { es: "Auxia", zh: "Auxia" });
Object.assign(mapLocations.auxia.caption, { es: "Auxia · Alternancia y prácticas en desarrollo de software", zh: "Auxia · 软件开发工读与实习" });
Object.assign(mapLocations.lissi.title, { es: "Mapa LISSI", zh: "LISSI 地图" });
Object.assign(mapLocations.lissi.label, { es: "LISSI", zh: "LISSI" });
Object.assign(mapLocations.lissi.caption, { es: "LISSI · Práctica en laboratorio de imágenes, señales y sistemas inteligentes", zh: "LISSI · 图像、信号与智能系统实验室实习" });

const mapWidgets = document.querySelectorAll("[data-map-widget]");

const setMapLocation = (widget, mapId) => {
  const location = mapLocations[mapId] || mapLocations.paris8;
  const frame = widget.querySelector("[data-map-frame]");
  const caption = widget.querySelector("[data-map-caption]");

  widget.querySelectorAll("[data-map]").forEach((button) => {
    const isActive = button.dataset.map === mapId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (frame) {
    frame.src = location.src;
    frame.title = location.title[currentLanguage] || location.title.en || location.title.fr;
  }

  if (caption) {
    caption.textContent = location.caption[currentLanguage] || location.caption.en || location.caption.fr;
  }
};

const updateMapWidgetsLanguage = () => {
  mapWidgets.forEach((widget) => {
    widget.querySelectorAll("[data-map]").forEach((button) => {
      const location = mapLocations[button.dataset.map];
      if (location) {
        const title = button.querySelector("strong");
        if (title) {
          title.textContent = location.label[currentLanguage] || location.label.en || location.label.fr;
        } else {
          button.textContent = location.label[currentLanguage] || location.label.en || location.label.fr;
        }
      }
    });

    const activeMap = widget.querySelector("[data-map].is-active")?.dataset.map || "paris8";
    setMapLocation(widget, activeMap);
  });
};

mapWidgets.forEach((widget) => {
  widget.querySelectorAll("[data-map]").forEach((button) => {
    button.addEventListener("click", () => {
      setMapLocation(widget, button.dataset.map);
    });
  });
});

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



const projectDetails = (() => {
  const dataNode = document.querySelector("[data-project-details]");
  if (!dataNode) {
    return {};
  }

  try {
    return JSON.parse(dataNode.textContent);
  } catch (error) {
    console.error("Unable to parse project details", error);
    return {};
  }
})();


const localizedProjectDetails = {
  bridge: {
    es: {
      meta: "2025-2026 · BUT 3",
      title: "Detección automática de cartas de bridge",
      summary: "Desarrollo de un sistema que combina visión por computadora, inteligencia artificial y procesamiento de vídeo para grabar y analizar partidas de bridge según la necesidad de un cliente.",
      context: "El proyecto responde a una necesidad concreta: automatizar la observación de una partida de bridge para reconocer las cartas jugadas, conservar la información importante y facilitar el análisis posterior.",
      role: "Participación en el desarrollo del sistema, la lógica de procesamiento de vídeo, la organización de datos y la interfaz de restitución.",
      approach: ["Uso de Python para procesar flujos de vídeo y preparar imágenes explotables.", "Integración de mecanismos de IA y visión por computadora para reconocer las cartas.", "Interfaz HTML para mostrar resultados y base de datos para registrar la información detectada."],
      result: "Un proyecto completo que conecta adquisición, análisis, almacenamiento y visualización de datos.",
      tags: ["Python", "IA", "Vídeo", "HTML", "Base de datos"]
    },
    zh: {
      meta: "2025-2026 · BUT 3",
      title: "桥牌纸牌自动识别",
      summary: "开发一个结合计算机视觉、人工智能和视频处理的系统，用于根据客户需求记录并分析桥牌牌局。",
      context: "该项目回应一个实际需求：自动观察桥牌牌局，识别已出的牌，保存重要信息，并方便赛后分析。",
      role: "参与系统开发、视频处理逻辑、数据组织和结果展示界面。",
      approach: ["使用 Python 处理视频流并准备可分析图像。", "集成人工智能和计算机视觉机制来识别纸牌。", "使用 HTML 界面显示结果，并用数据库记录检测到的信息。"],
      result: "一个连接采集、分析、存储和数据可视化的完整项目。",
      tags: ["Python", "AI", "视频", "HTML", "数据库"]
    }
  },
  jo2024: {
    es: {
      meta: "2024-2025 · BUT 2",
      title: "Aplicación de gestión de los Juegos Olímpicos 2024",
      summary: "Diseño y desarrollo de una aplicación Java con funciones de planificación, gestión de datos y organización de proyecto informático.",
      context: "El objetivo era estructurar una aplicación capaz de organizar datos y flujos relacionados con un evento complejo.",
      role: "Desarrollo de funcionalidades, organización de clases, modelado de datos y participación en la gestión del proyecto.",
      approach: ["Diseño de una arquitectura Java clara y mantenible.", "Implementación de funcionalidades de gestión y planificación.", "Trabajo en equipo con seguimiento de tareas y entregables."],
      result: "Una aplicación funcional que reforzó la práctica de Java, la arquitectura y la gestión de proyecto.",
      tags: ["Java", "Gestión", "Proyecto"]
    },
    zh: {
      meta: "2024-2025 · BUT 2",
      title: "2024 奥运会管理应用",
      summary: "设计并开发一个 Java 应用，包含规划、数据管理和信息项目组织功能。",
      context: "目标是构建一个能够组织复杂活动相关数据和流程的应用。",
      role: "开发功能、组织类结构、建模数据并参与项目管理。",
      approach: ["设计清晰且可维护的 Java 架构。", "实现管理和规划功能。", "团队协作，跟踪任务和交付物。"],
      result: "一个功能性应用，加强了 Java、架构和项目管理实践。",
      tags: ["Java", "管理", "项目"]
    }
  },
  vote: {
    es: {
      meta: "2024-2025 · BUT 2",
      title: "Sitio de voto sobre propuestas de ley",
      summary: "Sitio web conectado a una base de datos que permite votar, consultar propuestas e interactuar con los datos.",
      context: "El proyecto se centró en crear una aplicación web dinámica con almacenamiento persistente.",
      role: "Desarrollo de páginas, formularios, consultas SQL y lógica de interacción con la base de datos.",
      approach: ["Estructuración de la interfaz en HTML/CSS.", "Uso de PHP para la lógica del servidor.", "Diseño de consultas SQL para consultar y guardar votos."],
      result: "Un sitio funcional que conecta interfaz, lógica backend y base de datos.",
      tags: ["PHP", "HTML", "SQL"]
    },
    zh: {
      meta: "2024-2025 · BUT 2",
      title: "法律提案投票网站",
      summary: "一个连接数据库的网站，用户可以投票、查看提案并与数据交互。",
      context: "项目重点是创建一个带持久化存储的动态 Web 应用。",
      role: "开发页面、表单、SQL 查询以及与数据库交互的逻辑。",
      approach: ["用 HTML/CSS 构建界面。", "使用 PHP 实现服务器端逻辑。", "设计 SQL 查询以读取并保存投票。"],
      result: "一个连接界面、后端逻辑和数据库的功能性网站。",
      tags: ["PHP", "HTML", "SQL"]
    }
  },
  raspberry: {
    es: {
      meta: "2023-2024 · BUT 1",
      title: "Miniordenador Raspberry Pi",
      summary: "Instalación, configuración y optimización de un miniordenador con un enfoque concreto orientado al uso.",
      context: "El proyecto permitió trabajar sobre un entorno sistema real y comprender mejor la configuración de una máquina.",
      role: "Instalación, configuración, pruebas y documentación de los pasos realizados.",
      approach: ["Preparación del sistema y de las herramientas necesarias.", "Configuración progresiva según las necesidades del proyecto.", "Pruebas para validar el funcionamiento final."],
      result: "Un entorno funcional y una práctica concreta de sistemas y arquitectura.",
      tags: ["Raspberry Pi", "Sistema", "Arquitectura"]
    },
    zh: {
      meta: "2023-2024 · BUT 1",
      title: "Raspberry Pi 微型计算机",
      summary: "安装、配置并优化一台微型计算机，采用面向实际用途的方法。",
      context: "该项目让我在真实系统环境中工作，并更好地理解机器配置。",
      role: "负责安装、配置、测试以及记录实施步骤。",
      approach: ["准备系统和所需工具。", "根据项目需求逐步配置。", "通过测试验证最终运行效果。"],
      result: "一个可用环境，以及系统和架构方面的具体实践。",
      tags: ["Raspberry Pi", "系统", "架构"]
    }
  },
  database: {
    es: {
      meta: "2023-2024 · BUT 1",
      title: "Base de datos cliente",
      summary: "Modelado y uso de una base que simula interacciones cliente dentro de una empresa.",
      context: "El objetivo era aprender a estructurar datos coherentes y explotarlos mediante consultas.",
      role: "Modelado, escritura de consultas SQL y análisis de los resultados obtenidos.",
      approach: ["Definición de tablas y relaciones.", "Creación de consultas para responder a necesidades concretas.", "Verificación de la coherencia de los datos."],
      result: "Una base de datos clara y explotable para analizar información cliente.",
      tags: ["SQL", "Modelado", "Consultas"]
    },
    zh: {
      meta: "2023-2024 · BUT 1",
      title: "客户数据库",
      summary: "建模并使用一个模拟企业客户交互的数据库。",
      context: "目标是学习如何构建一致的数据，并通过查询加以利用。",
      role: "进行建模、编写 SQL 查询并分析结果。",
      approach: ["定义表和关系。", "创建查询以回应具体需求。", "检查数据一致性。"],
      result: "一个清晰且可用于分析客户信息的数据库。",
      tags: ["SQL", "建模", "查询"]
    }
  },
  school: {
    es: {
      meta: "2023-2024 · BUT 1",
      title: "Sitio web para una escuela ficticia",
      summary: "Creación de un sitio HTML/CSS con estructuración del contenido, diseño de interfaz y adaptación a las necesidades de un centro ficticio.",
      context: "El proyecto permitió practicar las bases de una interfaz web clara y organizada.",
      role: "Estructuración de páginas, integración HTML/CSS y cuidado de la presentación visual.",
      approach: ["Organización del contenido por secciones.", "Creación de estilos CSS coherentes.", "Adaptación de la interfaz a un uso escolar ficticio."],
      result: "Un sitio estático limpio, legible y adaptado al contexto pedido.",
      tags: ["HTML", "CSS", "Interfaz"]
    },
    zh: {
      meta: "2023-2024 · BUT 1",
      title: "虚构学校网站",
      summary: "创建一个 HTML/CSS 网站，包含内容结构、界面设计，并适配虚构学校的需求。",
      context: "该项目用于练习清晰、有组织的 Web 界面基础。",
      role: "组织页面结构、集成 HTML/CSS，并关注视觉呈现。",
      approach: ["按版块组织内容。", "创建一致的 CSS 样式。", "让界面适配虚构学校的使用场景。"],
      result: "一个干净、易读并符合需求的静态网站。",
      tags: ["HTML", "CSS", "界面"]
    }
  }
};

Object.entries(localizedProjectDetails).forEach(([projectId, languages]) => {
  if (projectDetails[projectId]) {
    Object.assign(projectDetails[projectId], languages);
  }
});

const projectOverlay = document.querySelector("[data-project-overlay]");
const projectDialog = document.querySelector(".project-dialog");
const projectDialogCard = document.querySelector("[data-project-dialog-card]");
const projectClose = document.querySelector("[data-project-close]");
const projectInteractiveElements = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";
let activeProjectCard = null;
let projectAnimationFrame = 0;

const getActiveProject = () => {
  if (!activeProjectCard) {
    return null;
  }

  return projectDetails[activeProjectCard.dataset.project] || null;
};

const fillProjectDialog = (project) => {
  const data = project[currentLanguage] || project.en || project.fr;
  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  setText("[data-project-kicker]", data.meta);
  setText("[data-project-title]", data.title);
  setText("[data-project-summary]", data.summary);
  setText("[data-project-context]", data.context);
  setText("[data-project-role]", data.role);
  setText("[data-project-result]", data.result);

  const approach = document.querySelector("[data-project-approach]");
  if (approach) {
    approach.replaceChildren(
      ...data.approach.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      })
    );
  }

  const tags = document.querySelector("[data-project-tags]");
  if (tags) {
    tags.replaceChildren(
      ...data.tags.map((tag) => {
        const item = document.createElement("span");
        item.className = "tag";
        item.textContent = tag;
        return item;
      })
    );
  }
};

const syncProjectCardState = (openedCard = null) => {
  document.querySelectorAll("[data-project]").forEach((card) => {
    const isOpen = card === openedCard;
    card.setAttribute("aria-expanded", String(isOpen));
  });
};

const setProjectAccent = (card) => {
  const accentClasses = ["accent-green", "accent-blue", "accent-coral", "accent-gold"];
  projectDialogCard?.classList.remove(...accentClasses);

  const accent = accentClasses.find((item) => card.classList.contains(item));
  if (accent) {
    projectDialogCard?.classList.add(accent);
  }
};

const openProjectDialog = (card) => {
  if (!projectOverlay || !projectDialog) {
    return;
  }

  const project = projectDetails[card.dataset.project];
  if (!project) {
    return;
  }

  activeProjectCard = card;
  fillProjectDialog(project);
  setProjectAccent(card);
  syncProjectCardState(card);
  projectOverlay.hidden = false;
  projectOverlay.classList.remove("is-opening");

  cancelAnimationFrame(projectAnimationFrame);
  projectAnimationFrame = requestAnimationFrame(() => {
    if (!projectOverlay.hidden) {
      projectOverlay.classList.add("is-opening");
    }
  });

  document.body.classList.add("project-dialog-open");
  projectDialog.focus({ preventScroll: true });
};

const closeProjectDialog = () => {
  if (!projectOverlay || projectOverlay.hidden) {
    return;
  }

  cancelAnimationFrame(projectAnimationFrame);
  projectOverlay.hidden = true;
  projectOverlay.classList.remove("is-opening");
  document.body.classList.remove("project-dialog-open");
  syncProjectCardState();
  activeProjectCard?.focus();
  activeProjectCard = null;
};

const keepProjectFocusInside = (event) => {
  if (!projectDialog || !projectOverlay || projectOverlay.hidden || event.key !== "Tab") {
    return;
  }

  const focusable = Array.from(projectDialog.querySelectorAll(projectInteractiveElements))
    .filter((element) => element.offsetParent !== null);

  if (!focusable.length) {
    event.preventDefault();
    projectDialog.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => openProjectDialog(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectDialog(card);
    }
  });
});

projectClose?.addEventListener("click", closeProjectDialog);
projectOverlay?.addEventListener("click", (event) => {
  if (event.target === projectOverlay) {
    closeProjectDialog();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectDialog();
    return;
  }

  keepProjectFocusInside(event);
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
  ],
  es: [
    {
      question: "¿Quién es Elias cuando no programa?",
      options: ["Un perfil de deporte, viajes y cultura", "Un coleccionista de teclados submarinos", "Un entrenador oficial de píxeles"],
      correct: 0,
      answer: "Un estudiante curioso, deportista, atraído por los viajes, el arte, el cine y la música. Esta mezcla le da un perfil técnico, pero no encerrado solo en la técnica."
    },
    {
      question: "¿Qué proyecto resume mejor su año actual?",
      options: ["Detección automática de cartas de bridge", "Una máquina que predice el clima de los calcetines", "Un simulador de siesta en Java"],
      correct: 0,
      answer: "Un sistema de detección de cartas que combina visión por computadora, inteligencia artificial, procesamiento de vídeo, interfaz HTML y base de datos."
    },
    {
      question: "¿Qué experiencia profesional reforzó su lado práctico?",
      options: ["Prácticas técnicas y experiencia de campo", "Embajador de la tecla Enter", "Responsable de pausas de café imaginarias"],
      correct: 0,
      answer: "Su trayectoria reúne una práctica de enero a mayo de 2026 en Auxia, una práctica en LISSI, una primera práctica en Auxia, y experiencias en Monoprix y Paul."
    },
    {
      question: "¿Con qué bases técnicas se puede contar?",
      options: ["Python, C++, SQL, HTML/CSS, Java, PHP", "HTML pintado a mano", "Una hoja de cálculo mágica que programa sola"],
      correct: 0,
      answer: "Bases variadas: Python, C++, SQL, HTML/CSS, Java, PHP, sistemas, arquitectura y gestión de bases de datos."
    },
    {
      question: "¿Qué busca mostrar este portfolio?",
      options: ["Una progresión sólida y humana", "Una enciclopedia de bugs famosos", "Un museo del botón beige"],
      correct: 0,
      answer: "Una progresión: aprender, construir, comprender los usos y hacer los proyectos más claros para quienes los descubren."
    }
  ],
  zh: [
    {
      question: "Elias 不写代码时是什么样的人？",
      options: ["热爱运动、旅行和文化", "水下键盘收藏家", "官方像素训练师"],
      correct: 0,
      answer: "他是一个好奇、爱运动、喜欢旅行、艺术、电影和音乐的学生。这让他的技术背景更开放，而不是只局限在技术里。"
    },
    {
      question: "哪个项目最能代表他现在这一年？",
      options: ["桥牌纸牌自动识别", "预测袜子天气的机器", "Java 午睡模拟器"],
      correct: 0,
      answer: "一个结合计算机视觉、人工智能、视频处理、HTML 界面和数据库的纸牌识别系统。"
    },
    {
      question: "哪段经历加强了他的实践能力？",
      options: ["技术实习和实际工作经验", "回车键大使", "想象咖啡休息负责人"],
      correct: 0,
      answer: "他的经历包括 2026 年 1 月到 5 月在 Auxia 的实习、LISSI 实习、Auxia 的第一次实习，以及 Monoprix 和 Paul 的实际工作经验。"
    },
    {
      question: "可以依靠哪些技术基础？",
      options: ["Python、C++、SQL、HTML/CSS、Java、PHP", "手绘 HTML", "会自己写代码的神奇表格"],
      correct: 0,
      answer: "多样的基础：Python、C++、SQL、HTML/CSS、Java、PHP、系统、架构和数据库管理。"
    },
    {
      question: "这个作品集想展示什么？",
      options: ["扎实且有人味的成长", "著名 bug 百科全书", "米色按钮博物馆"],
      correct: 0,
      answer: "展示一种成长：学习、构建、理解用途，并让项目对发现它们的人更清晰。"
    }
  ]
};

const getQuizQuestions = () => quizQuestionsByLanguage[currentLanguage] || quizQuestionsByLanguage.en || quizQuestionsByLanguage.fr;

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
  const quizShell = quizRoot.querySelector("[data-quiz-shell]");
  const profileSummary = quizRoot.querySelector("[data-profile-summary]");
  const startQuizButton = quizRoot.querySelector("[data-start-quiz]");
  const showProfileButton = quizRoot.querySelector("[data-show-profile]");
  let current = 0;
  let isLocked = false;
  let quizIsComplete = false;

  const revealProfileSummary = () => {
    if (quizShell) {
      quizShell.hidden = true;
    }
    if (profileSummary) {
      profileSummary.hidden = false;
    }
  };

  const showQuizComplete = () => {
    quizIsComplete = true;
    isLocked = true;
    optionsBox.innerHTML = "";
    questionText.textContent = uiText("quizComplete");
    feedbackTitle.textContent = uiText("wellDone");
    answerText.textContent = uiText("quizCompleteBody");
    answerPanel.classList.remove("is-wrong");
    answerPanel.classList.add("is-revealed", "is-correct");
    continueButton.hidden = false;
    continueButton.classList.remove("is-wrong");
    continueButton.classList.add("is-correct");
    continueLabel.textContent = uiText("showInfo");
    progress.style.width = "100%";
  };

  const goNext = () => {
    if (quizIsComplete) {
      revealProfileSummary();
      return;
    }

    current += 1;
    if (current >= getQuizQuestions().length) {
      showQuizComplete();
      return;
    }

    renderQuestion();
  };

  renderQuestion = () => {
    const questions = getQuizQuestions();
    if (current >= questions.length) {
      current = 0;
    }

    const item = questions[current];
    quizIsComplete = false;
    isLocked = false;
    questionText.textContent = item.question;
    feedbackTitle.textContent = uiText("chooseAnswer");
    answerText.textContent = uiText("waitingAnswer");
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
          ? uiText("correct")
          : uiText("wrong");
        answerText.textContent = item.answer;
        continueLabel.textContent = isCorrect
          ? uiText("nextQuestion")
          : uiText("continue");
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

  startQuizButton?.addEventListener("click", () => {
    if (quizShell) {
      quizShell.hidden = false;
    }
    if (profileSummary) {
      profileSummary.hidden = true;
    }
    current = 0;
    quizIsComplete = false;
    renderQuestion();
  });

  showProfileButton?.addEventListener("click", revealProfileSummary);
  continueButton.addEventListener("click", goNext);
  renderQuestion();
}

setLanguage(currentLanguage);

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = contactForm.querySelector("[data-contact-status]");
  const submitButton = contactForm.querySelector("button[type='submit']");
  const encodeFormData = (data) => new URLSearchParams(data).toString();

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    if (status) {
      status.classList.remove("is-error");
      status.textContent = "";
    }

    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData)
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      contactForm.reset();

      if (status) {
        status.textContent = translateText("Message envoyé, merci pour votre prise de contact.", currentLanguage);
      }
    } catch (error) {
      if (status) {
        status.classList.add("is-error");
        status.textContent = translateText("Envoi impossible pour le moment. Vous pouvez me contacter directement par email.", currentLanguage);
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}

const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}
