export const profile = {
  name: "Syed Saleh",
  role: "Computational Modeling & Data Analytics @ Virginia Tech",
  subtitle: "AI, Data Science, and Applied Machine Learning",
  location: "Ashburn, Virginia",
  email: "salehsyed1010@gmail.com",
  github: "https://github.com/syedsalehdev",
  linkedin: "https://linkedin.com/in/syed-saleh-264134276",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a third-year student at Virginia Tech studying Computational Modeling and Data Analytics — a program built around one idea: that the right model, applied carefully, can make a complicated system legible.",
    "My focus sits at the intersection of machine learning, data engineering, and applied AI. I care less about novelty for its own sake and more about whether a system actually ships — whether it holds up outside a notebook and does something useful for the people who rely on it.",
    "That's shown up in leading small teams through real deployments, not just prototypes, and in building tools end-to-end: from raw data and pipelines to interfaces people actually use.",
  ],
  highlights: [
    { label: "Applied AI systems", detail: "RAG pipelines, LLM workflows, automation" },
    { label: "Real-world leadership", detail: "Teams, nonprofits, and deployed products" },
    { label: "Deployable systems", detail: "Built to ship, not just to demo" },
  ],
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
  org: "Virginia Tech Baseball",
  role: "Student Data Analyst",
  period: "Sep. 2026 — Present",
  current: true,
  points: [
    "Build SQL- and R-based models on TrackMan data for high school recruits, translating raw metrics into scouting reports that support the recruiting process.",
    "Analyze TrackMan data for current players to identify performance weaknesses and inform tailored practice plans with coaching staff.",
    "Prepare opponent scouting reports using SQL and R to support in-game decision-making and player evaluation.",
  ],
},
  {
    org: "South Asian Business Council of Virginia",
    role: "AI & Data Science Intern",
    period: "2025",
    points: [
      "Led a 5-member team building an AI receptionist system for 25 businesses",
      "Built voice-to-text and AI response pipelines on Azure SQL and n8n",
      "Reduced manual scheduling workload by 60% across pilot businesses",
      "Designed a RAG system to make the automation reusable across clients",
    ],
  },
  {
    org: "StudentCoders of Virginia",
    role: "Founder & Co-President",
    period: "2023 — Present",
    points: [
      "Built a nonprofit coding education initiative reaching 250+ students",
      "Led 20+ workshops teaching Python fundamentals",
      "Managed a team of 15+ volunteers and day-to-day operations",
    ],
  },
  {
    org: "Applied Federal Technologies",
    role: "Federal Technology & Contracts Intern",
    period: "2023",
    points: [
      "Analyzed 500+ federal contracts to support go/no-go decisions",
      "Tracked 100+ RFIs and RFPs through the business development pipeline",
      "Researched agencies and partners to inform BD strategy",
    ],
  },
  {
    org: "NASA HUNCH",
    role: "Student Researcher",
    period: "2022",
    points: [
      "Designed a lunar rover wheel prototype",
      "Presented findings to NASA Langley engineers",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  status?: "In Progress";
};

export const projects: Project[] = [
  {
    title: "AI Stock Research Assistant",
    description:
      "An NLP pipeline that reads SEC 10-Q filings and financial news, runs sentiment analysis and embeddings, and produces buy / sell / hold signal generation for S&P 500 stocks.",
    stack: ["Python", "Pandas", "Azure AI", "NLP"],
    href: "https://github.com/syedsalehdev/stockai/blob/main/README.md",
  },
  {
    title: "AI Receptionist System",
    description:
      "A voice automation system handling real-world scheduling for small businesses, combining a RAG pipeline with Azure SQL and n8n for reusable, deployable automation.",
    stack: ["RAG", "Azure SQL", "n8n", "Voice AI"],
    href: "https://github.com/syedsalehdev",
  },
  {
    title: "YouTube to MP3 Converter",
    description:
      "A batch audio-extraction tool with configurable bitrate control, built on yt-dlp and FFmpeg for fast, reliable local conversion.",
    stack: ["Python", "yt-dlp", "FFmpeg"],
    href: "https://github.com/syedsalehdev/youtube2mp3/blob/main/README.md",
  },
  {
    title: "LLVM IR Analyzer",
    description:
      "An in-progress exploration of the LLVM and Clang toolchain, focused on parsing and analyzing intermediate representation for compiler-level insight.",
    stack: ["LLVM", "Clang", "Compilers"],
    status: "In Progress",
    href: "https://github.com/syedsalehdev",
  },
];

export const education = {
  school: "Virginia Tech",
  degree: "B.S. Computational Modeling & Data Analytics",
  gpa: "3.8",
  expected: "May 2028",
  coursework: [
    "Data Structures",
    "Object-Oriented Programming",
    "Linear Algebra",
    "Probability",
    "Multivariable Calculus",
  ],
};
