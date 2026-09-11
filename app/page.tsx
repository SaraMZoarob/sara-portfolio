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

function ReportingDashboard() {
  return (
    <div className="mockup-window reporting-window">
      <div className="mockup-toolbar">
        <div className="window-dots"><i /><i /><i /></div>
        <span className="window-url">app.northstar / reports / q4-performance</span>
        <span className="window-user">SZ</span>
      </div>
      <div className="report-shell">
        <aside className="report-sidebar">
          <div className="mock-brand"><span /> northstar</div>
          <span className="side-caption">WORKSPACE</span>
          {['Overview', 'Reports', 'Datasets', 'Measures'].map((item, i) => <div className={`side-link ${i === 1 ? 'is-selected' : ''}`} key={item}><span className="side-icon">{['⌂', '↗', '◫', '∑'][i]}</span>{item}</div>)}
          <div className="side-rule" />
          <span className="side-caption">SAVED VIEWS</span>
          <div className="side-link side-link--muted">Revenue pulse <span>···</span></div>
          <div className="side-link side-link--muted">Team velocity <span>···</span></div>
        </aside>
        <div className="report-main">
          <div className="report-head"><div><span className="mock-overline">REPORT / Q4 2024</span><h3>Performance overview</h3></div><button className="mock-button"><span>Export</span> ↓</button></div>
          <div className="filter-row"><span className="filter-pill">All regions <ChevronDown size={12} /></span><span className="filter-pill">Last 90 days <ChevronDown size={12} /></span><span className="filter-pill filter-pill--quiet">+ Add filter</span><span className="updated-label">Updated 4m ago</span></div>
          <div className="kpi-grid">
            {[['Revenue', '$842.6k', '+18.4%', 'up'], ['Active users', '24,892', '+12.8%', 'up'], ['Conversion', '7.24%', '+2.1%', 'up']].map(([label, value, delta], i) => <div className="kpi-card" key={label}><span>{label}</span><strong>{value}</strong><em><ArrowUpRight size={12} /> {delta}</em><div className={`kpi-spark spark-${i}`} /></div>)}
          </div>
          <div className="report-chart-grid">
            <div className="chart-card"><div className="chart-card-head"><div><span className="chart-caption">REVENUE TREND</span><strong>$2.48m <small>total</small></strong></div><span className="chart-legend"><i /> Actual <i className="legend-muted" /> Target</span></div><div className="line-chart"><div className="chart-y-labels"><span>900k</span><span>600k</span><span>300k</span><span>0</span></div><svg viewBox="0 0 440 150" role="img" aria-label="Revenue trend line chart"><path className="chart-grid-line" d="M0 20 H440 M0 63 H440 M0 106 H440 M0 149 H440" /><path className="target-line" d="M0 119 C64 98 76 103 112 86 S172 88 206 74 S275 78 314 52 S383 52 440 27" /><path className="actual-line" d="M0 126 C47 132 72 94 110 106 S169 72 205 89 S257 44 298 68 S347 40 382 50 S413 25 440 38" /><circle cx="440" cy="38" r="4" className="chart-point" /></svg><div className="chart-x-labels"><span>Sep 01</span><span>Sep 15</span><span>Oct 01</span><span>Oct 15</span><span>Nov 01</span></div></div></div>
            <div className="chart-card mix-card"><div className="chart-card-head"><div><span className="chart-caption">REVENUE MIX</span><strong>By segment</strong></div><span className="more-dot">···</span></div><div className="donut-wrap"><div className="donut"><div className="donut-center"><strong>100%</strong><span>mix</span></div></div><div className="donut-legend"><span><i className="dot-lime" /> Enterprise <b>48%</b></span><span><i className="dot-purple" /> Growth <b>32%</b></span><span><i className="dot-gray" /> Starter <b>20%</b></span></div></div></div>
          </div>
          <div className="dataset-row"><div><span className="chart-caption">DATASET</span><strong>Q4 performance data</strong></div><span className="dataset-status"><Check size={12} /> Synced</span><span className="dataset-rows">12,482 rows</span></div>
        </div>
      </div>
    </div>
  );
}

