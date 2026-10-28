import { experience } from "@/data/experience";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional experience and internships. Add entries as needed."
    >
      {experience.length === 0 ? (
        <div className="rounded-2xl border border-[var(--border)] p-6 text-[var(--secondary-text)]">
          [PLACEHOLDER] No experience added yet. Add entries to{" "}
          <code className="text-[var(--foreground)]">src/data/experience.ts</code>.
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.jobTitle}</h3>
                  <p className="text-[var(--secondary-text)]">
                    {item.organization}
                  </p>
                </div>
                <span className="text-sm text-[var(--secondary-text)]">
                  {item.dates}
                </span>
              </div>
              {item.responsibilities.length > 0 ? (
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Responsibilities</h4>
                  <ul className="mt-2 flex flex-col gap-2 text-[var(--secondary-text)]">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {item.achievements && item.achievements.length > 0 ? (
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Relevant Achievements</h4>
                  <ul className="mt-2 flex flex-col gap-2 text-[var(--secondary-text)]">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
