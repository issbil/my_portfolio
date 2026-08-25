/**
 * data.js — Source unique de vérité du portfolio.
 * Toutes les données du CV sont ici, en français et en anglais.
 * Pour mettre à jour le site, modifiez uniquement ce fichier.
 */
window.CV_DATA = {

  /* ------------------------------------------------------------------ */
  /*  Identité                                                           */
  /* ------------------------------------------------------------------ */
  identity: {
    firstName: "Issa",
    lastName: "BOLY",
    initials: "IB",
    email: "issaboly@gmail.com",
    phone: "+226 74 84 87 15",
    phoneAlt: "+226 70 84 85 82",
    location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
    availability: {
      fr: "Disponible en remote ou sur site",
      en: "Available remotely or on-site"
    },
    linkedin: "https://www.linkedin.com/in/issa-boly-8957b8116",
    github: "https://github.com/issbil",
    cv: "https://cvdesignr.com/p/670a863d16d4f",
    title: {
      fr: "Développeur Full Stack Senior — Web & Mobile",
      en: "Senior Full Stack Developer — Web & Mobile"
    },
    tagline: {
      fr: "Je conçois et j'opère des plateformes critiques à l'échelle nationale : examens et concours, foncier rural, bourses, géomatique.",
      en: "I design and operate nation-scale mission-critical platforms: exams and competitive entrance tests, rural land registry, scholarships, geomatics."
    },
    summary: {
      fr: [
        "Développeur Full Stack Web et mobile avec plus de 6 ans d'expérience, passionné par la mise en œuvre et l'administration d'applications informatiques.",
        "J'ai piloté des plateformes de grande envergure à forte criticité — systèmes nationaux de gestion des examens et concours, observatoire urbain national, plateformes de gestion foncière financées par la Banque Mondiale — de l'analyse du besoin jusqu'à l'exploitation en production.",
        "Rigueur, sens de la responsabilité et capacité d'analyse : j'apporte des solutions rapides et optimales dans des contextes variés, et je forme les développeurs juniors aux bonnes pratiques."
      ],
      en: [
        "Full Stack Web and Mobile Developer with 6+ years of experience, passionate about building and operating enterprise software.",
        "I have led large-scale, mission-critical platforms — national exam and competitive-test management systems, a national urban observatory, World Bank-funded land registry platforms — from requirements analysis all the way to production operations.",
        "Rigor, ownership and analytical thinking: I deliver fast, optimal solutions across diverse contexts, and I mentor junior developers on engineering best practices."
      ]
    },
    stats: [
      { value: "6+",  label: { fr: "ans d'expérience",        en: "years of experience" } },
      { value: "12+", label: { fr: "plateformes livrées",     en: "platforms delivered" } },
      { value: "3",   label: { fr: "pays couverts",           en: "countries served" } },
      { value: "2",   label: { fr: "certifications Udacity",  en: "Udacity certifications" } }
    ]
  },

  /* ------------------------------------------------------------------ */
  /*  Compétences                                                        */
  /* ------------------------------------------------------------------ */
  skills: [
    {
      icon: "code",
      name: { fr: "Langages & Frameworks", en: "Languages & Frameworks" },
      note: {
        fr: "Back-end orienté domaine, front-end composants.",
        en: "Domain-driven back-end, component-based front-end."
      },
      items: ["Java / Spring Boot", "Python / Django", "Python / Flask", "PHP / Laravel",
              "Node.js", "React", "Angular", "JavaScript / TypeScript"]
    },
    {
      icon: "database",
      name: { fr: "Bases de données", en: "Databases" },
      note: {
        fr: "Modélisation, optimisation et administration de bases nationales.",
        en: "Modelling, tuning and administration of national-scale databases."
      },
      items: ["PostgreSQL", "PostGIS", "MySQL", "SQL Server", "SQLite", "MongoDB"]
    },
    {
      icon: "api",
      name: { fr: "APIs & Intégration", en: "APIs & Integration" },
      note: {
        fr: "APIs REST sécurisées par JWT, garantissant authenticité et intégrité des requêtes.",
        en: "REST APIs secured with JWT, guaranteeing request authenticity and integrity."
      },
      items: ["REST", "JWT / OAuth2", "Django REST Framework", "Spring Boot REST", "Flask", "Swagger / OpenAPI"]
    },
    {
      icon: "cloud",
      name: { fr: "Cloud & DevOps", en: "Cloud & DevOps" },
      note: {
        fr: "Chaînes CI/CD automatisées : déploiements accélérés, qualité et fiabilité du code garanties.",
        en: "Automated CI/CD pipelines: faster deployments with guaranteed code quality and reliability."
      },
      items: ["AWS", "EKS / Kubernetes", "Docker", "Jenkins", "CI/CD", "Git & GitHub", "Firebase", "Heroku", "OVH", "LWS"]
    },
    {
      icon: "map",
      name: { fr: "Géomatique / SIG", en: "Geomatics / GIS" },
      note: {
        fr: "Couche spatiale PostGIS pour la géolocalisation de sites : établissements, écoles, centres de santé, zones traitées.",
        en: "PostGIS spatial layer for site geolocation: institutions, schools, health centres, treated areas."
      },
      items: ["PostGIS", "OpenLayers", "Leaflet", "GeoJSON", "Google Maps"]
    },
    {
      icon: "spark",
      name: { fr: "Data, IA & Réseaux", en: "Data, AI & Networking" },
      note: {
        fr: "Fondations Machine Learning AWS et configuration d'équipements d'interconnexion.",
        en: "AWS Machine Learning foundations and network interconnection equipment setup."
      },
      items: ["AWS Machine Learning", { fr: "Analytics & tableaux de bord", en: "Analytics & dashboards" }, "StatEduc", { fr: "Configuration réseau", en: "Network configuration" }]
    }
  ],

  /* ------------------------------------------------------------------ */
  /*  Expériences professionnelles                                       */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      role: { fr: "Développeur Full Stack Senior", en: "Senior Full Stack Developer" },
      company: "EXCELIS-SA",
      location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
      period: { fr: "Mai 2026 — Aujourd'hui", en: "May 2026 — Present" },
      current: true,
      type: { fr: "Temps plein", en: "Full-time" },
      bullets: {
        fr: [
          "Conception et mise en œuvre d'architectures logicielles robustes et évolutives.",
          "Développement de nouvelles fonctionnalités pour améliorer l'expérience utilisateur et la satisfaction client.",
          "Collaboration avec les équipes marketing pour intégrer les outils d'analyse et affiner la prise de décision.",
          "Formation des développeurs juniors aux bonnes pratiques de développement et aux technologies émergentes.",
          "Rédaction des manuels utilisateurs des plateformes."
        ],
        en: [
          "Designing and implementing robust, scalable software architectures.",
          "Building new features to improve user experience and customer satisfaction.",
          "Working with marketing teams to integrate analytics tooling and sharpen decision-making.",
          "Mentoring junior developers on engineering best practices and emerging technologies.",
          "Writing the platforms' end-user manuals."
        ]
      },
      stack: [{ fr: "Architecture", en: "Architecture" }, "Java", "React", "PostgreSQL", "CI/CD", { fr: "Mentorat", en: "Mentoring" }]
    },
    {
      role: { fr: "Pull Request Writer — Entraînement de modèles IA", en: "Pull Request Writer — AI Model Training" },
      company: "Revelo (USA)",
      location: { fr: "Remote (Freelance)", en: "Remote (Freelance)" },
      period: { fr: "Novembre 2025 — Janvier 2026", en: "November 2025 — January 2026" },
      type: { fr: "Freelance", en: "Freelance" },
      bullets: {
        fr: [
          "Participation à l'entraînement des modèles d'IA d'Anthropic.",
          "Préparation de bases de code comportant des problèmes réels à résoudre, puis soumission aux modèles.",
          "Vérification des solutions produites et sélection des meilleures pour la poursuite de l'entraînement."
        ],
        en: [
          "Contributed to the training of Anthropic's AI models.",
          "Prepared code bases containing real-world issues to solve, then submitted them to the models.",
          "Reviewed the generated solutions and selected the best ones to feed back into training."
        ]
      },
      stack: ["Code review", "Git", "Python", "JavaScript", "LLM evaluation"]
    },
    {
      role: { fr: "Ingénieur Logiciel — Direction des Systèmes d'Information", en: "Software Engineer — Information Systems Department" },
      company: "DSI / MESFPT",
      location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
      period: { fr: "Octobre 2022 — Avril 2026", en: "October 2022 — April 2026" },
      type: { fr: "Temps plein", en: "Full-time" },
      bullets: {
        fr: [
          "Analyse, conception, développement et déploiement des applications métier du ministère.",
          "Gestion des systèmes nationaux de gestion des examens et concours scolaires.",
          "Administration des bases de données nationales des examens et concours.",
          "Dématérialisation des procédures des services du ministère.",
          "Maintenance évolutive et corrective des applications métier existantes.",
          "Analyse des besoins et des contraintes pour proposer des solutions sur mesure.",
          "Gestion des situations d'urgence avec calme et respect des délais.",
          "Rédaction des rapports d'activités et participation active aux projets d'équipe."
        ],
        en: [
          "Analysis, design, development and deployment of the ministry's business applications.",
          "Ownership of the national school exam and competitive-test management systems.",
          "Administration of the national exam and competitive-test databases.",
          "Digitalisation of the ministry's administrative procedures.",
          "Corrective and evolutive maintenance of existing business applications.",
          "Requirements and constraints analysis to deliver tailored solutions.",
          "Handling emergency situations calmly while meeting deadlines.",
          "Writing activity reports and actively contributing to team projects."
        ]
      },
      stack: ["Django", "Spring Boot", "PostgreSQL", "Docker", "Jenkins", "Linux"]
    },
    {
      role: { fr: "Consultant individuel — UNESCO", en: "Individual Consultant — UNESCO" },
      company: { fr: "Institut International de Planification de l'Éducation (IIPE)", en: "International Institute for Educational Planning (IIEP)" },
      location: { fr: "Dakar, Sénégal", en: "Dakar, Senegal" },
      period: { fr: "Juillet 2023 — Août 2023", en: "July 2023 — August 2023" },
      type: { fr: "Mission", en: "Consulting" },
      bullets: {
        fr: [
          "Développement de questionnaires électroniques : mise en forme, codification et automatisation de la collecte de données.",
          "Paramétrage des imports de questionnaires et intégration dans la base StatEduc.",
          "Formation des agents du MENAPLN à l'utilisation des questionnaires, au contrôle qualité des données et à la maintenance adaptative."
        ],
        en: [
          "Built electronic questionnaires: formatting, coding and automation of data collection.",
          "Configured questionnaire imports and integration into the StatEduc database.",
          "Trained MENAPLN staff on questionnaire usage, data quality control and adaptive maintenance."
        ]
      },
      stack: ["StatEduc", "Data quality", "SQL", { fr: "Formation", en: "Training" }]
    },
    {
      role: { fr: "Consultant Génie Logiciel (temps partiel)", en: "Software Engineering Consultant (part-time)" },
      company: "Trisagion Process",
      location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
      period: { fr: "Décembre 2020 — Septembre 2021", en: "December 2020 — September 2021" },
      type: { fr: "Consulting", en: "Consulting" },
      bullets: {
        fr: [
          "Analyse, conception, développement et déploiement d'applications web et mobiles.",
          "Administration des bases de données et veille technologique.",
          "Animation de sessions de formation : présentations et cas pratiques.",
          "Production et présentation des livrables aux différents jalons projet.",
          "Élaboration de plans de conduite du changement pour les projets de transformation digitale.",
          "Participation au choix et au déploiement des logiciels et systèmes."
        ],
        en: [
          "Analysis, design, development and deployment of web and mobile applications.",
          "Database administration and technology watch.",
          "Ran training sessions combining presentations and hands-on case studies.",
          "Produced and presented deliverables at each project milestone.",
          "Designed change-management plans for digital transformation projects.",
          "Contributed to software and system selection and rollout."
        ]
      },
      stack: ["Laravel", "React", "Mobile", "MySQL", { fr: "Conduite du changement", en: "Change management" }]
    },
    {
      role: { fr: "Professeur d'Informatique", en: "Computer Science Teacher" },
      company: { fr: "Lycée Municipal de Dédougou (MENAPLN)", en: "Lycée Municipal de Dédougou (MENAPLN)" },
      location: { fr: "Dédougou, Burkina Faso", en: "Dédougou, Burkina Faso" },
      period: { fr: "Octobre 2018 — Octobre 2022", en: "October 2018 — October 2022" },
      type: { fr: "Temps plein", en: "Full-time" },
      bullets: {
        fr: [
          "Préparation des cours conformément aux programmes officiels.",
          "Conception de supports pédagogiques adaptés et gestion de classe.",
          "Évaluation continue des élèves et suivi des dossiers scolaires.",
          "Préparation et correction des examens et devoirs."
        ],
        en: [
          "Prepared lessons in line with the official national curriculum.",
          "Designed tailored teaching materials and managed the classroom.",
          "Continuous student assessment and academic record keeping.",
          "Prepared and marked exams and assignments."
        ]
      },
      stack: [{ fr: "Pédagogie", en: "Teaching" }, { fr: "Algorithmique", en: "Algorithms" }, { fr: "Bases de données", en: "Databases" }]
    },
    {
      role: { fr: "Développeur Freelance (CDD)", en: "Freelance Developer (fixed-term)" },
      company: "SEREIN-GE",
      location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
      period: { fr: "Décembre 2019 — Mai 2020", en: "December 2019 — May 2020" },
      type: { fr: "Freelance", en: "Freelance" },
      bullets: {
        fr: [
          "Analyse du besoin client et de la faisabilité projet ; rédaction du cahier des charges.",
          "Mise en place de la base de données de l'Observatoire National Urbain du Burkina Faso.",
          "Conception et développement des solutions logicielles conformes aux spécifications.",
          "Correction des anomalies remontées par les utilisateurs et montée de version des interfaces.",
          "Rédaction de la documentation technique à destination des équipes d'exploitation."
        ],
        en: [
          "Client requirements and feasibility analysis; specification writing.",
          "Implemented the database of Burkina Faso's National Urban Observatory.",
          "Designed and developed software solutions matching the specifications.",
          "Fixed user-reported defects and upgraded existing interfaces.",
          "Wrote technical documentation for operations teams."
        ]
      },
      stack: ["PostgreSQL", "PostGIS", "Web", "Documentation"]
    },
    {
      role: { fr: "Développeur Freelance (CDD)", en: "Freelance Developer (fixed-term)" },
      company: "GéoidConsulting",
      location: { fr: "Ouagadougou, Burkina Faso", en: "Ouagadougou, Burkina Faso" },
      period: { fr: "Août 2019 — Novembre 2019", en: "August 2019 — November 2019" },
      type: { fr: "Freelance", en: "Freelance" },
      bullets: {
        fr: [
          "Analyse du besoin client et de la faisabilité projet ; rédaction du cahier des charges.",
          "Conception et développement des solutions logicielles conformes aux spécifications.",
          "Correction des anomalies et adaptation matérielle des interfaces existantes.",
          "Collaboration avec les équipes fonctionnelles et techniques pour l'assurance qualité."
        ],
        en: [
          "Client requirements and feasibility analysis; specification writing.",
          "Designed and developed software solutions matching the specifications.",
          "Bug fixing and hardware adaptation of existing interfaces.",
          "Collaborated with functional and technical teams on quality assurance."
        ]
      },
      stack: [{ fr: "SIG", en: "GIS" }, "Web", "SQL"]
    }
  ],

  /* ------------------------------------------------------------------ */
  /*  Projets                                                            */
  /* ------------------------------------------------------------------ */
  projectFilters: [
    { id: "all",       label: { fr: "Tous",           en: "All" } },
    { id: "gov",       label: { fr: "Plateformes d'État", en: "Government platforms" } },
    { id: "gis",       label: { fr: "Géomatique / SIG", en: "Geomatics / GIS" } },
    { id: "education", label: { fr: "Éducation",       en: "Education" } },
    { id: "health",    label: { fr: "Santé",           en: "Health" } }
  ],

  projects: [
    {
      name: { fr: "SIGEC — Gestion des examens et concours", en: "SIGEC — Exams & Competitive Tests Management" },
      org: { fr: "MESFPT — Burkina Faso", en: "MESFPT — Burkina Faso" },
      tags: ["gov", "education"],
      featured: true,
      description: {
        fr: "Système national de gestion des examens et concours scolaires : inscriptions, jurys, centres de composition, délibérations et publication des résultats. Plateforme critique opérée à l'échelle du pays, avec administration de la base de données nationale.",
        en: "National system for managing school exams and competitive entrance tests: registrations, examination boards, test centres, deliberations and results publication. A mission-critical, country-wide platform including national database administration."
      },
      stack: ["Django", "PostgreSQL", "Docker", "Jenkins"],
      link: null
    },
    {
      name: { fr: "ONU — Observatoire National Urbain", en: "ONU — National Urban Observatory" },
      org: { fr: "Burkina Faso", en: "Burkina Faso" },
      tags: ["gov", "gis"],
      featured: true,
      description: {
        fr: "Observatoire national des indicateurs urbains : collecte, consolidation et restitution cartographique des données de développement urbain. Mise en place de la base de données et de la couche spatiale.",
        en: "National observatory of urban indicators: collection, consolidation and map-based reporting of urban development data. Included database and spatial layer implementation."
      },
      stack: ["PostgreSQL", "PostGIS", "Leaflet", "GeoJSON"],
      link: "https://oun.gov.bf"
    },
    {
      name: { fr: "SIGOSPB — Gestion des bourses scolaires", en: "SIGOSPB — School Scholarships Management" },
      org: { fr: "Ministère en charge de la Formation Professionnelle — Burkina Faso", en: "Ministry of Vocational Training — Burkina Faso" },
      tags: ["gov", "education"],
      featured: true,
      description: {
        fr: "Plateforme nationale de gestion des bourses et secours scolaires : candidatures, instruction des dossiers, commissions d'attribution et suivi des paiements.",
        en: "National platform for managing school scholarships and student aid: applications, case processing, award committees and payment tracking."
      },
      stack: ["Django", "PostgreSQL", "REST", "JWT"],
      link: "https://sigospb.formationpro.gov.bf"
    },
    {
      name: { fr: "SYGODM — Gestion des ordres de mission", en: "SYGODM — Mission Orders Management" },
      org: { fr: "Plusieurs ministères burkinabè", en: "Several Burkinabè ministries" },
      tags: ["gov"],
      featured: true,
      description: {
        fr: "Plateforme de dématérialisation des ordres de mission : demande, circuit de validation hiérarchique, édition des ordres et archivage. Déployée et utilisée par plusieurs ministères.",
        en: "Digitalisation platform for mission orders: request, hierarchical approval workflow, order generation and archiving. Deployed and used across several ministries."
      },
      stack: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
      link: "https://sigodm.education-bf.com"
    },
    {
      name: { fr: "SIG des terres restaurées", en: "Restored Land Information System" },
      org: { fr: "République du Niger", en: "Republic of Niger" },
      tags: ["gis", "gov"],
      description: {
        fr: "Système intégré de gestion des terres restaurées : cartographie des zones traitées, suivi des interventions et indicateurs de restauration, avec géolocalisation des sites via PostGIS.",
        en: "Integrated management system for restored land: mapping of treated areas, intervention tracking and restoration indicators, with PostGIS-based site geolocation."
      },
      stack: ["PostGIS", "OpenLayers", "Python", "PostgreSQL"],
      link: null
    },
    {
      name: { fr: "Système de gestion du foncier rural", en: "Rural Land Registry System" },
      org: { fr: "République du Niger — financement Banque Mondiale", en: "Republic of Niger — World Bank funded" },
      tags: ["gis", "gov"],
      description: {
        fr: "Plateforme de gestion du foncier rural financée par la Banque Mondiale : enregistrement des parcelles, titres et transactions, avec référentiel spatial et restitution cartographique.",
        en: "World Bank-funded rural land registry platform: parcel, title and transaction records, backed by a spatial reference layer and map-based reporting."
      },
      stack: ["PostGIS", "GeoJSON", "Leaflet", "REST"],
      link: null
    },
    {
      name: { fr: "FIUE-BF — Identification unique des élèves et étudiants", en: "FIUE-BF — Unique Student Identification" },
      org: { fr: "Burkina Faso", en: "Burkina Faso" },
      tags: ["gov", "education"],
      description: {
        fr: "Plateforme d'identification unique des élèves et étudiants du Burkina Faso : fiche d'identification, déduplication et attribution d'un identifiant national unique.",
        en: "Unique student identification platform for Burkina Faso: identification records, deduplication and allocation of a unique national identifier."
      },
      stack: ["Django", "PostgreSQL", "REST"],
      link: null
    },
    {
      name: { fr: "FEC — Fiche d'Évaluation Communautaire", en: "FEC — Community Evaluation Form" },
      org: { fr: "Ministères de la Santé et de l'Éducation — Burkina Faso", en: "Ministries of Health and Education — Burkina Faso" },
      tags: ["health", "gov", "gis"],
      description: {
        fr: "Plateforme d'évaluation communautaire des services publics : collecte terrain, agrégation des scores et géolocalisation des centres de santé et établissements scolaires évalués.",
        en: "Community-based public service evaluation platform: field data collection, score aggregation and geolocation of the assessed health centres and schools."
      },
      stack: ["Laravel", "MySQL", "PostGIS", "Mobile"],
      link: null
    },
    {
      name: { fr: "Dématérialisation des procédures MESFPT", en: "MESFPT Procedure Digitalisation" },
      org: { fr: "MESFPT — Burkina Faso", en: "MESFPT — Burkina Faso" },
      tags: ["gov", "education"],
      description: {
        fr: "Trois plateformes de dématérialisation des procédures ministérielles : autorisation de création d'établissement, autorisation d'ouverture et autorisation d'enseigner. Circuits de validation, pièces justificatives et suivi des dossiers en ligne.",
        en: "Three platforms digitalising ministerial procedures: institution creation authorisation, opening authorisation and teaching authorisation. Online approval workflows, supporting documents and case tracking."
      },
      stack: ["Django", "PostgreSQL", "Workflow", "REST"],
      link: null
    }
  ],

  /* ------------------------------------------------------------------ */
  /*  Formation & certifications                                         */
  /* ------------------------------------------------------------------ */
  education: [
    {
      degree: { fr: "Nanodegree Full Stack Developer", en: "Full Stack Developer Nanodegree" },
      school: { fr: "Udacity (USA) — à distance", en: "Udacity (USA) — remote" },
      period: { fr: "Juillet 2022 — Novembre 2022", en: "July 2022 — November 2022" },
      detail: {
        fr: "Python + Flask, Node.js, React.",
        en: "Python + Flask, Node.js, React."
      },
      credential: "https://confirm.udacity.com/NNA9XETV",
      badge: { fr: "Certification", en: "Certification" }
    },
    {
      degree: { fr: "AWS Machine Learning Foundation", en: "AWS Machine Learning Foundation" },
      school: { fr: "Udacity (USA) — à distance", en: "Udacity (USA) — remote" },
      period: { fr: "Juillet 2022 — Novembre 2022", en: "July 2022 — November 2022" },
      detail: {
        fr: "Fondamentaux du Machine Learning sur AWS.",
        en: "Machine Learning foundations on AWS."
      },
      credential: "https://graduation.udacity.com/confirm/SSWQKHCR",
      badge: { fr: "Certification", en: "Certification" }
    },
    {
      degree: { fr: "Master en Génie Logiciel", en: "Master's Degree in Software Engineering" },
      school: { fr: "Université Joseph KI-ZERBO, Ouagadougou", en: "Université Joseph KI-ZERBO, Ouagadougou" },
      period: { fr: "Octobre 2017 — Mai 2019", en: "October 2017 — May 2019" },
      detail: {
        fr: "Génie logiciel et systèmes d'information informatisés. Vice-major de promotion.",
        en: "Software engineering and computerised information systems. Second in class."
      },
      highlight: { fr: "Vice-major de promotion", en: "Second in class" }
    },
    {
      degree: { fr: "CAET option Informatique", en: "CAET, Computer Science" },
      school: { fr: "École Normale Supérieure de Koudougou", en: "École Normale Supérieure de Koudougou" },
      period: { fr: "Novembre 2016 — Juillet 2018", en: "November 2016 — July 2018" },
      detail: {
        fr: "Génie logiciel et systèmes d'information informatisés.",
        en: "Software engineering and computerised information systems."
      }
    },
    {
      degree: { fr: "Licence en Informatique", en: "Bachelor's Degree in Computer Science" },
      school: { fr: "Université Joseph KI-ZERBO, Ouagadougou", en: "Université Joseph KI-ZERBO, Ouagadougou" },
      period: { fr: "Octobre 2012 — Juillet 2015", en: "October 2012 — July 2015" },
      detail: {
        fr: "Systèmes d'Information et Réseaux (SIR). Major de promotion.",
        en: "Information Systems and Networks (SIR). Top of the class."
      },
      highlight: { fr: "Major de promotion", en: "Top of the class" }
    },
    {
      degree: { fr: "Licence en Mathématiques", en: "Bachelor's Degree in Mathematics" },
      school: { fr: "Université Ouaga 3S, Ouagadougou", en: "Université Ouaga 3S, Ouagadougou" },
      period: { fr: "Octobre 2014 — Août 2015", en: "October 2014 — August 2015" },
      detail: {
        fr: "Mathématiques appliquées et économétrie. Mention Assez Bien.",
        en: "Applied mathematics and econometrics. Graduated with honours."
      }
    },
    {
      degree: { fr: "Baccalauréat série D", en: "Baccalaureate, Science stream (D)" },
      school: { fr: "Lycée Diaba Lompo, Fada N'Gourma", en: "Lycée Diaba Lompo, Fada N'Gourma" },
      period: { fr: "Octobre 2010 — Juillet 2011", en: "October 2010 — July 2011" },
      detail: { fr: "", en: "" }
    }
  ],

  /* ------------------------------------------------------------------ */
  /*  Atouts & langues                                                   */
  /* ------------------------------------------------------------------ */
  strengths: [
    {
      title: { fr: "Communication écrite et orale", en: "Written and oral communication" },
      text: { fr: "Précision et concision, du cahier des charges au manuel utilisateur.", en: "Precision and concision, from specifications to end-user manuals." }
    },
    {
      title: { fr: "Capacité d'analyse", en: "Analytical thinking" },
      text: { fr: "Analyse approfondie des situations pour apporter la solution appropriée.", en: "Thorough situation analysis to deliver the right solution." }
    },
    {
      title: { fr: "Travail d'équipe", en: "Teamwork" },
      text: { fr: "Partage d'expérience et montée en compétence des équipes.", en: "Experience sharing and levelling up the team." }
    },
    {
      title: { fr: "Sens des responsabilités", en: "Ownership" },
      text: { fr: "Prise en charge complète des tâches confiées, jusqu'à la production.", en: "Full ownership of assigned work, all the way to production." }
    },
    {
      title: { fr: "Rigueur et qualité", en: "Rigor and craftsmanship" },
      text: { fr: "Travail bien fait, documenté et maintenable dans la durée.", en: "Work done well, documented and maintainable over time." }
    },
    {
      title: { fr: "Gestion de l'urgence", en: "Handling pressure" },
      text: { fr: "Sang-froid et respect des délais sur des plateformes critiques.", en: "Calm and on-time delivery on mission-critical platforms." }
    }
  ],

  languages: [
    { name: { fr: "Français", en: "French" },  level: { fr: "Courant", en: "Fluent" }, value: 100 },
    { name: { fr: "Anglais",  en: "English" }, level: { fr: "Professionnel", en: "Professional" }, value: 70 }
  ],

  interests: [
    { icon: "code",  label: { fr: "Programmation", en: "Programming" },
      text: { fr: "Passionné de code et de résolution de problèmes complexes.", en: "Passionate about code and solving complex problems." } },
    { icon: "spark", label: { fr: "Sport", en: "Sports" },
      text: { fr: "Activité physique régulière pour la santé et le bien-être.", en: "Regular physical activity for health and wellbeing." } }
  ]
};
