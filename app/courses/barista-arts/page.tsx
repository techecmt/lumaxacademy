"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from "../../_components/BlurText";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import ContactForm from "../../_components/contactform";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCoffee,
  FiDroplet,
  FiHeart,
  FiInfo,
  FiLayers,
  FiMonitor,
  FiShield,
  FiStar,
  FiTarget,
  FiThermometer,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const COURSE_ID = "barista-arts";

const emphasisPoints: { title: string; icon: IconType }[] = [
  { title: "Hands-on espresso preparation", icon: FiZap },
  { title: "Milk steaming and latte art", icon: FiDroplet },
  { title: "Specialty coffee beverage preparation", icon: FiCoffee },
  { title: "Café workflow efficiency", icon: FiLayers },
  { title: "Customer engagement", icon: FiHeart },
  { title: "Hygiene and equipment maintenance", icon: FiShield },
  { title: "Industry-standard café practices", icon: FiAward },
];

const modules: {
  no: string;
  title: string;
  duration: string;
  assessment: string;
  coverage: string[];
  outcomes: string[];
}[] = [
  {
    no: "01",
    title: "Coffee Fundamentals & Espresso Operations",
    duration: "12 Hours",
    assessment: "Written Examination",
    coverage: [
      "Introduction to Coffee & Café Industry",
      "Coffee Beans & Roasting Fundamentals",
      "Espresso Machine Operations",
      "Espresso Extraction & Calibration",
    ],
    outcomes: [
      "Understand the coffee industry and café operations.",
      "Identify different coffee beans, origins, and roasting profiles.",
      "Operate espresso machines safely and efficiently.",
      "Perform espresso extraction and calibration to achieve consistent quality.",
    ],
  },
  {
    no: "02",
    title: "Specialty Coffee Preparation & Latte Art",
    duration: "12 Hours",
    assessment: "Written Examination",
    coverage: [
      "Milk Texturing & Latte Art",
      "Specialty Coffee Beverage Preparation",
    ],
    outcomes: [
      "Texture milk to industry standards for various beverages.",
      "Create basic and intermediate latte art designs.",
      "Prepare a range of espresso-based and specialty coffee beverages.",
      "Apply beverage presentation techniques and quality standards.",
    ],
  },
  {
    no: "03",
    title: "Café Service Operations & Practical Café Simulation",
    duration: "12 Hours",
    assessment: "Written Examination + Practical Assessment",
    coverage: [
      "Customer Service & Café Workflow",
      "Hygiene, Food Safety & Equipment Maintenance",
      "Practical Assessment & Café Simulation",
    ],
    outcomes: [
      "Deliver professional customer service in a café environment.",
      "Apply food hygiene, workplace safety, and equipment maintenance procedures.",
      "Demonstrate teamwork and workflow management during café operations.",
      "Perform end-to-end café service through practical simulation and assessment.",
    ],
  },
];

const courseFacts: { label: string; value: string; sub?: string; icon: IconType }[] = [
  { label: "Study Mode", value: "Part Time", icon: FiClock },
  { label: "Course Duration", value: "12 Weeks", icon: FiCalendar },
  { label: "Total Contact Hours", value: "36 Hours", icon: FiTarget },
  {
    label: "Schedule",
    value: "Weekend",
    sub: "12 Sundays · 3 Hours / class",
    icon: FiCalendar,
  },
  { label: "Delivery Mode", value: "E-learning / Face-to-Face", icon: FiMonitor },
  { label: "Certification", value: "Certificate in Barista Arts", icon: FiAward },
];

const entryRequirements: string[] = [
  "Minimum age requirement: must be 16 years old",
  "No prior barista experience required",
  "N Level or equivalent (recommended)",
  "Final admission decision rests with the Academic Advisory Board",
];

const fees: { label: string; value: string }[] = [
  { label: "Registration Fee (Non-Refundable)", value: "S$100.00" },
  { label: "Course Fee", value: "S$400.00" },
  { label: "Course Materials Fee", value: "S$100.00" },
];

