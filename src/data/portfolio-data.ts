// ============================================================================
// Portfolio Data — Single Source of Truth
// Update this file to change any content on the site.
// ============================================================================

import type {
  PersonalInfo,
  HeroContent,
  TechCategory,
  Project,
  Experience,
  Education,
  Achievement,
  Certification,
  NavItem,
} from "@/types";

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Connect", href: "#connect" },
];

// ---------------------------------------------------------------------------
// Personal Information
// ---------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  name: "Parth Borkute",
  role: "AI Engineer • Machine Learning Engineer • Data Scientist",
  location: "Nagpur, India",
  email: "parthborkute20@gmail.com",
  github: "https://github.com/Krysis23",
  linkedin: "http://www.linkedin.com/in/parth-borkute-735163406",
  leetcode: "https://leetcode.com/u/VrECp26GzS/",
  domain: "https://parthborkute.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/Krysis23", icon: "Github" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/parth-borkute-735163406", icon: "Linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/VrECp26GzS/", icon: "Code2" },
    { name: "Email", url: "mailto:parthborkute20@gmail.com", icon: "Mail" },
  ],
};

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
export const heroContent: HeroContent = {
  headline: "Building Production-Ready AI Applications.",
  subheading:
    "AI Engineer and Data Science undergraduate passionate about Machine Learning, Generative AI, Computer Vision, and scalable backend systems.",
  rotatingTexts: [
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Scientist",
    "Computer Vision Engineer",
    "Full-Stack ML Developer",
  ],
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary", icon: "ArrowDown" },
    { label: "Download Resume", href: "/resume.pdf", variant: "secondary", icon: "Download", external: true },
    { label: "GitHub", href: "https://github.com/Krysis23", variant: "outline", icon: "Github", external: true },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/parth-borkute-735163406", variant: "ghost", icon: "Linkedin", external: true },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const aboutContent = {
  paragraphs: [
    "I'm a Data Science undergraduate at Ramdeobaba University with a 9.17 CGPA, driven by a deep passion for building production-grade AI systems that solve real-world problems. My work spans the full ML lifecycle — from research and experimentation to deployment and monitoring.",
    "I specialize in Machine Learning, Deep Learning, Generative AI, Large Language Models, and Computer Vision. I'm equally comfortable designing RAG pipelines with vector search as I am building FastAPI backends and deploying containers on Google Cloud Run.",
    "What sets me apart is my end-to-end approach: I enjoy taking ideas from concept to deployment, ensuring every system I build is not just accurate, but also scalable, maintainable, and production-ready.",
  ],
  highlights: [
    { label: "Degree", value: "B.Tech Data Science" },
    { label: "CGPA", value: "9.17 / 10" },
    { label: "Focus", value: "Production AI Systems" },
    { label: "Approach", value: "Concept → Deployment" },
  ],
  interests: [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Large Language Models",
    "Computer Vision",
    "Backend Development",
    "Cloud Deployment",
  ],
};

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------
export const techStack: TechCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    color: "indigo",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    color: "emerald",
    skills: [
      { name: "Scikit-learn" },
      { name: "PyTorch" },
      { name: "XGBoost" },
    ],
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    color: "emerald",
    skills: [
      { name: "YOLOv8" },
      { name: "OpenCV" },
      { name: "U-Net" },
      { name: "Albumentations" },
    ],
  },
  {
    category: "Generative AI",
    icon: "Sparkles",
    color: "violet",
    skills: [
      { name: "RAG" },
      { name: "Gemini API" },
      { name: "Claude API" },
      { name: "Ollama" },
      { name: "HyDE" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "cyan",
    skills: [
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "amber",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],
  },
  {
    category: "Cloud & Deployment",
    icon: "Cloud",
    color: "blue",
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "Data Science",
    icon: "BarChart3",
    color: "rose",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Plotly" },
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    color: "zinc",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Cursor" },
      { name: "VS Code" },
      { name: "GitHub Copilot" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Featured Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "ca-assistant",
    title: "AI-Powered CA Assistant",
    description:
      "Production-ready financial AI assistant combining Gemini Vision with Retrieval-Augmented Generation for comprehensive tax and financial advisory.",
    longDescription:
      "A sophisticated financial AI assistant that leverages Google's Gemini Vision API for document analysis and a custom RAG pipeline for knowledge retrieval. The system processes 8,000+ ICAI document chunks using HyDE (Hypothetical Document Embeddings) for superior retrieval quality, bge-m3 embeddings for semantic search, and Cross-Encoder reranking for precision. A custom Python Tax Engine handles complex Indian tax calculations with 100% accuracy. Deployed on Google Cloud Run via FastAPI for production scalability.",
    highlights: [
      "Gemini Vision for document analysis",
      "8K+ ICAI knowledge chunks",
      "HyDE retrieval strategy",
      "bge-m3 embeddings",
      "Cross-Encoder reranking",
      "Custom Python Tax Engine",
      "FastAPI backend",
      "Google Cloud Run deployment",
    ],
    techStack: ["Python", "FastAPI", "Gemini API", "RAG", "bge-m3", "Cross-Encoder", "Google Cloud Run", "Docker"],
    metrics: [
      { label: "Knowledge Chunks", value: "8,000+" },
      { label: "Tax Accuracy", value: "100%" },
    ],
    githubUrl: "https://github.com/Krysis23/CA_Agent",
    featured: true,
    challenges: [
      "Optimizing retrieval quality across 8,000+ heterogeneous financial document chunks with varying formats and terminology",
      "Building a tax calculation engine that handles edge cases in Indian tax law with perfect accuracy",
      "Balancing latency and quality in the multi-stage retrieval pipeline (embedding → retrieval → reranking)",
    ],
    lessons: [
      "HyDE dramatically improves retrieval quality for domain-specific queries by generating hypothetical answers first",
      "Cross-Encoder reranking is essential for precision in financial/legal domains where subtle differences matter",
      "Production deployment requires careful attention to cold start times and memory management on Cloud Run",
    ],
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving Perception System",
    description:
      "Multi-task computer vision pipeline combining object detection and semantic segmentation for autonomous driving scenarios.",
    longDescription:
      "A comprehensive perception system for autonomous driving built from scratch using PyTorch. The pipeline combines YOLOv8 for real-time object detection trained on the BDD100K dataset with a custom U-Net architecture built from scratch featuring a Feature Pyramid Network for multi-scale semantic segmentation. The system leverages mixed precision training (AMP) to reduce training time from ~2 hours per epoch to ~22 minutes per epoch — a 5x speedup. Includes a Gradio interface for real-time inference visualization.",
    highlights: [
      "YOLOv8 object detection",
      "U-Net built from scratch",
      "Feature Pyramid Network",
      "BDD100K dataset",
      "PyTorch",
      "OpenCV",
      "Gradio interface",
      "Mixed Precision Training (AMP)",
    ],
    techStack: ["Python", "PyTorch", "YOLOv8", "U-Net", "OpenCV", "Gradio", "BDD100K"],
    metrics: [
      { label: "Dataset", value: "BDD100K" },
      { label: "Training Speedup", value: "5× with AMP" },
    ],
    githubUrl: "https://github.com/Krysis23/Multi_Task_Percpetion",
    featured: true,
    challenges: [
      "Building U-Net from scratch with Feature Pyramid Network required deep understanding of encoder-decoder architectures",
      "Training on BDD100K's large-scale dataset demanded efficient data loading and memory management",
      "Achieving real-time inference speeds while maintaining detection accuracy across diverse driving scenarios",
    ],
    lessons: [
      "Mixed precision training (AMP) provides massive speedups with negligible quality loss — essential for large-scale training",
      "Feature Pyramid Networks are crucial for detecting objects at multiple scales in driving scenarios",
      "Gradio provides an excellent prototyping interface for computer vision model evaluation",
    ],
  },
  {
    id: "data-analytics",
    title: "AI-Powered Data Analytics Platform",
    description:
      "AI analytics platform enabling automatic data cleaning, transformation, and natural language analytics powered by Claude.",
    longDescription:
      "An end-to-end data analytics platform that automates the tedious parts of data analysis. The platform features a 9-step automated preprocessing pipeline for data cleaning and transformation, paired with Claude API integration for natural language querying. Users can upload datasets and ask questions in plain English, receiving Plotly visualizations and statistical insights. Dockerized and deployed with GitHub Actions CI/CD.",
    highlights: [
      "Claude API integration",
      "Plotly visualizations",
      "Docker containerization",
      "GitHub Actions CI/CD",
      "Flask backend",
      "9-step preprocessing pipeline",
    ],
    techStack: ["Python", "Flask", "Claude API", "Plotly", "Docker", "GitHub Actions", "Pandas"],
    metrics: [
      { label: "Preprocessing Steps", value: "9-step pipeline" },
      { label: "Deployment", value: "Dockerized CI/CD" },
    ],
    githubUrl: "https://github.com/Krysis23/AI-Powered-Analytics-Dashboard",
    featured: true,
    challenges: [
      "Designing a preprocessing pipeline flexible enough to handle diverse dataset formats and quality levels",
      "Translating natural language queries into accurate data operations via Claude API",
      "Building reliable CI/CD with GitHub Actions for automated testing and deployment",
    ],
    lessons: [
      "LLMs excel at translating natural language to structured queries when given proper context and constraints",
      "A robust preprocessing pipeline is more valuable than a complex model — data quality is everything",
      "Docker + GitHub Actions creates a seamless deployment workflow that eliminates 'works on my machine' issues",
    ],
  },
  {
    id: "magicml",
    title: "MagicML",
    description:
      "AutoML platform supporting multiple machine learning algorithms with automated hyperparameter tuning and model comparison.",
    longDescription:
      "MagicML is an AutoML platform that democratizes machine learning by automating the model selection and tuning process. Users upload their dataset, and the platform automatically runs 6+ ML algorithms with GridSearchCV hyperparameter optimization through Scikit-learn Pipelines. The system compares model performance and provides the best model serialized via Joblib for production use.",
    highlights: [
      "Scikit-learn Pipelines",
      "GridSearchCV optimization",
      "6+ ML algorithms",
      "Joblib model serialization",
    ],
    techStack: ["Python", "Scikit-learn", "GridSearchCV", "Joblib", "Pandas", "NumPy"],
    metrics: [
      { label: "Algorithms", value: "6+" },
      { label: "Optimization", value: "GridSearchCV" },
    ],
    githubUrl: "https://github.com/Krysis23/MAGIC_ML",
    featured: true,
    challenges: [
      "Designing a pipeline architecture that cleanly handles preprocessing, feature engineering, and model training",
      "Managing computational costs of exhaustive grid search across multiple algorithm families",
    ],
    lessons: [
      "Scikit-learn Pipelines are incredibly powerful for building reproducible ML workflows",
      "AutoML systems need careful UX design to remain accessible to non-technical users",
    ],
  },
  {
    id: "ipl-analytics",
    title: "IPL Analytics Pipeline",
    description:
      "End-to-end SQL analytics and ETL pipeline for comprehensive cricket data analysis and visualization.",
    longDescription:
      "A complete data engineering and analytics project focused on IPL cricket data. The pipeline implements ETL processes to clean, transform, and load cricket match data into a structured database. Features complex SQL queries for performance analytics, player comparisons, team statistics, and match predictions based on historical data.",
    highlights: [
      "End-to-end ETL pipeline",
      "Complex SQL analytics",
      "Data visualization",
      "Performance metrics",
    ],
    techStack: ["Python", "SQL", "PostgreSQL", "Pandas", "ETL"],
    metrics: [
      { label: "Pipeline", value: "End-to-end ETL" },
      { label: "Database", value: "PostgreSQL" },
    ],
    githubUrl: "https://github.com/Krysis23/IPL_ANALYTICS",
    featured: true,
    challenges: [
      "Handling inconsistencies and missing data across multiple seasons of cricket data",
      "Designing efficient SQL queries for complex multi-table analytics",
    ],
    lessons: [
      "Clean ETL pipelines are the foundation of reliable analytics — invest time in data quality early",
      "SQL remains one of the most powerful tools for data analysis when queries are well-optimized",
    ],
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    id: "low-end-gaming",
    title: "Content Creator & Data-Driven Growth Strategist",
    company: "LOW END GAMING",
    period: "2019 — Present",
    description:
      "Built and grew a YouTube channel from zero to 60,000+ subscribers through data-driven content strategy, A/B testing, and analytics-informed decision making. Applied data science principles to content optimization, audience retention analysis, and growth experimentation.",
    highlights: [
      "Grew channel to 60K+ subscribers organically through data-driven strategy",
      "Achieved 12M+ total views across 200+ carefully optimized videos",
      "Implemented systematic A/B testing for thumbnails, titles, and content formats",
      "Used analytics dashboards for audience retention analysis and content optimization",
      "Applied statistical methods to identify high-performing content patterns",
    ],
    metrics: [
      { label: "Subscribers", value: "60,000+" },
      { label: "Total Views", value: "12M+" },
      { label: "Videos", value: "200+" },
    ],
    icon: "Play",
    url: "https://www.youtube.com/@LOWENDGAMINGYT",
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: Education[] = [
  {
    id: "rbu",
    institution: "Ramdeobaba University",
    degree: "Bachelor of Technology",
    field: "Data Science",
    period: "2022 — 2026",
    grade: "CGPA: 9.17 / 10",
    highlights: [
      "Specialization in Machine Learning and Artificial Intelligence",
      "Consistently in top percentile of the class",
      "Active participant in technical events and hackathons",
    ],
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------
export const achievements: Achievement[] = [
  {
    id: "design-patent",
    title: "Design Patent — AI Financial Document Processor",
    description: "Co-inventor of a Design Patent for an AI-powered financial document processing device, based on the AI-Powered CA Assistant project combining Gemini Vision with RAG for financial advisory.",
    icon: "Award",
    category: "innovation",
  },
  {
    id: "athlete-of-year",
    title: "Athlete of the Year",
    description: "Recognized as the Athlete of the Year at the university level for outstanding performance across multiple sports disciplines.",
    icon: "Trophy",
    category: "sports",
  },
  {
    id: "rtm-university",
    title: "RTM Nagpur University Representative",
    description: "Represented RTM Nagpur University in intercollegiate athletic competitions.",
    icon: "Medal",
    category: "sports",
  },
  {
    id: "state-basketball",
    title: "State Basketball Medalist",
    description: "Earned a medal in state-level basketball championship, demonstrating teamwork, strategy, and competitive excellence.",
    icon: "Medal",
    category: "sports",
  },
  {
    id: "youtube-milestone",
    title: "60K+ YouTube Subscribers",
    description: "Grew LOW END GAMING to 60,000+ subscribers with 12M+ views through data-driven content strategy and consistent quality.",
    icon: "Play",
    category: "content",
  },
  {
    id: "hampta-pass",
    title: "Hampta Pass Trek",
    description: "Completed the challenging Hampta Pass trek at high altitude, pushing physical and mental limits in the Himalayas.",
    icon: "Mountain",
    category: "adventure",
  },
  {
    id: "kedarkantha",
    title: "Kedarkantha Summit",
    description: "Summited Kedarkantha peak, one of the most popular winter treks in India, navigating snow-covered trails at 12,500 ft.",
    icon: "Mountain",
    category: "adventure",
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  {
    id: "python-ds",
    title: "Python Bootcamp",
    issuer: "Professional Certification",
    icon: "Code2",
    color: "indigo",
    url: "https://drive.google.com/file/d/1H6GZlUfFc8AhFADsXmQW0c3c5ut0p3i1/view?usp=sharing",
  },
  {
    id: "ds-foundation",
    title: "Data Science Foundation",
    issuer: "Professional Certification",
    icon: "Brain",
    color: "emerald",
    url: "https://drive.google.com/file/d/1qm_d8TRhNG1qKQP5cxSELMNkp0ardcCQ/view?usp=sharing",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    issuer: "Professional Certification",
    icon: "BarChart3",
    color: "violet",
    url: "https://drive.google.com/file/d/1HrKz9P6H4WbE3CIlrD3LYTMG_jL5pXU0/view?usp=sharing",
  },
  {
    id: "web-dev",
    title: "Web Development",
    issuer: "Professional Certification",
    icon: "Globe",
    color: "amber",
    url: "https://drive.google.com/file/d/1ZrPEFXx_S_Im67E61avE8p2OzcB5jpaN/view?usp=sharing",
  },
];
