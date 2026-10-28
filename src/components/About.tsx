import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--secondary-text)]">
              Rahel Belachew
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Computer Science &amp; Engineering Graduate
            </h2>
          </div>
          <p className="max-w-3xl text-lg text-[var(--secondary-text)]">
            I am a Computer Science and Engineering graduate interested in
            designing useful digital products and improving how people interact
            with technology. My experience and projects have helped me explore
            interface design, business workflows, and web-based applications.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_40px_80px_-60px_rgba(0,200,117,0.25)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9 2L2 6L9 10L16 6L9 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L9 16L16 12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 9L9 13L16 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-medium text-[var(--foreground)]">Degree:</span>{" "}
              <span className="text-[var(--accent)]">BSc in Computer Science and Engineering</span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">University:</span>{" "}
              <span className="text-[var(--secondary-text)]">Adama Science and Technology University</span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">Study period:</span>{" "}
              <span className="text-[var(--secondary-text)]">September 2019 – May 2024</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-medium text-[var(--foreground)]">Certificate:</span>{" "}
              <span className="text-[var(--accent)]">ICPC Coding Challenge — Participation Certificate</span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">Date:</span>{" "}
              <span className="text-[var(--secondary-text)]">September 22, 2021</span>
            </p>
          </div>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center text-sm font-medium text-[var(--accent)] transition hover:opacity-90"
          >
            View Certificate
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center text-sm font-medium text-[var(--accent)] transition hover:opacity-90"
          >
            View Certificate
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">How I Work</h3>
            <p className="max-w-3xl text-[var(--secondary-text)]">
              From understanding the problem to refining the solution, I approach every project with curiosity, clarity, and a focus on{" "}
              <span className="text-[var(--accent)]">practical results</span>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Understand the Problem",
                description:
                  "Understand user needs, project goals, and the challenges that need to be solved before choosing a solution.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Plan & Design",
                description:
                  "Organize requirements, explore ideas, and create clear, user-friendly interfaces and practical digital solutions.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="4" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 7H12M6 10H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Build & Refine",
                description:
                  "Turn ideas into practical solutions, review the results, and make improvements where needed.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 10L7 13L14 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Learn & Improve",
                description:
                  "Use feedback, explore new ideas, and continuously improve my design and problem-solving approach.",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M9 3V6M9 12V15M3 9H6M12 9H15M5.64 5.64L7.76 7.76M10.24 10.24L12.36 12.36M5.64 12.36L7.76 10.24M10.24 7.76L12.36 5.64" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <article
                key={item.step}
                className={`how-work-card how-work-connector relative flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_90%,transparent)] p-6 backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold tracking-tight text-[var(--accent)]/80">
                    {item.step}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="text-sm text-[var(--secondary-text)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,117,0.12),transparent_60%)]" />
          <div className="relative flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Career Focus</h3>
            <p className="max-w-3xl text-lg text-[var(--secondary-text)]">
              I aim to continue growing at the intersection of design and technology,
              contribute to useful digital products, and help create experiences
              that support both users and business goals.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
