import repositoryFiles from './repositories.json';
import portfolioFiles from './portfolio-files.json';

export const profile = {
  name: 'Syed Saleh', email: 'salehsyed1010@gmail.com',
  github: 'https://github.com/syedsalehdev',
  linkedin: 'https://linkedin.com/in/syed-saleh-264134276',
  resume: '/syedsalehresume.pdf',
};
export const sections = ['About', 'Projects', 'Awards', 'Resume', 'Skills', 'Contact'] as const;
export type Section = typeof sections[number];
export type RepoFile = { path: string; description: string };
export type Project = {
  id: string; title: string; kind: string; stack: string; repo: string;
  summary: string; paragraphs: string[]; highlights: string[]; files: RepoFile[];
  note?: string; demo?: string;
};
export const projects: Project[] = [
  {
    id: 'portfolio', title: 'This portfolio', kind: 'INTERACTIVE WEB',
    stack: 'Next.js / React / TypeScript / CSS', repo: 'portfolio',
    summary: 'A personal portfolio built as an explorable game menu.',
    paragraphs: [
      'An architectural interface for exploring my work. A persistent menu connects the overview, projects, award, resume, skill profile, and contact information.',
      'Built with the Next.js App Router and React. Project content and annotated file maps live separately from the interface, making future updates straightforward. The city is an original SVG illustration, with locally hosted fonts and no external animation engine.'
    ],
    highlights: ['Keyboard and pointer navigation, with direct links to each section and project.', 'Searchable file walkthroughs that open the corresponding source on GitHub.', 'Responsive layouts, an embedded resume, and accessible reduced-motion support.'],
    files: portfolioFiles,
  },
  {
    id: 'youtube2mp3', title: 'YouTube to MP3', kind: 'PYTHON UTILITY',
    stack: 'Python / yt-dlp / FFmpeg', repo: 'youtube2mp3',
    summary: 'A command-line audio workflow for individual links and batches.',
    paragraphs: ['A Python utility that retrieves the best available audio stream and converts it to MP3 using FFmpeg. It supports a single URL or a text file of links, with configurable output bitrates.', 'The conversion workflow checks prerequisites, validates URLs, cleans filenames, avoids accidental overwrites, and continues a batch when an individual download fails.'],
    highlights: ['Selectable 128, 192, 256, or 320 kbps output.', 'Single-link and batch modes with a configurable output folder.', 'Readable success and error messages for each conversion.'],
    files: repositoryFiles.youtube2mp3,
  },
  {
    id: 'stockai', title: 'StockAI', kind: 'FINANCIAL RESEARCH',
    stack: 'Python / Streamlit / Pandas / SEC EDGAR', repo: 'stockai',
    summary: 'A research dashboard connecting headline sentiment with SEC filings.',
    paragraphs: ['The current public prototype combines cached financial-news labels with live retrieval of a company’s latest SEC 10-Q. A Streamlit dashboard lets visitors explore ticker-level sentiment and inspect filing text.', 'The SEC client resolves the ticker, looks up its latest quarterly filing, and downloads the exact primary document. This corrects the earlier generic index-page approach and keeps document validation visible.'],
    highlights: ['Streamlit dashboard and a separate command-line entry point.', 'Transparent sentiment aggregation with linked headline sources.', 'Targeted tests for SEC client configuration and sentiment summaries.'],
    note: 'Current scope: cached news and simple sentiment averages. No live news feed, trading execution, or validated backtest.',
    demo: 'https://youtu.be/2n7ENayA7ok', files: repositoryFiles.stockai,
  },
  {
    id: 'airedale', title: 'Airedale challenge', kind: 'AWARD-WINNING TEAM PROJECT',
    stack: 'Python / Statistical Analysis / Scenario Modeling', repo: 'airedale-init2winit',
    summary: 'Manufacturing-quality analysis and investment decisions under a $750K budget.',
    paragraphs: ['Team init2winit connected manufacturing, testing, field-service, and warranty records across 3,000 equipment units. The analysis compared failure patterns and investment portfolios under a $750,000 budget.', 'I refined the recommendations and presentation, then presented independently at the November 19, 2026 finals. Our team earned second place. The original analysis and code were team contributions, not my sole work.'],
    highlights: ['Linked evidence across five supplied datasets.', 'Compared 178 affordable investment portfolios and six scenarios.', 'Proposed staged spending with verification before committing to the larger detector investment.'],
    note: 'The dataset contains failed units only. Comparisons describe that sample; savings and ROI are model projections, not measured outcomes.',
    files: repositoryFiles['airedale-init2winit'],
  },
];
export const currentRoles = [
  {
    title: 'Student Data Analyst', organization: 'Virginia Tech Baseball', date: 'Sep. 2026 — Present',
    summary: 'Turning pitch-level data into scouting and player-development insights.',
    points: ['Collect practice TrackMan data and maintain SQL records for a 15-person analytics team.', 'Write R scripts for player and opponent reports using wOBA, pitch-type splits, and pitcher handedness. Evaluate transfers against roster needs.', 'Developing a Python pose-estimation pipeline to identify early pitch-tipping cues from video, with validation on separate recording sessions and annotated coach reports.'],
    note: 'Development target: under three seconds of processing per eligible clip. This is not a measured latency result.',
  },
  {
    title: 'Undergraduate Researcher', organization: 'Virginia Tech / CMDA', date: '2026 — Present',
    summary: 'Studying how compiler optimization affects code similarity after LLM rewriting.',
    points: ['Faculty-funded research under Prof. Kirshanthan Sundararajah. Design and protocol are complete; experiments are underway.', 'Built a Python/Clang pipeline for CodeNet selection, controlled rewrites, -O0/-O2 compilation, sample tests, and LLVM IR feature extraction.', 'Compare opcode-bigram Jaccard similarity with source and simpler IR baselines using top-1 retrieval, mean reciprocal rank, and problem-level bootstrap comparisons.'],
    note: 'The task is retrieval of a recorded original, not proof of AI authorship.',
  },
];
export const experience = [
  {title: 'AI & Data Science Intern', org: 'South Asian Business Council of Virginia', date: 'Aug. 2025 — Dec. 2025', text: 'Led a five-person team through an AI receptionist pilot with four local businesses; 60 of the first 100 calls needed no human escalation. Owned Twilio voice/SMS and n8n calendar workflows, integrated Azure services, and improved availability-query efficiency.'},
  {title: 'Founder & Co-President', org: 'CodeAcademyX', date: 'Sep. 2022 — Jun. 2025', text: 'Taught 40+ students through 20+ Python workshops, managed eight volunteers, and supported 20+ students in completing NeetCode 50. Average scores on the same assessment increased from 3/20 before instruction to 16/20 afterward.'},
  {title: 'Federal Technology & Contracts Intern', org: 'Applied Federal Technologies', date: 'Sep. 2024 — Jan. 2025', text: 'Built a Python/Pandas screening pipeline for 500+ federal opportunities. Maintained 100+ qualified leads in SQL and reviewed requirements across 40+ agencies, refining rankings around company capabilities and feasibility.'},
  {title: 'Student Researcher', org: 'NASA HUNCH Program', date: 'Aug. 2022 — Mar. 2023', text: 'Designed and iterated on a lunar rover wheel prototype and presented the final design to engineers at NASA Langley Research Center.'},
];
// Self-assessed ratings supplied by Syed; displayed as bars without numeric scores.
export const skills = [
 {name:'Python', percent:100, description:'My strongest programming language', detail:'Data pipelines, research tooling, automation, and command-line applications.', improving:false},
 {name:'SQL', percent:80, description:'Strong working proficiency', detail:'TrackMan data management and federal opportunity tracking.', improving:false},
 {name:'R', percent:80, description:'Strong working proficiency', detail:'Player evaluation, statistical reports, and opponent scouting.', improving:false},
 {name:'Azure', percent:80, description:'Strong working proficiency', detail:'AI Foundry, OpenAI, Speech, Search, SQL, and connected workflows.', improving:false},
 {name:'LLVM', percent:76, description:'Working proficiency, actively improving', detail:'Compiler tooling, IR extraction, and code-similarity experiments.', improving:true},
 {name:'JavaScript', percent:70, description:'Working proficiency', detail:'Node.js integrations and web applications.', improving:false},
 {name:'Java', percent:68, description:'Working proficiency', detail:'Object-oriented programming and data structures.', improving:false},
 {name:'C / C++', percent:60, description:'Working proficiency, actively improving', detail:'Low-level programming, compiler experiments, and research programs.', improving:true},
];
