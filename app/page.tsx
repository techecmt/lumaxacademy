"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import BlurText from "./_components/BlurText";
import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";
import ContactForm from "./_components/contactform";
import { featuredCourses } from "./data/coursedata";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiLayers,
  FiPlay,
  FiVideo,
  FiX,
  FiHeadphones,
} from "react-icons/fi";

type WebsiteReview = {
  id: string;
  name: string;
  overallRating: number;
  trainingRating: number;
  trainerRating: number;
  description: string;
  createdAt: string;
};

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof featuredCourses)[number] | null
  >(null);
  const [reviews, setReviews] = useState<WebsiteReview[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const reviewsCarouselRef = useRef<HTMLDivElement | null>(null);
  const stars = [1, 2, 3, 4, 5];

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

  useEffect(() => {
    let cancelled = false;

    const loadReviews = async () => {
      try {
        const response = await fetch("/api/reviews?limit=6");
        const data = (await response.json()) as { reviews?: WebsiteReview[] };

        if (!cancelled && response.ok) {
          setReviews(data.reviews ?? []);
        }
      } catch {
        if (!cancelled) setReviews([]);
      } finally {
        if (!cancelled) setReviewsLoading(false);
      }
    };

    void loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!reviews.length) {
      setActiveReviewIndex(0);
      return;
    }
    if (activeReviewIndex > reviews.length - 1) {
      setActiveReviewIndex(reviews.length - 1);
    }
  }, [activeReviewIndex, reviews.length]);

  const scrollToReview = (index: number) => {
    const carousel = reviewsCarouselRef.current;
    if (!carousel) return;

    const clampedIndex = Math.max(0, Math.min(index, reviews.length - 1));
    const nextCard = carousel.querySelector<HTMLElement>(
      `[data-review-index="${clampedIndex}"]`
    );

    if (nextCard) {
      nextCard.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActiveReviewIndex(clampedIndex);
    }
  };

  const handleReviewsScroll = () => {
    const carousel = reviewsCarouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children) as HTMLElement[];
    if (!cards.length) return;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveReviewIndex(nearestIndex);
  };

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
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <Image
                      alt={course.title}
                      src={course.image}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#193764]/60 via-transparent to-transparent" />
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

        {/* Reviews */}
        <section id="reviews" className="bg-(--surface-2) py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  STUDENT REVIEWS
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  What our students say
                </h2>
              </div>
              <a
                href="/reviews-collection"
                className="inline-flex items-center justify-center rounded-xl bg-[#193764] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-110"
              >
                Leave a review <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </div>

            {reviewsLoading ? (
              <div className="mt-8 rounded-2xl border border-(--border) bg-white p-5 text-sm font-medium text-slate-600">
                Loading latest student reviews...
              </div>
            ) : null}

            {!reviewsLoading && reviews.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-(--border) bg-white p-5 text-sm font-medium text-slate-600">
                No reviews yet. Be the first student to share your feedback.
              </div>
            ) : null}

            {reviews.length > 0 ? (
              <>
                <div className="mt-6 flex items-center justify-between md:hidden">
                  <button
                    type="button"
                    onClick={() => scrollToReview(activeReviewIndex - 1)}
                    disabled={activeReviewIndex <= 0}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white text-slate-700 disabled:opacity-40"
                    aria-label="Previous review"
                  >
                    <FiChevronLeft className="h-5 w-5" aria-hidden />
                  </button>

                  <div className="flex items-center gap-2">
                    {reviews.map((review, index) => (
                      <button
                        key={`dot-${review.id}`}
                        type="button"
                        onClick={() => scrollToReview(index)}
                        className={[
                          "h-2.5 w-2.5 rounded-full transition",
                          index === activeReviewIndex
                            ? "bg-(--brand)"
                            : "bg-slate-300 hover:bg-slate-400",
                        ].join(" ")}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToReview(activeReviewIndex + 1)}
                    disabled={activeReviewIndex >= reviews.length - 1}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-white text-slate-700 disabled:opacity-40"
                    aria-label="Next review"
                  >
                    <FiChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </div>

                <div
                  ref={reviewsCarouselRef}
                  onScroll={handleReviewsScroll}
                  className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 md:mt-8 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 md:gap-5 lg:grid-cols-3"
                >
                {reviews.map((review, index) => (
                  <article
                    key={review.id}
                    data-review-index={index}
                    className="w-[86%] shrink-0 snap-start rounded-2xl border border-(--border) bg-white p-5 shadow-[0_18px_55px_-50px_rgba(2,6,23,0.55)] sm:w-[70%] md:w-auto md:shrink md:snap-none"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-bold text-[#193764]">{review.name}</h3>
                      <span className="rounded-lg bg-[#fff7e8] px-2.5 py-1 text-xs font-bold text-[#193764]">
                        Overall: {review.overallRating}/5
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      {stars.map((star) => (
                        <FaStar
                          key={star}
                          className={[
                            "h-3.5 w-3.5",
                            star <= review.overallRating
                              ? "text-amber-400"
                              : "text-slate-300",
                          ].join(" ")}
                          aria-hidden
                        />
                      ))}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {review.description}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
                      <div className="rounded-lg bg-(--surface-2) px-2.5 py-2">
                        Training: {review.trainingRating}/5
                      </div>
                      <div className="rounded-lg bg-(--surface-2) px-2.5 py-2">
                        Trainer: {review.trainerRating}/5
                      </div>
                    </div>
                  </article>
                ))}
                </div>
              </>
            ) : null}
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
          <div className="relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(2,6,23,0.18)] sm:max-h-[88vh] sm:max-w-lg sm:rounded-3xl sm:shadow-[0_30px_80px_-30px_rgba(2,6,23,0.5)]">
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
