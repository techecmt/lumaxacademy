import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function StudentAffairsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          Student Affairs
          <span className="text-(--brand)">•</span>
          Support & Services
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Student Affairs
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Student Affairs supports learners throughout their learning journey —
          from enrolment guidance to ongoing student support. This page is a
          starting point; we can expand it with your exact processes,
          documents, and policies.
        </p>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] lg:col-span-2">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              SERVICES
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              How we help students
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Course counselling & programme selection",
                "Enrolment support & onboarding",
                "Academic guidance and scheduling",
                "Attendance and participation support",
                "Learner wellbeing and assistance",
                "Feedback, complaints, and resolutions",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
                >
                  <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
                    <FiCheck className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{x}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              QUICK LINKS
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: "Explore courses", href: "/#courses" },
                { label: "Contact us", href: "/#contact" },
                { label: "About Lumax Academy", href: "/about" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-black/5 hover:text-(--brand)"
                >
                  {l.label}
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

