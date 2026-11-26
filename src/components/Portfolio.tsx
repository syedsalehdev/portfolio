'use client';

import { useEffect, useRef, useState } from 'react';
import { profile, sections, projects, currentRoles, experience, skills, type Section, type Project } from '@/lib/data';

function ExternalLink({ href, children, className = '' }: {href: string; children: React.ReactNode; className?: string}) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
}
function Flame() {
  return <svg viewBox="0 0 24 28" width="20" height="24" aria-hidden="true"><path d="M13 1c2 7-5 8-3 13 2-1 3-3 3-5 5 4 8 7 7 12-1 4-4 6-8 6S4 24 4 20c0-5 5-7 3-12 4 1 4 3 4 3 3-4 2-7 2-10Z" fill="currentColor"/><path d="M12 16c2 3 4 4 3 7-1 2-4 2-5 0-1-3 2-4 2-7Z" fill="white"/></svg>;
}
function ProjectDetail({ project, onBack }: {project: Project; onBack: () => void}) {
  const [query, setQuery] = useState('');
  const files = project.files.filter(f => `${f.path} ${f.description}`.toLowerCase().includes(query.toLowerCase()));
  return <article className="project-detail">
    <button className="text-button back-button" onClick={onBack}>Back to projects</button>
    <p className="section-label">{project.kind}</p>
    <h1 tabIndex={-1}>{project.title}</h1>
    <p className="project-stack">{project.stack}</p>
    <p className="lead">{project.summary}</p>
    <div className="project-description">{project.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
    <ul className="feature-list">{project.highlights.map(p => <li key={p}>{p}</li>)}</ul>
    {project.note && <p className="scope-note">{project.note}</p>}
    <div className="action-row"><ExternalLink className="button" href={`${profile.github}/${project.repo}`}>Open repository</ExternalLink>{project.demo && <ExternalLink className="text-button" href={project.demo}>Watch the demo</ExternalLink>}</div>
    <section className="file-section" aria-labelledby="file-heading">
      <div className="file-section-header"><div><h2 id="file-heading">Inside the repository</h2><p>Each filename opens its source on GitHub.</p></div><span className="mono">{project.files.length} files</span></div>
      <label className="file-search"><span>Find a file</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search filenames or descriptions" /></label>
      <p className="search-count" role="status">Showing {files.length} of {project.files.length} files</p>
      <div className="file-list">{files.map(file => <div className="file-row" key={file.path}><ExternalLink href={`${profile.github}/${project.repo}/blob/main/${file.path.split('/').map(encodeURIComponent).join('/')}`}>{file.path}</ExternalLink><p>{file.description}</p></div>)}</div>
      {!files.length && <p className="empty-state">No files match this search. Try a shorter filename or a different term.</p>}
    </section>
  </article>;
}

function About({ navigate }: {navigate: (section: Section, project?: string) => void}) {
  return <>
    <section className="intro" aria-labelledby="intro-title">
      <p className="intro-context">Virginia Tech / Computational Modeling & Data Analytics</p>
      <h1 id="intro-title" className="name" tabIndex={-1}>SYED<br/><span>SALEH</span></h1>
      <p className="intro-description">I build software, work with data,<br className="desktop-break"/> and study what code leaves behind.</p>
      <p className="intro-detail">Applied AI, baseball analytics, and compiler research.<br/>Graduating May 2028. Open to internships.</p>
      <div className="action-row"><button className="button" onClick={() => navigate('Projects')}>Explore my projects</button><button className="text-button" onClick={() => navigate('Resume')}>View my resume</button></div>
      <div className="intro-bottom"><span>Based in Ashburn, Virginia</span><span>Scroll to meet the person behind the work</span></div>
    </section>
    <div className="reading-surface">
      <section className="about-copy"><h2>A little about me</h2><p>I’m studying Computational Modeling & Data Analytics at Virginia Tech. I enjoy work that connects software with a specific problem: helping coaches evaluate players, turning phone calls into scheduling actions, or testing what a compiler preserves when code changes.</p><p>My work spans Python, SQL, R, cloud integrations, and LLVM. I like understanding a system from its inputs through to the decisions someone makes with its output.</p></section>
      <section className="roles" aria-labelledby="roles-heading"><h2 id="roles-heading">Where I’m working now</h2>{currentRoles.map(role => <details className="role" key={role.title}><summary><span><span className="role-org">{role.organization}</span><strong>{role.title}</strong><span className="role-description">{role.summary}</span></span><span className="role-meta">{role.date}<span className="details-label">Read details <span aria-hidden="true">+</span></span></span></summary><div className="role-body"><ul>{role.points.map(p => <li key={p}>{p}</li>)}</ul><p className="scope-note">{role.note}</p></div></details>)}</section>
      <section className="experience"><h2>Experience along the way</h2>{experience.map(item => <div className="experience-row" key={item.org}><p className="mono">{item.date}</p><div><h3>{item.title}</h3><p className="organization">{item.org}</p><p>{item.text}</p></div></div>)}</section>
      <section className="education"><h2>Virginia Tech</h2><p className="lead">B.S. Computational Modeling & Data Analytics</p><p>Expected May 2028</p><p>Coursework: Data Structures & Algorithms, Object-Oriented Programming, Low-Level Programming, Linear Algebra, Discrete Math, Multivariable Calculus, Probability & Statistics.</p></section>
    </div>
  </>;
}

export default function Portfolio() {
  const [active, setActive] = useState<Section>('About');
  const [projectId, setProjectId] = useState<string | null>(null);
  const [showSkillHelp, setShowSkillHelp] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const activeIndex = sections.indexOf(active);
  const project = projects.find(p => p.id === projectId);
  const navigate = (section: Section, id?: string) => {
    window.location.hash = section.toLowerCase() + (id ? `/${id}` : '');
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };
  useEffect(() => {
    const readHash = () => {
      const [section, id] = decodeURIComponent(window.location.hash.slice(1)).split('/');
      const next = sections.find(s => s.toLowerCase() === section) ?? 'About';
      setActive(next); setProjectId(next === 'Projects' && projects.some(p => p.id === id) ? id : null);
      document.title = `${next === 'Projects' && id ? projects.find(p => p.id === id)?.title ?? next : next} | Syed Saleh`;
      if (contentRef.current) contentRef.current.scrollTop = 0;
    };
    readHash(); window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, select, iframe, summary, a') || (target.closest('button') && !target.closest('nav'))) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const focusedSection = navRef.current?.contains(target) ? sections.findIndex(s => s === target.closest('button')?.textContent) : -1;
      const startIndex = focusedSection >= 0 ? focusedSection : activeIndex;
      let next = startIndex;
      if (e.key === 'ArrowDown') next = Math.min(sections.length - 1, startIndex + 1);
      else if (e.key === 'ArrowUp') next = Math.max(0, startIndex - 1);
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = sections.length - 1;
      else if (e.key === 'Escape' && projectId) { e.preventDefault(); window.location.hash = 'projects'; return; }
      else return;
      e.preventDefault(); window.location.hash = sections[next].toLowerCase();
      navRef.current?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, projectId]);

  return <div className={`portfolio-shell section-${active.toLowerCase()}`}>
    <div className="city-backdrop" aria-hidden="true" />
    <a href="#main-content" className="skip-link" onClick={e => {e.preventDefault();contentRef.current?.focus();}}>Skip to content</a>
    <aside className="sidebar">
      <button className="brand" onClick={() => navigate('About')} aria-label="Syed Saleh home"><span className="brand-mark" aria-hidden="true">S/</span><span>SYED SALEH<br/><small>PERSONAL PORTFOLIO</small></span></button>
      <nav ref={navRef} aria-label="Main navigation">{sections.map(section => <button key={section} aria-current={active === section ? 'page' : undefined} onClick={() => navigate(section)}>{section}</button>)}</nav>
      <div className="sidebar-footer"><p>Software, data,<br/>and a different perspective.</p><div className="keyboard-hint"><kbd>UP</kbd><kbd>DOWN</kbd><span>to explore</span></div></div>
    </aside>
    <div className="content-shell">
      <header className="topbar"><span>SYEDSALEH.DEV</span><span>{active === 'Projects' && project ? `PROJECTS / ${project.title.toUpperCase()}` : active.toUpperCase()}</span><a href={`mailto:${profile.email}`}>Let’s connect</a></header>
      <main id="main-content" tabIndex={-1} ref={contentRef} className={`content ${active === 'About' ? 'overview-content' : ''}`}>
        {active === 'About' && <About navigate={navigate}/>}
        {active === 'Projects' && (project ? <div className="page-surface"><ProjectDetail key={project.id} project={project} onBack={() => navigate('Projects')}/></div> : <section className="page-surface project-select"><h1 tabIndex={-1}>Choose a project.</h1><p className="lead">Explore the idea, the work, and the files behind it.</p><div className="project-list">{projects.map(p => <button key={p.id} className={`project-option project-${p.id}`} onClick={() => navigate('Projects', p.id)}><span className="project-art" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/></span><span className="project-option-copy"><span className="section-label">{p.kind}</span><strong>{p.title}</strong><span>{p.summary}</span><small>{p.stack}</small></span><span className="project-open">Explore project</span></button>)}</div></section>)}
        {active === 'Awards' && <section className="page-surface awards"><p className="section-label">NOVEMBER 2026 / VIRGINIA TECH</p><h1 tabIndex={-1}>A team effort.<br/>A solo presentation.</h1><div className="award-hero"><div className="award-place">2<span>ND</span><small>PLACE</small></div><div><h2>Airedale Applied<br/>Intelligence Challenge</h2><p>Engineering track / team init2winit</p><p>At the November 19 finals, I presented our team’s manufacturing analysis and investment recommendations independently. Our team earned second place.</p></div></div><div className="award-facts"><div><strong>3,000</strong><span>equipment units in the analysis</span></div><div><strong>$750K</strong><span>maximum investment budget</span></div></div><p className="award-description">I refined the recommendations and presentation, explaining how the evidence supported our choices, how overlapping benefits were handled, and where the model’s assumptions mattered.</p><button className="button" onClick={() => navigate('Projects', 'airedale')}>Explore the team project</button></section>}
        {active === 'Resume' && <section className="page-surface resume"><div className="resume-header"><div><h1 tabIndex={-1}>The full picture.</h1><p className="lead">Experience, research, and education in one page.</p></div><div className="action-row"><ExternalLink href={profile.resume} className="text-button">Open PDF</ExternalLink><a className="button" href={profile.resume} download="Syed_Saleh_Resume.pdf">Download resume</a></div></div><iframe src={`${profile.resume}#view=FitH`} title="Syed Saleh resume PDF"/><p className="resume-fallback">If your browser does not show the document, use Open PDF or Download resume above.</p></section>}
        {active === 'Skills' && <section className="page-surface skills"><p className="section-label">CHARACTER PROFILE / TECHNICAL SKILLS</p><h1 tabIndex={-1}>Built through practice.</h1><p className="lead">My current skill profile, shaped by the work I do.</p><div className="skill-help-row"><p>Bars reflect my own assessment of proficiency.</p><div className="skill-help"><button aria-expanded={showSkillHelp} aria-controls="skill-help-text" onClick={() => setShowSkillHelp(!showSkillHelp)} aria-label="What does the flame mean?"><Flame/><span className="question-mark">?</span></button>{showSkillHelp && <p id="skill-help-text" role="status">The flame marks skills I’m actively improving through ongoing study and project work.</p>}</div></div><div className="skill-list">{skills.map(skill => <div className={`skill-row ${skill.improving ? 'improving' : ''}`} key={skill.name}><div className="skill-name"><h2>{skill.name}</h2>{skill.improving && <span className="flame-label"><Flame/><span className="sr-only">Actively improving</span></span>}</div><div className="skill-meter" role="img" aria-label={`${skill.name}: ${skill.description}`}><span style={{width:`${skill.percent}%`}}/></div><p>{skill.detail}</p></div>)}</div><p className="skill-footnote">Also in my toolkit: Git, Linux, Pandas, Twilio, n8n, and REST APIs.</p></section>}
        {active === 'Contact' && <section className="page-surface contact"><p className="section-label">LET’S BUILD SOMETHING USEFUL</p><h1 tabIndex={-1}>Have a project<br/>in mind?</h1><p className="lead">I’m open to software engineering, data science, and applied AI internships, as well as conversations about the work.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-links"><ExternalLink href={profile.linkedin}><strong>LinkedIn</strong><span>Experience and professional updates</span></ExternalLink><ExternalLink href={profile.github}><strong>GitHub</strong><span>Source code and project repositories</span></ExternalLink><a href={profile.resume} target="_blank" rel="noopener noreferrer"><strong>Resume</strong><span>Open my one-page resume</span></a><ExternalLink href="https://syedsaleh.dev"><strong>Portfolio</strong><span>syedsaleh.dev</span></ExternalLink></div><div className="contact-location"><p>Ashburn, Virginia</p><p>Virginia Tech / Class of 2028</p></div></section>}
      </main>
      <footer className="page-controls"><button disabled={activeIndex === 0} onClick={() => navigate(sections[activeIndex - 1])}>Previous section</button><span>{active === 'Projects' && project ? 'ESC to return to projects' : 'Select a section to explore'}</span><button disabled={activeIndex === sections.length - 1} onClick={() => navigate(sections[activeIndex + 1])}>Next section</button></footer>
    </div>
  </div>;
}