function LogisticsDashboard() {
  return (
    <div className="mockup-window logistics-window">
      <div className="mockup-toolbar"><div className="window-dots"><i /><i /><i /></div><span className="window-url">ops.roadline / control-center</span><span className="window-user">SZ</span></div>
      <div className="logistics-shell">
        <div className="logistics-top"><div><span className="mock-overline">CONTROL CENTER / LIVE</span><h3>Good morning, Amira <span>✦</span></h3></div><div className="logistics-actions"><span className="live-pill"><i /> All systems operational</span><span className="avatar-stack"><i /> <i /> <i /> <b>+8</b></span></div></div>
        <div className="ops-kpis"><div><span>In transit</span><strong>1,284</strong><em>↑ 8.2%</em></div><div><span>On time delivery</span><strong>94.8%</strong><em>↑ 1.6%</em></div><div><span>Exceptions</span><strong className="orange-text">42</strong><em className="orange-text">↓ 12.4%</em></div><div className="ops-spark-wrap"><span>WEEKLY THROUGHPUT</span><div className="ops-bars">{[48, 67, 41, 82, 64, 92, 76, 100, 86, 72].map((bar, i) => <i style={{ height: `${bar}%` }} key={i} />)}</div></div></div>
        <div className="ops-content"><div className="map-card"><div className="map-card-head"><strong>Network activity</strong><span className="map-filter">Today <ChevronDown size={11} /></span></div><div className="map-art"><div className="map-grid" /><svg viewBox="0 0 540 250" preserveAspectRatio="none" aria-label="Abstract shipment routes"><path d="M40 173 C94 145 112 88 185 105 S263 180 316 137 S418 90 500 52" /><path d="M92 218 C164 209 165 135 235 137 S337 190 398 145 S453 128 492 119" /><path d="M40 173 L92 218 L235 137 L316 137 L398 145 L492 119" /></svg><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" /><span className="map-pin pin-four" /><div className="map-tooltip"><span>Shipment #RD-4829</span><strong>Arriving in 18 min</strong><small>Berlin → Prague</small></div><span className="map-city city-one">Berlin</span><span className="map-city city-two">Prague</span><span className="map-city city-three">Vienna</span></div></div><div className="shipment-card"><div className="map-card-head"><strong>Recent shipments</strong><span className="view-all">View all <ArrowRight size={12} /></span></div>{[['RD-4829', 'Berlin → Prague', 'In transit', '18 min'], ['RD-4817', 'Paris → Lyon', 'Delivered', '09:42'], ['RD-4802', 'Milan → Rome', 'Exception', 'Review']].map(([id, route, status, time]) => <div className="shipment-row" key={id}><span className={`shipment-status status-${status.toLowerCase().replace(' ', '-')}`} /><div><strong>{id}</strong><small>{route}</small></div><span className={`shipment-state state-${status.toLowerCase().replace(' ', '-')}`}>{status}</span><time>{time}</time></div>)}</div></div>
        <div className="ops-footer"><span><i className="footer-dot" /> Google Maps sync</span><span><Check size={12} /> Last deploy 24m ago</span><span>API latency <b>120ms</b></span></div>
      </div>
    </div>
  );
}

