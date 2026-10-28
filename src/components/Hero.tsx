import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero-bg scroll-mt-24 pt-10 sm:pt-16">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-shapes" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span>+</span>
        <span />
        <span />
      </div>
      <div className="hero-content mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[var(--secondary-text)] sm:text-base">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-[var(--foreground)]">Rahel</span>{" "}
                <span className="text-[var(--accent)]">Belachew</span>
              </h1>
              <p className="text-lg text-[var(--foreground)] sm:text-xl">
                Computer Science &amp; Engineering Graduate
              </p>
            </div>
            <p className="max-w-xl text-base text-[var(--secondary-text)] sm:text-lg">
              I design <span className="text-[var(--accent)]">digital solutions</span>{" "}
              and user-friendly interfaces, turning complex requirements into{" "}
              <span className="text-[var(--accent)]">practical experiences</span>{" "}
              that solve real-world problems.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore My Projects
            </Link>
            <a
              href={profile.cvPath}
              download={profile.cvFileName || "cv.pdf"}
              className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card)]"
            >
              Download My CV
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(0,200,117,0.16),transparent_60%)] blur-3xl" />
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Image
              src="/images/rahel-profile1.png"
              alt="Portrait of Rahel Belachew, Computer Science and Engineering graduate"
              width={1024}
              height={1280}
              priority
              className="h-full w-full object-contain object-center"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
