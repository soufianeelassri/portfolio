export const personalInfo = {
  name: "Soufiane Elassri",
  title: "Ingénieur en Science des Données et Intelligence Artificielle",
  tagline:
    "Passionné par l'intelligence artificielle, le machine learning et la data science — je conçois des systèmes intelligents pour résoudre des problèmes concrets.",
  email: "soufianeelassrii@gmail.com",
  location: "Rouen, France",
  currentPosition: "Stagiaire Ingénieur de Recherche @ Laboratoire LITIS, INSA Rouen Normandie",
  education: "Diplôme d'Ingénieur en IA & Data Science @ ENSIASD",
  links: {
    github: "https://github.com/soufianeelassri",
    linkedin: "https://www.linkedin.com/in/soufiane-elassri/",
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
  {
    id: 4,
    title: "RAG YouTube Assistant",
    subtitle: "Chat avec des Vidéos YouTube",
    description:
      "Application RAG permettant de discuter avec les transcriptions de vidéos YouTube. Posez des questions sur n'importe quelle vidéo et obtenez des réponses contextuelles via des LLMs locaux.",
    longDescription:
      "Pipeline complet d'ingestion de vidéos YouTube, de recherche hybride et de génération de réponses avec monitoring Grafana et évaluation RAG intégrée.",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "Elasticsearch",
      "Docker",
      "Grafana",
      "Sentence Transformers",
    ],
    features: [
      "Ingestion de vidéos via YouTube Data API v3 (vidéos individuelles ou chaînes entières)",
      "Recherche hybride combinant texte et embeddings",
      "Optimisation des requêtes avec Chain-of-Thought et ReAct",
      "Évaluation RAG avec Hit Rate, MRR et LLM-as-Judge",
    ],
    links: { github: "https://github.com/soufianeelassri/rag-youtube-assistant" } as Record<string, string>,
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 5,
    title: "ExamGenerator",
    subtitle: "Génération d'Examens par IA",
    description:
      "Plateforme d'examens alimentée par l'IA qui génère automatiquement des questions à partir de documents PDF en utilisant Google Gemini AI.",
    longDescription:
      "Application full-stack permettant l'upload de PDFs, la génération de questions personnalisables (difficulté, format, nombre), la passation d'examens interactifs avec scoring en temps réel et suivi d'historique.",
    technologies: [
      "React",
      "FastAPI",
      "MongoDB",
      "Google Gemini AI",
      "Tailwind CSS",
      "JWT",
      "Docker",
    ],
    features: [
      "Génération automatique de questions depuis des PDFs (QCM, vrai/faux, texte à trous, questions ouvertes)",
      "Configuration de la difficulté (facile, moyen, difficile) et du nombre de questions (5-50)",
      "Authentification JWT et suivi de l'historique des examens",
      "Scoring en temps réel avec feedback détaillé",
    ],
    links: { github: "https://github.com/soufianeelassri/ExamGenerator" } as Record<string, string>,
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 6,
    title: "LLM Hybrid Recommender System",
    subtitle: "Système de Recommandation Hybride",
    description:
      "Moteur de recommandation combinant la recherche hybride Weaviate avec les suggestions d'OpenAI pour fournir des recommandations de produits intelligentes.",
    longDescription:
      "Pipeline de recommandation traitant un catalogue de ~550K produits Amazon, combinant recherche par mots-clés (BM25) et recherche sémantique vectorielle, augmenté par GPT-3.5-turbo pour l'expansion de requêtes.",
    technologies: [
      "Python",
      "OpenAI GPT-3.5",
      "Weaviate",
      "Pandas",
      "Jupyter Notebook",
    ],
    features: [
      "Recherche hybride combinant BM25 et similarité sémantique vectorielle",
      "Expansion de requêtes augmentée par LLM pour des recommandations plus riches",
      "Découverte de similarité par proximité d'embeddings (near-object)",
      "Atténuation du problème de démarrage à froid grâce aux capacités du LLM",
    ],
    links: { github: "https://github.com/soufianeelassri/llm-hybrid-recommender-system" } as Record<string, string>,
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
    title: "Stagiaire Ingénieur en Intelligence Artificielle",
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
    title: "Stagiaire Ingénieur en Intelligence Artificielle",
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