function MediaDashboard() {
  const [compare, setCompare] = useState(52);
  return (
    <div className="mockup-window media-window">
      <div className="mockup-toolbar"><div className="window-dots"><i /><i /><i /></div><span className="window-url">lumina.ai / enhance / studio</span><span className="window-user">SZ</span></div>
      <div className="media-shell">
        <aside className="media-sidebar"><div className="media-brand"><span className="media-brand-mark">✳</span> lumina</div><span className="side-caption">LIBRARY</span><div className="media-side-link is-selected"><span>▦</span> All assets <b>24</b></div><div className="media-side-link"><span>♡</span> Favorites</div><div className="media-side-link"><span>⌁</span> Recent</div><div className="side-rule" /><span className="side-caption">COLLECTIONS</span><div className="collection-line"><i className="collection-yellow" /> Product launch</div><div className="collection-line"><i className="collection-blue" /> Brand study</div><div className="collection-line"><i className="collection-pink" /> Editorial 2024</div></aside>
        <div className="media-main"><div className="media-head"><div><span className="mock-overline">IMAGE ENHANCEMENT / 04</span><h3>Untitled portrait <span className="processing-pill"><i /> processed</span></h3></div><button className="media-export">Export <ArrowUpRight size={13} /></button></div><div className="media-canvas"><div className="media-image media-image--after"><div className="portrait-shape portrait-shape--back" /><div className="portrait-shape portrait-shape--face" /><div className="portrait-shape portrait-shape--hair" /><div className="portrait-shape portrait-shape--shirt" /><span className="image-state">ENHANCED / 2×</span></div><div className="media-image media-image--before" style={{ width: `${compare}%` }}><div className="portrait-shape portrait-shape--back" /><div className="portrait-shape portrait-shape--face" /><div className="portrait-shape portrait-shape--hair" /><div className="portrait-shape portrait-shape--shirt" /><span className="image-state">ORIGINAL</span></div><div className="compare-line" style={{ left: `${compare}%` }}><span><MoveHorizontal size={13} /></span></div></div><div className="compare-control"><span>Original</span><input aria-label="Compare original and enhanced image" type="range" min="10" max="90" value={compare} onChange={(event) => setCompare(Number(event.target.value))} /><span>Enhanced</span></div><div className="enhance-tools"><div><span className="tool-label">ENHANCEMENT PRESET</span><strong>Editorial clarity</strong></div><div className="enhance-options"><span className="enhance-option is-active">Clarity <b>+24</b></span><span className="enhance-option">Texture <b>+08</b></span><span className="enhance-option">Color <b>+12</b></span></div><span className="processing-time"><Check size={12} /> 1.8s processing</span></div></div>
      </div>
    </div>
  );
}

function BenefitsDashboard() {
  return (
    <div className="mockup-window benefits-window">
      <div className="mockup-toolbar"><div className="window-dots"><i /><i /><i /></div><span className="window-url">people.co / benefits / home</span><span className="window-user">AK</span></div>
      <div className="benefits-shell"><div className="benefits-nav"><div className="benefits-brand">people<span>.</span>co</div><span>My benefits</span><span>Resources</span><span>Support</span><div className="benefit-avatar">AK</div></div><div className="benefits-body"><div className="benefits-greeting"><div><span className="mock-overline">YOUR 2024 PLAN</span><h3>Good to see you, Alex.</h3><p>Everything you need to make the most of your benefits.</p></div><div className="plan-score"><div className="score-ring"><strong>78</strong><span>complete</span></div></div></div><div className="benefit-cards"><div className="benefit-highlight"><div><span>HEALTH COVER</span><strong>Active & covered</strong><p>Your plan is up to date.</p></div><span className="benefit-check"><Check size={16} /></span><div className="benefit-wave" /></div><div className="benefit-mini"><span>Pending action</span><strong>2 items</strong><small>Review by Dec 15 <ArrowRight size={11} /></small></div><div className="benefit-mini"><span>Annual allowance</span><strong>$1,240</strong><small>of $1,500 available <ArrowRight size={11} /></small></div></div><div className="benefit-bottom"><div><span className="chart-caption">YOUR BENEFITS</span><div className="benefit-progress"><span style={{ width: '78%' }} /></div><small>6 of 8 benefits activated</small></div><div className="help-card"><Asterisk size={13} /> Need a hand? <u>Visit support</u></div></div></div></div>
    </div>
  );
}

