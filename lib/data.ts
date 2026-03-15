export const personalInfo = {
  name: "Soufiane Elassri",
  title: "AI Research Engineer",
  tagline:
    "Building intelligent systems with LLMs, semantic RAG, and knowledge graphs for real-world impact",
  email: "soufianeelassrii@gmail.com",
  location: "Rouen, France",
  currentPosition: "Research Engineer @ LITIS Laboratory, INSA Rouen Normandie",
  education: "Engineering Degree in AI & Data Science @ ENSIASD",
  links: {
    github: "",
    linkedin: "https://linkedin.com/in/soufianeelassri",
    googleScholar: "",
    twitter: "",
    email: "mailto:soufianeelassrii@gmail.com",
  },
};

export const researchInterests = [
  "Large Language Models (LLMs)",
  "Semantic Retrieval-Augmented Generation (RAG)",
  "Knowledge Graph Construction",
  "Multi-Agent Systems",
  "Ontology Learning",
  "Fine-tuning for Scientific NLP",
  "Industry 4.0 & Smart Manufacturing",
];

export const publications = [
  {
    id: 1,
    title:
      "Bridging the Menopause Information Gap: A Peer-Reviewed Multimodal RAG Framework with Hybrid Retrieval",
    authors: ["Soufiane Elassri", "Sara El-Ateif"],
    venue: "IEEE ICCITX 2026",
    year: 2026,
    status: "accepted" as const,
    type: "conference" as const,
    abstract:
      "Peer-reviewed multimodal RAG framework designed to improve access to menopause-related medical information. The system combines dense and sparse hybrid retrieval, symptom tracking, and personalized report generation to bridge information gaps in a sensitive healthcare domain.",
    links: {} as Record<string, string>,
    tags: ["RAG", "Multimodal", "Healthcare AI"],
  },
  {
    id: 2,
    title: "NeoOLAF: Agentic Pipelines for Industrial Knowledge Extraction",
    authors: ["Soufiane Elassri"],
    venue: "Ongoing research project",
    year: 2026,
    status: "in-progress" as const,
    type: "preprint" as const,
    abstract:
      "Research in progress on multi-agent pipelines for extracting causal structures from industrial troubleshooting documentation. The work combines semantic retrieval, ontology construction, and knowledge graphs to transform unstructured maintenance data into structured reasoning assets for Industry 4.0.",
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
      "Research framework for extracting causal trees from industrial troubleshooting documentation using semantic retrieval, iterative ontology building, and knowledge graphs.",
    longDescription:
      "NeoOLAF is an agentic architecture developed at LITIS to model causal knowledge from unstructured industrial data. It orchestrates multiple LLM-powered steps for retrieval, ontology refinement, and graph construction in an Industry 4.0 setting.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "Neo4j",
      "FastAPI",
      "LLMs",
    ],
    features: [
      "Semantic RAG with hybrid retrieval",
      "Iterative ontology and knowledge graph construction",
      "Causal tree extraction from troubleshooting manuals",
      "Multi-agent orchestration with LangGraph",
    ],
    links: {} as Record<string, string>,
    status: "active" as const,
    category: "research" as const,
  },
  {
    id: 2,
    title: "Multimodal RAG Framework",
    subtitle: "Healthcare Information Retrieval System",
    description:
      "Accepted research project that uses multimodal RAG and hybrid retrieval to improve menopause-related medical information access.",
    longDescription:
      "This framework was designed to bridge a healthcare information gap through dense-sparse retrieval, multimodal processing, symptom-aware interactions, and personalized report generation for menopause-related queries.",
    technologies: [
      "Python",
      "LangChain",
      "Transformers",
      "Hybrid Retrieval",
      "RAG",
    ],
    features: [
      "Multimodal document processing",
      "Hybrid retrieval (dense + sparse)",
      "Personalized symptom-aware reporting",
      "Peer-reviewed evaluation methodology",
    ],
    links: {} as Record<string, string>,
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 3,
    title: "SciBERT Fine-tuning",
    subtitle: "Scientific Article Classification",
    description:
      "Fine-tuned SciBERT for multi-label classification of scientific articles across 12 domains using a large ArXiv abstract dataset.",
    longDescription:
      "Built a full experimentation pipeline for scientific document classification, including dataset curation, preprocessing, multiple classifier heads, embedding visualization, and error analysis.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "Scikit-learn",
      "Weights & Biases",
    ],
    features: [
      "Preprocessed 15,000+ ArXiv abstracts",
      "Compared pooling, attention, and BiLSTM classification heads",
      "Reached 0.91 Micro-F1 on 12 categories",
      "Visualized embeddings with t-SNE",
    ],
    links: {} as Record<string, string>,
    status: "completed" as const,
    category: "research" as const,
  },
  {
    id: 4,
    title: "Recommendation Engine",
    subtitle: "Production ML System @ Epitome",
    description:
      "Designed and evaluated a hybrid recommendation engine to personalize learning journeys and improve user engagement.",
    longDescription:
      "Built at Epitome Advisory, this project combined recommendation logic, intelligent-agent analysis, and production monitoring to support a measurable increase in user interaction.",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Hybrid recommendation pipeline",
      "20% increase in click-through rate",
      "Production monitoring and evaluation stack",
      "FastAPI deployment workflow",
    ],
    links: {} as Record<string, string>,
    status: "completed" as const,
    category: "industry" as const,
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "R", level: 72 },
    { name: "Java", level: 70 },
    { name: "SQL", level: 85 },
    { name: "JavaScript/TypeScript", level: 68 },
  ],
  frameworks: [
    { name: "LangChain / LangGraph", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "TensorFlow", level: 80 },
    { name: "FastAPI", level: 85 },
    { name: "Hugging Face Transformers", level: 85 },
  ],
  tools: [
    { name: "Apache Spark", level: 72 },
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 70 },
    { name: "MLflow", level: 72 },
    { name: "Git", level: 90 },
    { name: "AWS / GCP / Azure", level: 68 },
  ],
  domains: [
    "Generative AI & LLMs",
    "Retrieval-Augmented Generation",
    "Knowledge Graphs & Ontologies",
    "Multi-Agent Systems",
    "NLP & Scientific Text Classification",
    "Data Engineering & Pipelines",
    "Industry 4.0",
  ],
};

