export type ExperienceEntry = {
  title: string;
  role: string;
  timeline?: string;
  context: string;
  stack: string[];
  points: { lead: string; body: string }[];
  cv: string[];
};

// Closed-source work. Add a new entry here and it appears on both the home
// page and /cv — nothing else needs to change. `cv` holds the two condensed
// bullets the CV uses, so the one-pager stays one page.
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
    cv: [
      "React 18 + Vite SPA for 140+ stores and 2,400+ workforce profiles, holding sub-100 ms interactions through targeted state caching.",
      "Socket.IO event pipeline, optimistic concurrency with 409 recovery, and a FastAPI retrieval copilot with citation metadata.",
    ],
  },
  {
    title: "Saigon to Coast — travel booking & fleet dispatch",
    role: "Fullstack software engineer, solo delivery",
    timeline: "2025",
    context: "40,000+ monthly travellers · $450K+ annual booking GMV · closed source",
    stack: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers",
      "D1 (SQLite)",
      "Workers AI (LLaMA-3.2)",
      "Telegram API",
      "Web Crypto",
    ],
    points: [
      {
        lead: "Edge-native booking platform",
        body: "Architected and delivered an end-to-end private transfer platform processing $450K+ in annual booking GMV and serving 40,000+ monthly travellers with sub-50 ms edge latency.",
      },
      {
        lead: "Peak-season reliability",
        body: "Scaled to 15,000+ monthly booking inquiries across peak holiday seasons with 99.99% uptime and zero dropped leads, via atomic distributed transactions and strict idempotency controls.",
      },
      {
        lead: "Conversion engine",
        body: "Lifted quote-to-booking conversion by 38% with a dynamic pricing engine, a progressive multi-step booking wizard, and a 24/7 edge-based AI travel consultant.",
      },
      {
        lead: "Telegram dispatch automation",
        body: "Removed 85% of manual dispatch operations (25+ hours a week) with a bidirectional Telegram bot dispatcher, single-tap driver assignment, and automated retry queues.",
      },
      {
        lead: "Zero-cost infrastructure",
        body: "Cut hosting to $0/month by going edge-native across Cloudflare Workers, D1 (SQLite), and serverless LLM inference.",
      },
    ],
    cv: [
      "Astro on Cloudflare Workers + D1: $450K+ annual booking GMV, 40,000+ monthly travellers, sub-50 ms edge latency.",
      "Telegram dispatcher removed 85% of manual dispatch; AI consultant lifted quote-to-booking conversion 38%; $0 hosting.",
    ],
  },
  {
    title: "Online course platform — LMS & exam engine",
    role: "Solo fullstack developer",
    context: "10,000+ students · 9,500+ exam assets · 14 subjects · closed source",
    stack: [
      "PostgreSQL",
      "Redis",
      "Python (PyMuPDF)",
      "WebSockets",
      "Canvas 2D",
      "Google Drive API",
    ],
    points: [
      {
        lead: "Proprietary LMS",
        body: "Independently architected and delivered an end-to-end LMS supporting 10,000+ enrolled students and 9,500+ high-stakes national exam assets across 14 subjects, replacing Kajabi/Teachable subscriptions and cutting overhead by $6,000+/year on a $0–$10/month footprint.",
      },
      {
        lead: "Zero-latency examination engine",
        body: "Handled 1,000+ concurrent test-takers during peak mock exams with 0% data loss and zero crashes, using an offline-first 5-state client FSM, local storage sync vaults, and atomic non-locking PostgreSQL UPSERT batches (0 lock-wait transactions).",
      },
      {
        lead: "Anti-piracy & DRM pipeline",
        body: "Protected 100% of course video and PDF assets with distributed Redis playback leases (TTL 45s), instant remote device eviction over WebSockets, and real-time Canvas 2D watermarking that bakes student identity, NFC Unicode name, and timestamps into the stream.",
      },
      {
        lead: "Automated ingestion & provisioning",
        body: "Automated content ingestion and user provisioning with a Python PyMuPDF extraction engine and a background Google Drive sync pipeline that ingested 7,000+ entrance exam papers, plus passwordless one-click invitations with role-based access control.",
      },
      {
        lead: "Streaming throughput",
        body: "Sustained 50+ concurrent streaming users per 512 MB container node (peak V8 heap 10.85 MB) with an HTTP 206 byte-range streaming proxy and edge-level fail-closed security gating.",
      },
    ],
    cv: [
      "Proprietary LMS for 10,000+ students and 9,500+ exam assets, replacing Kajabi/Teachable at $0–$10 per month.",
      "Offline-first exam engine for 1,000+ concurrent test-takers with 0% data loss, plus Redis/Canvas DRM and watermarking.",
    ],
  },
  {
    title: "JobMarket — AI recruitment & resume builder",
    role: "Lead fullstack architect",
    context: "85,000+ candidates · 1,500+ recruiters · $185K ARR · closed source",
    stack: [
      "Laravel 12",
      "PHP 8.2 (DDD)",
      "MySQL",
      "JavaScript (ES6+)",
      "Google Gemini",
      "Tailwind CSS v4",
      "Redis",
      "Google OAuth 2.0",
    ],
    points: [
      {
        lead: "Recruitment ecosystem",
        body: "Independently architected and delivered a high-throughput recruitment platform and live WYSIWYG resume builder from inception to production in 10 weeks, scaling to 85,000+ active candidates and 1,500+ verified enterprise recruiters.",
      },
      {
        lead: "Revenue engine",
        body: "Took platform revenue from $0 to $185,000 ARR within six months with employer subscription billing, featured listing tiers, and candidate unlock packages at a 99.98% payment success rate.",
      },
      {
        lead: "AI matching with composite cache",
        body: "Engineered a Gemini-driven candidate–job matching engine backed by a composite database cache, processing 250,000+ applications at under 10 ms average latency and cutting recurring LLM spend by 85% ($4,200+/month saved).",
      },
      {
        lead: "ATS pipeline",
        body: "Reduced the recruiter hiring cycle from 18 days to 5 (72% faster) with a real-time 5-stage ATS Kanban pipeline and sub-200 ms inline resume preview, driving a 44% lift in interview conversion.",
      },
      {
        lead: "Zero-downtime reliability",
        body: "Held 99.95% uptime and 100% data integrity through traffic spikes with a crash-resilient auto-save engine (CAS optimistic locking) and dual-snapshot immutability, with zero lost resumes across millions of edits.",
      },
    ],
    cv: [
      "Laravel 12 recruitment platform: 85,000+ candidates, 1,500+ recruiters, $0 → $185K ARR in six months.",
      "Gemini matching engine with composite cache (<10 ms, −85% LLM spend) and a 5-stage ATS that cut hiring cycles 72%.",
    ],
  },
];
