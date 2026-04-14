import { useState, useEffect } from "react";

const CONFIG = {
  name: "Charles Matthew L. Dela Cruz",
  title: "AI & Computer Vision Engineer",
  tagline: "Building intelligent systems that see, understand, and act.",
  location: "Pasig City, Metro Manila",
  university: "Mapua University",
  email: "cmldelacruz@mymail.mapua.edu.ph",

  links: {
    github: "https://github.com/charles-delacruz",
    linkedin: "https://www.linkedin.com/in/charles-dela-cruz-289392372/",
    email: "mailto:cmldelacruz@mymail.mapua.edu.ph",
    resume: "#",
  },

  about:
    "Computer science student at Mapua University specializing in artificial intelligence. Published researcher at IEEE ICIPCN 2026 with work on real-time emergency vehicle detection using YOLOv12. I build full-stack web applications and turn cutting-edge ML models into deployable and interactive systems.",

  projects: [
    {
      title: "Emergency Vehicle Recognition",
      description:
        "Intelligent computer vision system using a YOLOv12-based deep learning architecture for real-time emergency vehicle detection and instance segmentation.",
      tags: ["Python", "YOLOv12", "Computer Vision", "Deep Learning", "Gradio"],
      highlights: ["0.948 precision, 0.951 mAP@0.50", "IEEE ICIPCN 2026 published", "Hybrid Philippine traffic dataset", "Gradio web interface for testing"],
      github: "https://doi.org/10.1109/ICIPCN67432.2026.11438379",
      live: "",
    },
    {
      title: "Virtual Backpack",
      description:
        "Full-stack academic platform with 6+ interactive modules: Notes, Calendar, Flashcards, To-Do, ID, and Backup. Over 100 CRUD operations across React components.",
      tags: ["React 19", "TypeScript", "Vite", "Resend API", "bcrypt"],
      highlights: ["Custom hooks, ~40% fewer re-renders", "Automated email via Resend API", "bcrypt encryption for ID management", "4 contributors via GitHub"],
      github: "https://github.com/Gh0sty23/Virtual-backpack",
      live: "",
    },
    {
      title: "Networking Labs",
      description:
        "Hands-on lab projects covering EIGRP, OSPF, HSRP configurations and troubleshooting for small to medium enterprise networks.",
      tags: ["Networking", "EIGRP", "OSPF", "HSRP", "VLANs"],
      highlights: ["Advanced routing and switching", "HSRP redundancy implementation", "WAN technologies", "Real-world environment simulation"],
      github: "https://github.com/charles-delacruz/network-labs",
      live: "",
    },
  ],

  skills: [
    { category: "Languages", items: ["Python", "TypeScript", "Java", "C++", "C"] },
    { category: "Frameworks & ML", items: ["React.js", "TensorFlow", "TensorRT", "MMSegmentation", "Albumentations", "Open3D", "Jax/Flax", "Einops", "CVXPY"] },
    { category: "Tools & DevOps", items: ["Git/GitHub", "Docker", "Jira", "Figma", "Kornia", "OpenVINO", "ONNX", "MPI/Horovod"] },
    { category: "Networking", items: ["Routing", "Switching", "VLANs", "EIGRP", "OSPF", "HSRP"] },
  ],

  timeline: [
    {
      year: "2025-2026",
      title: "AI Research: Emergency Vehicle Recognition",
      org: "Mapua University",
      detail: "IEEE ICIPCN 2026 published research on YOLOv12-based detection and instance segmentation",
    },
  ],
};

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap";

const C = {
  bg: "#faf9f7",
  surface: "#f3f1ee",
  border: "#ddd9d3",
  text: "#2a2a2a",
  muted: "#504a44",
  faint: "#7d776f",
  activeBg: "#2a2a2a",
  activeText: "#faf9f7",
};

const serif = "'Cormorant Garamond', Georgia, serif";
const mono = "'IBM Plex Mono', Menlo, monospace";

const TABS = ["Projects", "Skills", "Experience"];

