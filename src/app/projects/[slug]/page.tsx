import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectImageLightbox from "@/components/ProjectImageLightbox";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const related = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="pt-10 sm:pt-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3">
              <Link
                href="/#projects"
                className="text-sm text-[var(--secondary-text)] hover:text-[var(--foreground)]"
              >
                ← Back to Projects
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--secondary-text)]">
                  {project.category}
                </span>
                {project.isPlaceholder ? (
                  <span className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--secondary-text)]">
                    Placeholder - replace with actual content
                  </span>
                ) : null}
                {project.status ? (
                  <span className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--secondary-text)]">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <header className="flex flex-col gap-4">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {project.name}
                  </h1>
                  <p className="mt-2 max-w-3xl text-lg text-[var(--secondary-text)]">
                    {project.shortDescription}
                  </p>
                </div>
              </header>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Project Hero</h2>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                <div className="flex h-64 w-full items-center justify-center bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)] sm:h-80 lg:h-[420px]">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} main project image`}
                      width={1600}
                      height={900}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 1152px"
                    />
                  ) : (
                    <span className="text-center text-sm text-[var(--secondary-text)]">
                      {project.isPlaceholder
                        ? "[PLACEHOLDER IMAGE] Add main project image to public/images/projects/"
                        : "No image provided - add project screenshots"}
                    </span>
                  )}
                </div>
              </div>
            </section>

            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="flex flex-col gap-6">
                <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">Project Overview</h2>
                  <div className="mt-3 flex flex-col gap-3 text-[var(--secondary-text)]">
                    <p>{project.overview}</p>
                    <div>
                      <h3 className="text-sm font-medium text-[var(--foreground)]">
                        Background and purpose
                      </h3>
                      <p className="mt-1">{project.problemStatement}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[var(--foreground)]">
                        Problem being addressed
                      </h3>
                      <p className="mt-1">{project.problemStatement}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[var(--foreground)]">
                        Target users
                      </h3>
                      <ul className="mt-1 flex flex-col gap-1">
                        {project.targetUsers.map((user, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            <span>{user}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[var(--foreground)]">
                        My role and responsibilities
                      </h3>
                      <ul className="mt-1 flex flex-col gap-1">
                        {project.roleResponsibilities.map((role, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs">
                        Only confirmed design/system work is listed; no unconfirmed
                        development claims are made.
                      </p>
                    </div>
                    {project.toolsTechnologies && project.toolsTechnologies.length > 0 ? (
                      <div>
                        <h3 className="text-sm font-medium text-[var(--foreground)]">
                          Tools and technologies actually used
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.toolsTechnologies.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {"duration" in project && (project as { duration?: string }).duration ? (
                      <div>
                        <h3 className="text-sm font-medium text-[var(--foreground)]">
                          Project duration
                        </h3>
                        <p className="mt-1">{(project as { duration: string }).duration}</p>
                      </div>
                    ) : null}
                  </div>
                </section>

                <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">The Challenge</h2>
                  <p className="mt-3 text-[var(--secondary-text)]">
                    {project.problemStatement}
                  </p>
                </section>

                <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">
                    {project.keyScreens && project.keyScreens.length > 0
                      ? "Key Screens"
                      : "Final Design / Solution"}
                  </h2>
                  {project.keyScreens && project.keyScreens.length > 0 ? (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {project.keyScreens.map((screen, idx) => (
                        <figure
                          key={idx}
                          className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                        >
                          <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                            <ProjectImageLightbox
                              src={screen.image}
                              alt={`${project.name} key screen: ${screen.title}`}
                              width={1200}
                              height={800}
                            />
                          </div>
                          <figcaption className="flex flex-col gap-1 border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--secondary-text)]">
                            <p className="font-medium text-[var(--foreground)]">
                              {screen.title}
                            </p>
                            {screen.description ? (
                              <p>{screen.description}</p>
                            ) : null}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : project.screenshots && project.screenshots.length > 0 ? (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {project.screenshots.map((shot, idx) => (
                        <figure
                          key={idx}
                          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                        >
                          <Image
                            src={shot}
                            alt={`${project.name} screenshot ${idx + 1}`}
                            width={1200}
                            height={800}
                            className="h-full w-full object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          <figcaption className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--secondary-text)]">
                            Screenshot {idx + 1} - {project.name}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 rounded-2xl border border-dashed border-[var(--border)] p-6 text-center text-sm text-[var(--secondary-text)]">
                      No project screenshots available yet. Add images to{" "}
                      <code>public/images/projects/</code> and reference them in{" "}
                      <code>src/data/projects.ts</code> via{" "}
                      <code>thumbnail</code> and <code>screenshots</code>.
                    </div>
                  )}
                </section>

                {project.inventoryManagement ? (
                  <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                    <h2 className="text-xl font-semibold">
                      {project.inventoryManagement.title}
                    </h2>
                    <p className="mt-3 text-[var(--secondary-text)]">
                      {project.inventoryManagement.description}
                    </p>
                  </section>
                ) : null}

                {project.challengesSolutions &&
                project.challengesSolutions.length > 0 ? (
                  <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                    <h2 className="text-xl font-semibold">Challenges and solutions</h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {project.challengesSolutions.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-[var(--border)] p-4"
                        >
                          <p className="text-sm font-medium">Challenge</p>
                          <p className="mt-1 text-[var(--secondary-text)]">
                            {item.challenge}
                          </p>
                          <p className="mt-3 text-sm font-medium">Solution</p>
                          <p className="mt-1 text-[var(--secondary-text)]">
                            {item.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {project.quizResults ? (
                  <section className="rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                    <h2 className="text-xl font-semibold">
                      {project.quizResults.title}
                    </h2>
                    <p className="mt-3 text-[var(--secondary-text)]">
                      {project.quizResults.summary}
                    </p>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                      <div className="relative aspect-video w-full">
                        <ProjectImageLightbox
                          src={project.quizResults.image}
                          alt={`${project.name} quiz results: ${project.quizResults.title}`}
                          width={1200}
                          height={800}
                        />
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>

              <aside className="flex flex-col gap-6">
                <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <h3 className="text-lg font-semibold">Tools and technologies</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.toolsTechnologies.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--secondary-text)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl border border-[var(--border)] p-6">
                  <h3 className="text-lg font-semibold">Related projects</h3>
                  {related.length === 0 ? (
                    <p className="mt-2 text-sm text-[var(--secondary-text)]">
                      No related projects in this category yet.
                    </p>
                  ) : (
                    <div className="mt-3 flex flex-col gap-3">
                      {related.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/projects/${rel.slug}`}
                          className="flex flex-col gap-1 rounded-xl border border-[var(--border)] p-3 transition hover:bg-[var(--card)]"
                        >
                          <span className="text-sm font-medium">
                            {rel.name}
                          </span>
                          <span className="text-xs text-[var(--secondary-text)]">
                            {rel.category}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </section>

                <section className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] p-6">
                  <h3 className="text-lg font-semibold">Project Navigation</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/#projects"
                      className="text-sm text-[var(--accent)] hover:opacity-90"
                    >
                      ← Back to Projects
                    </Link>
                    {prev ? (
                      <Link
                        href={`/projects/${prev.slug}`}
                        className="text-sm text-[var(--secondary-text)] hover:text-[var(--foreground)]"
                      >
                        ← Previous Project: {prev.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-[var(--secondary-text)]">
                        No previous project
                      </span>
                    )}
                    {next ? (
                      <Link
                        href={`/projects/${next.slug}`}
                        className="text-sm text-[var(--secondary-text)] hover:text-[var(--foreground)]"
                      >
                        Next Project: {next.name} →
                      </Link>
                    ) : (
                      <span className="text-sm text-[var(--secondary-text)]">
                        No next project
                      </span>
                    )}
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
