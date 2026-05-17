"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import BlurText from "./_components/BlurText";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import ContactForm from "./_components/contactform";
import { featuredCourses } from "./data/coursedata";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCpu,
  FiHeart,
  FiLayers,
  FiPlay,
  FiVideo,
  FiX,
  FiHeadphones,
} from "react-icons/fi";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof featuredCourses)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedCourse) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCourse(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCourse]);

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
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#fff7e8] via-white to-white">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-(--brand)/15 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-(--brand-2)/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-(--brand)" />
                  Trusted Skills Training Academy 
                </div>

                <motion.h1
                  initial={{ filter: "blur(12px)", opacity: 0, y: -24 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.05]"
                >
                  Build Career-Ready Skills,{" "}
                  <span className="text-(--brand)">Learn anytime</span> — with
                  world-class instructors.
                </motion.h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Gain practical, job-focused training in caregiving, therapy assistant skills, healthcare administration, childcare, and barista arts. Flexible learning designed to help you start or advance your career in Singapore and beyond.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                  >
                    Explore Courses
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-(--border) bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-(--surface-2) text-(--brand)">
                      <FiPlay className="h-4 w-4" aria-hidden />
                    </span>
                    Watch the video
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
                  {[
                    { k: "1k+", v: "Students Trained" },
                    { k: "25+", v: "Industry Trainers" },
                    { k: "4.9/5", v: "Avg. Rating" },
                    { k: "24/6", v: "Student Support" },
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-2xl border border-(--border) bg-white/70 px-4 py-3"
                    >
                      <div className="text-lg font-extrabold text-slate-900">
                        {s.k}
                      </div>
                      <div className="text-xs font-semibold text-slate-600">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[32px] bg-linear-to-br from-(--brand)/15 via-transparent to-(--brand-2)/15 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-(--border) bg-white shadow-[0_22px_80px_-55px_rgba(2,6,23,0.55)]">
                  <div className="absolute left-6 top-6 rounded-2xl bg-white/90 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
                    <div className="text-xs font-semibold text-slate-600">
                      Enrolment
                    </div>
                    <div className="mt-0.5 text-lg font-extrabold text-slate-900">
                      1k+
                    </div>
                  </div>

                  <Image
                    alt="Student learning with headphones"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                    width={1400}
                    height={880}
                    className="h-[360px] w-full object-cover sm:h-[440px]"
                    priority
                  />

                  <div className="grid gap-3 border-t border-(--border) bg-(--surface-2) p-5 sm:grid-cols-3">
                    {[
                      { label: "Live sessions", value: "Weekly" },
                      { label: "Practical Training", value: "Hands-On" },
                      { label: "Certificates", value: "Recognised" },
                    ].map((x) => (
                      <div key={x.label} className="rounded-2xl bg-white p-4">
                        <div className="text-xs font-semibold text-slate-500">
                          {x.label}
                        </div>
                        <div className="mt-1 text-sm font-bold text-slate-900">
                          {x.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature bar */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {[
                {
                  title: "Healthcare-Focused Programmes",
                  desc: "Practical courses designed for real-world healthcare and caregiving careers.",
                  icon: FiHeart,
                },
                {
                  title: "Expert-Led Training",
                  desc: "Learn from experienced professionals and industry practitioners.",
                  icon: FiLayers,
                },
                {
                  title: "Flexible Learning",
                  desc: "Study online or in-person at your convenience",
                  icon: FiVideo,
                },
                {
                  title: "Career Support",
                  desc: "Guidance on course selection and career pathways.",
                  icon: FiHeadphones,
                },
              ].map((f: { title: string; desc: string; icon: IconType }) => (
                <div
                  key={f.title}
                  className="group rounded-3xl border border-(--border) bg-white p-5 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_80px_-60px_rgba(2,6,23,0.55)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-(--surface-2) text-xl text-(--brand)">
                      <f.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900">
                        {f.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Courses */}
        <section id="courses" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  TOP CLASS COURSES
                </div>
                <BlurText
                  as="h2"
                  text="Choose your next course"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                />
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-(--border) bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                View all courses <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <article
                  key={course.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_18px_70px_-65px_rgba(2,6,23,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_90px_-70px_rgba(2,6,23,0.6)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      alt={course.title}
                      src={course.image}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#193764]/75 via-[#193764]/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-bold text-[#193764] backdrop-blur-sm">
                      {course.hours}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-(--brand)">
                      <a href={`/courses/${course.id}`}>{course.title}</a>
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                      <span className="rounded-full bg-(--surface-2) px-3 py-1">
                        {course.moduleCount} modules
                      </span>
                      <span className="rounded-full bg-(--surface-2) px-3 py-1">
                        {course.hours}
                      </span>
                    </div>

                    <div className="mt-4 border-t border-(--border) pt-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Who is this for
                      </div>
                      <ul className="mt-2 space-y-1">
                        {course.targetAudience.slice(0, 3).map((t) => (
                          <li key={t} className="flex items-center gap-2 text-xs text-slate-600">
                            <FiCheck className="h-3 w-3 shrink-0 text-(--brand)" aria-hidden />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        onClick={() => setSelectedCourse(course)}
                        className="inline-flex items-center text-xs font-semibold text-(--brand) hover:underline"
                      >
                        Get course details <FiArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>     

        {/* Contact */}
        <section id="contact" className="bg-(--surface-2) py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
              <div>
                <div className="text-[11px] font-semibold tracking-widest text-(--brand) sm:text-[13px]">
                  CONTACT
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#193764] sm:mt-3 sm:text-3xl md:text-4xl">
                  Enquire & we’ll guide you
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us what you’re looking for and we’ll recommend the best programme,
                  intake timeline, and learning pathway.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: "Phone", v: "+65 8221 6423" },
                    { k: "Email", v: "info@lumaxacademy.com.sg" },
                    { k: "Address", v: "7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl border border-(--border) bg-white p-4 shadow-sm shadow-black/5"
                    >
                      <div className="text-xs font-bold tracking-widest text-(--brand)">
                        {x.k.toUpperCase()}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-800">
                        {x.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>

      {selectedCourse ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-enquiry-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-label="Close"
            onClick={() => setSelectedCourse(null)}
          />

          {/* Sheet / card */}
          <div className="relative flex w-full flex-col rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(2,6,23,0.18)] sm:max-w-md sm:rounded-3xl sm:shadow-[0_30px_80px_-30px_rgba(2,6,23,0.5)]">
            {/* Drag handle (mobile only) */}
            <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-slate-200 sm:mt-3 sm:w-10 sm:hidden" />

            {/* Header */}
            <div className="flex items-start justify-between gap-2 px-4 pb-2 pt-3 sm:gap-3 sm:px-5 sm:pb-3 sm:pt-4">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-(--brand) sm:text-[11px]">
                  Course Enquiry
                </p>
                <h2
                  id="course-enquiry-title"
                  className="mt-0.5 truncate text-sm font-extrabold text-[#193764] sm:text-base"
                >
                  {selectedCourse.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-(--border) text-slate-500 transition hover:bg-slate-50 hover:text-[#193764] sm:h-8 sm:w-8"
                aria-label="Close"
              >
                <FiX className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
              </button>
            </div>

            {/* Form — scrollable */}
            <div className="max-h-[70vh] overflow-y-auto px-4 pb-5 pt-0.5 sm:max-h-[80vh] sm:px-5 sm:pb-6 sm:pt-1">
              <ContactForm initialCourseId={selectedCourse.id} compact />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
