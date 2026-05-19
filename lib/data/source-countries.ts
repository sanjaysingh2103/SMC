export type SourceCountry = {
  slug: string;
  code: string;
  name: string;
  rank: number;
  population2024: string;
  primaryLanguage: string;
  commonTests: string[];
  popularPrograms: string[];
  popularDestinations: string[];
  timelineMonths: number;
  keyNote: string;
  intakePreference: string;
  documentNotes: string;
};

export const TOP_SOURCE_COUNTRIES: SourceCountry[] = [
  {
    slug: "india",
    code: "in",
    name: "India",
    rank: 1,
    population2024: "~40% of Canada’s international students (2024)",
    primaryLanguage: "Hindi, English, regional languages",
    commonTests: ["IELTS Academic", "PTE Academic", "TOEFL iBT"],
    popularPrograms: [
      "Computer Science & IT",
      "Business & Project Management",
      "Health Sciences & Public Health",
      "Engineering Technology",
      "Hospitality & Culinary",
    ],
    popularDestinations: [
      "Greater Toronto Area",
      "British Columbia (Metro Vancouver)",
      "Alberta (Calgary/Edmonton)",
      "Atlantic Canada",
    ],
    timelineMonths: 10,
    keyNote:
      "The Student Direct Stream (SDS) was discontinued on November 8, 2024. All study permit applicants from India now follow the standard stream with full financial and genuineness documentation. Credential evaluation through WES or ICAS is commonly required for university admissions.",
    intakePreference:
      "September primary; January and May popular for diplomas.",
    documentNotes:
      "Prepare consolidated financial proof (GIC CAD $22,895 effective Sept 1, 2025, plus tuition), academic transcripts with attestation where required, and consistent education history. Expect deeper scrutiny on ties to India and program fit.",
  },
  {
    slug: "china",
    code: "cn",
    name: "China",
    rank: 2,
    population2024: "~10% of Canada’s international students (2024)",
    primaryLanguage: "Mandarin (primary), English for study abroad",
    commonTests: ["IELTS Academic", "TOEFL iBT", "PTE Academic"],
    popularPrograms: [
      "Engineering & Applied Science",
      "Business Analytics",
      "Life Sciences",
      "Economics & Finance",
      "Architecture & Design",
    ],
    popularDestinations: [
      "Greater Toronto Area",
      "Greater Vancouver",
      "Montreal (French programs)",
      "Waterloo tech corridor",
    ],
    timelineMonths: 12,
    keyNote:
      "Chinese students often target research universities and competitive STEM programs. Admissions committees expect polished documents, clear academic narratives, and sometimes notarized translations of school records.",
    intakePreference:
      "September dominant; some graduate programs align with supervisor availability.",
    documentNotes:
      "Notarized Chinese originals plus certified English translations, degree certificates, and verification where institutions require CHESICC-style documentation. Plan extra time for authentication steps.",
  },
  {
    slug: "philippines",
    code: "ph",
    name: "Philippines",
    rank: 3,
    population2024: "~7% of Canada’s international students (2024)",
    primaryLanguage: "Filipino, English (official)",
    commonTests: ["IELTS Academic", "PTE Academic", "Duolingo English Test"],
    popularPrograms: [
      "Practical Nursing & Personal Support Worker pathways",
      "Business & HR",
      "Information Technology",
      "Hospitality Management",
      "Early Childhood Education",
    ],
    popularDestinations: [
      "Ontario (GTA, Ottawa)",
      "Alberta",
      "Manitoba",
      "Atlantic provinces",
    ],
    timelineMonths: 9,
    keyNote:
      "Strong English proficiency is common, which helps with admissions and settlement. Nursing and healthcare-related programs are especially popular; CHED authentication and regulatory prerequisites must be planned early.",
    intakePreference:
      "January and September intakes for health programs; rolling for business/IT.",
    documentNotes:
      "CHED-authenticated transcripts for higher education, TOR with course descriptions for credit assessment, and clear documentation of clinical/practicum hours where applicable.",
  },
  {
    slug: "nigeria",
    code: "ng",
    name: "Nigeria",
    rank: 4,
    population2024: "~5% of Canada’s international students (2024)",
    primaryLanguage: "English (official), Hausa, Yoruba, Igbo",
    commonTests: ["IELTS Academic", "TOEFL iBT", "PTE Academic"],
    popularPrograms: [
      "Business & Supply Chain",
      "IT & Cybersecurity",
      "Engineering Technology",
      "Public Health",
      "Project Management",
    ],
    popularDestinations: [
      "Ontario",
      "Alberta",
      "Nova Scotia (Atlantic PR pathway)",
      "Manitoba",
    ],
    timelineMonths: 11,
    keyNote:
      "Financial documentation and proof of funds receive elevated scrutiny. WAEC/NECO verification, consistent academic timelines, and a credible study plan are critical. Atlantic Canada can align well with Atlantic Immigration Program goals after graduation.",
    intakePreference:
      "September primary; May for diplomas where available.",
    documentNotes:
      "WAEC scratch card verification, university transcripts with senate stamps, bank history showing legitimate sources of funds, and employment letters that match deposits.",
  },
  {
    slug: "iran",
    code: "ir",
    name: "Iran",
    rank: 5,
    population2024: "~4% of Canada’s international students (2024)",
    primaryLanguage: "Persian (Farsi), English for academic work",
    commonTests: ["IELTS Academic", "TOEFL iBT"],
    popularPrograms: [
      "STEM (Engineering, CS, Data)",
      "Architecture",
      "Environmental Science",
      "Mathematics & Statistics",
      "Graduate research programs",
    ],
    popularDestinations: [
      "Greater Toronto Area",
      "British Columbia",
      "Alberta",
      "Quebec (French proficiency)",
    ],
    timelineMonths: 12,
    keyNote:
      "STEM-focused applicants are common. Extra processing time for documentation authentication through Iranian authorities is typical; start translations and Ministry steps months in advance.",
    intakePreference:
      "September for most universities; rolling college intakes.",
    documentNotes:
      "Ministry of Foreign Affairs authentication where required, certified translations, and detailed course outlines for graduate admissions. Medical exams may apply depending on length of stay.",
  },
  {
    slug: "south-korea",
    code: "kr",
    name: "South Korea",
    rank: 6,
    population2024: "~3% of Canada’s international students (2024)",
    primaryLanguage: "Korean, English for international programs",
    commonTests: ["IELTS Academic", "TOEFL iBT", "Duolingo English Test"],
    popularPrograms: [
      "Business & Marketing",
      "Design & Media",
      "Computer Science",
      "Hospitality",
      "K–12 teacher pathways (select)",
    ],
    popularDestinations: [
      "British Columbia",
      "Ontario",
      "Alberta",
      "Nova Scotia",
    ],
    timelineMonths: 9,
    keyNote:
      "Visa outcomes are generally strong when documentation is complete. Apostille (Hague Convention) applies to Korean public documents for use in Canada-plan apostille timing before translation.",
    intakePreference:
      "September dominant; January for colleges.",
    documentNotes:
      "Apostilled diplomas and transcripts, English translations by certified translators, and consistent national ID/passport naming across all documents.",
  },
  {
    slug: "ghana",
    code: "gh",
    name: "Ghana",
    rank: 7,
    population2024: "~2.5% of Canada’s international students (2024)",
    primaryLanguage: "English (official), Twi, Ga, Ewe",
    commonTests: ["IELTS Academic", "PTE Academic"],
    popularPrograms: [
      "Business & Finance",
      "IT & Data Analytics",
      "Engineering Technology",
      "Health Sciences",
      "Public Administration",
    ],
    popularDestinations: [
      "Ontario",
      "Alberta",
      "Atlantic Canada",
      "Manitoba",
    ],
    timelineMonths: 10,
    keyNote:
      "Ghana is a fast-growing source market. WASSCE verification, credible financial sources, and a clear pathway from secondary to post-secondary studies strengthen applications.",
    intakePreference:
      "September primary; May for diplomas.",
    documentNotes:
      "WAEC verification, high school transcripts with WAEC integration, university transcripts if applicable, and bank statements with verifiable salary/business income.",
  },
  {
    slug: "bangladesh",
    code: "bd",
    name: "Bangladesh",
    rank: 8,
    population2024: "~2% of Canada’s international students (2024)",
    primaryLanguage: "Bengali, English",
    commonTests: ["IELTS Academic", "PTE Academic", "TOEFL iBT"],
    popularPrograms: [
      "Civil & Mechanical Engineering Technology",
      "Computer Science",
      "Business & Accounting",
      "Supply Chain & Logistics",
      "Environmental Studies",
    ],
    popularDestinations: [
      "Ontario",
      "Alberta",
      "British Columbia",
      "Atlantic provinces",
    ],
    timelineMonths: 10,
    keyNote:
      "Engineering-focused students are common. Attestation of academic documents through education boards and careful financial planning (GIC plus tuition) are essential under current IRCC standards.",
    intakePreference:
      "September dominant; limited January seats.",
    documentNotes:
      "Board-attested marksheets, consolidated transcripts, English translations, and employment letters that align with bank deposits.",
  },
  {
    slug: "vietnam",
    code: "vn",
    name: "Vietnam",
    rank: 9,
    population2024: "~2% of Canada’s international students (2024)",
    primaryLanguage: "Vietnamese, English",
    commonTests: ["IELTS Academic", "PTE Academic", "Duolingo English Test"],
    popularPrograms: [
      "Business & Hospitality",
      "Computer Science",
      "Health Sciences",
      "Graphic Design & UX",
      "Environmental Technology",
    ],
    popularDestinations: [
      "British Columbia",
      "Ontario",
      "Alberta",
      "Nova Scotia",
    ],
    timelineMonths: 9,
    keyNote:
      "Strong academic profiles are common. English testing is often the pacing item-book early and align target scores with program cutoffs and PGWP language expectations at the graduate level.",
    intakePreference:
      "September primary; May for colleges.",
    documentNotes:
      "Notarized translations from Vietnamese, degree verification, and consistent naming across national ID and passport.",
  },
  {
    slug: "nepal",
    code: "np",
    name: "Nepal",
    rank: 10,
    population2024: "~1.8% of Canada’s international students (2024)",
    primaryLanguage: "Nepali, English",
    commonTests: ["IELTS Academic", "PTE Academic"],
    popularPrograms: [
      "IT & Software Development",
      "Business Management",
      "Tourism & Hospitality",
      "Health Sciences",
      "Environmental Science",
    ],
    popularDestinations: [
      "Ontario",
      "Alberta",
      "British Columbia",
      "Atlantic Canada",
    ],
    timelineMonths: 11,
    keyNote:
      "After 2024 policy shifts, financial rigor and genuine intent documentation are more important than ever. Clear education progression, credible sponsors, and aligned work history strengthen outcomes.",
    intakePreference:
      "September dominant; January for select diplomas.",
    documentNotes:
      "SEE/+2 transcripts with attestation, university transcripts, property or income documentation where used as funds source, and detailed study plans referencing program outcomes.",
  },
];

export const countryBySlug = Object.fromEntries(
  TOP_SOURCE_COUNTRIES.map((c) => [c.slug, c]),
);
