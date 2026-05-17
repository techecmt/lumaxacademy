"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import BlurText from "../_components/BlurText";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiCoffee,
  FiCpu,
  FiGlobe,
  FiHeart,
  FiHome,
  FiLayers,
  FiMonitor,
  FiSettings,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const sectors: { title: string; icon: IconType }[] = [
  { title: "Healthcare", icon: FiHeart },
  { title: "Hotel Management", icon: FiHome },
  { title: "Information Technology", icon: FiMonitor },
  { title: "Therapies & Allied Health", icon: FiActivity },
  { title: "Engineering", icon: FiTool },
  { title: "Business Management", icon: FiBriefcase },
  { title: "Robotics & Automation", icon: FiCpu },
];

const coreValues = [
  {
    letter: "L",
    title: "Lifelong Learning",
    desc: "We promote continuous learning, growth, and professional development for an evolving global workforce.",
  },
  {
    letter: "U",
    title: "Unity & Inclusivity",
    desc: "We foster a respectful, diverse, and collaborative environment where everyone has equal opportunities to succeed.",
  },
  {
    letter: "M",
    title: "Mastery Through Practical Skills",
    desc: "We emphasize hands-on training, competency-based learning, and skills that enhance employability.",
  },
  {
    letter: "A",
    title: "Adaptability & Innovation",
    desc: "We embrace technology, creativity, and innovation to prepare learners for modern industries.",
  },
  {
    letter: "X",
    title: "eXcellence with Integrity",
    desc: "We uphold professionalism, quality education, honesty, and ethical practice in everything we do.",
  },
];

const culturePillars: { title: string; desc: string; icon: IconType }[] = [
  {
    title: "Learn",
    desc: "Practical knowledge, industry-relevant skills, and lifelong learning opportunities.",
    icon: FiBookOpen,
  },
  {
    title: "Lead",
    desc: "Confidence, professionalism, innovation, and leadership for dynamic industries.",
    icon: FiTrendingUp,
  },
  {
    title: "Succeed",
    desc: "Career readiness, employability, and meaningful global workforce contribution.",
    icon: FiAward,
  },
];

const programmeAreas: { title: string; icon: IconType; items: string[] }[] = [
  {
    title: "Healthcare & Allied Health",
    icon: FiHeart,
    items: [
      "Caregiving",
      "Healthcare Assistance",
      "Therapy Support",
      "Rehabilitation Support",
      "Elderly Care",
    ],
  },
  {
    title: "Hotel Management & Hospitality",
    icon: FiCoffee,
    items: [
      "Hotel Operations",
      "Front Office Services",
      "Housekeeping",
      "Food & Beverage Service",
      "Cafe & Barista Skills",
    ],
  },
  {
    title: "Information Technology",
    icon: FiMonitor,
    items: [
      "Digital Literacy",
      "Software Applications",
      "Cybersecurity Fundamentals",
      "Data Analytics",
      "Artificial Intelligence Basics",
    ],
  },
  {
    title: "Therapies & Wellness",
    icon: FiActivity,
    items: [
      "Physiotherapy Assistance",
      "Occupational Therapy Assistance",
      "Speech Therapy Support",
      "Wellness & Rehabilitation Programmes",
    ],
  },
  {
    title: "Engineering & Technical Skills",
    icon: FiSettings,
    items: [
      "Electrical Engineering Fundamentals",
      "Mechanical Maintenance",
      "Industrial Safety",
      "Automation Systems",
    ],
  },
  {
    title: "Business & Management",
    icon: FiBriefcase,
    items: [
      "Business Administration",
      "Digital Marketing",
      "Entrepreneurship",
      "Customer Service Excellence",
      "Leadership & Supervisory Skills",
    ],
  },
  {
    title: "Robotics & Automation",
    icon: FiCpu,
    items: [
      "Robotics Fundamentals",
      "Coding & Programming Basics",
      "STEM Robotics",
      "Industrial Automation Applications",
    ],
  },
];

