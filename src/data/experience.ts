export type ExperienceItem = {
  id: string;
  jobTitle: string;
  organization: string;
  dates: string;
  responsibilities: string[];
  achievements?: string[];
};

export const experience: ExperienceItem[] = [
  // Add internships and professional experience here.
  // Example:
  // {
  //   id: "example",
  //   jobTitle: "Intern",
  //   organization: "Organization Name",
  //   dates: "Month YYYY - Month YYYY",
  //   responsibilities: ["..."],
  //   achievements: ["..."],
  // },
];
