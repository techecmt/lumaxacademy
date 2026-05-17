"use client";

import { useState } from "react";
import {
  FiAward,
  FiBookOpen,
  FiCpu,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const values = [
  {
    key: "L",
    title: "Lifelong Learning",
    icon: FiBookOpen,
    color: "from-[#193764] to-[#faa426]",
    ringColor: "ring-[#faa426]/30",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#faa426]/10",
    description:
      "We promote continuous learning, growth, and professional development to prepare learners for an evolving global workforce.",
  },
  {
    key: "U",
    title: "Unity & Inclusivity",
    icon: FiUsers,
    color: "from-[#193764] to-[#d98a16]",
    ringColor: "ring-[#193764]/20",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#193764]/5",
    description:
      "We foster a respectful, diverse, and collaborative learning environment where everyone has equal opportunities to succeed.",
  },
  {
    key: "M",
    title: "Mastery Through Practical Skills",
    icon: FiAward,
    color: "from-[#faa426] to-[#193764]",
    ringColor: "ring-[#faa426]/30",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#faa426]/10",
    description:
      "We emphasize hands-on training, competency-based learning, and industry-relevant skills that enhance employability.",
  },
  {
    key: "A",
    title: "Adaptability & Innovation",
    icon: FiCpu,
    color: "from-[#193764] to-[#faa426]",
    ringColor: "ring-[#193764]/20",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#193764]/5",
    description:
      "We embrace technology, creativity, and innovation to prepare learners for modern industries and future challenges.",
  },
  {
    key: "X",
    title: "eXcellence with Integrity",
    icon: FiShield,
    color: "from-[#faa426] to-[#193764]",
    ringColor: "ring-[#faa426]/30",
    textAccent: "text-[#193764]",
    bgLight: "bg-[#faa426]/10",
    description:
      "We uphold the highest standards of professionalism, quality education, honesty, and ethical practices in everything we do.",
  },
];

export default function CoreValues() {
  const [active, setActive] = useState(0);
  const selected = values[active];
  const Icon = selected.icon;

  return (
    <section className="mt-12">
      <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
        CORE VALUES
      </div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        The L.U.M.A.X Framework
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
        Five principles that guide everything we teach, how we teach it, and the
        culture we build around every learner.
      </p>

      {/* Letter selector */}
      <div className="mt-8 flex flex-wrap gap-3">
        {values.map((v, i) => (
          <button
            key={v.key}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`group relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl font-extrabold text-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) ${
              active === i
                ? `bg-linear-to-br ${v.color} text-white shadow-lg`
                : "bg-(--surface-2) text-slate-500 hover:bg-white hover:text-slate-900 hover:ring-1 hover:ring-black/10"
            }`}
          >
            {v.key}
            {active === i && (
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm bg-white shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
            )}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div
        key={selected.key}
        className="mt-6 overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)]"
      >
        <div className={`h-1.5 w-full bg-linear-to-r ${selected.color}`} />
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8">
          <div
            className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-3xl bg-linear-to-br ${selected.color} shadow-lg`}
          >
            <Icon className="h-7 w-7 text-white" aria-hidden />
            <span className="mt-1 text-xs font-extrabold text-white/80">
              {selected.key}
            </span>
          </div>

          <div className="flex-1">
            <div className={`text-[11px] font-bold tracking-widest ${selected.textAccent}`}>
              {selected.key} IS FOR
            </div>
            <h3 className="mt-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              {selected.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {selected.description}
            </p>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 border-t border-(--border) px-6 py-4">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-(--brand)" : "w-3 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to value ${values[i].key}`}
            />
          ))}
          <span className="ml-auto text-xs font-semibold text-slate-400">
            {active + 1} / {values.length}
          </span>
        </div>
      </div>

      {/* Overview grid */}
      <div className="mt-4 grid gap-3 sm:grid-cols-5">
        {values.map((v, i) => {
          const VIcon = v.icon;
          return (
            <button
              key={v.key}
              onClick={() => setActive(i)}
              className={`group flex flex-col gap-2 rounded-2xl p-4 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) ${
                active === i
                  ? `${v.bgLight} ring-1 ${v.ringColor}`
                  : "bg-(--surface-2) hover:bg-white hover:ring-1 hover:ring-black/10"
              }`}
            >
              <VIcon
                className={`h-4 w-4 ${active === i ? v.textAccent : "text-slate-400"}`}
                aria-hidden
              />
              <div className={`text-xs font-bold ${active === i ? v.textAccent : "text-slate-400"}`}>
                {v.key}
              </div>
              <div className="text-xs font-semibold leading-tight text-slate-700 line-clamp-2">
                {v.title}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
