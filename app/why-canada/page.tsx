import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Study in Canada | Study Master Canada",
  description:
    "Discover why 1M+ students choose Canada — PGWP, PR pathways, affordable education, and world-ranked universities.",
};

export default function WhyCanadaPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #EBF3FF 0%, #F5F9FF 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-[#5A8730] mb-3">WHY CANADA</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#163F78] mb-5 leading-tight">
              Why students choose
              <br />
              <span className="text-[#E52D1E]">Canada</span> over every
              <br />
              other country
            </h1>
            <p className="text-[#5A7AA0] text-lg mb-8 max-w-xl">
              Better value than the USA, clearer work rights than many destinations, and a
              realistic pathway to permanent residency for graduates who plan well.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wkf.ms/41V1qlk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red"
              >
                Book Free Consultation
              </a>
              <a href="/international" className="btn-outline-blue">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=85&auto=format&fit=crop"
              alt="Students on a Canadian campus"
              width={1200}
              height={760}
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
              priority
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg p-4 border border-[#E4EEFF]">
              <div className="text-2xl font-extrabold text-[#E52D1E]">#3</div>
              <div className="text-xs text-[#5A7AA0]">Global Quality of Life</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label text-[#E52D1E] mb-2">SIDE BY SIDE</p>
            <h2 className="section-heading">Canada vs other popular destinations</h2>
            <div className="accent-line accent-line-center mt-3" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-[#5A7AA0] text-sm font-medium border-b border-[#E4EEFF]">
                    Factor
                  </th>
                  {["🇨🇦 Canada", "🇺🇸 USA", "🇬🇧 UK", "🇦🇺 Australia"].map((c, i) => (
                    <th
                      key={c}
                      className={`p-4 text-sm font-bold border-b ${
                        i === 0
                          ? "bg-[#EBF3FF] text-[#1E5AA5] rounded-t-lg"
                          : "text-[#5A7AA0] border-[#E4EEFF]"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Avg Annual Tuition", "CAD $15–35K", "USD $30–60K", "£15–38K", "AUD $20–45K"],
                  ["Post-Grad Work Permit", "Up to 3 years", "1–3 years (OPT)", "2 years (PSW)", "2–4 years"],
                  ["PR Pathway", "Express Entry (strong)", "H-1B Lottery", "Skilled Worker", "Points-based"],
                  ["Part-time Work", "24 hrs/week", "20 hrs/week", "20 hrs/week", "48 hrs/fortnight"],
                  ["Healthcare", "Mostly covered", "Expensive", "NHS (limited)", "OSHC required"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? "bg-[#F5F9FF]" : "bg-white"}>
                    <td className="p-4 text-sm font-medium text-[#163F78]">{row[0]}</td>
                    <td className="p-4 text-sm font-semibold text-[#1E5AA5] bg-[#EBF3FF]/50">
                      {row[1]}
                    </td>
                    {row.slice(2).map((cell) => (
                      <td key={cell} className="p-4 text-sm text-[#5A7AA0]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #F0F9E8, #F5F9FF)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="section-label text-[#5A8730] mb-2">STUDY CITIES</p>
            <h2 className="section-heading">Where will you study in Canada?</h2>
            <div className="accent-line accent-line-center mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                city: "Toronto & GTA",
                tag: "Most programs",
                img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&auto=format&fit=crop",
                highlight: "Our home base — local support",
              },
              {
                city: "Vancouver, BC",
                tag: "Pacific coast",
                img: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=600&q=80&auto=format&fit=crop",
                highlight: "Top tech & business programs",
              },
              {
                city: "Ottawa, ON",
                tag: "Capital city",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
                highlight: "Government & policy programs",
              },
              {
                city: "Montreal, QC",
                tag: "Bilingual",
                img: "https://images.unsplash.com/photo-1519178251-5390a0fb6a3f?w=600&q=80&auto=format&fit=crop",
                highlight: "Great value + bilingual edge",
              },
            ].map((city) => (
              <div key={city.city} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={city.img}
                    alt={city.city}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163F78]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{city.city}</h3>
                    <p className="text-[#A8CAFE] text-xs">{city.highlight}</p>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/90 text-[#1E5AA5] text-xs font-bold px-2 py-1 rounded-full">
                    {city.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

