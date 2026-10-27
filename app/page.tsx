import Link from "next/link";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

const services = [
  {
    name: "Web product build",
    copy: "Next.js or React, design to code, performance and accessibility in the same pass.",
    time: "Typical scope · 2–4 weeks",
  },
  {
    name: "UI/UX sprint",
    copy: "Flows, high-fidelity screens, a working prototype, and a clean handoff.",
    time: "Typical scope · 1–2 weeks",
  },
  {
    name: "AI chatbot + training",
    copy: "A retrieval chatbot for your own documents, workflow automation, and a workshop for your team.",
    time: "Typical scope · 1 week",
  },
];

function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <header className={styles.nav}>
          <Link href="/" className={styles.wordmark} aria-label="Park Doly, home">
            <span className={styles.brandFull}>Park Doly</span>
            <span className={styles.brandShort} aria-hidden="true">PD</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className={styles.heroStage}>
          <svg className={styles.heroCurve} viewBox="0 0 900 520" fill="none" aria-hidden="true">
            <path d="M20 410C180 110 330 500 488 222C610 8 742 64 880 178" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1 id="hero-title" className={styles.name}>
            <span>Park</span>
            <span>Doly</span>
          </h1>
        </div>

        <div className={styles.heroBottom}>
          <p className={styles.heroIntro}>I shape the interface and build what sits beneath it.</p>
          <div className={styles.disciplines} aria-label="Areas of practice">
            <span>Fullstack development</span>
            <span>UI/UX design</span>
            <span>AI chatbots</span>
          </div>
          <div className={styles.heroAction}>
            <span className={styles.availability}><i aria-hidden="true" />Open for freelance projects</span>
            <a className={styles.buttonLight} href="#work">
              Explore selected work
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.work} id="work" aria-labelledby="work-title">
        <div className={styles.sectionHead}>
          <h2 id="work-title">Selected work</h2>
          <p>Three projects, each being documented with the real decisions, constraints, and craft behind them.</p>
        </div>

        <ul className={styles.workList}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className={styles.workLink}>
                <span className={styles.workName}>{project.name}</span>
                <span className={styles.workStatus}>Case study in progress</span>
                <span className={styles.workYear}>{project.year}</span>
                <span className={styles.workArrow}><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.workNote}>Want the technical details? <a href="https://github.com/hoangedu773" target="_blank" rel="noreferrer">Ask for a walkthrough on GitHub.</a></p>
      </section>

      <section className={styles.services} id="services" aria-labelledby="services-title">
        <div className={styles.servicesHead}>
          <h2 id="services-title">Design and code, under one roof.</h2>
          <p>One partner from the first flow to the final deployment. Clear scope, a fixed end date, and no retainer you do not need.</p>
        </div>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <article className={styles.service} key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.copy}</p>
              <span className={styles.time}>{service.time}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <h2 id="about-title">One person.<br />Every layer.</h2>
        <div className={styles.aboutLower}>
          <dl className={styles.facts}>
            <div><dt>Based in</dt><dd>Vietnam</dd></div>
            <div><dt>Timezone</dt><dd>GMT+7</dd></div>
            <div><dt>Working style</dt><dd>Design-minded, code-driven</dd></div>
          </dl>
          <div className={styles.aboutCopy}>
            <p>I am Park Doly, a fullstack developer who cares about how a product feels as much as how it works. I work with founders and small teams to turn a rough idea into something people can use.</p>
            <p>That means fewer handoffs and a tighter loop: understand the problem, shape the experience, build the system, and stay for the details that make it hold together.</p>
            <p className={styles.capabilities}>Next.js · React · TypeScript · UI/UX · AI retrieval · Team training</p>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <p className={styles.contactPrompt}>Have a product in mind?</p>
        <h2 id="contact-title">Let’s make it useful.</h2>
        <div className={styles.contactBottom}>
          <p>Tell me what you are making, where it is stuck, and what done looks like.</p>
          <a className={styles.buttonDark} href="https://github.com/hoangedu773" target="_blank" rel="noreferrer">
            Start a conversation
            <Arrow />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <span>Park Doly · Fullstack developer</span>
          <nav aria-label="Footer">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="https://github.com/hoangedu773" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
          <a href="#hero-title">Back to top ↑</a>
        </div>
        <p className={styles.bigName} aria-hidden="true">Park Doly</p>
        <div className={styles.footerBottom}>
          <span>© 2026 Park Doly</span>
          <span>Designed and built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
