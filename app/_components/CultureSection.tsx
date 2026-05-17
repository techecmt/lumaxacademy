"use client";

import { useState } from "react";
import { FiArrowRight, FiBookOpen, FiStar, FiTrendingUp } from "react-icons/fi";

const pillars = [
  {
    id: "learn",
    number: "01",
    label: "Learn",
    icon: FiBookOpen,
    color: "from-[#193764] to-[#faa426]",
    ringColor: "ring-[#faa426]/30",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#faa426]/10",
    borderAccent: "border-[#faa426]/40",
    description:
      "Empowering learners with practical knowledge, industry-relevant skills, and lifelong learning opportunities.",
    tagline: "Knowledge is the foundation of every success story.",
  },
  {
    id: "lead",
    label: "Lead",
    number: "02",
    icon: FiTrendingUp,
    color: "from-[#193764] to-[#d98a16]",
    ringColor: "ring-[#193764]/20",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#193764]/5",
    borderAccent: "border-[#193764]/30",
    description:
      "Developing confidence, professionalism, innovation, and leadership qualities to thrive in dynamic industries.",
    tagline: "True leaders are shaped by purpose and persistence.",
  },
  {
    id: "succeed",
    label: "Succeed",
    number: "03",
    icon: FiStar,
    color: "from-[#faa426] to-[#193764]",
    ringColor: "ring-[#faa426]/30",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#faa426]/10",
    borderAccent: "border-[#faa426]/40",
    description:
      "Preparing learners for career success, employability, and meaningful contributions in the global workforce.",
    tagline: "Success is not an accident — it's the outcome of excellent training.",
  },
];

export default function CultureSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="mt-12">
      <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
        ORGANIZATIONAL CULTURE
      </div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Learn. Lead. Succeed.
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
        Three words. One culture. A shared commitment to transforming every
        learner into a confident, capable, and career-ready professional.
      </p>

      {/* Pillar cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {pillars.map((p, i) => {
          const PIcon = p.icon;
          const isActive = active === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActive(isActive ? null : p.id)}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) ${
                isActive
                  ? `border-transparent ${p.bgLight} shadow-lg`
                  : "border-(--border) bg-white hover:border-transparent hover:bg-white hover:shadow-[0_18px_60px_-50px_rgba(2,6,23,0.4)]"
              }`}
            >
              {/* Top accent bar */}
              <div
                className={`h-1.5 w-full bg-linear-to-r ${p.color} transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              <div className="flex flex-1 flex-col p-6">
                {/* Number + icon row */}
                <div className="flex items-start justify-between">
                  <span
                    className={`text-4xl font-extrabold tracking-tighter ${
                      isActive ? p.textAccent : "text-slate-100 group-hover:text-slate-200"
                    } transition-colors duration-200`}
                  >
                    {p.number}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br ${p.color} shadow-md`}
                  >
                    <PIcon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                </div>

                {/* Label */}
                <div
                  className={`mt-4 text-xl font-extrabold tracking-tight ${
                    isActive ? p.textAccent : "text-slate-900"
                  } transition-colors duration-200`}
                >
                  {p.label}
                </div>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>

                {/* Tagline — visible when active */}
                <div
                  className={`mt-4 overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`border-l-2 ${p.borderAccent} pl-3 text-xs italic leading-relaxed ${p.textAccent}`}
                  >
                    "{p.tagline}"
                  </p>
                </div>

                {/* Toggle hint */}
                <div
                  className={`mt-4 flex items-center gap-1 text-xs font-semibold transition-colors duration-200 ${
                    isActive ? p.textAccent : "text-slate-400 group-hover:text-slate-600"
                  }`}
                >
                  {isActive ? "Click to collapse" : "Click to expand"}
                  <FiArrowRight
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isActive ? "rotate-90" : "group-hover:translate-x-0.5"
                    }`}
                    aria-hidden
                  />
                </div>
              </div>

              {/* Step dot */}
              <div
                className={`absolute left-4 top-4 h-2 w-2 rounded-full bg-linear-to-br ${p.color} shadow-sm transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Culture Statement */}
      <div className="relative mt-6 overflow-hidden rounded-3xl bg-linear-to-br from-[#193764] via-[#244b82] to-[#faa426] p-8 text-white shadow-[0_30px_80px_-50px_rgba(250,164,38,0.6)]">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-6 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/5" />

        <div className="relative">
          <div className="text-[11px] font-bold tracking-widest text-white/60">
            CULTURE STATEMENT
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
            At Lumax Academy, we foster a culture of continuous learning,
            professional leadership, and personal achievement. Through
            hands-on education, innovation, and industry-focused training,
            we inspire every learner to:
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { phrase: "Learn with Purpose", number: "01" },
              { phrase: "Lead with Confidence", number: "02" },
              { phrase: "Succeed with Excellence", number: "03" },
            ].map((item) => (
              <div
                key={item.phrase}
                className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-4 py-2.5 backdrop-blur-sm ring-1 ring-white/20"
              >
                <span className="text-[10px] font-bold text-white/40">
                  {item.number}
                </span>
                <span className="text-sm font-bold text-white">{item.phrase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
