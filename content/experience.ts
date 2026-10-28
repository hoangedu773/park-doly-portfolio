export type ExperienceEntry = {
  title: string;
  role: string;
  timeline?: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  summary: string;
  cv: string[];
};

// Closed-source work. Add a new entry here and it appears on both the home
// page and /cv — nothing else needs to change. `metrics` carries the numbers
// the page leads with; `cv` holds the two condensed bullets the CV uses.
// Only measured numbers belong here — no estimates, no vanity figures.
export const experience: ExperienceEntry[] = [
  {
    title: "Enterprise workforce & AI copilot platform",
    role: "Fullstack software engineer",
    timeline: "Sep 2026 — Present",
    stack: ["React 18", "TypeScript", "Vite", "Node.js", "FastAPI", "MongoDB Atlas", "Socket.IO"],
    metrics: [
      { value: "140+", label: "store locations" },
      { value: "2,400+", label: "workforce profiles" },
      { value: "<100 ms", label: "UI response" },
    ],
    summary:
      "Shift scheduling for a multi-location retailer: React 18 SPA, a Socket.IO event pipeline, optimistic concurrency with 409 recovery, and an in-app policy copilot on Atlas Vector Search.",
    cv: [
      "React 18 + Vite SPA for 140+ stores and 2,400+ workforce profiles, holding sub-100 ms interactions through targeted state caching.",
      "Socket.IO event pipeline, optimistic concurrency with 409 recovery, and a FastAPI retrieval copilot with citation metadata.",
    ],
  },
  {
    title: "Saigon to Coast — travel booking & fleet dispatch",
    role: "Fullstack software engineer, solo delivery",
    timeline: "2025",
    stack: ["Astro", "TypeScript", "Cloudflare Workers", "D1", "Workers AI", "Telegram API"],
    metrics: [
      { value: "1,000+", label: "site visits" },
      { value: "400", label: "rides booked and paid" },
      { value: "sub-50 ms", label: "edge latency" },
    ],
    summary:
      "Astro on Cloudflare Workers and D1, with a Telegram dispatcher for driver assignment and a Workers AI consultant answering travellers at the edge.",
    cv: [
      "Astro on Cloudflare Workers + D1: private transfer booking at sub-50 ms edge latency, running at $0 hosting.",
      "Telegram dispatcher with single-tap driver assignment and retry queues; 400 rides booked and paid to date.",
    ],
  },
  {
    title: "Online course platform — LMS & exam engine",
    role: "Solo fullstack developer",
    stack: ["PostgreSQL", "Redis", "Python (PyMuPDF)", "WebSockets", "Canvas 2D"],
    metrics: [
      { value: "455+", label: "enrolled students" },
      { value: "11,000", label: "lessons" },
      { value: "55,000", label: "PDF documents" },
    ],
    summary:
      "A proprietary LMS that replaced Kajabi and Teachable: offline-first exam engine, Redis playback leases with Canvas watermarking, and automated PDF ingestion — sold at 500,000 VND a year.",
    cv: [
      "Proprietary LMS for 455+ students with 11,000 lessons and 55,000 PDFs, sold at 500,000 VND per year instead of a commercial platform.",
      "Offline-first exam engine with local sync vaults, plus Redis playback leases and Canvas watermarking on video and PDFs.",
    ],
  },
  {
    title: "JobMarket — AI recruitment & resume builder",
    role: "Lead fullstack architect",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Google Gemini", "Redis"],
    metrics: [
      { value: "<10 ms", label: "cached match latency" },
      { value: "5-stage", label: "ATS pipeline" },
      { value: "10 weeks", label: "idea to production" },
    ],
    summary:
      "Laravel 12 recruitment platform: Gemini-driven matching behind a composite cache, a live WYSIWYG resume builder, and a five-stage ATS with crash-resilient auto-save.",
    cv: [
      "Laravel 12 / PHP 8.2 (DDD) recruitment platform with a Gemini matching engine behind a composite cache: under 10 ms average match latency.",
      "Live WYSIWYG resume builder with CAS optimistic locking and dual-snapshot immutability; five-stage ATS with sub-200 ms inline preview.",
    ],
  },
];
