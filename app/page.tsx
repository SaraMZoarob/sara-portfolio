"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveHorizontal,
  Play,
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
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sara Zoarob home"><span className="brand-mark">SZ</span><span>Sara Zoarob</span></a>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#approach" onClick={closeMenu}>Approach <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="#contact" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <a className="header-contact" href="mailto:sara.zoarob@gmail.com">Available for select work <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="main-navigation" aria-expanded={menuOpen}><span className="menu-toggle-label">{menuOpen ? "Close" : "Menu"}</span>{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Full Stack Software Engineer <i>—</i> Frontend Focused</p>
            <h1>I build interfaces that feel <em>simple,</em> <span>even when the systems behind them aren't.</span></h1>
            <p className="hero-summary">I work across the stack to turn complex product requirements into clear, durable, and genuinely useful digital experiences.</p>
            <div className="hero-ctas"><MagneticLink href="#work">View my work</MagneticLink><MagneticLink href="#contact" secondary>Let's talk</MagneticLink></div>
            <div className="hero-stack"><span>React</span><i>·</i><span>TypeScript</span><i>·</i><span>Next.js</span><i>·</i><span>Node.js</span></div>
          </Reveal>
          <Reveal className="hero-visual-wrap" delay={0.15}><ArchitectureMap /></Reveal>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
      </section>
    </main>
  );
}