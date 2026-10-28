"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ProjectImageLightbox({
  src,
  alt,
  width,
  height,
}: ProjectImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        aria-label={`Enlarge image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        aria-label="Close image viewer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3 3L13 13M13 3L3 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[80vh] max-w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="max-h-[80vh] max-w-full h-auto w-auto rounded-2xl object-contain"
        />
      </button>
    </div>
  );
}
