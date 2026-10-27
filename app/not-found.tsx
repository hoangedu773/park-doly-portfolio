import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <p className={styles.code}>404</p>
      <h1>This page took a different turn.</h1>
      <p className={styles.copy}>The link may be old, or the page may have moved.</p>
      <Link href="/" className={styles.link}>Back to Park Doly <span aria-hidden="true">→</span></Link>
    </main>
  );
}
