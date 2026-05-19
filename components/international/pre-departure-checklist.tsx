"use client";

import { useMemo, useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

type Section = { title: string; items: string[] };

function sectionAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const SECTIONS: Section[] = [
  {
    title: "Documents",
    items: [
      "Passport (valid for full study period where possible)",
      "Study permit approval / POE letter",
      "Letter of acceptance (LOA) from your DLI",
      "GIC certificate and bank correspondence",
      "Medical records (translated if required)",
      "Vaccination records",
      "Academic transcripts (originals + copies)",
      "English test results (originals)",
      "Insurance cards / policy numbers",
      "Emergency contacts printed on paper",
    ],
  },
  {
    title: "Packing",
    items: [
      "Winter coat rated for Canadian cold snaps",
      "Winter boots with grip (ice/snow)",
      "Thermal base layers",
      "One formal outfit (networking, interviews)",
      "Plug adapters for Canadian outlets",
      "Laptop + chargers in carry-on",
      "Medications (90-day supply where permitted) + prescriptions",
      "Small cultural items that help homesickness",
    ],
  },
  {
    title: "Insurance",
    items: [
      "Travel insurance covering your flight date",
      "Provincial health coverage gap plan until OHIP/MSP active",
      "Contents insurance once you sign a lease",
    ],
  },
  {
    title: "Flights",
    items: [
      "Book 8–12 weeks ahead when possible for pricing",
      "Confirm baggage allowance vs winter gear volume",
      "Arrange airport pickup or rideshare backup",
      "Carry CAD $200–400 cash for first 48 hours",
      "Download airline app + offline boarding passes",
    ],
  },
  {
    title: "First-week prep",
    items: [
      "SIN appointment booked (Service Canada)",
      "Bank appointment booked (newcomer package)",
      "Phone plan researched (prepaid vs postpaid)",
      "Housing confirmed with landlord contact saved",
      "Campus orientation date in calendar",
      "OHIP/MSP application steps bookmarked",
    ],
  },
];

export function PreDepartureChecklist() {
  const initial = useMemo(() => {
    const map: Record<string, boolean> = {};
    SECTIONS.forEach((s) => s.items.forEach((i) => (map[i] = false)));
    return map;
  }, []);

  const [checked, setChecked] = useState<Record<string, boolean>>(initial);

  const toggle = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="rounded-3xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-sm-gray-900">Interactive checklist</h2>
          <p className="mt-2 text-sm text-sm-gray-600">
            Tick items off as you pack and pre-book appointments. Print-friendly for parents who love paper.
          </p>
        </div>
        <Button type="button" variant="outline" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>

      <div className="mt-8 space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.title} id={sectionAnchor(section.title)} className="scroll-mt-28">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-sm-teal-dark">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-sm-gray-300"
                    checked={!!checked[item]}
                    onChange={() => toggle(item)}
                  />
                  <span className="text-sm text-sm-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
