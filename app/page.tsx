"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveHorizontal,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  tags: string[];
  impact: string[];
  kind: "reporting" | "logistics" | "media" | "benefits";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Enterprise Reporting Platform",
    eyebrow: "Data products / B2B SaaS",
    subtitle: "Turning complex reporting requirements into a scalable frontend experience.",
    tags: ["Frontend architecture", "Reusable components", "Data visualization", "Performance optimization"],
    impact: ["40% performance improvement", "20% faster feature development"],
    kind: "reporting",
  },
  {
    number: "02",
    title: "Shipping & Operations Platform",
    eyebrow: "Logistics / Operational tooling",
    subtitle: "Making complex logistics operations easier to monitor.",
    tags: ["React", "Modular architecture", "Google integrations", "CI/CD"],
    impact: ["One operational view across 12 markets", "Fewer hand-offs between teams"],
    kind: "logistics",
  },
  {
    number: "03",
    title: "AI Media Platform",
    eyebrow: "Media / AI tooling",
    subtitle: "Building interfaces for real-time media processing.",
    tags: ["React", "Redux", "Context API", "Real-time media processing"],
    impact: ["Clearer processing feedback", "A faster path from asset to output"],
    kind: "media",
  },
  {
    number: "04",
    title: "Employee Benefits Platform",
    eyebrow: "Internal systems / Full-stack",
    subtitle: "Making an enterprise benefits workflow feel less enterprise.",
    tags: ["Full-stack development", "Internal applications", "Maintenance", "Developer mentoring"],
    impact: ["A dependable internal tool", "A stronger baseline for the team"],
    kind: "benefits",
  },
];

const thinkingCards = [
  {
    number: "01",
    title: "Start with the user",
    text: "Requirements are only the starting point. The useful question is what someone needs to understand, decide, or do next.",
    symbol: "→",
  },
  {
    number: "02",
    title: "Design for change",
    text: "A good interface system makes the next feature easier to build, not just the current screen easier to ship.",
    symbol: "↗",
  },
  {
    number: "03",
    title: "Performance is UX",
    text: "Every loading state, layout shift, and unnecessary request changes how a product feels. Speed is part of the interface.",
    symbol: "◌",
  },
  {
    number: "04",
    title: "Own the outcome",
    text: "I care about the last mile: the handoff, the edge case, the metric, and whether the work actually helps the team move.",
    symbol: "↘",
  },
];

const toolGroups = [
  {
    id: "interfaces",
    label: "Interfaces",
    index: "01",
    icon: Layers3,
    description: "The layer people touch, trust, and remember.",
    items: ["React.js", "Next.js", "TypeScript", "TanStack"],
  },
  {
    id: "architecture",
    label: "Architecture",
    index: "02",
    icon: Sparkles,
    description: "Systems that make complexity legible and change survivable.",
    items: ["Component-Based Design", "Modular Architecture", "Layered Architecture", "Software Design Patterns", "Clean Code"],
  },
  {
    id: "performance",
    label: "Performance",
    index: "03",
    icon: Zap,
    description: "Less waiting, less work, more confidence in every interaction.",
    items: ["Lazy Loading", "Code Splitting", "Bundle Optimization", "Rendering Optimization"],
  },
  {
    id: "backend",
    label: "Backend",
    index: "04",
    icon: CircleDot,
    description: "Reliable seams between the interface and the systems behind it.",
    items: ["Node.js", "Express.js", "REST APIs", "Transactions"],
  },
  {
    id: "tools",
    label: "Tools",
    index: "05",
    icon: MoveHorizontal,
    description: "Practical feedback loops for shipping with care.",
    items: ["Git", "Docker", "Postman", "Lighthouse", "NVDA"],
  },
];

