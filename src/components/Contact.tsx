"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";
import Section from "./Section";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setErrorMessage(
        "Formspree endpoint not configured. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to your environment variables."
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || "Portfolio contact form",
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to opportunities and collaborations."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-[var(--secondary-text)]">
            Have a project in mind, a question, or an opportunity to discuss?
            I'd love to hear from you. Send me a message, and I'll get back to
            you as soon as I can.
          </p>
          <div className="flex flex-col gap-2">
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="text-[var(--accent)] hover:opacity-90"
              >
                {profile.email}
              </a>
            ) : null}
            {profile.phone ? (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="text-[var(--accent)] hover:opacity-90"
              >
                {profile.phone}
              </a>
            ) : null}
            {profile.location ? (
              <span className="text-[var(--secondary-text)]">
                Location: {profile.location}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Contact Form</h3>
          {status === "success" ? (
            <div className="rounded-md border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-4 text-sm text-[var(--foreground)]">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-3" noValidate>
              <div className="grid gap-1">
                <label htmlFor="name" className="text-sm text-[var(--secondary-text)]">
                  Name <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-sm text-[var(--secondary-text)]">
                  Email address <span className="text-[var(--accent)]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="subject" className="text-sm text-[var(--secondary-text)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="message" className="text-sm text-[var(--secondary-text)]">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                />
              </div>
              {status === "error" && errorMessage ? (
                <p className="text-sm text-red-400">{errorMessage}</p>
              ) : null}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
