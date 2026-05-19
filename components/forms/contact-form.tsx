"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Result = { ok: true } | { ok: false; error: string };

async function postJson<T>(url: string, payload: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  return (await res.json()) as T;
}

const inputCls =
  "w-full rounded-2xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

const selectCls =
  "w-full rounded-2xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

const textareaCls =
  "w-full min-h-[140px] resize-y rounded-2xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-sm-gray-900">
          {label} {required ? <span className="text-sm-orange">*</span> : null}
        </span>
        {hint ? <span className="text-xs text-sm-gray-500">{hint}</span> : null}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

export function ContactForm({ page }: { page?: string }) {
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General inquiry",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setSending(true);
    try {
      const r = await postJson<Result>("/api/contact", { ...form, page });
      setResult(r);
      if (r.ok) setForm((s) => ({ ...s, message: "" }));
    } catch {
      setResult({ ok: false, error: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sm-gray-200/90 bg-white shadow-[var(--shadow-md)] ring-1 ring-sm-gray-100/90">
      <div
        className="h-1.5 w-full bg-gradient-to-r from-[color:var(--blue)] via-[color:var(--red)] to-[color:var(--green-mid)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-sm-teal/12 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-sm-orange/8 blur-3xl" aria-hidden />

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex min-w-0 gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sm-teal/15 via-white to-sm-orange/10 shadow-inner ring-1 ring-sm-teal/25">
              <Send className="h-7 w-7 text-sm-teal-dark" aria-hidden strokeWidth={2} />
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sm-teal-dark">Contact form</p>
              <h2 className="mt-2 font-extrabold tracking-tight text-sm-gray-900">
                <span className="text-2xl md:text-3xl">Send a </span>
                <span className="text-2xl text-[color:var(--red)] md:text-3xl">message</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-sm-gray-600 md:text-[15px]">
                Tell us your timeline, education level, and what you&apos;re aiming for — we&apos;ll route it to the right
                counsellor and reply fast.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 rounded-2xl border border-sm-teal/25 bg-gradient-to-br from-sm-teal/8 to-white p-4 shadow-sm ring-1 ring-white/70 sm:max-w-[280px] lg:w-auto lg:self-start">
            <div className="flex items-center gap-2 text-sm-teal-dark">
              <Clock className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-widest">Typical reply</span>
            </div>
            <div className="flex items-start gap-2.5 border-t border-sm-teal/15 pt-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--green-mid)]" aria-hidden />
              <span className="text-lg font-extrabold leading-snug tracking-tight text-sm-gray-900">
                Within 1 business day
              </span>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-5 border-t border-sm-gray-100 pt-8" onSubmit={onSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" required>
            <input
              className={inputCls}
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              placeholder="Your name"
              required
            />
          </Field>
          <Field label="Email" required hint="We reply here">
            <input
              className={inputCls}
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              placeholder="you@example.com"
              required
            />
          </Field>
          <Field label="Phone / WhatsApp" hint="Optional but faster">
            <input
              className={inputCls}
              value={form.phone}
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              placeholder="+1 905…"
            />
          </Field>
          <Field label="Topic">
            <select
              className={selectCls}
              value={form.topic}
              onChange={(e) => setForm((s) => ({ ...s, topic: e.target.value }))}
            >
              <option>General inquiry</option>
              <option>International admissions</option>
              <option>GIC & financial planning</option>
              <option>Study permit & visa (RCIC partner)</option>
              <option>OSAP / Ontario aid</option>
              <option>StudentAid BC</option>
            </select>
          </Field>
        </div>

        <Field label="Message" required hint="Be specific">
          <textarea
            className={textareaCls}
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            placeholder="What do you need help with? Include your timeline and current education level."
            required
          />
        </Field>

        {result ? (
          <div
            className={`rounded-2xl border p-4 text-sm ${
              result.ok
                ? "border-sm-green/30 bg-sm-green/10 text-sm-gray-900"
                : "border-sm-orange/30 bg-sm-orange/10 text-sm-gray-900"
            }`}
          >
            {result.ok ? (
              <div>
                <div className="font-bold">Message sent.</div>
                <div className="mt-1 text-sm text-sm-gray-700">
                  Prefer WhatsApp? Message us at{" "}
                  <a className="underline" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    {SITE.phoneDisplay}
                  </a>
                  .
                </div>
              </div>
            ) : (
              <div>
                <div className="font-bold">Couldn&apos;t send right now.</div>
                <div className="mt-1 text-sm text-sm-gray-700">
                  {result.error} You can also email{" "}
                  <a className="underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                  .
                </div>
              </div>
            )}
          </div>
        ) : null}

        <button
          type="submit"
          className="btn-red inline-flex w-full items-center justify-center gap-2 py-3.5 text-base font-bold shadow-[var(--shadow-red)] transition hover:brightness-[1.03] disabled:opacity-60"
          disabled={sending}
        >
          {sending ? (
            "Sending…"
          ) : (
            <>
              <Send className="h-5 w-5 opacity-95" aria-hidden />
              Send message
            </>
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-sm-gray-500 sm:text-left">
          By submitting, you consent to be contacted by email, phone, or WhatsApp for this inquiry only.
        </p>
      </form>
      </div>
    </div>
  );
}

