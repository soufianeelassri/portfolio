export const personalInfo = {
  name: "Soufiane [NOM]",
  title: "AI/ML Research Engineer",
  tagline:
    "Building intelligent systems with LLMs, Knowledge Graphs & Multi-Agent Architectures",
  email: "soufiane.nom@example.com",
  location: "Rouen, France",
  currentPosition: "Research Intern @ LITIS Laboratory, INSA Rouen Normandie",
  education: "M.Eng. in AI & Data Science @ ENSIASD",
  links: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
    googleScholar: "https://scholar.google.com/citations?user=[id]",
    twitter: "https://twitter.com/[username]",
    email: "mailto:soufiane.nom@example.com",
  },
};

export const researchInterests = [
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "Knowledge Graph Construction",
  "Multi-Agent Systems",
  "Ontology Learning",
  "Industry 4.0 & Smart Manufacturing",
];

export const publications = [
  {
    id: 1,
    title:
      "Bridging the Menopause Information Gap: A Peer-Reviewed Multimodal RAG Framework with Hybrid Retrieval",
    authors: ["Soufiane [NOM]", "Sara El-Ateif"],
    venue: "IEEE ICCITX 2026",
    year: 2026,
    status: "accepted" as const,
    type: "conference" as const,
    abstract:
      "[À COMPLÉTER - Abstract de 150-200 mots décrivant le framework RAG multimodal pour combler le fossé informationnel sur la ménopause, incluant l'approche de retrieval hybride et les résultats expérimentaux.]",
    links: {
      pdf: "#",
      code: "#",
      slides: "#",
    },
    tags: ["RAG", "Multimodal", "Healthcare AI"],
  },
  {
    id: 2,
    title:
      "NeoOLAF: LLM-based Agentic Pipelines for Industrial Knowledge Extraction",
    authors: ["Soufiane [NOM]", "[Co-auteurs à compléter]"],
    venue: "[Venue à définir]",
    year: 2026,
    status: "in-progress" as const,
    type: "preprint" as const,
    abstract:
      "[À COMPLÉTER - Abstract décrivant les pipelines agentiques basés sur les LLMs pour l'extraction de connaissances industrielles, combinant RAG sémantique, ontologies et graphes de connaissances Neo4j.]",
    links: {} as Record<string, string>,
    tags: ["Multi-Agent", "Knowledge Graphs", "Industry 4.0"],
  },
];

