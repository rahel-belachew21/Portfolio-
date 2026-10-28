"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, projects } from "@/data/projects";
import Section from "./Section";

export default function ProjectsOverview() {
  const [active, setActive] = useState<(typeof categories)[number]>("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  const availableCategories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return categories.filter((cat) => cat === "All Projects" || set.has(cat));
  }, []);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of work across design, development, and systems. Content is data-driven so it can be updated easily."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {availableCategories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-transparent bg-[var(--accent)] text-black"
                  : "border-[var(--border)] text-[var(--secondary-text)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition hover:-translate-y-1 hover:shadow-[0_40px_60px_-40px_rgba(0,200,117,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            aria-label={`View details for ${project.name}`}
          >
            <div
              className={`project-thumb relative flex h-48 w-full items-center justify-center ${
                project.slug === "temari-bet-educational-information-platform"
                  ? "project-thumb-temari-bet"
                  : project.slug === "load-it-bulk-logistics-delivery-application"
                    ? "project-thumb-loadit"
                    : project.slug === "pharmaceutical-management-system"
                      ? "project-thumb-pharma"
                      : project.slug === "shelf-sales-inventory-management-platform"
                        ? "project-thumb-shelf"
                        : "bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)]"
              }`}
            >
              {project.cardImage ? (
                <Image
                  src={project.cardImage}
                  alt={`${project.name} student homepage mockup`}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              ) : project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={`${project.name} student homepage mockup`}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              ) : (
                <span className="project-thumb-name px-4 text-lg font-semibold sm:text-xl">
                  {project.name}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--secondary-text)]">
                    {project.category}
                  </span>
                  {project.isPlaceholder ? (
                    <span className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--secondary-text)]">
                      Placeholder
                    </span>
                  ) : null}
                  {project.statusLabel ? (
                    <span className="rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--secondary-text)]">
                      {project.statusLabel}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-[var(--secondary-text)]">
                  {project.shortDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--secondary-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition group-hover:opacity-90">
                  View Case Study
                  <span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
