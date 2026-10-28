import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/content/site";
import styles from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV",
  description:
    "One-page CV for Park Doly, fullstack developer and UI/UX designer in Vietnam. Selected work, open source, and stack.",
  robots: { index: true, follow: true },
};

const GITHUB = "https://github.com/hoangedu773";

const work = [
  {
    name: "HR Blockbot",
    year: "2026",
    line: "HR policy chatbot: document ingestion, retrieval answers, and a web interface for staff questions.",
    stack: "Python · retrieval · web UI",
  },
  {
    name: "Rea Lab",
    year: "2025",
    line: "Product site built end to end — interface design, component system, and deployment.",
    stack: "Next.js · TypeScript · CSS",
  },
  {
    name: "Saigon to Coast",
    year: "2025",
    line: "Editorial web build: layout, typography, and a small content model the owner can extend.",
    stack: "Next.js · React · TypeScript",
  },
];

const openSource = [
  {
    name: "chatgpt-marketing-super-kit",
    line: "Prompt and workflow kit for marketing tasks.",
    stack: "Python",
  },
  {
    name: "fufu-field-frontend / backend",
    line: "Paired client and server for a field-survey product.",
    stack: "JavaScript · Node",
  },
  {
    name: "flask-chatbot-sweetbakery",
    line: "Order-taking chatbot for a bakery, Flask service plus chat UI.",
    stack: "Python · Flask",
  },
  {
    name: "mathEducation",
    line: "Practice app for maths exercises with typed content data.",
    stack: "TypeScript",
  },
  {
    name: "ai-flask-api + ai-demo-app",
    line: "Minimal AI API and a demo client to exercise it.",
    stack: "Python · Flask · TypeScript",
  },
  {
    name: "agent-premire",
    line: "Agent experiments: tool calls, prompts, and evaluation notes.",
    stack: "Python",
  },
  {
    name: "cake-shop",
    line: "Storefront build with product data and a checkout flow.",
    stack: "TypeScript",
  },
];

const services = [
  {
    name: "Web product build",
    line: "Next.js or React, design to code, performance and accessibility in the same pass.",
    time: "2–4 weeks",
  },
  {
    name: "UI/UX sprint",
    line: "Flows, high-fidelity screens, a working prototype, and a clean handoff.",
    time: "1–2 weeks",
  },
  {
    name: "AI chatbot + training",
    line: "A retrieval chatbot for your own documents, workflow automation, and a team workshop.",
    time: "1 week",
  },
];

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Next.js",
  "React",
  "Node.js",
  "Flask",
  "HTML / CSS",
  "LLM retrieval",
  "Figma",
  "UI/UX design",
];

export default function CVPage() {
  return (
    <main className={styles.page}>
      <div className={styles.sheet}>
        <header className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Curriculum vitae</p>
            <h1 className={styles.name}>Park Doly</h1>
            <p className={styles.role}>Fullstack developer · UI/UX designer · AI chatbots</p>
          </div>
          <address className={styles.contact}>
            <span>Vietnam · GMT+7</span>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              github.com/hoangedu773
            </a>
            <a href={siteUrl}>{siteUrl.replace("https://", "")}</a>
          </address>
        </header>

        <div className={styles.columns}>
          <aside className={styles.side}>
            <section>
              <h2 className={styles.sideTitle}>Stack</h2>
              <ul className={styles.tags}>
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={styles.sideTitle}>Availability</h2>
              <p className={styles.sideText}>
                Open for freelance projects. Typical scope: 1–4 weeks, fixed end date, no retainer.
              </p>
            </section>

            <section>
              <h2 className={styles.sideTitle}>Elsewhere</h2>
              <ul className={styles.links}>
                <li>
                  <a href={GITHUB} target="_blank" rel="noreferrer">
                    GitHub — 18 public repositories
                  </a>
                </li>
                <li>
                  <a href={siteUrl}>Portfolio — selected work</a>
                </li>
                <li>
                  <a href={`${siteUrl}/#contact`}>Start a conversation</a>
                </li>
              </ul>
            </section>
          </aside>

          <div className={styles.main}>
            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Profile</h2>
              <p className={styles.lead}>
                I shape the interface and build what sits beneath it. One person from the first flow to the
                deployed product: Next.js front ends, Python and Node services, and retrieval chatbots that
                answer from a client&apos;s own documents.
              </p>
            </section>

            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Selected work</h2>
              <ol className={styles.workList}>
                {work.map((item) => (
                  <li key={item.name}>
                    <div className={styles.workHead}>
                      <h3>{item.name}</h3>
                      <span className={styles.year}>{item.year}</span>
                    </div>
                    <p>{item.line}</p>
                    <p className={styles.stackLine}>{item.stack}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Open source</h2>
              <ul className={styles.repoList}>
                {openSource.map((repo) => (
                  <li key={repo.name}>
                    <div className={styles.workHead}>
                      <h3 className={styles.repoName}>{repo.name}</h3>
                      <span className={styles.stackLine}>{repo.stack}</span>
                    </div>
                    <p>{repo.line}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.block}>
              <h2 className={styles.blockTitle}>What I do</h2>
              <ul className={styles.serviceList}>
                {services.map((service) => (
                  <li key={service.name}>
                    <div className={styles.workHead}>
                      <h3 className={styles.repoName}>{service.name}</h3>
                      <span className={styles.stackLine}>{service.time}</span>
                    </div>
                    <p>{service.line}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.block}>
              <h2 className={styles.blockTitle}>How I work</h2>
              <p>
                Understand the problem, shape the experience, build the system, then stay for the details that
                make it hold together. Fewer handoffs, one loop, accessibility and performance in the same pass.
              </p>
            </section>
          </div>
        </div>

        <footer className={styles.foot}>
          <span>Park Doly · Fullstack developer</span>
          <a href={GITHUB} target="_blank" rel="noreferrer">
            github.com/hoangedu773
          </a>
          <span>Updated October 2026</span>
        </footer>
      </div>

      <p className={styles.screenNote}>
        Print or save as PDF from the browser (A4, one page). <Link href="/">← Back to portfolio</Link>
      </p>
    </main>
  );
}
