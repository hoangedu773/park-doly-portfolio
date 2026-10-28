"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./cv.module.css";

type Mode = "page" | "read";

/**
 * Keeps the CV an actual A4 sheet. On a phone the sheet is scaled down to the
 * viewport width so the whole page is visible at once, with a toggle for a
 * readable, reflowed version.
 */
export function CvSheet({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("page");
  const [scale, setScale] = useState(1);
  const [box, setBox] = useState<{ width: number; height: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== "page") {
      setScale(1);
      setBox(null);
      return;
    }

    const wrap = wrapRef.current;
    const sheet = sheetRef.current;
    if (!wrap || !sheet) return;

    const measure = () => {
      const available = wrap.clientWidth;
      const width = sheet.offsetWidth;
      const height = sheet.offsetHeight;
      if (!width || !height) return;
      const next = Math.min(1, available / width);
      setScale(next);
      setBox({ width: Math.round(width * next), height: Math.round(height * next) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    observer.observe(sheet);
    return () => observer.disconnect();
  }, [mode]);

  return (
    <div className={styles.stage}>
      <div className={styles.toolbar}>
        <div className={styles.seg} role="group" aria-label="CV view">
          <button
            type="button"
            aria-pressed={mode === "page"}
            onClick={() => setMode("page")}
          >
            Whole page
          </button>
          <button
            type="button"
            aria-pressed={mode === "read"}
            onClick={() => setMode("read")}
          >
            Readable
          </button>
        </div>
        <a className={styles.download} href="/cv.pdf" download>
          Download PDF
        </a>
      </div>

      <div
        ref={wrapRef}
        className={`${styles.wrap} ${mode === "page" && !box ? styles.pending : ""}`}
        style={mode === "page" && box ? { width: box.width, height: box.height } : undefined}
      >
        <div
          ref={sheetRef}
          className={`${styles.sheet} ${mode === "read" ? styles.read : ""}`}
          style={mode === "page" ? { transform: `scale(${scale})`, transformOrigin: "top left" } : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