export const experience = [
  {
    id: 1,
    title: "Research Engineer",
    company: "LITIS Laboratory",
    companyFull: "LITIS Laboratory, INSA Rouen Normandie",
    location: "Rouen, France",
    period: "Feb 2026 - Present",
    type: "research" as const,
    description:
      "Designing pipelines for extracting structured causal knowledge from unstructured industrial data in an Industry 4.0 context.",
    highlights: [
      "Designed and experimented with NeoOLAF, a multi-agent architecture for iterative ontology and knowledge graph construction",
      "Built data-processing pipelines for causal modeling from unstructured industrial documents",
      "Studied and optimized fine-tuning strategies for LLMs targeting causal structure extraction",
      "Applied research methods to bridge scientific work and industrial deployment needs",
    ],
    technologies: ["Python", "LangChain", "LangGraph", "Knowledge Graphs", "LLMs"],
  },
  {
    id: 2,
    title: "AI Engineer",
    company: "Epitome",
    companyFull: "Epitome Advisory",
    location: "Casablanca, Morocco",
    period: "Jul 2025 - Sep 2025",
    type: "internship" as const,
    description:
      "Designed and evaluated intelligent personalization systems for digital learning experiences.",
    highlights: [
      "Built a hybrid recommendation engine for personalized learning journeys",
      "Measured the impact of intelligent agents on engagement, contributing to a 20% lift in click-through rate",
      "Set up production monitoring and performance evaluation with Docker, FastAPI, Prometheus, and Grafana",
    ],
    technologies: ["Python", "FastAPI", "Docker", "Prometheus", "Grafana"],
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "Smartflow Technologies",
    companyFull: "Smartflow Technologies",
    location: "Agadir, Morocco",
    period: "Apr 2023 - Jun 2023",
    type: "internship" as const,
    description:
      "Worked on optimization and anomaly detection problems for urban logistics operations.",
    highlights: [
      "Implemented combinatorial optimization algorithms for route planning",
      "Analyzed GPS data with DBSCAN clustering to detect abnormal behavior",
      "Designed a real-time alerting system that helped reduce fuel costs by 15%",
    ],
    technologies: ["Python", "DBSCAN", "Optimization", "Data Analysis"],
  },
  {
    id: 4,
    title: "Web Developer",
    company: "DevoSoft",
    companyFull: "DevoSoft",
    location: "Safi, Morocco",
    period: "Jul 2022 - Aug 2022",
    type: "internship" as const,
    description:
      "Built internal business software with a focus on reliability, SQL performance, and secure user workflows.",
    highlights: [
      "Developed an automated invoicing system for generating, tracking, and archiving client invoices",
      "Optimized SQL performance through indexing and query refactoring",
      "Implemented a responsive interface with role management and secure authentication",
    ],
    technologies: ["SQL", "Web Development", "Authentication", "Responsive UI"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Engineering Degree",
    field: "Data Science, Big Data & Artificial Intelligence",
    institution:
      "National Higher School of Artificial Intelligence and Data Science (ENSIASD)",
    location: "Taroudant, Morocco",
    period: "Sep 2023 - Present",
    description:
      "Engineering curriculum focused on machine learning, data science, and modern AI systems.",
    highlights: [
      "Specialization in AI, data engineering, and applied machine learning",
      "Current academic home for research work in LLMs, RAG, and knowledge extraction",
    ],
  },
  {
    id: 2,
    degree: "University Diploma of Technology",
    field: "Decision Informatics",
    institution: "Higher School of Technology",
    location: "Essaouira, Morocco",
    period: "Sep 2021 - Jun 2023",
    description:
      "Foundational training in information systems, data analysis, and software development.",
    highlights: [
      "Built a strong base in databases, decision-support systems, and software engineering",
    ],
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
