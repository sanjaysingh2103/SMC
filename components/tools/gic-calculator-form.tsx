"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const BANKS = [
  "Scotiabank - StartRight Program",
  "TD - New to Canada",
  "CIBC - Smart Account bundles",
  "RBC - Student GIC",
  "BMO - Newcomers",
  "ICICI Bank Canada",
  "SBI Canada Bank",
  "HSBC Canada - Newcomers",
  "Simplii Financial - online-first",
] as const;

const GIC_REQUIRED = 22_895;
const SETUP_FEE = 200;
const BUFFER_RATE = 0.1;

export function GicCalculatorForm() {
  const [bank, setBank] = useState<string>(BANKS[0]);
  const [includeFee, setIncludeFee] = useState(true);
  const [includeBuffer, setIncludeBuffer] = useState(true);

  const totals = useMemo(() => {
    const fee = includeFee ? SETUP_FEE : 0;
    const buffer = includeBuffer ? Math.round(GIC_REQUIRED * BUFFER_RATE) : 0;
    const total = GIC_REQUIRED + fee + buffer;
    return { fee, buffer, total };
  }, [includeFee, includeBuffer]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-bold text-sm-gray-900">Inputs</h2>
        <p className="mt-2 text-sm text-sm-gray-600">
          Select your participating bank and options. The regulatory GIC amount
          is fixed at CAD ${GIC_REQUIRED.toLocaleString("en-CA")} (Sept 1, 2025
          onward, per IRCC).
        </p>

        <label className="mt-6 block text-sm font-semibold text-sm-gray-900">
          Participating bank
          <select
            className="mt-2 w-full rounded-xl border border-sm-gray-200 bg-white px-3 py-2 text-sm"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          >
            {BANKS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-6 space-y-3 text-sm text-sm-gray-800">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={includeFee}
              onChange={(e) => setIncludeFee(e.target.checked)}
            />
            Include typical setup fee (CAD $200)
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={includeBuffer}
              onChange={(e) => setIncludeBuffer(e.target.checked)}
            />
            Include 10% buffer on the GIC principal (recommended)
          </label>
        </div>

        <p className="mt-6 text-xs text-sm-gray-500">
          Bank selected: <span className="font-semibold text-sm-gray-800">{bank}</span>
        </p>
      </div>

      <div className="rounded-3xl border border-sm-gray-100 bg-gradient-to-br from-sm-off-white to-white p-6 shadow-[0_20px_50px_-15px_rgba(11,22,40,0.15)] md:p-8">
        <h2 className="text-xl font-bold text-sm-gray-900">Your transfer plan</h2>
        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">Required GIC principal</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${GIC_REQUIRED.toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">Setup fee (optional)</dt>
            <dd className="font-semibold text-sm-gray-900">
              {includeFee ? `CAD $${SETUP_FEE.toLocaleString("en-CA")}` : "CAD $0"}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">10% buffer (optional)</dt>
            <dd className="font-semibold text-sm-gray-900">
              {includeBuffer
                ? `CAD $${totals.buffer.toLocaleString("en-CA")}`
                : "CAD $0"}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 pt-1">
            <dt className="text-base font-bold text-sm-gray-900">Total to transfer</dt>
            <dd className="text-2xl font-extrabold text-sm-teal-dark">
              CAD ${totals.total.toLocaleString("en-CA")}
            </dd>
          </div>
        </dl>

        <div className="mt-8 rounded-2xl border border-sm-gray-100 bg-white p-5">
          <h3 className="text-sm font-bold text-sm-gray-900">What happens after arrival</h3>
          <ul className="mt-3 space-y-2 text-sm text-sm-gray-700">
            <li>Initial release: typically CAD $2,000–5,000 in the first 1–2 weeks</li>
            <li>Monthly installments: remainder split over 10–12 months</li>
            <li>Full access: after 12 months per bank schedule</li>
          </ul>
        </div>

        <Button asChild className="mt-6 w-full">
          <a href={SITE.contactFormUrl} target="_blank" rel="noopener noreferrer">
            Need help setting up your GIC?
          </a>
        </Button>
      </div>
    </div>
  );
}
