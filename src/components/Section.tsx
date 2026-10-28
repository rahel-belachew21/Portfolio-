import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) ? (
          <div className="mb-10 flex flex-col gap-2">
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="max-w-2xl text-[var(--secondary-text)]">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