export default function Portfolio() {
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState("Projects");

  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = FONT_URL;
    document.head.appendChild(l);
    setReady(true);
    return () => document.head.removeChild(l);
  }, []);

  if (!ready) return null;

  return (
    <div className="portfolio-root" style={s.root}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: ${C.text}; text-decoration: none; border-bottom: 1px solid ${C.border}; }
        a:hover { border-color: ${C.text}; }
        ::selection { background: ${C.text}; color: ${C.bg}; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 2px; }
        @media (max-width: 800px) {
          .portfolio-root {
            height: auto !important;
            overflow: auto !important;
          }
          .layout {
            flex-direction: column !important;
            height: auto !important;
          }
          .sidebar {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            height: auto !important;
            border-right: none !important;
            border-bottom: 1px solid ${C.border} !important;
          }
          .sidebar-inner {
            min-height: auto !important;
            padding: 28px 20px !important;
          }
          .main {
            padding: 20px !important;
            height: auto !important;
            overflow: visible !important;
          }
          .tab-content {
            overflow: visible !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="layout" style={s.layout}>
        <aside className="sidebar" style={s.sidebar}>
          <div className="sidebar-inner" style={s.sideInner}>
            <div>
              <h1 style={s.name}>{CONFIG.name}</h1>
              <p style={s.title}>{CONFIG.title}</p>
            </div>

            <div style={s.metaBlock}>
              <p style={s.metaLine}>{CONFIG.location}</p>
              <p style={s.metaLine}>{CONFIG.university}</p>
            </div>

            <p style={s.about}>{CONFIG.about}</p>

            <div style={s.linkCol}>
              {CONFIG.links.github && (
                <a href={CONFIG.links.github} target="_blank" rel="noopener noreferrer" style={s.sideLink}>
                  GitHub
                </a>
              )}
              {CONFIG.links.linkedin && (
                <a href={CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" style={s.sideLink}>
                  LinkedIn
                </a>
              )}
              {CONFIG.links.email && (
                <a href={CONFIG.links.email} style={s.sideLink}>
                  Email
                </a>
              )}
            </div>

            <p style={s.copy}>{new Date().getFullYear()} {CONFIG.name}</p>
          </div>
        </aside>

        <main className="main" style={s.main}>
          <div style={s.tabBar}>
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  ...s.tabBtn,
                  ...(tab === t ? s.tabActive : {}),
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="tab-content" style={s.tabContent}>
            {tab === "Projects" && <ProjectsTab />}
            {tab === "Skills" && <SkillsTab />}
            {tab === "Experience" && <ExperienceTab />}
          </div>
        </main>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className="projects-grid" style={s.projectsGrid}>
      {CONFIG.projects.map((p, i) => (
        <article key={i} style={s.card}>
          <div style={s.cardHead}>
            <h3 style={s.cardTitle}>{p.title}</h3>
            <div style={{ display: "flex", gap: 12 }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={s.smLink}>
                  source
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" style={s.smLink}>
                  demo
                </a>
              )}
            </div>
          </div>
          <p style={s.cardDesc}>{p.description}</p>
          <div style={s.hlList}>
            {p.highlights.map((h, j) => (
              <span key={j} style={s.hlItem}>
                {h}
              </span>
            ))}
          </div>
          <div style={s.tagRow}>
            {p.tags.map((t, j) => (
              <span key={j} style={s.tag}>
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="skills-grid" style={s.skillsOuter}>
      {CONFIG.skills.map((g, i) => (
        <div key={i} style={s.skillGroup}>
          <h4 style={s.skillCat}>{g.category}</h4>
          <div style={s.skillPills}>
            {g.items.map((item, j) => (
              <span key={j} style={s.skillPill}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceTab() {
  return (
    <div style={s.tlList}>
      {CONFIG.timeline.map((e, i) => (
        <div key={i} style={s.tlRow}>
          <div style={s.tlLeft}>
            <span style={s.tlYear}>{e.year}</span>
          </div>
          <div style={s.tlDivider}>
            <div style={s.tlDot} />
            {i < CONFIG.timeline.length - 1 && <div style={s.tlLine} />}
          </div>
          <div style={s.tlRight}>
            <h4 style={s.tlTitle}>{e.title}</h4>
            <p style={s.tlOrg}>{e.org}</p>
            <p style={s.tlDetail}>{e.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const s = {
  root: {
    background: C.bg,
    color: C.text,
    fontFamily: serif,
    height: "100vh",
    overflow: "hidden",
  },
  layout: {
    display: "flex",
    height: "100%",
  },
  sidebar: {
    width: 320,
    maxWidth: 320,
    minWidth: 260,
    flexShrink: 0,
    borderRight: `1px solid ${C.border}`,
    height: "100%",
    overflow: "auto",
    position: "relative",
  },
  sideInner: {
    padding: "40px 28px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100%",
    gap: 24,
  },
  name: {
    fontFamily: serif,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: -1,
    marginBottom: 6,
  },
  title: {
    fontFamily: serif,
    fontSize: 16,
    fontStyle: "italic",
    color: C.muted,
    fontWeight: 500,
  },
  metaBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  metaLine: {
    fontFamily: mono,
    fontSize: 12,
    color: C.faint,
    letterSpacing: 0.3,
  },
  about: {
    fontSize: 15,
    lineHeight: 1.65,
    color: C.muted,
  },
  linkCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  sideLink: {
    fontFamily: mono,
    fontSize: 13,
    color: C.muted,
    borderBottom: `1px solid ${C.border}`,
    paddingBottom: 1,
    width: "fit-content",
  },
  copy: {
    fontFamily: mono,
    fontSize: 11,
    color: C.faint,
    marginTop: "auto",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: "40px 36px 28px",
  },
  tabBar: {
    display: "flex",
    gap: 4,
    marginBottom: 28,
    borderBottom: `1px solid ${C.border}`,
    paddingBottom: 0,
  },
  tabBtn: {
    fontFamily: mono,
    fontSize: 13,
    color: C.faint,
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    padding: "8px 18px",
    cursor: "pointer",
    letterSpacing: 0.3,
    marginBottom: -1,
  },
  tabActive: {
    color: C.text,
    borderBottomColor: C.text,
    fontWeight: 500,
  },
  tabContent: {
    flex: 1,
    overflow: "auto",
    paddingBottom: 16,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 20,
  },
  card: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 3,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
    gap: 6,
  },
  cardTitle: {
    fontFamily: serif,
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: -0.3,
  },
  smLink: {
    fontFamily: mono,
    fontSize: 11,
    color: C.faint,
    borderBottom: `1px solid ${C.border}`,
    paddingBottom: 1,
  },
  cardDesc: {
    fontSize: 14,
    color: C.muted,
    lineHeight: 1.55,
  },
  hlList: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  hlItem: {
    fontFamily: mono,
    fontSize: 12,
    color: C.faint,
    lineHeight: 1.5,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
    marginTop: "auto",
    paddingTop: 6,
  },
  tag: {
    fontFamily: mono,
    fontSize: 10,
    color: C.faint,
    border: `1px solid ${C.border}`,
    padding: "2px 8px",
    borderRadius: 2,
    letterSpacing: 0.3,
  },
  skillsOuter: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 28,
  },
  skillGroup: {},
  skillCat: {
    fontFamily: mono,
    fontSize: 11,
    color: C.faint,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
    fontWeight: 500,
  },
  skillPills: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    fontFamily: mono,
    fontSize: 13,
    color: C.muted,
    background: C.surface,
    border: `1px solid ${C.border}`,
    padding: "6px 12px",
    borderRadius: 3,
  },
  tlList: {
    display: "flex",
    flexDirection: "column",
  },
  tlRow: {
    display: "flex",
    gap: 0,
    minHeight: 90,
  },
  tlLeft: {
    width: 80,
    flexShrink: 0,
    textAlign: "right",
    paddingRight: 16,
    paddingTop: 2,
  },
  tlYear: {
    fontFamily: mono,
    fontSize: 12,
    color: C.faint,
    letterSpacing: 0.3,
  },
  tlDivider: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 20,
    flexShrink: 0,
  },
  tlDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: C.border,
    border: `2px solid ${C.faint}`,
    marginTop: 5,
    flexShrink: 0,
  },
  tlLine: {
    width: 1,
    flex: 1,
    background: C.border,
    marginTop: 4,
  },
  tlRight: {
    flex: 1,
    paddingLeft: 16,
    paddingBottom: 24,
  },
  tlTitle: {
    fontFamily: serif,
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 2,
  },
  tlOrg: {
    fontFamily: mono,
    fontSize: 11,
    color: C.faint,
    marginBottom: 4,
  },
  tlDetail: {
    fontSize: 14,
    color: C.muted,
    lineHeight: 1.5,
  },
};
