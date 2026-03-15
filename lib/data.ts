export const personalInfo = {
  name: "Soufiane Elassri",
  title: "Ingénieur IA",
  tagline:
    "Passionné par l'intelligence artificielle, le machine learning et la data science — je conçois des systèmes intelligents pour résoudre des problèmes concrets.",
  email: "soufianeelassrii@gmail.com",
  location: "Rouen, France",
  currentPosition: "Stagiaire Ingénieur de Recherche @ Laboratoire LITIS, INSA Rouen Normandie",
  education: "Diplôme d'Ingénieur en IA & Data Science @ ENSIASD",
  links: {
    github: "https://github.com/soufianeelassri",
    linkedin: "https://linkedin.com/in/soufianeelassri",
    email: "mailto:soufianeelassrii@gmail.com",
  },
};

export const publications = [
  {
    id: 1,
    title:
      "Bridging the Menopause Information Gap: A Peer-Reviewed Multimodal RAG Framework with Hybrid Retrieval",
    authors: ["Sara El-Ateif", "Soufiane Elassri"],
    venue: "IEEE ICCITX 2026",
    year: 2026,
    status: "accepted" as const,
    type: "conference" as const,
    abstract:
      "Framework RAG multimodal évalué par les pairs, conçu pour améliorer l'accès aux informations médicales liées à la ménopause. Le système combine une recherche hybride dense-sparse, le suivi des symptômes et la génération de rapports personnalisés.",
    links: {
      pdf: "/files/Elassri_MultimodalMenopause.pdf",
      code: "https://github.com/soufianeelassri/menopause-multimodal-rag",
    } as Record<string, string>,
    tags: ["RAG", "Multimodal", "Healthcare AI"],
  },
];

export const projects = [
  {
    id: 3,
    title: "Fine-tuning SciBERT",
    subtitle: "Classification d'Articles Scientifiques",
    description:
      "Fine-tuning de SciBERT pour la classification multi-label d'articles scientifiques dans 8 domaines à partir d'un large jeu de données d'abstracts ArXiv.",
    longDescription:
      "Pipeline d'expérimentation complet pour la classification de documents scientifiques, incluant la curation de données, le prétraitement et l'analyse d'erreurs.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Scikit-learn",
      "Weights & Biases",
    ],
    features: [
      "Prétraitement de 15 000+ abstracts ArXiv",
      "Comparaison de têtes de classification (pooling, attention, BiLSTM)",
      "Micro-F1 de 0.91 sur 8 catégories",
      "Visualisation des embeddings avec t-SNE",
    ],
    links: { github: "https://github.com/soufianeelassri/ArxivClassifier" } as Record<string, string>,
    status: "completed" as const,
    category: "research" as const,
  },
];


export const experience = [
  {
    id: 1,
    title: "Stagiaire Ingénieur de Recherche",
    company: "Laboratoire LITIS",
    companyFull: "Laboratoire LITIS, INSA Rouen Normandie",
    location: "Rouen, France",
    period: "Fév 2026 - Présent",
    type: "stage" as const,
    description:
      "Conception de pipelines pour l'extraction de connaissances causales structurées à partir de données industrielles non structurées dans un contexte Industrie 4.0.",
    highlights: [
      "Conception et expérimentation de NeoOLAF, une architecture multi-agent pour la construction itérative d'ontologies et de graphes de connaissances",
      "Construction de pipelines de traitement de données pour la modélisation causale à partir de documents industriels non structurés",
      "Étude et optimisation de stratégies de fine-tuning de LLMs pour l'extraction de structures causales",
      "Application de méthodes de recherche pour relier travaux scientifiques et besoins de déploiement industriel",
    ],
    technologies: ["Python", "LangChain", "LangGraph", "Knowledge Graphs", "LLMs"],
  },
  {
    id: 2,
    title: "Stagiaire Ingénieur de Recherche",
    company: "Epitome",
    companyFull: "Epitome Advisory",
    location: "Casablanca, Maroc",
    period: "Juil 2025 - Sep 2025",
    type: "stage" as const,
    description:
      "Conception et évaluation de systèmes de personnalisation intelligents pour des expériences d'apprentissage numériques.",
    highlights: [
      "Construction d'un moteur de recommandation hybride pour des parcours d'apprentissage personnalisés",
      "Mesure de l'impact des agents intelligents sur l'engagement, contribuant à une augmentation de 20% du taux de clics",
      "Mise en place du monitoring en production avec Docker, FastAPI, Prometheus et Grafana",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Prometheus", "Grafana"],
  },
  {
    id: 3,
    title: "Stagiaire Ingénieur de Recherche",
    company: "Smartflow Technologies",
    companyFull: "Smartflow Technologies",
    location: "Agadir, Maroc",
    period: "Avr 2023 - Juin 2023",
    type: "stage" as const,
    description:
      "Travail sur des problèmes d'optimisation et de détection d'anomalies pour la logistique urbaine.",
    highlights: [
      "Implémentation d'algorithmes d'optimisation combinatoire pour la planification d'itinéraires",
      "Analyse de données GPS avec clustering DBSCAN pour détecter les comportements anormaux",
      "Conception d'un système d'alertes en temps réel ayant contribué à une réduction de 15% des coûts de carburant",
    ],
    technologies: ["Python", "DBSCAN", "Optimisation", "Analyse de données"],
  },
  {
    id: 4,
    title: "Stagiaire Développeur Web",
    company: "DevoSoft",
    companyFull: "DevoSoft",
    location: "Safi, Maroc",
    period: "Juil 2022 - Août 2022",
    type: "stage" as const,
    description:
      "Développement de logiciels internes avec un focus sur la fiabilité, les performances SQL et les workflows utilisateur sécurisés.",
    highlights: [
      "Développement d'un système de facturation automatisé pour la génération, le suivi et l'archivage des factures clients",
      "Optimisation des performances SQL via l'indexation et le refactoring de requêtes",
      "Implémentation d'une interface responsive avec gestion des rôles et authentification sécurisée",
    ],
    technologies: ["SQL", "Développement Web", "Authentification", "UI Responsive"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Diplôme d'Ingénieur",
    field: "Data Science, Big Data & Intelligence Artificielle",
    institution:
      "École Nationale Supérieure de l'Intelligence Artificielle et Science des Données (ENSIASD)",
    location: "Taroudant, Maroc",
    period: "Sep 2023 - Présent",
    description:
      "Cursus d'ingénieur axé sur le machine learning, la data science et les systèmes d'IA modernes.",
    highlights: [
      "Spécialisation en IA, ingénierie des données et machine learning appliqué",
      "Base académique pour les travaux de recherche en LLMs, RAG et extraction de connaissances",
    ],
  },
  {
    id: 2,
    degree: "Diplôme Universitaire de Technologie",
    field: "Informatique Décisionnelle et Science des Données",
    institution: "École Supérieure de Technologie (EST)",
    location: "Essaouira, Maroc",
    period: "Sep 2021 - Juin 2023",
    description:
      "Formation fondamentale en systèmes d'information, analyse de données et développement logiciel.",
    highlights: [
      "Solide base en bases de données, systèmes d'aide à la décision et génie logiciel",
    ],
  },
];

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