export const projects = [
  {
    id: 1,
    title: "NeoOLAF",
    subtitle: "Multi-Agent Framework for Industrial Knowledge Extraction",
    description:
      "LLM-based agentic pipelines combining semantic RAG, ontologies, and knowledge graphs (Neo4j) to extract causal trees from industrial troubleshooting documentation in Industry 4.0 contexts.",
    longDescription:
      "[À COMPLÉTER - Description détaillée du projet NeoOLAF incluant la motivation, l'architecture technique, les résultats obtenus et l'impact potentiel sur l'industrie 4.0.]",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "Neo4j",
      "FastAPI",
      "Docker",
    ],
    features: [
      "Semantic RAG with hybrid retrieval",
      "Ontology-driven knowledge extraction",
      "Causal tree construction from technical manuals",
      "Multi-agent orchestration with LangGraph",
    ],
    links: {
      github: "#",
      demo: "#",
      paper: "#",
    },
    status: "active" as const,
    category: "research" as const,
  },
  {
    id: 2,
    title: "Multimodal RAG Framework",
    subtitle: "Healthcare Information Retrieval System",
    description:
      "Peer-reviewed multimodal RAG framework with hybrid retrieval for bridging healthcare information gaps, specifically targeting menopause-related medical queries.",
    longDescription:
      "[À COMPLÉTER - Description détaillée du framework RAG multimodal pour la santé.]",
    technologies: [
      "Python",
      "PyTorch",
      "LangChain",
      "FAISS",
      "Transformers",
    ],
    features: [
      "Multimodal document processing (text + images)",
      "Hybrid retrieval (dense + sparse)",
      "Medical domain fine-tuning",
      "Peer-reviewed evaluation methodology",
    ],
    links: {
      github: "#",
      paper: "#",
    },
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 3,
    title: "SciBERT Fine-tuning",
    subtitle: "Domain-Specific Language Model Adaptation",
    description:
      "[À COMPLÉTER - Description du projet SciBERT pour l'adaptation de modèles de langage au domaine scientifique.]",
    longDescription:
      "[À COMPLÉTER - Description détaillée du fine-tuning SciBERT.]",
    technologies: ["PyTorch", "Transformers", "Hugging Face", "CUDA"],
    features: [
      "Custom tokenizer adaptation",
      "Domain-specific pre-training",
      "Downstream task evaluation",
      "Model benchmarking pipeline",
    ],
    links: {
      github: "#",
    },
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 4,
    title: "Recommendation Engine",
    subtitle: "Production ML System @ Epitome",
    description:
      "[À COMPLÉTER - Description du moteur de recommandation développé chez Epitome, incluant l'architecture du système et les métriques de performance.]",
    longDescription:
      "[À COMPLÉTER - Description détaillée du moteur de recommandation.]",
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS"],
    features: [
      "Collaborative filtering pipeline",
      "Real-time inference API",
      "A/B testing framework",
      "Production monitoring dashboard",
    ],
    links: {} as Record<string, string>,
    status: "completed" as const,
    category: "industry" as const,
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 85 },
    { name: "JavaScript/TypeScript", level: 75 },
    { name: "Bash", level: 70 },
  ],
  frameworks: [
    { name: "LangChain / LangGraph", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "FastAPI", level: 85 },
    { name: "Hugging Face Transformers", level: 85 },
  ],
  tools: [
    { name: "Neo4j", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 90 },
    { name: "Linux", level: 85 },
  ],
  domains: [
    "Generative AI & LLMs",
    "Retrieval-Augmented Generation",
    "Knowledge Graphs & Ontologies",
    "Multi-Agent Systems",
    "NLP & Text Mining",
    "Industry 4.0",
  ],
};

export const experience = [
  {
    id: 1,
    title: "Research Intern (PFE)",
    company: "LITIS Laboratory",
    companyFull: "LITIS Laboratory, INSA Rouen Normandie",
    location: "Rouen, France",
    period: "2025 - Present",
    type: "internship" as const,
    description:
      "End-of-study internship on the XQuality project, designing LLM-based agentic pipelines for industrial knowledge extraction.",
    highlights: [
      "Designed NeoOLAF multi-agent framework combining semantic RAG, ontologies, and Neo4j knowledge graphs",
      "Extracted causal trees from industrial troubleshooting documentation (CNC SPRINT32 Gildemeister)",
      "Implemented LangGraph-based orchestration for multi-agent workflows",
      "Collaborated with research team on applied AI research for Industry 4.0",
    ],
    technologies: ["Python", "LangChain", "LangGraph", "Neo4j", "FastAPI"],
  },
  {
    id: 2,
    title: "[À COMPLÉTER] - Previous Experience",
    company: "Epitome",
    companyFull: "[À COMPLÉTER - Nom complet de l'entreprise]",
    location: "[À COMPLÉTER]",
    period: "[À COMPLÉTER]",
    type: "internship" as const,
    description:
      "[À COMPLÉTER - Description de l'expérience chez Epitome, incluant le développement du moteur de recommandation.]",
    highlights: [
      "[À COMPLÉTER - Réalisation 1]",
      "[À COMPLÉTER - Réalisation 2]",
      "[À COMPLÉTER - Réalisation 3]",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Engineering (M.Eng.)",
    field: "Artificial Intelligence & Data Science",
    institution: "ENSIASD",
    location: "Taroudant, Morocco",
    period: "2022 - 2026",
    description:
      "Final-year engineering student specializing in AI, ML, and Data Science.",
    highlights: [
      "[À COMPLÉTER - Projets académiques notables]",
      "[À COMPLÉTER - Classement/Moyenne si pertinent]",
    ],
  },
  {
    id: 2,
    degree: "DUT (University Diploma of Technology)",
    field: "[À COMPLÉTER]",
    institution: "[À COMPLÉTER]",
    location: "[À COMPLÉTER]",
    period: "[À COMPLÉTER]",
    description: "[À COMPLÉTER]",
    highlights: [],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
