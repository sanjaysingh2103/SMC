export type CanadianProvince = {
  slug: string;
  name: string;
  abbreviation: string;
  majorCities: string[];
  intlStudentShare: string;
  topInstitutions: string[];
  averageTuitionCAD: string;
  livingCostCAD: string;
  highlight: string;
  pgwpNotes: string;
};

export const PROVINCES: CanadianProvince[] = [
  {
    slug: "ontario",
    name: "Ontario",
    abbreviation: "ON",
    majorCities: [
      "Toronto",
      "Ottawa",
      "Hamilton",
      "London",
      "Waterloo Region",
      "Brampton",
    ],
    intlStudentShare: "~50% of Canada’s international students",
    topInstitutions: [
      "University of Toronto",
      "McMaster University",
      "Western University",
      "Queen’s University",
      "University of Waterloo",
      "York University",
      "Toronto Metropolitan University",
      "Conestoga College",
      "Seneca Polytechnic",
      "Sheridan College",
    ],
    averageTuitionCAD: "CAD $25,000–45,000 (university undergrad, broad range)",
    livingCostCAD: "CAD $18,000–28,000/year (varies sharply by city)",
    highlight:
      "Canada’s largest higher-education market with unmatched program depth. Study Master Canada is rooted in the Greater Toronto Area with a walk-in office in Brampton, ON-steps from major highways and transit corridors serving Toronto, Peel, and the wider college and university network.",
    pgwpNotes:
      "Ontario graduates access federal PR streams (Express Entry, CEC) and the Ontario Immigrant Nominee Program (OINP) streams aligned with skilled employment. PGWP validity depends on program length and PGWP policy compliance (including field-of-study rules for college programs).",
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    abbreviation: "BC",
    majorCities: ["Vancouver", "Victoria", "Kelowna", "Burnaby", "Surrey"],
    intlStudentShare: "~22% of Canada’s international students",
    topInstitutions: [
      "University of British Columbia",
      "Simon Fraser University",
      "University of Victoria",
      "British Columbia Institute of Technology (BCIT)",
      "Langara College",
      "Douglas College",
    ],
    averageTuitionCAD: "CAD $28,000–50,000 (university undergrad, broad range)",
    livingCostCAD: "CAD $20,000–30,000/year (Vancouver premium)",
    highlight:
      "Pacific gateway with strong tech, sustainability, and film/media clusters. Mild winters on the coast appeal to many international students-paired with globally ranked research universities.",
    pgwpNotes:
      "BC PNP Skills Immigration and Express Entry-linked pathways are common after PGWP work experience. Verify PGWP eligibility for college programs against IRCC field-of-study requirements.",
  },
  {
    slug: "quebec",
    name: "Quebec",
    abbreviation: "QC",
    majorCities: ["Montreal", "Quebec City", "Laval", "Sherbrooke"],
    intlStudentShare: "~15% of Canada’s international students",
    topInstitutions: [
      "McGill University",
      "Université de Montréal",
      "Université Laval",
      "Concordia University",
      "HEC Montréal",
    ],
    averageTuitionCAD:
      "CAD $18,000–35,000 (university range; CEGEP/college pathways differ)",
    livingCostCAD: "CAD $14,000–22,000/year (Montreal often lower than Toronto)",
    highlight:
      "Bilingual province with distinctive CEGEP pathways and strong cultural industries. Montreal offers a vibrant student city experience with comparatively moderate rent in many neighbourhoods.",
    pgwpNotes:
      "Most international students require a Québec Acceptance Certificate (CAQ) before a study permit. PR routes include Québec’s economic programs; French proficiency can unlock additional streams.",
  },
  {
    slug: "alberta",
    name: "Alberta",
    abbreviation: "AB",
    majorCities: ["Calgary", "Edmonton", "Lethbridge", "Red Deer"],
    intlStudentShare: "~6% of Canada’s international students",
    topInstitutions: [
      "University of Alberta",
      "University of Calgary",
      "Mount Royal University",
      "SAIT",
      "NAIT",
    ],
    averageTuitionCAD: "CAD $22,000–38,000 (university undergrad, broad range)",
    livingCostCAD: "CAD $15,000–22,000/year",
    highlight:
      "Energy, engineering, and agri-tech strengths with growing tech hiring in Calgary. Alberta combines respected research universities with polytechnic-style credentials prized by employers.",
    pgwpNotes:
      "Alberta Advantage Immigration Program (AAIP) offers streams for graduates with Alberta job offers. PGWP holders often transition through Canadian work experience into Express Entry.",
  },
  {
    slug: "nova-scotia",
    name: "Nova Scotia",
    abbreviation: "NS",
    majorCities: ["Halifax", "Sydney", "Truro", "Wolfville"],
    intlStudentShare: "~3% of Canada’s international students",
    topInstitutions: [
      "Dalhousie University",
      "Saint Mary’s University",
      "Acadia University",
      "NSCC",
    ],
    averageTuitionCAD: "CAD $18,000–32,000 (university range)",
    livingCostCAD: "CAD $14,000–20,000/year",
    highlight:
      "Atlantic Canada’s hub for higher education and ocean-facing industries. Smaller-city lifestyle with strong community supports and a growing international student presence.",
    pgwpNotes:
      "Nova Scotia participates in the Atlantic Immigration Program (AIP), which can align with employer-driven PR pathways for graduates who secure qualifying offers.",
  },
];

export const provinceBySlug = Object.fromEntries(
  PROVINCES.map((p) => [p.slug, p]),
);
