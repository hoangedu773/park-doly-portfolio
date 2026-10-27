export type Project = {
  slug: string;
  name: string;
  year: string;
};

export const projects: Project[] = [
  { slug: "hr-blockbot", name: "HR Blockbot", year: "2026" },
  { slug: "rea-lab", name: "Rea Lab", year: "2025" },
  { slug: "saigon-to-coast", name: "Saigon to Coast", year: "2025" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
