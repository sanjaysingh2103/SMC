"use client";

import { Search } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { InternationalSectionTitle } from "@/components/sections/international-section-title";

// TODO: paste ApplyBoard iframe URL here to activate
const SEARCH_EMBED_URL = "";

export function ProgramSearchEmbed() {
  return (
    <section className="rounded-3xl border border-sm-gray-100 bg-white p-6 shadow-sm md:p-8 md:px-10">
      <div className="w-full">
        <InternationalSectionTitle
          label="PROGRAM DISCOVERY"
          title="Search Canadian colleges & universities"
          description={
            <>
              <p className="text-sm-gray-700">
                Study Master Canada is an ApplyBoard recruitment partner, which helps
                us surface options across 1,500+ programs — quietly in the background
                while your counsellor keeps the strategy human.
              </p>
              <p className="mt-2 text-xs text-sm-gray-500">
                Partnership note: ApplyBoard provides the search infrastructure; your
                offer and PAL still come from the institution and province.
              </p>
            </>
          }
        />
      </div>

      <div className="mt-8">
        {SEARCH_EMBED_URL ? (
          <iframe
            title="ApplyBoard program search"
            src={SEARCH_EMBED_URL}
            className="h-[800px] w-full rounded-2xl border border-sm-gray-200"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-sm-gray-300 bg-sm-gray-50 px-6 py-16 text-center">
            <Search className="h-10 w-10 text-sm-gray-400" />
            <p className="mt-4 text-lg font-semibold text-sm-gray-900">
              Program search activating soon
            </p>
            <p className="mt-2 max-w-xl text-sm text-sm-gray-600">
              We are finalizing the embedded ApplyBoard experience. In the
              meantime, book a free consultation and we will shortlist programs
              manually-often within two business days.
            </p>
            <Button asChild className="mt-6">
              <a
                href={SITE.contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
