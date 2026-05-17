"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Props = {
  items: Testimonial[];
  autoPlayMs?: number;
};

export default function TestimonialCarousel({ items, autoPlayMs = 6500 }: Props) {
  const safeItems = useMemo(() => (items.length ? items : []), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeItems.length);
    }, autoPlayMs);
    return () => window.clearInterval(t);
  }, [autoPlayMs, safeItems.length]);

  const active = safeItems[index];

  if (!active) return null;

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="rounded-3xl border border-(--border) bg-white p-7 shadow-[0_18px_60px_-45px_rgba(2,6,23,0.5)] sm:p-10">
        <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
          TESTIMONIALS
        </div>
        <p className="mt-4 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
          “{active.quote}”
        </p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-base font-bold text-slate-900">
              {active.name}
            </div>
            <div className="text-sm text-slate-600">{active.role}</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setIndex((i) => (i - 1 + safeItems.length) % safeItems.length)
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) text-slate-700 hover:bg-slate-50"
              aria-label="Previous testimonial"
              disabled={safeItems.length <= 1}
            >
              <FiArrowLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % safeItems.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) text-slate-700 hover:bg-slate-50"
              aria-label="Next testimonial"
              disabled={safeItems.length <= 1}
            >
              <FiArrowRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {safeItems.length > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2">
          {safeItems.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={[
                "h-2.5 w-2.5 rounded-full transition",
                i === index
                  ? "bg-(--brand)"
                  : "bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

