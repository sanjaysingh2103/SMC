export type CityFaq = { q: string; a: string };

export type OsapCity = {
  slug: string;
  name: string;
  province: string;
  region: string;
  officeNote: string;
  intro: string;
  cityContext: string;
  institutions: { name: string; type: string }[];
  whyNote: string;
  faqs: CityFaq[];
};

export type BcCity = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  cityContext: string;
  institutions: { name: string; type: string }[];
  whyNote: string;
  faqs: CityFaq[];
};

export const OSAP_CITIES: OsapCity[] = [
  {
    slug: "brampton",
    name: "Brampton",
    province: "Ontario",
    region: "Peel Region, Greater Toronto Area",
    officeNote: "Our office is at Unit 1805, 83 Kennedy Road South, Brampton — walk in any weekday.",
    intro:
      "Study Master Canada is based in Brampton. If you are a Brampton resident applying for OSAP, you can walk in to our office or WhatsApp us — same-day answers, no appointment needed during office hours.",
    cityContext:
      "Brampton is one of Ontario's fastest-growing cities, with a large population of students attending Sheridan College, Algoma University Brampton, and institutions across Peel Region. OSAP processing for Brampton students follows Ontario rules, but local college designation and program approval are points where errors commonly happen — especially for private career college programs around Kennedy Road and Queen Street. Our team has guided 2,000+ Ontario students and knows the specific programs offered in Peel Region.",
    institutions: [
      { name: "Sheridan College — Davis Campus", type: "College" },
      { name: "Algoma University Brampton", type: "University" },
      { name: "Humber College — Orangeville (nearby)", type: "College" },
      { name: "Conestoga College — Mississauga (nearby)", type: "College" },
    ],
    whyNote:
      "We are in Brampton. Same building as our licensed RCIC partner. Free walk-in consultations Mon–Fri, 9:30am–6:30pm. No appointment needed.",
    faqs: [
      {
        q: "Can I walk into your Brampton office to get OSAP help?",
        a: "Yes. Our office is at Unit 1805, 83 Kennedy Road South, Brampton, ON L6W 3N7. Walk in any weekday between 9:30am and 6:30pm ET. Bring your Notice of Admission, SIN, and any prior OSAP paperwork if you have it.",
      },
      {
        q: "Is Sheridan College Davis Campus OSAP-approved?",
        a: "Sheridan College's Davis Campus in Brampton is a designated institution for OSAP. Most full-time programs there are OSAP-eligible, but specific program codes must be confirmed. We check designation before you apply to prevent funding delays.",
      },
      {
        q: "I live in Brampton but go to school in Toronto. Can I still apply for OSAP?",
        a: "Yes. OSAP eligibility is based on Ontario residency, not the city your institution is in. Brampton residents attending Toronto institutions (Toronto Metropolitan University, George Brown, Seneca, etc.) apply through the same Ontario OSAP portal at ontario.ca/osap.",
      },
      {
        q: "Are there Brampton-specific OSAP offices or branches?",
        a: "No. OSAP is administered provincially — you apply online at ontario.ca/osap. There are no local OSAP branch offices in Brampton. For in-person guidance, Study Master Canada's Brampton office is your closest option.",
      },
      {
        q: "How quickly can I get OSAP help in Brampton?",
        a: "Walk-in same day. For WhatsApp, we typically respond within a few hours during business hours. We serve Brampton, Mississauga, and all of Peel Region from our Kennedy Road office.",
      },
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario",
    region: "Peel Region, Greater Toronto Area",
    officeNote: "Our Brampton office at 83 Kennedy Road South is approximately 10–15 minutes from central Mississauga.",
    intro:
      "Mississauga students — from UTM to Sheridan Hazel McCallion Campus — are a short drive from our Brampton office. We serve all of Peel Region and can handle your OSAP file over WhatsApp or in person.",
    cityContext:
      "Mississauga has a growing post-secondary student population, anchored by the University of Toronto Mississauga and Sheridan College's Hazel McCallion Campus. As one of Ontario's largest cities, Mississauga students regularly face OSAP questions around dependency status (many live at home with parents), GTA living cost allowances, and program designation for programs at smaller private institutions along the Hurontario corridor. Our team is familiar with these local patterns.",
    institutions: [
      { name: "University of Toronto Mississauga (UTM)", type: "University" },
      { name: "Sheridan College — Hazel McCallion Campus", type: "College" },
      { name: "Mississauga Campus — various programs", type: "College" },
    ],
    whyNote:
      "Our Brampton office on Kennedy Road is the closest walk-in OSAP help available to Mississauga students. Free. No appointment needed.",
    faqs: [
      {
        q: "Is UTM (University of Toronto Mississauga) OSAP-approved?",
        a: "Yes. University of Toronto Mississauga is a designated institution for OSAP. All standard degree programs are eligible. If you are registered at UTM with demonstrated financial need, you can apply for OSAP at ontario.ca/osap.",
      },
      {
        q: "Does Sheridan College Hazel McCallion Campus qualify for OSAP?",
        a: "Yes. Sheridan College is a designated OSAP institution — the Hazel McCallion Campus in Mississauga is covered. Check your specific program code in the OSAP portal to confirm designation for your intake year.",
      },
      {
        q: "I live in Mississauga with my parents. Does their income affect my OSAP?",
        a: "If you are assessed as a dependent student (based on age, time since high school, marital status), yes — parental income factors into your expected contribution. Many Mississauga students living at home with parents face reduced assessments. We review your dependency status in our free consultation.",
      },
      {
        q: "Can Mississauga students get in-person OSAP help?",
        a: "Yes. Our Brampton office at 83 Kennedy Road South is 10–15 minutes from most of Mississauga. Walk-in weekdays 9:30am–6:30pm, or WhatsApp us to handle everything remotely.",
      },
    ],
  },
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    region: "City of Toronto, Greater Toronto Area",
    officeNote: "Our Brampton office is approximately 30–40 minutes from downtown Toronto via Highway 427 or the 401.",
    intro:
      "Toronto has the highest concentration of OSAP-eligible institutions in Canada. Whether you are at U of T, Toronto Metropolitan, York, George Brown, Seneca, Humber, or Centennial — our team can help you maximize your OSAP assessment. Free for all Ontario students.",
    cityContext:
      "Toronto students face some of the most complex OSAP files in Ontario: high tuition at research universities, expensive off-campus rent (which factors into living allowances), and a high rate of part-time enrolment at community colleges. Cost-of-living adjustments for Toronto students can significantly change OSAP outcomes compared to smaller-city counterparts. We know these calculations and make sure Toronto students are not leaving grant money on the table by under-reporting costs.",
    institutions: [
      { name: "University of Toronto (St. George, Scarborough, Mississauga)", type: "University" },
      { name: "Toronto Metropolitan University", type: "University" },
      { name: "York University", type: "University" },
      { name: "George Brown College", type: "College" },
      { name: "Humber College", type: "College" },
      { name: "Seneca Polytechnic", type: "College" },
      { name: "Centennial College", type: "College" },
    ],
    whyNote:
      "Toronto students often qualify for higher OSAP living allowances due to GTA rental costs. We make sure your application reflects your actual costs — not an underestimate.",
    faqs: [
      {
        q: "Do Toronto students get a higher OSAP living allowance than students in smaller cities?",
        a: "OSAP living allowances are set provincially and do not automatically adjust for Toronto's rent premium. However, if you live off-campus in Toronto, you can claim the designated living-away-from-home allowance — which is higher than the at-home rate. We verify that your application correctly reflects where you live.",
      },
      {
        q: "My Toronto tuition is $15,000. Does that help my OSAP assessment?",
        a: "Higher tuition increases your recognized costs, which generally increases assessed need — up to program caps. For university tuition above $10,000, most students see more of their costs recognized, but other factors (income, family contributions) cap the net benefit. We model your specific scenario.",
      },
      {
        q: "Can I get OSAP at a private college in Toronto?",
        a: "Some private career colleges in Toronto are OSAP-designated; many are not. Designation is program-specific and can change each intake year. We verify designation before you pay a deposit — preventing the costly mistake of enrolling in a non-eligible program.",
      },
      {
        q: "I go to George Brown College. Is it OSAP-eligible?",
        a: "Yes. George Brown College is a fully designated OSAP institution. Most full-time programs at St. James, Casa Loma, and Waterfront campuses are eligible for OSAP funding.",
      },
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    province: "Ontario",
    region: "York Region, Greater Toronto Area",
    officeNote: "Our Brampton office is approximately 20–25 minutes from Vaughan via Highway 400.",
    intro:
      "Vaughan is home to a large student population attending York University, Seneca College, and institutions across York Region. OSAP help for Vaughan students is free — WhatsApp our Brampton team or walk in.",
    cityContext:
      "Vaughan students typically attend York University (Keele Campus) or Seneca College's Newnham or York campuses. A significant proportion live at home with family — which triggers OSAP's dependency and parental contribution rules. Many Vaughan families have complex income situations (self-employment, small business income) that require careful handling on OSAP income declarations. Our team handles these nuances routinely.",
    institutions: [
      { name: "York University — Keele Campus (adjacent Vaughan area)", type: "University" },
      { name: "Seneca Polytechnic — Newnham Campus", type: "College" },
      { name: "Seneca Polytechnic — York Campus", type: "College" },
    ],
    whyNote:
      "York Region students with complex family income situations (self-employment, business owners) often need careful OSAP income documentation. We handle that — free.",
    faqs: [
      {
        q: "Is York University OSAP-eligible for Vaughan students?",
        a: "Yes. York University is fully designated for OSAP. Vaughan residents attending the Keele Campus apply through the standard ontario.ca/osap portal. Vaughan is in York Region but Ontario residency is what counts for eligibility.",
      },
      {
        q: "My family runs a business in Vaughan. How does that affect my OSAP?",
        a: "Self-employment and business income must be declared accurately on OSAP using your CRA-filed income. Undisclosed business assets or inconsistent income declarations are a common cause of OSAP reassessments and clawbacks in York Region. We review your income documentation before you submit.",
      },
      {
        q: "Can I apply for OSAP if I live in Vaughan and go to a Toronto school?",
        a: "Yes. Your Ontario residency (Vaughan/York Region) qualifies you for OSAP regardless of where your institution is located, as long as the school is OSAP-designated. You apply once through ontario.ca/osap.",
      },
    ],
  },
  {
    slug: "markham",
    name: "Markham",
    province: "Ontario",
    region: "York Region, Greater Toronto Area",
    officeNote: "Our Brampton office serves Markham students. WhatsApp is the fastest option from York Region.",
    intro:
      "Markham is York Region's technology hub, home to students attending York University's Markham Campus, Centennial College, and Seneca. OSAP help for Markham students is free — WhatsApp us any time.",
    cityContext:
      "Markham's student population often includes first-generation Canadian students whose parents have non-traditional income sources. OSAP's rules around parental income, citizenship status, and residency are particularly relevant for Markham families. York University opened a dedicated Markham Campus in 2023, making local post-secondary access even more prominent for Markham residents.",
    institutions: [
      { name: "York University — Markham Campus", type: "University" },
      { name: "Centennial College — Morningside Campus (nearby Scarborough)", type: "College" },
      { name: "Seneca Polytechnic — Newnham Campus", type: "College" },
    ],
    whyNote:
      "York University's Markham Campus opened in 2023 — our team is up to date on its OSAP designation status and program eligibility.",
    faqs: [
      {
        q: "Is York University's Markham Campus OSAP-eligible?",
        a: "York University's Markham Campus programs are part of the main York University institution, which is fully OSAP-designated. Program-level eligibility still depends on full-time status and your specific program code. We verify this before you apply.",
      },
      {
        q: "I'm a first-generation student in Markham. Is OSAP available for me?",
        a: "Yes — first-generation student status can actually help your OSAP assessment in some cases. OSAP uses a first-generation bursary component for qualifying students. Being the first in your family to attend post-secondary may increase your grant portion.",
      },
      {
        q: "My parents are permanent residents in Markham. Can I apply for OSAP?",
        a: "Canadian citizens AND permanent residents of Ontario are eligible for OSAP. If you are a permanent resident (or Canadian citizen) who has lived in Ontario and meets residency rules, you can apply. Bring your PR documentation to your first consultation.",
      },
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    province: "Ontario",
    region: "City of Toronto (East), Greater Toronto Area",
    officeNote: "Our Brampton office serves Scarborough students. WhatsApp is the fastest channel for east-end GTA students.",
    intro:
      "Scarborough is home to UTSC, Centennial College, and Scarborough campuses of Seneca. OSAP help for Scarborough students is free — our Brampton team handles east-end GTA files every week.",
    cityContext:
      "Scarborough students represent a cross-section of Toronto's most diverse communities. UTSC and Centennial College both serve large proportions of lower-income and first-generation students who qualify for maximum OSAP grants when applications are completed correctly. Many Scarborough students underestimate grant eligibility because they are not aware of the Ontario Student Grant rules. We have helped hundreds of east-GTA students correct exactly this.",
    institutions: [
      { name: "University of Toronto Scarborough (UTSC)", type: "University" },
      { name: "Centennial College — Progress Campus", type: "College" },
      { name: "Centennial College — Morningside Campus", type: "College" },
      { name: "Seneca Polytechnic — Scarborough Campus", type: "College" },
    ],
    whyNote:
      "Scarborough has a high proportion of OSAP-eligible students who qualify for significant grant amounts. We make sure you don't leave money on the table.",
    faqs: [
      {
        q: "Is UTSC (University of Toronto Scarborough) OSAP-eligible?",
        a: "Yes. UTSC is a campus of the University of Toronto, a fully designated OSAP institution. All standard degree programs at UTSC are OSAP-eligible. High tuition + demonstrated need means many UTSC students qualify for substantial funding.",
      },
      {
        q: "Is Centennial College OSAP-eligible?",
        a: "Yes. Centennial College (Progress, Morningside, Story Arts, Ashtonbee campuses) is a fully designated OSAP institution. Most full-time programs are eligible. Part-time OSAP is also available for certain programs.",
      },
      {
        q: "I'm a low-income student in Scarborough. What's the maximum OSAP I can get?",
        a: "Maximum OSAP depends on your assessed need — tuition, program length, living situation, income, and family income if dependent. Some low-income Scarborough students receive $10,000+ per year in combined grants and loans. We model your expected assessment before you apply so you know what to expect.",
      },
    ],
  },
];

export const BC_CITIES: BcCity[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "Metro Vancouver, British Columbia",
    intro:
      "Vancouver has the highest concentration of StudentAid BC–eligible institutions in BC. From UBC to Langara to BCIT, our team helps Vancouver students navigate the BC Services Card login, application process, and BC Completion Grant — 100% free.",
    cityContext:
      "Vancouver's post-secondary landscape is large and varied — research universities, polytechnics, language colleges, and private career institutions. StudentAid BC only covers designated institutions, and Vancouver has both publicly funded (UBC, Langara, VCC, BCIT) and non-designated private schools. Vancouver's high cost of living also means that students who apply correctly — reflecting actual rent and living costs — tend to receive higher weekly funding assessments. We make sure your file reflects Vancouver's real cost of living.",
    institutions: [
      { name: "University of British Columbia (UBC) — Vancouver Campus", type: "University" },
      { name: "Langara College", type: "College" },
      { name: "Vancouver Community College (VCC)", type: "College" },
      { name: "Emily Carr University of Art + Design", type: "University" },
      { name: "BCIT — Downtown Campus", type: "Institute" },
    ],
    whyNote:
      "Vancouver students benefit from BC's zero-interest loan policy and the BC Completion Grant (50% of BC loans forgiven at graduation). We help you maximize both.",
    faqs: [
      {
        q: "Is UBC Vancouver OSAP-eligible — or do I apply for StudentAid BC?",
        a: "Vancouver students apply for StudentAid BC (not OSAP) through studentaidbc.ca. OSAP is for Ontario residents. BC residents — even those who moved from Ontario — apply through StudentAid BC after meeting the 12-month BC residency requirement.",
      },
      {
        q: "Is Langara College eligible for StudentAid BC?",
        a: "Yes. Langara College is a fully designated institution for StudentAid BC. Full-time and part-time students in eligible programs at Langara can apply through studentaidbc.ca.",
      },
      {
        q: "Vancouver rent is very high. Does that affect my StudentAid BC amount?",
        a: "StudentAid BC uses a living cost allowance that is set provincially. You can declare off-campus living costs, which are assessed against allowance tables. Vancouver's higher costs can meaningfully increase your assessed need compared to students in smaller BC cities.",
      },
      {
        q: "How do I set up BC Services Card if I'm new to Vancouver?",
        a: "You'll need a BC Services Card — either the BC driver's licence card with the chip, or the standalone BC Services Card. If you're new to BC, get your card as soon as you establish residency and before application season. We walk you through the app setup step by step — free.",
      },
      {
        q: "Is VCC (Vancouver Community College) eligible for StudentAid BC?",
        a: "Yes. Vancouver Community College is a designated institution for StudentAid BC. Most full-time programs qualify. Check program-specific eligibility when you apply.",
      },
    ],
  },
  {
    slug: "surrey",
    name: "Surrey",
    region: "Metro Vancouver, British Columbia",
    intro:
      "Surrey is Metro Vancouver's second-largest city and home to SFU's Surrey Campus, KPU, and more. StudentAid BC help for Surrey students is 100% free — WhatsApp our team.",
    cityContext:
      "Surrey has become a major post-secondary hub with Simon Fraser University's Surrey Campus, Kwantlen Polytechnic University's Surrey campus, and a growing number of private colleges. Surrey students — many from South Asian backgrounds and first-generation college families — often have questions around dependency rules, parental income, and how new-to-Canada family financial situations are handled by StudentAid BC. Our team has deep experience with these exact file types.",
    institutions: [
      { name: "Simon Fraser University — Surrey Campus", type: "University" },
      { name: "Kwantlen Polytechnic University (KPU) — Surrey Campus", type: "University" },
      { name: "Kwantlen Polytechnic University — Langley Campus", type: "University" },
      { name: "Douglas College — New Westminster (nearby)", type: "College" },
    ],
    whyNote:
      "Surrey students often have complex family income situations. We review your dependency status and parental income documentation before you submit — preventing costly reassessments.",
    faqs: [
      {
        q: "Is SFU Surrey Campus eligible for StudentAid BC?",
        a: "Yes. Simon Fraser University is fully designated for StudentAid BC across all campuses including Surrey. Programs at the Surrey City Centre campus qualify under the same SFU institutional code.",
      },
      {
        q: "Is Kwantlen Polytechnic University (KPU) StudentAid BC-eligible?",
        a: "Yes. KPU is a designated BC public post-secondary institution. All Surrey campus programs that are designated for student aid are eligible. We confirm program-specific eligibility before you apply.",
      },
      {
        q: "I moved to Surrey from Ontario. Can I switch from OSAP to StudentAid BC?",
        a: "After living in BC for 12 continuous months (not counting full-time post-secondary study), you qualify as a BC resident for StudentAid BC. You cannot receive both OSAP and StudentAid BC at the same time. We help you manage the transition correctly so you don't lose funding in the gap year.",
      },
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    region: "Metro Vancouver, British Columbia",
    intro:
      "Burnaby is home to Simon Fraser University's main campus and BCIT — two of BC's most prominent post-secondary institutions. StudentAid BC help for Burnaby students is 100% free.",
    cityContext:
      "Burnaby's student population is anchored by SFU on Burnaby Mountain and BCIT on East Hastings. SFU students typically have longer program lengths and higher assessed costs; BCIT students often pursue technology and trades programs with strong employment outcomes post-graduation. Both groups can benefit significantly from the BC Completion Grant — which forgives 50% of your BC student loan at graduation. Our team ensures your application maximizes both grant eligibility and loan terms.",
    institutions: [
      { name: "Simon Fraser University — Burnaby Campus (Main)", type: "University" },
      { name: "BCIT — Burnaby Campus (Main)", type: "Institute" },
      { name: "Langara College (nearby Vancouver)", type: "College" },
    ],
    whyNote:
      "BCIT programs in technology and trades have strong employment outcomes — pairing well with the BC Completion Grant and zero-interest loan structure. We model your full funding picture.",
    faqs: [
      {
        q: "Is SFU Burnaby Mountain campus covered by StudentAid BC?",
        a: "Yes. SFU Burnaby (the main campus) is a fully designated institution. All regular SFU degree, diploma, and certificate programs qualify for StudentAid BC assessment. Apply at studentaidbc.ca.",
      },
      {
        q: "Is BCIT eligible for StudentAid BC?",
        a: "Yes. BCIT (British Columbia Institute of Technology) is a designated institution for StudentAid BC. Technology, health sciences, trades, and business programs at BCIT's Burnaby campus are eligible.",
      },
      {
        q: "I'm doing a 4-year SFU degree. How much could the BC Completion Grant save me?",
        a: "If you borrow $5,000 in BC student loans per year over 4 years ($20,000 total BC portion), the BC Completion Grant forgives 50% — up to $3,500 per year of study. A 4-year program could mean up to $14,000 forgiven from your BC provincial loans alone. The federal portion still requires repayment but at 0% interest.",
      },
      {
        q: "How do I apply for StudentAid BC as a first-year BCIT student?",
        a: "Apply at studentaidbc.ca using your BC Services Card login. You'll need your SIN, BC Services Card app set up, your BCIT program code, and your previous year's tax return (or parents' if dependent). Apply at least 8 weeks before tuition is due. WhatsApp us and we'll walk through it with you free.",
      },
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Metro Vancouver, British Columbia",
    intro:
      "Richmond students attending KPU Richmond, BCIT, or institutions in Metro Vancouver qualify for StudentAid BC. Our team handles Richmond files remotely — free, fast, and thorough.",
    cityContext:
      "Richmond's student population includes a high proportion of first-generation Canadian students, many with family roots in China, Hong Kong, and the Philippines. StudentAid BC requires careful handling of foreign income, foreign assets, and citizenship/residency documentation for families with mixed immigration histories. We have experience with exactly these file types — ensuring accurate reporting that protects you from clawbacks while maximizing legitimate aid.",
    institutions: [
      { name: "Kwantlen Polytechnic University (KPU) — Richmond Campus", type: "University" },
      { name: "BCIT — Aerospace Campus, Richmond", type: "Institute" },
      { name: "Lansdowne Campus various programs", type: "College" },
    ],
    whyNote:
      "Richmond students with mixed-immigration family backgrounds need extra care with income and asset declarations. We get it right the first time.",
    faqs: [
      {
        q: "Is KPU Richmond eligible for StudentAid BC?",
        a: "Yes. Kwantlen Polytechnic University's Richmond campus (Lansdowne) is a designated BC institution for StudentAid BC. Programs in business, health, trades, and arts all qualify subject to program designation checks.",
      },
      {
        q: "My family has overseas income and assets. How does StudentAid BC handle that?",
        a: "StudentAid BC requires disclosure of foreign income and assets above a threshold. How you report these affects your assessed need. Under-reporting can cause a clawback; over-reporting can reduce your aid. We review the rules with you before you submit your application.",
      },
      {
        q: "I live in Richmond but my school is in Vancouver or Burnaby. Can I still apply?",
        a: "Yes. BC residency (Richmond) is what qualifies you for StudentAid BC — not your institution's city. As long as your school is designated for StudentAid BC, you apply the same way regardless of which Metro Vancouver city it's in.",
      },
      {
        q: "Can a recent permanent resident in Richmond apply for StudentAid BC?",
        a: "Permanent residents of Canada who meet BC's 12-month residency requirement are eligible for StudentAid BC. Timing matters — you must have lived in BC (not just Canada) for 12 continuous months before your study period, not counting time spent in full-time post-secondary study.",
      },
    ],
  },
];

export const osapCityBySlug: Record<string, OsapCity> = Object.fromEntries(
  OSAP_CITIES.map((c) => [c.slug, c]),
);

export const bcCityBySlug: Record<string, BcCity> = Object.fromEntries(
  BC_CITIES.map((c) => [c.slug, c]),
);