const learningMethods = [
  "Face-to-Face Classroom Training",
  "Practical Workshops",
  "Laboratory & Simulation Activities",
  "E-Learning Platforms",
  "Project-Based Learning",
  "Industry Exposure & Case Studies",
];

const employability = [
  "Industry-relevant curriculum",
  "Practical competency training",
  "Soft skills development",
  "Communication skills",
  "Workplace professionalism",
  "Career readiness preparation",
];

export default function AboutPage() {
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
        <section className="relative overflow-hidden bg-linear-to-b from-[#fff7e8] via-white to-white">
          <div className="absolute inset-0">
            <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-(--brand)/20 blur-3xl" />
            <div className="absolute -right-24 top-36 h-80 w-80 rounded-full bg-(--brand-2)/15 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-(--brand) text-white">
                    <FiZap className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  Singapore-based skill development institute
                </div>

                <motion.h1
                  initial={{ filter: "blur(12px)", opacity: 0, y: -24 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[62px] lg:leading-[1.03]"
                >
                  Future-ready education for{" "}
                  <span className="text-(--brand)">career success</span>
                </motion.h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Founded in 2026, Lumax Academy is a progressive educational
                  institute in Singapore delivering industry-relevant skill
                  development and vocational education programmes for learners
                  preparing for the evolving global workforce.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#programmes"
                    className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                  >
                    Explore programme areas
                    <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href="#methodology"
                    className="inline-flex items-center justify-center rounded-xl border border-(--border) bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    How learning works
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { k: "2026", v: "Founded" },
                    { k: "7", v: "High-demand sectors" },
                    { k: "2", v: "Delivery modes" },
                    { k: "100%", v: "Employability focus" },
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-2xl border border-(--border) bg-white/80 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="text-xl font-extrabold text-slate-950">
                        {s.k}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-600">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-5 -z-10 rounded-4xl bg-linear-to-br from-(--brand)/20 via-transparent to-(--brand-2)/20 blur-2xl" />
                <div className="overflow-hidden rounded-4xl border border-white/80 bg-white shadow-[0_24px_90px_-55px_rgba(2,6,23,0.6)]">
                  <div className="relative h-[320px] sm:h-[420px] lg:h-[500px]">
                    <Image
                      alt="Diverse learners collaborating in a modern classroom"
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/92 p-5 shadow-lg ring-1 ring-black/5 backdrop-blur">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
                          <FiGlobe className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-950">
                            Local and international learners
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            Flexible face-to-face and e-learning pathways built
                            around practical workplace readiness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  ABOUT LUMAX ACADEMY
                </div>
                <BlurText
                  as="h2"
                  text="Practical education for modern industries"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Lumax Academy specializes in Certificate and Diploma level
                  programmes across high-demand sectors, equipping learners with
                  hands-on competencies, technical expertise, and professional
                  readiness for Singapore and international markets.
                </p>
                <div className="mt-6 rounded-3xl border border-(--border) bg-(--surface-2) p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-(--brand) ring-1 ring-black/5">
                      <FiLayers className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-950">
                        Delivery modes
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        Face-to-Face classroom training and E-Learning for
                        accessible, flexible, future-ready education.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div
                    key={sector.title}
                    className="group rounded-3xl border border-(--border) bg-white p-5 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.6)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-58px_rgba(2,6,23,0.7)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5 transition group-hover:bg-(--brand) group-hover:text-white">
                        <sector.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-950">
                          {sector.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          Applied learning designed around real workplace skills
                          and professional readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-white">
                  <FiTarget className="h-6 w-6" aria-hidden />
                </div>
                <div className="mt-6 text-sm font-semibold tracking-widest text-(--brand)">
                  VISION
                </div>
                <p className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                  To empower future-ready professionals through innovative,
                  industry-focused education and lifelong learning.
                </p>
              </div>

              <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-(--brand-2)">
                  <FiUsers className="h-6 w-6" aria-hidden />
                </div>
                <div className="mt-6 text-sm font-semibold tracking-widest text-(--brand)">
                  MISSION
                </div>
                <p className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
                  Empowering Skills, Inspiring Leadership, Creating Success.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
                  To be a catalyst for personal and professional growth by
                  delivering innovative vocational education aligned with global
                  industry demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                CORE VALUES
              </div>
              <BlurText
                as="h2"
                text="L.U.M.A.X values that guide every learner journey"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Our values shape the way we teach, support learners, and build
                pathways toward personal and professional growth.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map((value) => (
                <div
                  key={value.letter}
                  className="rounded-3xl border border-(--border) bg-white p-5 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.65)]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-xl font-extrabold text-white">
                    {value.letter}
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-(--surface-2) py-14 sm:py-20">
          <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-(--brand)/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="relative h-[320px] overflow-hidden rounded-4xl border border-white bg-white shadow-[0_24px_90px_-62px_rgba(2,6,23,0.62)] sm:h-[420px]">
                <Image
                  alt="Learners in a bright academy environment"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-white/92 p-5 ring-1 ring-black/5 backdrop-blur">
                  <div className="text-sm font-extrabold text-slate-950">
                    Learn. Lead. Succeed.
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Learn with Purpose. Lead with Confidence. Succeed with
                    Excellence.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                ORGANIZATIONAL CULTURE
              </div>
              <BlurText
                as="h2"
                text="A culture of continuous learning, leadership, and achievement"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                At Lumax Academy, hands-on education, innovation, and
                industry-focused training inspire every learner to grow with
                purpose and contribute with confidence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {culturePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-(--border) bg-white p-5"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                      <pillar.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-lg font-extrabold text-slate-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programmes" className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                PROGRAMME AREAS
              </div>
              <BlurText
                as="h2"
                text="High-demand sectors with practical learning pathways"
                delay={110}
                animateBy="words"
                direction="top"
                className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
              />
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Certificate and Diploma level programmes are organized around
                industry needs, workplace expectations, and skills learners can
                apply with confidence.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {programmeAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.75rem] border border-(--border) bg-white p-6 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.65)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                      <area.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-950">
                        {area.title}
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  LEARNING METHODOLOGY
                </div>
                <BlurText
                  as="h2"
                  text="Blended learning that turns knowledge into competency"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl"
                />
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Lumax Academy combines theory, hands-on practice, simulation,
                  projects, and industry exposure so learners can connect
                  classroom knowledge with real workplace expectations.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {learningMethods.map((method) => (
                    <div
                      key={method}
                      className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-4"
                    >
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                        <FiCheckCircle className="h-4 w-4" aria-hidden />
                      </div>
                      <span className="text-sm font-semibold leading-relaxed text-slate-700">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-4xl bg-slate-950 p-6 text-white sm:p-8">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-(--brand)/30 blur-3xl" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-white">
                    <FiAward className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="mt-8 text-sm font-semibold tracking-widest text-(--brand)">
                    COMMITMENT TO EMPLOYABILITY
                  </div>
                  <h3 className="mt-3 text-3xl font-extrabold leading-tight">
                    Graduates who are confident, competent, and career-ready.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/72 sm:text-base">
                    Employability-focused education is integrated into every
                    learner experience through curriculum relevance, practical
                    training, soft skills, communication, and workplace
                    professionalism.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {employability.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                      >
                        <FiCheck className="mt-1 h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                        <span className="text-sm font-semibold leading-relaxed text-white/85">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-(--brand-2) via-slate-950 to-(--brand-2) p-6 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-(--brand)/30 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                <div>
                  <div className="text-sm font-semibold tracking-widest text-(--brand)">
                    READY TO LEARN WITH PURPOSE?
                  </div>
                  <BlurText
                    as="h2"
                    text="Start building practical skills for the industries of tomorrow."
                    delay={110}
                    animateBy="words"
                    direction="top"
                    className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
                  />
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
                    Lumax Academy prepares learners for career success through
                    innovative vocational education, hands-on training, and
                    professional readiness aligned with global industry demands.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
                  >
                    Contact Lumax Academy
                  </Link>
                  <Link
                    href="/#courses"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    View courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