function ProjectVisual({ kind }: { kind: Project["kind"] }) {
  if (kind === "reporting") return <ReportingDashboard />;
  if (kind === "logistics") return <LogisticsDashboard />;
  if (kind === "media") return <MediaDashboard />;
  return <BenefitsDashboard />;
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
            <h1>I build interfaces that feel <em>simple,</em> <span>even when the systems behind them aren&apos;t.</span></h1>
            <p className="hero-summary">I work across the stack to turn complex product requirements into clear, durable, and genuinely useful digital experiences.</p>
            <div className="hero-ctas"><MagneticLink href="#work">View my work</MagneticLink><MagneticLink href="#contact" secondary>Let&apos;s talk</MagneticLink></div>
            <div className="hero-stack"><span>React</span><i>·</i><span>TypeScript</span><i>·</i><span>Next.js</span><i>·</i><span>Node.js</span></div>
          </Reveal>
          <Reveal className="hero-visual-wrap" delay={0.15}><ArchitectureMap /></Reveal>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-grid">
          <Reveal><SectionMarker number="01" label="A short introduction" light /><div className="about-aside"><span>Based in Cairo</span><span>Working globally</span></div></Reveal>
          <Reveal className="about-copy" delay={0.1}><h2>Engineering is more than <span>making things work.</span></h2><p className="about-lead">It&apos;s making the complexity disappear for the person on the other side of the screen.</p><p>I work across the stack, but my center of gravity is frontend engineering: scalable UI architecture, thoughtful performance, and maintainable systems. I enjoy taking a messy product requirement and finding the interface that makes it feel obvious.</p><a className="text-link text-link--dark" href="#approach">How I think <ArrowRight size={15} /></a></Reveal>
        </div>
        <div className="metrics-grid">
          <div className="metric-item"><strong>5<span>+</span></strong><span>years<br />experience</span></div>
          <div className="metric-item"><strong>40<span>%</span></strong><span>performance<br />improvement</span></div>
          <div className="metric-item"><strong>20<span>%</span></strong><span>faster feature<br />development</span></div>
          <div className="metric-item"><strong>30<span>+</span></strong><span>technical interviews<br />conducted</span></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-intro-row"><Reveal><SectionMarker number="02" label="Selected work" /><h2>Complex products.<br /><span>Clearer experiences.</span></h2></Reveal><Reveal className="section-intro-note" delay={0.1}><p>A closer look at the decisions behind the interface—not just the interface itself.</p><span className="case-study-count">04 <i>/</i> CASE STUDIES</span></Reveal></div>
        <div className="projects-layout">
          <div className="project-selector" role="tablist" aria-label="Project case studies">{projects.map((project, index) => <button key={project.number} className={`project-tab ${activeProject === index ? "is-active" : ""}`} role="tab" aria-selected={activeProject === index} onClick={() => setActiveProject(index)}><span>{project.number}</span><span>{project.title}</span><ChevronRight size={16} /></button>)}</div>
          <div className="project-detail">
            <AnimatePresence mode="wait">
              <motion.div key={activeProjectData.number} className="project-detail-inner" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                <div className="project-copy"><span className="project-eyebrow">{activeProjectData.eyebrow}</span><h3>{activeProjectData.title}</h3><p className="project-subtitle">{activeProjectData.subtitle}</p><div className="project-tags">{activeProjectData.tags.map((tag) => <span key={tag}><i /> {tag}</span>)}</div><div className="impact-block"><span className="impact-label">IMPACT / SIGNALS</span>{activeProjectData.impact.map((impact) => <div className="impact-line" key={impact}><Check size={14} /> <span>{impact}</span></div>)}</div><a className="text-link" href="#contact">Read the approach <ArrowUpRight size={15} /></a></div>
                <div className="project-visual"><ProjectVisual kind={activeProjectData.kind} /></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="section-intro-row"><Reveal><SectionMarker number="03" label="How I think" /><h2>The best work sits<br /><span>between disciplines.</span></h2></Reveal><Reveal className="section-intro-note" delay={0.1}><p>Product thinking keeps the implementation honest. Engineering thinking keeps the idea usable at scale.</p></Reveal></div>
        <div className="thinking-grid">{thinkingCards.map((card, index) => <Reveal key={card.number} delay={index * 0.06}><article className={`thinking-card thinking-card--${index + 1}`}><div className="thinking-card-top"><span>{card.number}</span><span className="thinking-symbol">{card.symbol}</span></div><h3>{card.title}</h3><p>{card.text}</p><div className="card-bottom-line"><span>principle / {String(index + 1).padStart(2, '0')}</span><span className="card-hover-arrow"><ArrowUpRight size={17} /></span></div></article></Reveal>)}</div>
      </section>

      <section className="toolkit-section section-pad" id="toolkit">
        <div className="toolkit-heading"><Reveal><SectionMarker number="04" label="Engineering toolkit" /><h2>A system is only<br /><span>as strong as its seams.</span></h2></Reveal><Reveal delay={0.1}><p>I choose tools for the job, then connect them with intent. The result should feel like one coherent product—not a collection of technologies.</p></Reveal></div>
        <div className="toolkit-map">
          <div className="toolkit-center"><div className="center-orbit orbit-one" /><div className="center-orbit orbit-two" /><div className="center-node"><span className="center-node-mark">SZ</span><strong>Frontend<br />focus</strong><small>full-stack range</small></div></div>
          <div className="tool-clusters">{toolGroups.map((group, index) => { const Icon = group.icon; return <button key={group.id} className={`tool-cluster tool-cluster--${index + 1} ${activeTool === group.id ? "is-active" : ""}`} onClick={() => setActiveTool(group.id)} aria-pressed={activeTool === group.id}><span className="cluster-index">{group.index}</span><Icon size={18} strokeWidth={1.5} /><strong>{group.label}</strong><span className="cluster-arrow"><ArrowUpRight size={14} /></span></button>; })}</div>
          <AnimatePresence mode="wait"><motion.div key={activeToolData.id} className="tool-detail" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}><span className="detail-kicker">{activeToolData.index} / {activeToolData.label.toUpperCase()}</span><p>{activeToolData.description}</p><div className="tool-list">{activeToolData.items.map((item) => <span key={item}><Check size={12} /> {item}</span>)}</div></motion.div></AnimatePresence>
          <div className="toolkit-caption"><span>click a node</span><i /> <span>see the layer</span></div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="experience-grid"><Reveal><SectionMarker number="05" label="Experience & learning" /><h2>Growing through<br /><span>the work.</span></h2><p className="experience-intro">Every role has widened the lens: from building features, to shaping systems, to helping other people build better.</p><div className="education-card"><span className="detail-kicker">EDUCATION</span><strong>Bachelor of Computer Engineering</strong><span>El Shorouk Academy</span><div className="learning-line"><span><i /> continuous learning</span><span className="learning-ticks">••••••••••</span></div><div className="cert-list"><span><Check size={12} /> Node.js, Express, MongoDB & More</span><span><Check size={12} /> React — The Complete Guide</span></div></div></Reveal><div className="timeline">{experience.map((item, index) => <Reveal key={item.company} delay={index * 0.06}><article className={`timeline-item ${expandedExperience === index ? "is-expanded" : ""}`}><button className="timeline-trigger" onClick={() => setExpandedExperience(expandedExperience === index ? -1 : index)} aria-expanded={expandedExperience === index}><span className="timeline-date">{item.date}</span><span className="timeline-company">{item.company}</span><span className="timeline-role">{item.role}</span><span className="timeline-chevron"><ChevronDown size={17} /></span></button><AnimatePresence initial={false}>{expandedExperience === index && <motion.div className="timeline-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}><p>{item.impact}</p><p className="timeline-detail-muted">{item.detail}</p><span className="timeline-location"><MapPin size={12} /> {item.location}</span></motion.div>}</AnimatePresence></article></Reveal>)}</div></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-grid"><Reveal><SectionMarker number="06" label="Start a conversation" /><h2>Have a complex<br /><span>interface to build?</span></h2></Reveal><Reveal className="contact-copy" delay={0.1}><p>Let&apos;s turn it into something people enjoy using.</p><div className="contact-actions"><MagneticLink href="mailto:sara.zoarob@gmail.com">Email me</MagneticLink><MagneticLink href="https://www.linkedin.com/in/sarazoorob" secondary>LinkedIn</MagneticLink></div><div className="contact-note"><Asterisk size={14} /> Usually reply within 2 working days.</div></Reveal></div>
        <div className="contact-endmark"><span>SZ</span><span>2019 — 2025</span></div>
      </section>

      <footer className="site-footer section-pad"><div className="footer-brand"><span className="brand-mark">SZ</span><div><strong>Sara Zoarob</strong><span>Full Stack Software Engineer · Frontend Focused</span></div></div><div className="footer-stack">React <i>·</i> TypeScript <i>·</i> Next.js <i>·</i> Node.js</div><div className="footer-links"><a href="mailto:sara.zoarob@gmail.com" aria-label="Email Sara"><Mail size={15} /><span>Email</span></a><a href="https://www.linkedin.com/in/sarazoorob" target="_blank" rel="noreferrer" aria-label="Sara on LinkedIn"><Linkedin size={15} /><span>LinkedIn</span></a></div><span className="footer-small">Designed & built with intention / 2025</span></footer>
    </main>
  );
}
