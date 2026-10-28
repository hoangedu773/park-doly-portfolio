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
      { value: "$450K+", label: "annual booking GMV" },
      { value: "40,000+", label: "monthly travellers" },
      { value: "$0", label: "monthly hosting" },
    ],
    summary:
      "Astro on Cloudflare Workers and D1, with a Telegram dispatcher for drivers and a Workers AI consultant answering travellers at the edge.",
    cv: [
      "Astro on Cloudflare Workers + D1: $450K+ annual booking GMV, 40,000+ monthly travellers, sub-50 ms edge latency.",
      "Telegram dispatcher removed 85% of manual dispatch; AI consultant lifted quote-to-booking conversion 38%; $0 hosting.",
    ],
  },
  {
    title: "Online course platform — LMS & exam engine",
    role: "Solo fullstack developer",
    stack: ["PostgreSQL", "Redis", "Python (PyMuPDF)", "WebSockets", "Canvas 2D"],
    metrics: [
      { value: "10,000+", label: "enrolled students" },
      { value: "9,500+", label: "exam assets" },
      { value: "1,000+", label: "concurrent test-takers" },
    ],
    summary:
      "A proprietary LMS that replaced Kajabi and Teachable: offline-first exam engine, Redis playback leases with Canvas watermarking, and automated ingestion for 7,000+ exam papers.",
    cv: [
      "Proprietary LMS for 10,000+ students and 9,500+ exam assets, replacing Kajabi/Teachable at $0–$10 per month.",
      "Offline-first exam engine for 1,000+ concurrent test-takers with 0% data loss, plus Redis/Canvas DRM and watermarking.",
    ],
  },
  {
    title: "JobMarket — AI recruitment & resume builder",
    role: "Lead fullstack architect",
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Google Gemini", "Redis"],
    metrics: [
      { value: "85,000+", label: "candidates" },
      { value: "$185K", label: "ARR in 6 months" },
      { value: "72%", label: "faster hiring cycle" },
    ],
    summary:
      "Laravel 12 recruitment platform with a Gemini matching engine, a live resume builder, and a five-stage ATS pipeline.",
    cv: [
      "Laravel 12 recruitment platform: 85,000+ candidates, 1,500+ recruiters, $0 → $185K ARR in six months.",
      "Gemini matching engine with composite cache (<10 ms, −85% LLM spend) and a 5-stage ATS that cut hiring cycles 72%.",
    ],
  },
];
