"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

type ProgramLevel = "cert" | "bachelor" | "master" | "phd";
type Housing = "on" | "shared" | "private";
type Lifestyle = "budget" | "moderate" | "premium";

type CityOption = { label: string; livingBase: number };

export const PROVINCE_CITY_MODEL: Record<
  string,
  { label: string; cities: CityOption[] }
> = {
  undecided: {
    label: "Not decided",
    cities: [{ label: "Not decided", livingBase: 16_000 }],
  },
  ontario: {
    label: "Ontario",
    cities: [
      { label: "Toronto", livingBase: 22_000 },
      { label: "Peel / Brampton (GTA)", livingBase: 17_000 },
      { label: "Ottawa", livingBase: 18_000 },
    ],
  },
  "british-columbia": {
    label: "British Columbia",
    cities: [
      { label: "Vancouver", livingBase: 24_000 },
      { label: "Victoria", livingBase: 19_000 },
    ],
  },
  quebec: {
    label: "Quebec",
    cities: [
      { label: "Montreal", livingBase: 16_000 },
      { label: "Quebec City", livingBase: 14_000 },
    ],
  },
  alberta: {
    label: "Alberta",
    cities: [
      { label: "Calgary", livingBase: 17_000 },
      { label: "Edmonton", livingBase: 15_000 },
    ],
  },
  "nova-scotia": {
    label: "Nova Scotia",
    cities: [{ label: "Halifax", livingBase: 15_000 }],
  },
};

const PROVINCE_KEYS = [
  "undecided",
  "ontario",
  "british-columbia",
  "quebec",
  "alberta",
  "nova-scotia",
] as const;

const TUITION: Record<ProgramLevel, number> = {
  cert: 15_000,
  bachelor: 28_000,
  master: 25_000,
  phd: 10_000,
};

const HOUSING_MULT: Record<Housing, number> = {
  on: 0.85,
  shared: 1.0,
  private: 1.4,
};

const LIFESTYLE_MULT: Record<Lifestyle, number> = {
  budget: 0.85,
  moderate: 1.0,
  premium: 1.3,
};

const ONE_TIME = 3_500;
const IRCC_GIC_LINE = 22_895;

export function CostCalculatorForm() {
  const [level, setLevel] = useState<ProgramLevel>("bachelor");
  const [provinceKey, setProvinceKey] = useState<string>("ontario");
  const province =
    PROVINCE_CITY_MODEL[provinceKey] ?? PROVINCE_CITY_MODEL.undecided;
  const [cityLabel, setCityLabel] = useState(province.cities[0]?.label ?? "Not decided");
  const [housing, setHousing] = useState<Housing>("shared");
  const [lifestyle, setLifestyle] = useState<Lifestyle>("moderate");

  const cityLivingBase =
    province.cities.find((c) => c.label === cityLabel)?.livingBase ??
    province.cities[0]?.livingBase ??
    16_000;

  const result = useMemo(() => {
    const tuition = TUITION[level];
    const living =
      cityLivingBase * HOUSING_MULT[housing] * LIFESTYLE_MULT[lifestyle];
    const firstYear = tuition + living + ONE_TIME;
    const buffer = Math.round(firstYear * 0.1);
    const planMinimum = firstYear + buffer;
    return { tuition, living, firstYear, buffer, planMinimum };
  }, [level, cityLivingBase, housing, lifestyle]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-bold text-sm-gray-900">Your profile</h2>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-sm font-semibold text-sm-gray-900">Program level</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {(
                [
                  ["cert", "Certificate / Diploma"],
                  ["bachelor", "Bachelor's"],
                  ["master", "Master's"],
                  ["phd", "Doctoral"],
                ] as const
              ).map(([value, label]) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-sm-gray-200 px-3 py-2 text-sm hover:border-sm-teal/40"
                >
                  <input
                    type="radio"
                    name="level"
                    value={value}
                    checked={level === value}
                    onChange={() => setLevel(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <label className="block text-sm font-semibold text-sm-gray-900">
            Province
            <select
              className="mt-2 w-full rounded-xl border border-sm-gray-200 bg-white px-3 py-2 text-sm"
              value={provinceKey}
              onChange={(e) => {
                const key = e.target.value;
                setProvinceKey(key);
                const next = PROVINCE_CITY_MODEL[key]?.cities[0]?.label;
                if (next) setCityLabel(next);
              }}
            >
              {PROVINCE_KEYS.map((key) => (
                <option key={key} value={key}>
                  {PROVINCE_CITY_MODEL[key].label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-semibold text-sm-gray-900">
            City
            <select
              className="mt-2 w-full rounded-xl border border-sm-gray-200 bg-white px-3 py-2 text-sm"
              value={cityLabel}
              onChange={(e) => setCityLabel(e.target.value)}
            >
              {province.cities.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>

          <div>
            <p className="text-sm font-semibold text-sm-gray-900">Housing type</p>
            <div className="mt-2 grid gap-2">
              {(
                [
                  ["on", "On-campus"],
                  ["shared", "Shared apartment"],
                  ["private", "Private apartment"],
                ] as const
              ).map(([value, label]) => (
                <label key={value} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="housing"
                    checked={housing === value}
                    onChange={() => setHousing(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-sm-gray-900">Lifestyle</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {(
                [
                  ["budget", "Budget"],
                  ["moderate", "Moderate"],
                  ["premium", "Premium"],
                ] as const
              ).map(([value, label]) => (
                <label key={value} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="lifestyle"
                    checked={lifestyle === value}
                    onChange={() => setLifestyle(value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-sm-gray-100 bg-gradient-to-br from-sm-off-white to-white p-6 shadow-[0_20px_50px_-15px_rgba(11,22,40,0.15)] md:p-8">
        <h2 className="text-xl font-bold text-sm-gray-900">Estimated first-year costs</h2>
        <p className="mt-2 text-sm text-sm-gray-600">
          Illustrative model-not an offer of admission, visa approval, or exact
          tuition quote.
        </p>

        <dl className="mt-6 space-y-4 text-sm">
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">Tuition (annual estimate)</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${result.tuition.toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">Living costs (annual, adjusted)</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${Math.round(result.living).toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">One-time costs (fixed model)</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${ONE_TIME.toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">First-year subtotal</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${Math.round(result.firstYear).toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">IRCC proof-of-funds line (GIC minimum)</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${IRCC_GIC_LINE.toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-sm-gray-100 pb-3">
            <dt className="text-sm-gray-600">Recommended buffer (+10%)</dt>
            <dd className="font-semibold text-sm-gray-900">
              CAD ${result.buffer.toLocaleString("en-CA")}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 pt-1">
            <dt className="text-base font-bold text-sm-gray-900">Plan for minimum</dt>
            <dd className="text-2xl font-extrabold text-sm-teal-dark">
              CAD ${result.planMinimum.toLocaleString("en-CA")}
            </dd>
          </div>
        </dl>

        <p className="mt-6 text-xs text-sm-gray-500">
          The IRCC GIC line item is shown separately because it is a regulatory
          proof point-not the same as your rent and groceries budget. See{" "}
          <Link className="text-sm-teal-dark underline" href="/international/cost">
            cost of studying
          </Link>{" "}
          for city tables.
        </p>

        <Button asChild className="mt-6 w-full">
          <a href={SITE.contactFormUrl} target="_blank" rel="noopener noreferrer">
            Talk to a counsellor about your budget
          </a>
        </Button>
      </div>
    </div>
  );
}
