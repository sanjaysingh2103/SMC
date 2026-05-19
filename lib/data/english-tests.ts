export type EnglishTest = {
  id: string;
  name: string;
  format: string;
  acceptingInstitutions: string;
  typicalScores: string;
  fee: string;
  notes: string;
};

export const ENGLISH_TESTS: EnglishTest[] = [
  {
    id: "ielts",
    name: "IELTS Academic",
    format:
      "Four modules (Listening, Reading, Writing, Speaking); paper or computer; ~2h 45m + speaking slot",
    acceptingInstitutions:
      "Accepted widely across Canadian DLIs for degree and diploma admissions",
    typicalScores:
      "Undergraduate often 6.0–6.5 overall (higher for competitive programs); graduate commonly 6.5–7.5+",
    fee: "~CAD $300–345 (varies by test centre)",
    notes:
      "IELTS Academic is the default benchmark for many institutions. Results are valid two years from the test date.",
  },
  {
    id: "toefl",
    name: "TOEFL iBT",
    format:
      "Internet-based test with Reading, Listening, Speaking, Writing; ~2h; home edition available where permitted",
    acceptingInstitutions:
      "Broadly accepted at universities; verify college acceptance lists",
    typicalScores:
      "Undergraduate often 80–90+; graduate frequently 90–100+ for competitive programs",
    fee: "~USD $225–290 depending on location",
    notes:
      "Strong alternative where institutions publish TOEFL minima. Always confirm your specific program’s accepted tests.",
  },
  {
    id: "pte",
    name: "PTE Academic",
    format:
      "Computer-based integrated tasks; typically completed in a single ~2h sitting",
    acceptingInstitutions:
      "Growing acceptance across Canadian institutions-check program pages",
    typicalScores:
      "Typical published ranges often ~58–65+ (undergrad) and ~65–70+ (graduate), program-dependent",
    fee: "~CAD $330–360",
    notes:
      "Fast score turnaround appeals to tight deadlines. Verify acceptance for both admission and any scholarship criteria.",
  },
  {
    id: "duolingo",
    name: "Duolingo English Test",
    format:
      "Fully online adaptive test with video interview component; ~1h effective test time",
    acceptingInstitutions:
      "Accepted by many colleges and some universities-always confirm per program",
    typicalScores:
      "Common minimums ~105–120 overall; competitive programs may require higher subscores",
    fee: "~USD $59 per attempt (promotional pricing may vary)",
    notes:
      "Convenient for reruns, but not universally accepted. Pair with institution-specific guidance before booking.",
  },
];