const refundPolicy: { percent: string; tag: string; condition: string }[] = [
  {
    percent: "100%",
    tag: "Maximum Refund",
    condition: "More than 30 days before the Course Commencement Date.",
  },
  {
    percent: "50%",
    tag: "Partial Refund",
    condition: "Before, but not more than 30 days before the Course Commencement Date.",
  },
  {
    percent: "25%",
    tag: "Partial Refund",
    condition: "After, but not more than 15 days after the Course Commencement Date.",
  },
  {
    percent: "0%",
    tag: "No Refund",
    condition: "More than 1 day after the Course Commencement Date.",
  },
];

const careers: { title: string; icon: IconType }[] = [
  { title: "Junior Barista", icon: FiCoffee },
  { title: "Café Barista", icon: FiCoffee },
  { title: "Specialty Coffee Assistant", icon: FiStar },
  { title: "Café Service Crew", icon: FiUsers },
  { title: "Beverage Preparation Assistant", icon: FiDroplet },
  { title: "Coffee Shop Crew", icon: FiBriefcase },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-80px" } as const;

export default function BaristaArtsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image
              alt="Barista pouring latte art at an espresso machine"
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/30" />
            <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-(--brand)/25 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28">
            <nav className="flex items-center gap-2 text-xs font-semibold text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/#courses" className="hover:text-white">
                Courses
              </Link>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">Barista Arts</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-(--brand) text-white">
                  <FiCoffee className="h-3.5 w-3.5" aria-hidden />
                </span>
                Hospitality · Specialty Coffee Programme
              </motion.div>

              <motion.h1
                initial={{ filter: "blur(12px)", opacity: 0, y: -24 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[60px] lg:leading-[1.04]"
              >
                Certificate in <span className="text-(--brand)">Barista Arts</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                Master practical barista competencies — from espresso extraction
                and milk texturing to latte art and café service — ready for cafés,
                coffee chains, hotels, and specialty coffee establishments in
                Singapore and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <a
                  href="#enquire"
                  className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                >
                  Enquire now
                  <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#modules"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
                >
                  View modules
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.08, delayChildren: 0.45 }}
                className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {[
                  { k: "12", v: "Weeks" },
                  { k: "36", v: "Contact Hours" },
                  { k: "3", v: "Modules" },
                  { k: "16+", v: "Min. Age" },
                ].map((s) => (
                  <motion.div
                    key={s.v}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-extrabold text-white">{s.k}</div>
                    <div className="mt-1 text-xs font-semibold text-white/65">
                      {s.v}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──────────────────── Programme overview ──────────────────── */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  PROGRAMME OVERVIEW
                </div>
                <BlurText
                  as="h2"
                  text="Practical barista training for real café environments"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  The Certificate in Barista Art equips learners with the practical
                  barista competencies required for employment in cafés, coffee
                  chains, restaurants, bakeries, hotels, and specialty coffee
                  establishments in Singapore and the region. Learners undergo
                  intensive practical sessions that simulate real café environments.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {emphasisPoints.map((point, i) => (
                    <motion.div
                      key={point.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                      className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-white p-3.5 shadow-[0_18px_60px_-58px_rgba(2,6,23,0.5)] transition hover:-translate-y-0.5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5 transition group-hover:bg-(--brand) group-hover:text-white">
                        <point.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-slate-700">
                        {point.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -inset-5 -z-10 rounded-4xl bg-linear-to-br from-(--brand)/20 via-transparent to-(--brand-2)/20 blur-2xl" />
                <div className="overflow-hidden rounded-4xl border border-white bg-white shadow-[0_24px_90px_-55px_rgba(2,6,23,0.6)]">
                  <div className="relative h-[340px] sm:h-[440px] lg:h-[520px]">
                    <Image
                      alt="Latte art being poured into a coffee cup"
                      src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/92 p-5 shadow-lg ring-1 ring-black/5 backdrop-blur">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
                          <FiThermometer className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-950">
                            Intensive hands-on practice
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            Espresso, steaming, and latte art practised on
                            industry-standard equipment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──────────────── Course at a glance ──────────────── */}
        <section className="bg-(--surface-2) py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                COURSE AT A GLANCE
              </div>
              <BlurText
                as="h2"
                text="Everything you need to know, at a glance"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courseFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                  className="rounded-3xl border border-(--border) bg-white p-5 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.6)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
                      <fact.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {fact.label}
                      </div>
                      <div className="mt-1 text-lg font-extrabold leading-tight text-slate-950">
                        {fact.value}
                      </div>
                      {fact.sub ? (
                        <div className="mt-1 text-sm font-semibold text-slate-600">
                          {fact.sub}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── Modules & assessment ──────────────── */}
        <section id="modules" className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                MODULES &amp; ASSESSMENT
              </div>
              <BlurText
                as="h2"
                text="Three modules. Thirty-six hours. One confident barista."
                delay={100}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Each module runs for 12 hours and is assessed to industry
                standards, building from coffee fundamentals to a full practical
                café simulation.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:gap-7">
              {modules.map((mod, i) => (
                <motion.article
                  key={mod.no}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                  className="overflow-hidden rounded-4xl border border-(--border) bg-white shadow-[0_22px_80px_-65px_rgba(2,6,23,0.55)]"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Left rail */}
                    <div className="relative overflow-hidden bg-linear-to-br from-[#193764] via-[#1f477c] to-[#10213d] p-6 text-white sm:p-8">
                      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-(--brand)/25 blur-3xl" />
                      <div className="relative">
                        <div className="flex items-center gap-3">
                          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-lg font-extrabold text-white">
                            {mod.no}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                            Module {mod.no}
                          </span>
                        </div>
                        <h3 className="mt-5 text-xl font-extrabold leading-snug sm:text-2xl">
                          {mod.title}
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15">
                            <FiClock className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                            {mod.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15">
                            <FiCheckCircle className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                            {mod.assessment}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="p-6 sm:p-8">
                      <div className="grid gap-7 sm:grid-cols-2">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            <FiLayers className="h-4 w-4 text-(--brand)" aria-hidden />
                            Module Coverage
                          </div>
                          <ul className="mt-3 space-y-2.5">
                            {mod.coverage.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                              >
                                <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            <FiTarget className="h-4 w-4 text-(--brand)" aria-hidden />
                            Learning Outcomes
                          </div>
                          <ul className="mt-3 space-y-2.5">
                            {mod.outcomes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                              >
                                <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── Entry & ratio ──────────────── */}
        <section className="bg-slate-950 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-white">
                  <FiCheckCircle className="h-6 w-6" aria-hidden />
                </div>
                <div className="mt-6 text-sm font-semibold tracking-widest text-(--brand)">
                  ENTRY REQUIREMENTS
                </div>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                  Open to beginners — no experience needed
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {entryRequirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10"
                    >
                      <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                      <span className="text-sm font-semibold leading-relaxed text-white/85">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                className="flex flex-col gap-5"
              >
                <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-(--brand-2)">
                    <FiUsers className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="mt-6 text-sm font-semibold tracking-widest text-(--brand)">
                    TEACHER-TO-STUDENT RATIO
                  </div>
                  <p className="mt-3 text-4xl font-extrabold leading-none">
                    1 : 15
                    <span className="ml-2 align-middle text-base font-semibold text-white/60">
                      (Lecture)
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Small class sizes keep practical sessions focused, with
                    plenty of hands-on time on the espresso machine.
                  </p>
                </div>

                <div className="rounded-4xl border border-(--brand)/30 bg-(--brand)/10 p-6">
                  <div className="flex items-start gap-3">
                    <FiInfo className="mt-0.5 h-5 w-5 shrink-0 text-(--brand)" aria-hidden />
                    <p className="text-sm leading-relaxed text-white/80">
                      The final decision concerning admission to the programme
                      rests with the Academic Advisory Board.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──────────────── Fees ──────────────── */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  PROGRAMME FEES
                </div>
                <BlurText
                  as="h2"
                  text="Transparent, all-in course fees"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  A part-time programme priced for accessibility — fees cover
                  registration, tuition, and course materials. The registration
                  fee is non-refundable and non-transferable.
                </p>
                <a
                  href="#enquire"
                  className="mt-7 inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                >
                  Enquire about intakes
                  <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="overflow-hidden rounded-4xl border border-(--border) bg-white shadow-[0_24px_90px_-62px_rgba(2,6,23,0.6)]"
              >
                <div className="bg-linear-to-r from-[#193764] to-[#244b82] px-6 py-5 text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                    Part-time · Singapore Dollars
                  </div>
                  <div className="mt-1 text-lg font-extrabold">Fee Breakdown</div>
                </div>
                <div className="divide-y divide-(--border)">
                  {fees.map((fee) => (
                    <div
                      key={fee.label}
                      className="flex items-center justify-between gap-4 px-6 py-4"
                    >
                      <span className="text-sm font-semibold text-slate-700">
                        {fee.label}
                      </span>
                      <span className="text-base font-extrabold text-slate-950">
                        {fee.value}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 bg-(--surface-2) px-6 py-5">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-(--brand-2)">
                      Total Fees
                    </span>
                    <span className="text-2xl font-extrabold text-(--brand)">
                      S$600.00
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──────────────── Refund policy ──────────────── */}
        <section className="bg-(--surface-2) py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                WITHDRAWAL, TRANSFER &amp; REFUND
              </div>
              <BlurText
                as="h2"
                text="A clear, fair refund policy"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Students who wish to withdraw or transfer to another programme
                must notify Lumax Academy in writing before the commencement of
                the course. The application fee paid is non-refundable and
                non-transferable.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {refundPolicy.map((row, i) => (
                <motion.div
                  key={row.percent}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
                  className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.6)]"
                >
                  <div className="text-3xl font-extrabold text-(--brand)">
                    {row.percent}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {row.tag}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Refund of course fee if written notice of withdrawal is
                    received: {row.condition}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── Certification ──────────────── */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative overflow-hidden rounded-4xl border border-(--border) bg-linear-to-br from-(--surface-2) via-white to-(--surface-2) p-6 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-(--brand)/15 blur-3xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex justify-center">
                  <div className="grid h-28 w-28 place-items-center rounded-4xl bg-(--brand) text-white shadow-xl shadow-[#faa426]/30">
                    <FiAward className="h-14 w-14" aria-hidden />
                  </div>
                </div>
                <div>
                  <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                    CERTIFICATION
                  </div>
                  <h2 className="mt-3 text-2xl font-extrabold leading-snug text-slate-950 sm:text-3xl">
                    “Certificate in Barista Arts”
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    Awarded by{" "}
                    <span className="font-bold text-(--brand-2)">
                      Lumax Academy Pte Ltd
                    </span>{" "}
                    on successful completion of all three modules, including the
                    written examinations and the practical café simulation
                    assessment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────── Careers ──────────────── */}
        <section className="bg-slate-950 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                CAREER OPPORTUNITIES
              </div>
              <BlurText
                as="h2"
                text="Where this certificate can take you"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Graduates may pursue entry-level roles across cafés, coffee
                chains, hotels, and specialty coffee establishments.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {careers.map((career, i) => (
                <motion.div
                  key={career.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/6 p-5 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
                    <career.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-base font-extrabold text-white">
                    {career.title}
                  </span>
                  <FiTrendingUp className="ml-auto h-5 w-5 text-white/30 transition group-hover:text-(--brand)" aria-hidden />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── Enquiry ──────────────── */}
        <section id="enquire" className="bg-(--surface-2) py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  ENROL NOW
                </div>
                <BlurText
                  as="h2"
                  text="Ready to pull your first perfect shot?"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-(--brand-2) sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Tell us a little about yourself and our team will share the next
                  intake dates, schedule, and enrolment details for the
                  Certificate in Barista Arts.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    { icon: FiCalendar, k: "Schedule", v: "Weekend · 12 Sundays · 3 hrs/class" },
                    { icon: FiClock, k: "Duration", v: "12 weeks · 36 contact hours" },
                    { icon: FiCoffee, k: "Mode", v: "E-learning / Face-to-Face" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="flex items-center gap-3 rounded-2xl border border-(--border) bg-white p-4 shadow-sm shadow-black/5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                        <x.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-(--brand)">
                          {x.k}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-slate-800">
                          {x.v}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ContactForm initialCourseId={COURSE_ID} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