const experience = [
  {
    company: "PwC ETIC",
    role: "Full Stack Developer",
    date: "2025 — Present",
    location: "Cairo / Hybrid",
    impact: "Building product-grade interfaces and reliable services for complex enterprise workflows.",
    detail: "Working across the stack while staying close to the interaction layer: shaping UI architecture, collaborating on delivery, and making the system easier to evolve.",
  },
  {
    company: "Fincart",
    role: "Frontend Lead",
    date: "2023 — 2024",
    location: "Remote",
    impact: "Led frontend direction for a product that needed to move quickly without losing cohesion.",
    detail: "Introduced reusable patterns and clearer implementation rituals so new features could feel consistent from the first screen to the last state.",
  },
  {
    company: "Scaleflex",
    role: "Remote Frontend Developer",
    date: "2022 — 2024",
    location: "Remote",
    impact: "Turned media-heavy product requirements into responsive, resilient interfaces.",
    detail: "Partnered with product and engineering to make complex asset workflows easier to understand, faster to operate, and more maintainable.",
  },
  {
    company: "Orange Business Services",
    role: "Fullstack Developer",
    date: "2019 — 2021",
    location: "Cairo",
    impact: "Built and maintained internal enterprise applications used by distributed teams.",
    detail: "A formative full-stack role: learning the value of clear APIs, dependable maintenance, thoughtful reviews, and sharing context with other developers.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MagneticLink({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) {
  return (
    <motion.a
      href={href}
      className={`button ${secondary ? "button--secondary" : ""}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.7} />
    </motion.a>
  );
}

function SectionMarker({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return (
    <div className={`section-marker ${light ? "section-marker--light" : ""}`}>
      <span>{number}</span>
      <span className="marker-line" />
      <span>{label}</span>
    </div>
  );
}

function ArchitectureMap() {
  const [active, setActive] = useState("UI Architecture");
  const reduceMotion = useReducedMotion();
  const nodes = [
    { title: "Design", note: "intent", className: "arch-node--1", detail: "Find the signal before shaping the screen." },
    { title: "UI Architecture", note: "structure", className: "arch-node--2", detail: "Create patterns that hold up beyond the first release." },
    { title: "Components", note: "reuse", className: "arch-node--3", detail: "Make the right thing easy to repeat." },
    { title: "APIs", note: "contract", className: "arch-node--4", detail: "Keep the seams between systems dependable." },
    { title: "Performance", note: "feedback", className: "arch-node--5", detail: "Treat speed as a product decision, not a cleanup task." },
    { title: "Product", note: "outcome", className: "arch-node--6", detail: "Ship something that earns its place in the workflow." },
  ];
  const activeNode = nodes.find((node) => node.title === active) ?? nodes[1];

  return (
    <div className="architecture-map" role="region" aria-label="Interactive frontend architecture map">
      <div className="map-topline">
        <span>ARCHITECTURE / 06 NODES</span>
        <span className="live-status"><i /> live system</span>
      </div>
      <svg className="architecture-lines" viewBox="0 0 600 560" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d9ff54" stopOpacity="0.12" />
            <stop offset="48%" stopColor="#d9ff54" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9ff54" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path className="arch-path" d="M 98 112 C 178 112, 198 170, 270 170 S 350 238, 420 238 S 473 312, 510 312" />
        <path className="arch-path arch-path--secondary" d="M 270 170 C 238 258, 210 310, 196 392 S 216 470, 302 486" />
        <path className="arch-path arch-path--secondary" d="M 420 238 C 388 318, 380 384, 438 440 S 480 476, 510 486" />
        {!reduceMotion && <circle className="flow-orb flow-orb--one" r="4" fill="#d9ff54" />}
        {!reduceMotion && <circle className="flow-orb flow-orb--two" r="3" fill="#d9ff54" />}
      </svg>
      {nodes.map((node, index) => (
        <button
          key={node.title}
          className={`arch-node ${node.className} ${active === node.title ? "is-active" : ""}`}
          onClick={() => setActive(node.title)}
          aria-pressed={active === node.title}
        >
          <span className="arch-node-index">0{index + 1}</span>
          <span className="arch-node-title">{node.title}</span>
          <span className="arch-node-note">{node.note}</span>
        </button>
      ))}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.title}
          className="architecture-detail"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="detail-kicker">NOW EXPLORING</span>
          <strong>{activeNode.title}</strong>
          <p>{activeNode.detail}</p>
        </motion.div>
      </AnimatePresence>
      <div className="map-footer-label"><span>01</span> user signal <span>→</span> <span>06</span> product outcome</div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeTool, setActiveTool] = useState("interfaces");
  const [expandedExperience, setExpandedExperience] = useState(0);
  const activeProjectData = projects[activeProject];
  const activeToolData = toolGroups.find((group) => group.id === activeTool) ?? toolGroups[0];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sara Zoarob home">
          <span className="brand-mark">SZ</span>
          <span>Sara Zoarob</span>
        </a>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#approach" onClick={closeMenu}>Approach <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="header-contact" href="mailto:sara.zoarob@gmail.com">
          Available for select work <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
        >
          <span className="menu-toggle-label">{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Full Stack Software Engineer <i>—</i> Frontend Focused
            </p>
            <h1>
              I build interfaces that feel <em>simple,</em> <span>even when the systems behind them aren&apos;t.</span>
            </h1>
            <p className="hero-summary">
              I work across the stack to turn complex product requirements into clear, durable, and genuinely useful digital experiences.
            </p>
            <div className="hero-ctas">
              <MagneticLink href="#work">View my work</MagneticLink>
              <MagneticLink href="#contact" secondary>
                Let&apos;s talk
              </MagneticLink>
            </div>
            <div className="hero-stack">
              <span>React</span><i>·</i>
              <span>TypeScript</span><i>·</i>
              <span>Next.js</span><i>·</i>
              <span>Node.js</span>
            </div>
          </Reveal>
          <Reveal className="hero-visual-wrap" delay={0.15}>
            <ArchitectureMap />
          </Reveal>
        </div>
        <div className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDownRight size={17} />
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-pad">
          <div className="about-grid">
            <Reveal className="about-aside">
              <span>About</span>
              <span>2025</span>
              <span>Cairo, Egypt</span>
            </Reveal>
            <div>
              <Reveal>
                <h2>
                  I care about the <span>craft</span> of building digital products.
                </h2>
                <p className="about-lead">
                  The best interfaces disappear. They don&apos;t announce themselves or demand your attention—they simply get out of your way and let you do what you came to do.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  I&apos;ve spent years learning what makes an interface feel good: consistency, clarity, and the kind of attention to detail that users rarely notice until it&apos;s missing. I design systems, not screens—thinking about how components scale, how patterns hold up, and how the next developer will understand what I built.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Working across the stack keeps me grounded. I see firsthand how frontend decisions ripple through APIs and databases, and how backend constraints shape what&apos;s possible in the browser. That perspective makes me a better builder.
                </p>
                <a className="text-link" href="#contact">
                  Chat about a project <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="metrics-grid">
            <Reveal className="metric-item" delay={0}>
              <strong>
                6<span>+</span>
              </strong>
              <span>Years shipping production code</span>
            </Reveal>
            <Reveal className="metric-item" delay={0.08}>
              <strong>
                4<span>+</span>
              </strong>
              <span>Companies & early-stage teams</span>
            </Reveal>
            <Reveal className="metric-item" delay={0.16}>
              <strong>
                12<span>+</span>
              </strong>
              <span>Major product initiatives led</span>
            </Reveal>
            <Reveal className="metric-item" delay={0.24}>
              <strong>
                100<span>%</span>
              </strong>
              <span>Committed to clear code</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-intro-row">
          <Reveal>
            <h2>
              Work <span>I&apos;ve led</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="section-intro-note">
            <p>
              These are the projects that shaped how I think about interface architecture, scaling teams, and shipping product that actually matters.
            </p>
            <span className="case-study-count">
              <i>04</i> case studies
            </span>
          </Reveal>
        </div>

        <div className="projects-layout">
          <div className="project-selector">
            {projects.map((project, idx) => (
              <motion.button
                key={project.number}
                className={`project-tab ${activeProject === idx ? "is-active" : ""}`}
                onClick={() => setActiveProject(idx)}
                whileHover={{ x: 4 }}
              >
                <span>{project.number}</span>
                <span>{project.title}</span>
                <ChevronRight size={16} />
              </motion.button>
            ))}
          </div>

          <Reveal className="project-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectData.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="project-detail-inner"
              >
                <div>
                  <span className="project-eyebrow">{activeProjectData.eyebrow}</span>
                  <div className="project-copy">
                    <h3>{activeProjectData.title}</h3>
                    <p className="project-subtitle">{activeProjectData.subtitle}</p>
                  </div>
                  <div className="project-tags">
                    {activeProjectData.tags.map((tag) => (
                      <span key={tag}>
                        <i /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="impact-block">
                    <span className="impact-label">Impact & outcomes</span>
                    {activeProjectData.impact.map((item, i) => (
                      <div className="impact-line" key={i}>
                        <Check size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      <section className="about-section" id="approach">
        <div className="section-pad">
          <Reveal>
            <h2>
              My <span>approach</span>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginTop: "64px" }}>
            {thinkingCards.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "12px", color: "var(--muted-dark)", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase" }}>
                      {card.number}
                    </span>
                    <span style={{ fontSize: "18px", color: "var(--lime)" }}>{card.symbol}</span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "600", margin: "8px 0 0", letterSpacing: "-.03em", lineHeight: 1.2 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.5, margin: 0 }}>
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="toolkit">
        <Reveal>
          <h2>
            Toolkit <span>& capabilities</span>
          </h2>
        </Reveal>

        <div className="projects-layout" style={{ marginTop: "80px" }}>
          <div className="project-selector">
            {toolGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.button
                  key={group.id}
                  className={`project-tab ${activeTool === group.id ? "is-active" : ""}`}
                  onClick={() => setActiveTool(group.id)}
                  whileHover={{ x: 4 }}
                >
                  <span>{group.index}</span>
                  <span>{group.label}</span>
                  <ChevronRight size={16} />
                </motion.button>
              );
            })}
          </div>

          <Reveal className="project-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeToolData.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65, maxWidth: "500px", marginBottom: "32px" }}>
                  {activeToolData.description}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
                  {activeToolData.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "12px 16px",
                        border: "1px solid var(--line)",
                        borderRadius: "4px",
                        fontSize: "13px",
                        color: "var(--paper)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      <section className="work-section section-pad" id="experience">
        <Reveal>
          <h2>
            Experience <span>& history</span>
          </h2>
        </Reveal>

        <div style={{ maxWidth: "var(--max-width)", margin: "80px auto 0" }}>
          {experience.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 0.1}>
              <motion.div
                style={{
                  paddingBottom: "32px",
                  borderBottom: "1px solid var(--line)",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedExperience(expandedExperience === idx ? -1 : idx)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 8px", letterSpacing: "-.03em" }}>
                      {exp.company}
                    </h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", margin: "0 0 12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".05em" }}>
                      {exp.role}
                    </p>
                    <p style={{ fontSize: "14px", color: "var(--paper)", lineHeight: 1.5, margin: "0 0 16px" }}>
                      {exp.impact}
                    </p>
                    <AnimatePresence>
                      {expandedExperience === idx && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: "0" }}
                        >
                          {exp.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                    <p style={{ fontSize: "11px", color: "var(--muted-dark)", margin: "0 0 8px", fontWeight: "600", textTransform: "uppercase", letterSpacing: ".08em" }}>
                      {exp.date}
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--muted-dark)", display: "flex", alignItems: "center", gap: "6px", justifyContent: "flex-end", margin: 0 }}>
                      <MapPin size={13} /> {exp.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section" id="contact">
        <div className="section-pad">
          <Reveal>
            <h2>
              Let&apos;s <span>talk</span>
            </h2>
          </Reveal>

          <div style={{ maxWidth: "600px", marginTop: "64px" }}>
            <Reveal delay={0.1}>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65, marginBottom: "32px" }}>
                I&apos;m always interested in meaningful work: products that solve real problems, teams that care about craft, and projects where the technical challenges are inseparable from the user experience.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <a
                  href="mailto:sara.zoarob@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "var(--lime)",
                    textDecoration: "none",
                    fontWeight: "600",
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                  }}
                >
                  <Mail size={18} /> sara.zoarob@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/sarazoarob"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "var(--lime)",
                    textDecoration: "none",
                    fontWeight: "600",
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                  }}
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "64px 0 32px", marginTop: "120px" }}>
        <div className="section-pad" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <Reveal>
            <p style={{ fontSize: "12px", color: "var(--muted-dark)", margin: 0, letterSpacing: ".08em", textTransform: "uppercase" }}>
              © 2025 Sara Zoarob. Built with React, Next.js, and Framer Motion.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#top" style={{ fontSize: "11px", color: "var(--muted)", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".08em" }}>
                Back to top
              </a>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}