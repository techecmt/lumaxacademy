"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from "../../_components/BlurText";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import ContactForm from "../../_components/contactform";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiHome,
  FiInfo,
  FiLayers,
  FiMessageSquare,
  FiMonitor,
  FiShield,
  FiSmile,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const COURSE_ID = "advanced-certificate-in-professional-caregiving";

const emphasisPoints: { title: string; icon: IconType }[] = [
  { title: "Elderly & healthy ageing care", icon: FiUsers },
  { title: "Autism & behavioural support", icon: FiHeart },
  { title: "Child care & early childhood support", icon: FiSmile },
  { title: "Person-centred caregiving", icon: FiUserCheck },
  { title: "Daily living & mobility assistance", icon: FiActivity },
  { title: "Safety, hygiene & infection prevention", icon: FiShield },
  { title: "Communication with families & care teams", icon: FiMessageSquare },
  { title: "Compassionate, dignified care", icon: FiStar },
];

const objectives: string[] = [
  "Apply effective caregiving principles across different care settings.",
  "Support elderly individuals in maintaining independence, dignity, and quality of life.",
  "Understand and manage the behavioural and developmental needs of individuals with Autism Spectrum Disorder (ASD).",
  "Provide safe and nurturing care for infants and young children.",
  "Demonstrate effective communication skills with care recipients, families, and healthcare professionals.",
  "Implement basic safety, hygiene, and infection prevention measures.",
  "Deliver compassionate, person-centred care in home, community, and institutional settings.",
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
    title: "Autism Care & Behavioural Support Skills",
    duration: "12 Hours",
    assessment: "Written 100%",
    coverage: [
      "Understanding Autism Spectrum Disorder",
      "Characteristics and Behavioural Traits",
      "Communication Strategies",
      "Sensory Processing and Sensory Needs",
      "Positive Behaviour Support Techniques",
      "Daily Living and Social Skills Development",
      "Supporting Learning and Routine Management",
      "Practical Autism Care Simulations",
    ],
    outcomes: [
      "Explain the characteristics and needs of individuals with autism.",
      "Apply effective communication techniques to support engagement and interaction.",
      "Recognise sensory sensitivities and implement appropriate support strategies.",
      "Manage challenging behaviours using positive behavioural approaches.",
      "Support daily living, learning, and social development activities.",
    ],
  },
  {
    no: "02",
    title: "Child Care & Early Childhood Support",
    duration: "12 Hours",
    assessment: "Written 100%",
    coverage: [
      "Child Growth and Development",
      "Health, Hygiene and Nutrition",
      "Safe Environment and Child Protection",
      "Daily Care Routines",
      "Positive Guidance and Behaviour Management",
      "Play-Based Learning Activities",
      "Communication with Children and Parents",
      "Practical Child Care Activities",
    ],
    outcomes: [
      "Understand the developmental stages of infants and young children.",
      "Provide safe and nurturing care for children.",
      "Support children's physical, emotional, social, and cognitive development.",
      "Implement age-appropriate activities that encourage learning and creativity.",
      "Apply child safety and protection principles in caregiving environments.",
    ],
  },
  {
    no: "03",
    title: "Elderly Care & Healthy Ageing Support",
    duration: "12 Hours",
    assessment: "Written 100%",
    coverage: [
      "Introduction to Ageing and Geriatric Care",
      "Common Age-Related Conditions",
      "Personal Care and Activities of Daily Living (ADLs)",
      "Mobility Assistance and Fall Prevention",
      "Nutrition and Hydration for Seniors",
      "Dementia Awareness",
      "Communication with Elderly Persons",
      "Practical Caregiving Skills",
    ],
    outcomes: [
      "Understand the ageing process and common health challenges among seniors.",
      "Assist elderly individuals with personal care and daily activities.",
      "Apply safe transfer and mobility assistance techniques.",
      "Promote healthy ageing and emotional well-being.",
      "Implement fall prevention and safety measures.",
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
  {
    label: "Certification",
    value: "Advanced Certificate in Professional Caregiving",
    icon: FiAward,
  },
];

const entryRequirements: string[] = [
  "Minimum age requirement: must be 16 years old",
  "N Level or equivalent (recommended)",
  "Suitable for aspiring caregivers, support workers, and parents",
  "Final admission decision rests with the Academic Advisory Board",
];

const fees: { label: string; value: string }[] = [
  { label: "Registration Fee (Non-Refundable)", value: "S$100.00" },
  { label: "Course Fee", value: "S$1,100.00" },
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
  { title: "Elderly Caregiver", icon: FiUsers },
  { title: "Autism Support Worker", icon: FiHeart },
  { title: "Child Care Assistant", icon: FiSmile },
  { title: "Home Care Aide", icon: FiHome },
  { title: "Special Needs Support Assistant", icon: FiUserCheck },
  { title: "Community Care Worker", icon: FiActivity },
  { title: "Early Childhood Support Aide", icon: FiStar },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const specialisations = ["Elderly", "Autism", "Child Care"] as const;

const tagWords = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.18 } },
};

