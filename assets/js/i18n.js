/**
 * i18n.js - Dictionnaire des libellés statiques de l'interface.
 * Les contenus du CV vivent dans data.js ; ici, uniquement le chrome.
 */
window.I18N = {
  fr: {
    skip: "Aller au contenu principal",
    brandRole: "Full Stack Senior",
    navAbout: "À propos", navSkills: "Compétences", navExperience: "Parcours",
    navProjects: "Projets", navEducation: "Formation", navContact: "Contact",

    heroAvailable: "Disponible en remote ou sur site",
    heroHi: "Bonjour, je suis",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",

    aboutTitle: "Ingénieur logiciel, orienté production",
    strengthsTitle: "Ce que j'apporte",
    languagesTitle: "Langues",

    skillsTitle: "Une stack complète, du schéma SQL au pipeline CI/CD",
    skillsSub: "Back-end, front-end, données spatiales et exploitation : je couvre la chaîne entière.",

    expTitle: "Expérience professionnelle",
    expSub: "Du ministère à l'entreprise privée, en passant par le conseil international.",

    projTitle: "Plateformes réalisées",
    projSub: "Des systèmes utilisés au quotidien par des administrations et leurs usagers.",
    projVisit: "Voir la plateforme",
    projFeatured: "Référence",

    eduTitle: "Formation & certifications",
    eduCredential: "Vérifier le certificat",

    contactTitle: "Parlons de votre projet",
    contactSub: "Une plateforme à concevoir, à reprendre ou à fiabiliser ? Écrivez-moi, je réponds sous 24 h.",
    ccEmail: "Email", ccPhone: "Téléphone",
    formName: "Nom complet", formEmail: "Email", formSubject: "Sujet", formMessage: "Message",
    formSend: "Envoyer le message",
    formNote: "Le formulaire ouvre votre client mail avec le message pré-rempli.",
    formErrName: "Merci d'indiquer votre nom.",
    formErrEmail: "Adresse email invalide.",
    formErrMessage: "Merci de décrire votre besoin.",
    formOk: "Votre client mail vient de s'ouvrir. À très vite !",

    footerBuilt: "Conçu et développé avec soin",
    codeFocus: "'plateformes critiques'",

    docTitle: "Issa BOLY - Développeur Full Stack Senior",
    docDesc: "Issa BOLY - Développeur Full Stack Senior Web & Mobile, 6+ ans d'expérience. Java/Spring Boot, Python/Django, React, Angular, PostgreSQL/PostGIS, AWS & DevOps.",
    menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu",
    themeToggle: "Changer de thème", langToggle: "Switch to English"
  },

  en: {
    skip: "Skip to main content",
    brandRole: "Senior Full Stack",
    navAbout: "About", navSkills: "Skills", navExperience: "Experience",
    navProjects: "Projects", navEducation: "Education", navContact: "Contact",

    heroAvailable: "Available remotely or on-site",
    heroHi: "Hi, I'm",
    ctaProjects: "View my work",
    ctaContact: "Get in touch",

    aboutTitle: "Software engineer, production-minded",
    strengthsTitle: "What I bring",
    languagesTitle: "Languages",

    skillsTitle: "A full stack, from the SQL schema to the CI/CD pipeline",
    skillsSub: "Back-end, front-end, spatial data and operations: I cover the whole chain.",

    expTitle: "Professional experience",
    expSub: "From government IT to private companies, including international consulting.",

    projTitle: "Platforms delivered",
    projSub: "Systems used every day by public administrations and their citizens.",
    projVisit: "Visit the platform",
    projFeatured: "Flagship",

    eduTitle: "Education & certifications",
    eduCredential: "Verify credential",

    contactTitle: "Let's talk about your project",
    contactSub: "A platform to design, take over or make reliable? Drop me a line - I reply within 24 h.",
    ccEmail: "Email", ccPhone: "Phone",
    formName: "Full name", formEmail: "Email", formSubject: "Subject", formMessage: "Message",
    formSend: "Send message",
    formNote: "The form opens your mail client with the message pre-filled.",
    formErrName: "Please enter your name.",
    formErrEmail: "Invalid email address.",
    formErrMessage: "Please describe what you need.",
    formOk: "Your mail client just opened. Talk soon!",

    footerBuilt: "Designed and built with care",
    codeFocus: "'mission-critical platforms'",

    docTitle: "Issa BOLY - Senior Full Stack Developer",
    docDesc: "Issa BOLY - Senior Full Stack Web & Mobile Developer, 6+ years of experience. Java/Spring Boot, Python/Django, React, Angular, PostgreSQL/PostGIS, AWS & DevOps.",
    menuOpen: "Open menu", menuClose: "Close menu",
    themeToggle: "Toggle theme", langToggle: "Passer en français"
  }
};

/** Placeholders des champs du formulaire, traduits séparément. */
window.I18N_PLACEHOLDERS = {
  fr: { "cf-name":"Aminata Ouédraogo", "cf-email":"vous@entreprise.com",
        "cf-subject":"Refonte d'une plateforme métier", "cf-message":"Décrivez votre besoin en quelques lignes…" },
  en: { "cf-name":"Jane Doe", "cf-email":"you@company.com",
        "cf-subject":"Rebuilding a business platform", "cf-message":"Describe your need in a few lines…" }
};
