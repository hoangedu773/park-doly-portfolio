import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.name,
    description: `${project.name} — ${project.summary}`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.bar}>
        <Link href="/" className={styles.wordmark} aria-label="Park Doly, home">Park Doly</Link>
        <Link href="/#work" className={styles.back}>← All work</Link>
      </header>

      <section className={styles.hero} aria-labelledby="project-title">
        <p className={styles.year}>{project.year} · Case study in progress</p>
        <h1 id="project-title">{project.name}</h1>
        <svg className={styles.curve} viewBox="0 0 800 240" fill="none" aria-hidden="true">
          <path d="M10 180C160 10 280 240 420 98C550-34 654 46 790 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </section>

      <section className={styles.body} aria-labelledby="story-title">
        <div className={styles.story}>
          <h2 id="story-title">The full story is being documented.</h2>
          <p>{project.summary}</p>
          <p>A detailed walkthrough of this project is being prepared with the actual problem, constraints, implementation decisions, and outcome.</p>
          <a className={styles.cta} href="https://github.com/hoangedu773" target="_blank" rel="noreferrer">
            Ask for a walkthrough <span aria-hidden="true">→</span>
          </a>
        </div>
        <dl className={styles.facts}>
          <div><dt>Project</dt><dd>{project.name}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
          <div><dt>Role</dt><dd>Fullstack developer</dd></div>
          <div><dt>Status</dt><dd>Case study in progress</dd></div>
        </dl>
      </section>

      <footer className={styles.footer}>
        <Link href="/#work">← Back to all work</Link>
        <Link href="/#contact">Start a conversation →</Link>
      </footer>
    </main>
  );
}