const tagWord = {
  hidden: { opacity: 0, y: 22, scale: 0.82, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const tagDot = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" as const } },
};

const viewport = { once: true, margin: "-80px" } as const;

export default function ProfessionalCaregivingPage() {
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
              alt="Caregivers supporting an elderly woman and young children during an activity"
              src="/heroimages/Professional_Caregiving_Hero.jpg"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
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
              <span className="text-(--brand)">Professional Caregiving</span>
            </nav>

            <div className="mt-8 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-(--brand) text-white">
                  <FiHeart className="h-3.5 w-3.5" aria-hidden />
                </span>
                Caregiving · Elderly · Autism · Child Care
              </motion.div>

              <motion.h1
                initial={{ filter: "blur(12px)", opacity: 0, y: -24 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[54px] lg:leading-[1.05]"
              >
                Advanced Certificate in{" "}
                <span className="text-(--brand)">Professional Caregiving</span>
              </motion.h1>

              <motion.div
                variants={tagWords}
                initial="hidden"
                animate="show"
                className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl font-extrabold uppercase tracking-wide sm:text-3xl"
              >
                {specialisations.map((word, i) => (
                  <Fragment key={word}>
                    {i > 0 ? (
                      <motion.span
                        variants={tagDot}
                        aria-hidden
                        className="text-(--brand)"
                      >
                        ·
                      </motion.span>
                    ) : null}
                    <motion.span variants={tagWord} className="inline-block">
                      <motion.span
                        className="inline-block bg-linear-to-r from-white via-(--brand) to-white bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(250,164,38,0.25)]"
                        initial={{ backgroundPosition: "200% center" }}
                        animate={{ backgroundPosition: "0% center" }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.6 + i * 0.16,
                        }}
                      >
                        {word}
                      </motion.span>
                    </motion.span>
                  </Fragment>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
              >
                A 36-hour programme covering three high-demand caregiving
                specialisations — elderly care, autism care, and child care.
                Gain hands-on, person-centred caregiving skills to support the
                physical, emotional, developmental, and social well-being of care
                recipients across home, community, and institutional settings.
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
                  { k: "3", v: "Specialisations" },
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
                  text="Caregiving skills across every age and need"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  The Advanced Certificate in Professional Caregiving equips
                  participants with the knowledge, practical skills, and
                  competencies to support individuals across different age groups
                  and care needs. With hands-on experience in elderly, autism, and
                  child care, you&apos;ll learn to provide person-centred care,
                  manage daily living activities, and promote safety, dignity, and
                  quality of life.
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
                      alt="Caregiver supporting an elderly person with warmth and care"
                      src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/92 p-5 shadow-lg ring-1 ring-black/5 backdrop-blur">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
                          <FiHeart className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-950">
                            Three specialisations, one programme
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            Elderly care, autism support, and child care taught
                            through practical, scenario-based caregiving sessions.
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

        {/* ──────────────── Programme objectives ──────────────── */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                PROGRAMME OBJECTIVES
              </div>
              <BlurText
                as="h2"
                text="What you'll be able to do on completion"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {objectives.map((objective, i) => (
                <motion.div
                  key={objective}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                  className="flex items-start gap-4 rounded-3xl border border-(--border) bg-white p-5 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.6)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-(--brand) text-sm font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-slate-700">
                    {objective}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── Modules & assessment ──────────────── */}
        <section id="modules" className="bg-(--surface-2) py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                MODULES &amp; ASSESSMENT
              </div>
              <BlurText
                as="h2"
                text="Three modules. Thirty-six hours. Three care specialisations."
                delay={100}
                animateBy="words"
                direction="top"
                className="mt-3 justify-center text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Each module runs for 12 hours and is assessed by written
                examination (100%), covering autism care, child care, and elderly
                care in depth.
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
                            Topics Covered
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
                    1 : 20
                    <span className="ml-2 align-middle text-base font-semibold text-white/60">
                      (Lecture)
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    A supportive learning environment with guided practical
                    sessions, caregiving simulations, and trainer-led activities.
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
                  text="Transparent fees with a special discount"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  A part-time programme covering registration and tuition for all
                  three modules — now with a special discount of S$600. The
                  registration fee is non-refundable and non-transferable.
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
                  <div className="flex items-center justify-between gap-4 bg-emerald-50 px-6 py-4">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                      <FiTrendingUp className="h-4 w-4" aria-hidden />
                      Special Discount
                    </span>
                    <span className="text-base font-extrabold text-emerald-600">
                      − S$600.00
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 bg-(--surface-2) px-6 py-5">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-(--brand-2)">
                      Total Fees Payable
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
                    “Advanced Certificate in Professional Caregiving (Elderly, Autism &amp; Child Care)”
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    Awarded by{" "}
                    <span className="font-bold text-(--brand-2)">
                      Lumax Academy Pte Ltd
                    </span>{" "}
                    on successful completion of all three modules and their written
                    assessments.
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
                Graduates can pursue roles across the healthcare, community care,
                early childhood, and special needs sectors.
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
                  text="Ready to start your caregiving career?"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-(--brand-2) sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Tell us a little about yourself and our team will share the next
                  intake dates, schedule, and enrolment details for the Advanced
                  Certificate in Professional Caregiving.
                </p>

                <div className="mt-7 grid gap-3">
                  {[
                    { icon: FiCalendar, k: "Schedule", v: "Weekend · 12 Sundays · 3 hrs/class" },
                    { icon: FiClock, k: "Duration", v: "12 weeks · 36 contact hours" },
                    { icon: FiMonitor, k: "Mode", v: "E-learning / Face-to-Face" },
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
