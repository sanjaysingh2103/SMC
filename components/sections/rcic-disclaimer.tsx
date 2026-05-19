import { ShieldCheck } from "lucide-react";

export function RcicDisclaimer() {
  return (
    <div className="rounded-r-lg border-l-4 border-sm-orange bg-sm-orange/5 p-5">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sm-orange-dark" />
        <p className="text-sm leading-relaxed text-sm-gray-700">
          Regulated immigration advice - including study permit applications,
          appeals, spouse work permits, and PR pathways - is provided exclusively
          by our partner Visa Master Canada, a well-established licensed RCIC
          team. Study Master Canada provides education consulting and admissions
          support only.
        </p>
      </div>
    </div>
  );
}
