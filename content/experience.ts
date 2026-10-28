export type ExperienceEntry = {
  title: string;
  role: string;
  timeline: string;
  context: string;
  stack: string[];
  points: { lead: string; body: string }[];
};

// Closed-source work. Add a new entry here and it appears on both the home
// page and /cv — nothing else needs to change.
export const experience: ExperienceEntry[] = [
  {
    title: "Enterprise workforce & AI copilot platform",
    role: "Fullstack software engineer",
    timeline: "Sep 2026 — Present",
    context: "Retail network · 140+ locations · 2,400+ workforce profiles · closed source",
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Python (FastAPI)",
      "MongoDB Atlas",
      "Atlas Vector Search",
      "Socket.IO",
      "Tailwind CSS",
    ],
    points: [
      {
        lead: "Scalable React SPA architecture",
        body: "Engineered a high-performance SPA with React 18 and Vite for a retail network of 140+ locations managing 2,400+ active workforce profiles, reducing dashboard load times and holding sub-100 ms UI interactions through targeted state caching.",
      },
      {
        lead: "End-to-end optimistic concurrency",
        body: "Atomic version-checked mutations on MongoDB paired with frontend optimistic cache recovery and 409 Conflict handling, eliminating race conditions and lost updates during concurrent multi-manager shift scheduling.",
      },
      {
        lead: "Real-time event engine",
        body: "Bi-directional Socket.IO pipeline with REST fallback for instant shift alerts, plus client reconnection routines and idempotency dedupe keys (clientMessageId).",
      },
      {
        lead: "In-app AI copilot (policy RAG)",
        body: "Python/FastAPI sidecar with MongoDB Atlas Vector Search (384-dimension cosine index) for internal policy Q&A, and a streaming chat UI with verifiable citation metadata (document / version / source).",
      },
      {
        lead: "Authentication hardening",
        body: "Refresh token family rotation backed by MongoDB TTL indexes for auto-revocation, Argon2id password hashing, and AES-256-GCM credential encryption.",
      },
    ],
  },
];
