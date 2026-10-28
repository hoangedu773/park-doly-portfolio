export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "hr-blockbot",
    name: "HR Blockbot",
    year: "2026",
    summary: "Workflow automation for staff across departments, with an AI policy assistant that answers in context.",
  },
  {
    slug: "rea-lab",
    name: "Rea Lab",
    year: "2025",
    summary: "Product site designed and built end to end, from component system to deployment.",
  },
  {
    slug: "saigon-to-coast",
    name: "Saigon to Coast",
    year: "2025",
    summary: "Travel booking and driver dispatch, running on the edge with a Telegram dispatcher.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
