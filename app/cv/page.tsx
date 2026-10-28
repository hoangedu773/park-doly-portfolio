import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/content/experience";
import { github, siteUrl, whatsapp } from "@/content/site";
import styles from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV",
  description:
    "One-page CV for Park Doly, fullstack developer and UI/UX designer in Vietnam. Experience, selected work, and stack.",
  robots: { index: true, follow: true },
};

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

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React 18",
  "Next.js",
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB Atlas",
  "Socket.IO",
  "Tailwind CSS",
  "UI/UX design",
];

export default function CVPage() {
  return (
    <main className={styles.page}>
      <div className={styles.sheet}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>Curriculum vitae</p>
          <h1 className={styles.name}>Park Doly</h1>
          <p className={styles.role}>Fullstack developer · UI/UX designer · AI chatbots</p>
        </header>

        <div className={styles.columns}>
          <aside className={styles.side}>
            <section>
              <h2 className={styles.sideTitle}>Contact</h2>
              <ul className={styles.contactList}>
                <li>
                  <span>WhatsApp</span>
                  <a href={whatsapp.url} target="_blank" rel="noreferrer">
                    {whatsapp.handle}
                  </a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a href={github.url} target="_blank" rel="noreferrer">
                    {github.handle}
                  </a>
                </li>
                <li>
                  <span>Portfolio</span>
                  <a href={siteUrl}>{siteUrl.replace("https://", "")}</a>
                </li>
                <li>
                  <span>Based in</span>
                  <span className={styles.plain}>Vietnam · GMT+7</span>
                </li>
              </ul>
            </section>

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
          </aside>

          <div className={styles.main}>
            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Profile</h2>
              <p className={styles.lead}>
                I shape the interface and build what sits beneath it: React and Next.js front ends, Python and
                Node services, and retrieval chatbots that answer from a company&apos;s own documents.
              </p>
            </section>

            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Experience</h2>
              {experience.map((entry) => (
                <article key={entry.title} className={styles.job}>
                  <div className={styles.workHead}>
                    <h3 className={styles.jobTitle}>{entry.title}</h3>
                    <span className={styles.year}>{entry.timeline}</span>
                  </div>
                  <p className={styles.jobRole}>
                    {entry.role} · {entry.context}
                  </p>
                  <p className={styles.techLine}>{entry.stack.join(" · ")}</p>
                  <ul className={styles.points}>
                    {entry.points.map((point) => (
                      <li key={point.lead}>
                        <strong>{point.lead}.</strong> {point.body}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
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
          </div>
        </div>

        <footer className={styles.foot}>
          <span>Park Doly · Fullstack developer</span>
          <a href={whatsapp.url} target="_blank" rel="noreferrer">
            WhatsApp {whatsapp.handle}
          </a>
          <a href={github.url} target="_blank" rel="noreferrer">
            github.com/{github.handle}
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
