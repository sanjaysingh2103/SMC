"use client";

import { useMemo, useState } from "react";
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

function Field({
  label,
  required,
  children,
  hint,
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

const inputCls =
  "w-full rounded-xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

const selectCls =
  "w-full rounded-xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

const textareaCls =
  "w-full min-h-[120px] resize-y rounded-xl border border-sm-gray-200 bg-white px-4 py-3 text-sm text-sm-gray-900 shadow-sm outline-none transition focus:border-sm-teal/60 focus:ring-4 focus:ring-sm-teal/10";

function PillTabs({
  tabs,
  value,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="tab-container">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`tab-btn ${value === t.id ? "active-blue" : ""}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function ContactIntakeForms({ page }: { page?: string }) {
  const [tab, setTab] = useState<"contact" | "eligibility">("contact");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "General inquiry",
    message: "",
  });
  const [elig, setElig] = useState({
    name: "",
    email: "",
    phone: "",
    studentType: "international",
    currentLocation: "",
    destination: "Canada",
    level: "Diploma / Certificate",
    programInterest: "",
    intake: "",
    budgetCad: "",
    education: "",
    grades: "",
    englishTest: "",
    visaRefusal: "No",
    notes: "",
  });

  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const primaryLabel = useMemo(
    () => (tab === "contact" ? "Send message" : "Submit eligibility check"),
    [tab],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setSending(true);
    try {
      if (tab === "contact") {
        const r = await postJson<Result>("/api/contact", { ...contact, page });
        setResult(r);
        if (r.ok) {
          setContact((s) => ({ ...s, message: "" }));
        }
      } else {
        const r = await postJson<Result>("/api/eligibility", { ...elig, page });
        setResult(r);
        if (r.ok) {
          setElig((s) => ({ ...s, notes: "" }));
        }
      }
    } catch {
      setResult({ ok: false, error: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-3xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-sm-gray-900">Contact & Free Eligibility Check</h2>
          <p className="mt-2 text-sm text-sm-gray-600">
            Fill the right form and we&apos;ll reply within <strong>1 business day</strong> (usually faster).
          </p>
        </div>
        <PillTabs
          tabs={[
            { id: "contact", label: "Contact us" },
            { id: "eligibility", label: "Eligibility check" },
          ]}
          value={tab}
          onChange={(v) => setTab(v as typeof tab)}
        />
      </div>

      <form className="mt-8 space-y-5" onSubmit={onSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" required>
            <input
              className={inputCls}
              value={tab === "contact" ? contact.name : elig.name}
              onChange={(e) =>
                tab === "contact"
                  ? setContact((s) => ({ ...s, name: e.target.value }))
                  : setElig((s) => ({ ...s, name: e.target.value }))
              }
              placeholder="Your name"
              required
            />
          </Field>
          <Field label="Email" required hint="We reply here">
            <input
              className={inputCls}
              type="email"
              value={tab === "contact" ? contact.email : elig.email}
              onChange={(e) =>
                tab === "contact"
                  ? setContact((s) => ({ ...s, email: e.target.value }))
                  : setElig((s) => ({ ...s, email: e.target.value }))
              }
              placeholder={`you@example.com`}
              required
            />
          </Field>
          <Field label="Phone / WhatsApp" hint="Optional but faster">
            <input
              className={inputCls}
              value={tab === "contact" ? contact.phone : elig.phone}
              onChange={(e) =>
                tab === "contact"
                  ? setContact((s) => ({ ...s, phone: e.target.value }))
                  : setElig((s) => ({ ...s, phone: e.target.value }))
              }
              placeholder="+1 905…"
            />
          </Field>

          {tab === "contact" ? (
            <Field label="Topic">
              <select
                className={selectCls}
                value={contact.topic}
                onChange={(e) => setContact((s) => ({ ...s, topic: e.target.value }))}
              >
                <option>General inquiry</option>
                <option>OSAP / Ontario aid</option>
                <option>StudentAid BC</option>
                <option>International admissions</option>
                <option>GIC & financial planning</option>
                <option>Study permit & visa (RCIC partner)</option>
              </select>
            </Field>
          ) : (
            <Field label="Student type">
              <select
                className={selectCls}
                value={elig.studentType}
                onChange={(e) => setElig((s) => ({ ...s, studentType: e.target.value }))}
              >
                <option value="international">International (outside Canada)</option>
                <option value="domestic">Canadian / PR (in Canada)</option>
                <option value="other">Other</option>
              </select>
            </Field>
          )}
        </div>

        {tab === "contact" ? (
          <Field label="Message" required hint="Tell us your situation">
            <textarea
              className={textareaCls}
              value={contact.message}
              onChange={(e) => setContact((s) => ({ ...s, message: e.target.value }))}
              placeholder="What are you trying to do, and what timeline are you targeting?"
              required
            />
          </Field>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Current location" hint="City, country">
              <input
                className={inputCls}
                value={elig.currentLocation}
                onChange={(e) => setElig((s) => ({ ...s, currentLocation: e.target.value }))}
                placeholder="e.g., Lahore, Pakistan"
              />
            </Field>
            <Field label="Desired intake" hint="Month + year">
              <input
                className={inputCls}
                value={elig.intake}
                onChange={(e) => setElig((s) => ({ ...s, intake: e.target.value }))}
                placeholder="e.g., Sep 2026"
              />
            </Field>
            <Field label="Study level">
              <select
                className={selectCls}
                value={elig.level}
                onChange={(e) => setElig((s) => ({ ...s, level: e.target.value }))}
              >
                <option>Diploma / Certificate</option>
                <option>Bachelor&apos;s</option>
                <option>Post-grad certificate</option>
                <option>Master&apos;s</option>
                <option>PhD</option>
              </select>
            </Field>
            <Field label="Program interest" hint="Optional">
              <input
                className={inputCls}
                value={elig.programInterest}
                onChange={(e) => setElig((s) => ({ ...s, programInterest: e.target.value }))}
                placeholder="e.g., Business, IT, Nursing…"
              />
            </Field>
            <Field label="Budget (CAD)" hint="Tuition + living">
              <input
                className={inputCls}
                value={elig.budgetCad}
                onChange={(e) => setElig((s) => ({ ...s, budgetCad: e.target.value }))}
                placeholder="e.g., 25,000"
              />
            </Field>
            <Field label="Education" hint="Highest completed">
              <input
                className={inputCls}
                value={elig.education}
                onChange={(e) => setElig((s) => ({ ...s, education: e.target.value }))}
                placeholder="e.g., Grade 12, Bachelor&apos;s…"
              />
            </Field>
            <Field label="Grades / GPA" hint="Optional">
              <input
                className={inputCls}
                value={elig.grades}
                onChange={(e) => setElig((s) => ({ ...s, grades: e.target.value }))}
                placeholder="e.g., 75% / 3.2 GPA"
              />
            </Field>
            <Field label="English test" hint="Optional">
              <input
                className={inputCls}
                value={elig.englishTest}
                onChange={(e) => setElig((s) => ({ ...s, englishTest: e.target.value }))}
                placeholder="IELTS 6.5 (L6.0)…"
              />
            </Field>
            <Field label="Any prior visa refusal?">
              <select
                className={selectCls}
                value={elig.visaRefusal}
                onChange={(e) => setElig((s) => ({ ...s, visaRefusal: e.target.value }))}
              >
                <option>No</option>
                <option>Yes</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
            <Field label="Notes" hint="Anything important">
              <textarea
                className={textareaCls}
                value={elig.notes}
                onChange={(e) => setElig((s) => ({ ...s, notes: e.target.value }))}
                placeholder="Timeline, dependants, gap, refusals, preferred city…"
              />
            </Field>
          </div>
        )}

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
                <div className="font-bold">Submitted successfully.</div>
                <div className="mt-1 text-sm text-sm-gray-700">
                  If you prefer WhatsApp, message us at{" "}
                  <a className="underline" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    {SITE.whatsapp}
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
          className="btn-red w-full justify-center"
          disabled={sending}
        >
          {sending ? "Sending…" : primaryLabel}
        </button>

        <p className="text-xs text-sm-gray-500">
          By submitting, you consent to be contacted by email/phone/WhatsApp for this inquiry.
        </p>
      </form>
    </div>
  );
}

