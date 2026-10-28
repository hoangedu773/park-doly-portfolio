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

            <section className={`${styles.block} ${styles.jobList}`}>
              <h2 className={styles.blockTitle}>Experience</h2>
              <p className={styles.jobNote}>Closed-source engagements; code and walkthrough available on request.</p>
              {experience.map((entry) => (
                <article key={entry.title} className={styles.job}>
                  <div className={styles.workHead}>
                    <h3 className={styles.jobTitle}>{entry.title}</h3>
                    {entry.timeline && <span className={styles.year}>{entry.timeline}</span>}
                  </div>
                  <p className={styles.jobRole}>{entry.role}</p>
                  <p className={styles.techLine}>{entry.stack.slice(0, 5).join(" · ")}</p>
                  <ul className={styles.points}>
                    {entry.cv.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
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
