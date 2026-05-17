"use client";

import { useMemo, useState } from "react";
import { allCourses } from "../data/coursedata";
import {
  FiCalendar,
  FiCheck,
  FiChevronDown,
  FiGlobe,
  FiMail,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";

type FormState = {
  fullName: string;
  email: string;
  phoneCode: string;
  phoneCodeOther: string;
  phone: string;
  courseId: string;
  nationality: string;
  startMonth: string;
  message: string;
};

function createInitialState(initialCourseId = ""): FormState {
  return {
  fullName: "",
  email: "",
  phoneCode: "+65",
  phoneCodeOther: "",
  phone: "",
    courseId: initialCourseId,
  nationality: "",
  startMonth: "",
  message: "",
  };
}

const phoneCodeOptions = [
  { value: "+65", label: "+65 Singapore" },
  { value: "+60", label: "+60 Malaysia" },
  { value: "+62", label: "+62 Indonesia" },
  { value: "+63", label: "+63 Philippines" },
  { value: "+66", label: "+66 Thailand" },
  { value: "+84", label: "+84 Vietnam" },
  { value: "+82", label: "+82 South Korea" },
  { value: "+86", label: "+86 China" },
  { value: "+81", label: "+81 Japan" },
  { value: "+91", label: "+91 India" },
  { value: "+92", label: "+92 Pakistan" },
  { value: "+94", label: "+94 Sri Lanka" },
  { value: "+880", label: "+880 Bangladesh" },
  { value: "+971", label: "+971 UAE" },
  { value: "+966", label: "+966 Saudi Arabia" },
  { value: "+974", label: "+974 Qatar" },
  { value: "+965", label: "+965 Kuwait" },
  { value: "+973", label: "+973 Bahrain" },
  { value: "+968", label: "+968 Oman" },
  { value: "+962", label: "+962 Jordan" },
  { value: "+961", label: "+961 Lebanon" },
  { value: "+972", label: "+972 Israel" },
  { value: "+1", label: "+1 USA" },
  { value: "+44", label: "+44 UK" },
  { value: "other", label: "Other" },
] as const;

function getUpcomingMonths(): { value: string; label: string; year: number }[] {
  const now = new Date();
  return Array.from({ length: 3 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const monthName = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();
    const value = `${year}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    return { value, label: monthName, year };
  });
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-1 block text-[11px] font-extrabold text-[#193764] sm:mb-1.5 sm:text-xs">
      {children}{" "}
      {required ? <span className="text-red-500">*</span> : null}
    </label>
  );
}

const inputBase =
  "min-w-0 flex-1 bg-transparent text-[13px] font-semibold text-slate-800 outline-none placeholder:text-slate-400 sm:text-sm";
const shellBase =
  "group/shell flex cursor-text items-center gap-1.5 rounded-xl border border-(--border) bg-white px-2.5 py-2 shadow-sm shadow-black/4 transition-all duration-200 focus-within:border-[#faa426]/40 focus-within:ring-2 focus-within:ring-[#faa426]/25 focus-within:shadow-[#faa426]/10 hover:border-[#faa426]/25 sm:gap-2 sm:px-3 sm:py-2.5";
const iconBox =
  "pointer-events-none grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#fff7e8] text-[#193764] transition-colors duration-200 group-focus-within/shell:bg-[#faa426] group-focus-within/shell:text-white sm:h-8 sm:w-8";

export default function ContactForm({
  initialCourseId = "",
  compact = false,
}: {
  initialCourseId?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<FormState>(() =>
    createInitialState(initialCourseId)
  );
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const courses = useMemo(
    () => allCourses.map((c) => ({ id: c.id, title: c.title })),
    []
  );

  const months = useMemo(() => getUpcomingMonths(), []);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function focusField(
    event: React.MouseEvent<HTMLElement>,
    selector = "input, select, textarea"
  ) {
    const target = event.target as HTMLElement;
    if (target.closest("input, select, textarea, button")) return;

    event.currentTarget
      .querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        selector
      )
      ?.focus();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    const normalizedPhoneCode =
      state.phoneCode === "other"
        ? state.phoneCodeOther.trim() || "other"
        : state.phoneCode;
    const selectedCourse = courses.find((course) => course.id === state.courseId);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...state,
          phoneCode: normalizedPhoneCode,
          courseTitle: selectedCourse?.title,
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(result?.error || "Unable to submit your enquiry.");
      }

      setStatus("sent");
      setState(createInitialState(initialCourseId));
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry right now."
      );
      setStatus("error");
    }
  }

  const shell = compact
    ? "group/shell flex cursor-text items-center gap-1.5 rounded-xl border border-(--border) bg-white px-2.5 py-2 shadow-sm shadow-black/4 transition-all duration-200 focus-within:border-[#faa426]/40 focus-within:ring-2 focus-within:ring-[#faa426]/25 hover:border-[#faa426]/25"
    : shellBase;
  const icon = compact
    ? "pointer-events-none grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#fff7e8] text-[#193764] transition-colors duration-200 group-focus-within/shell:bg-[#faa426] group-focus-within/shell:text-white"
    : iconBox;

  return (
    <div className={compact ? "" : "overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_24px_80px_-60px_rgba(2,6,23,0.45)]"}>
      {/* Header strip — hidden in compact mode */}
      {!compact && (
        <div className="bg-linear-to-r from-[#193764] to-[#244b82] px-4 py-2.5 sm:px-5 sm:py-3">
          <h3 className="text-sm font-extrabold text-white sm:text-base">Enquire now</h3>
          <p className="mt-0.5 text-[11px] font-semibold text-white/60 sm:mt-1 sm:text-xs">
            Fill the form and our team will get back to you within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={onSubmit} className={compact ? "grid gap-3" : "grid gap-3 p-4 sm:gap-4 sm:p-5 md:p-6"}>
        {/* Row 1: Name + Email */}
        <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
          <div>
            <Label required>Full Name</Label>
            <div className={shell} onClick={focusField}>
              <span className={icon}>
                <FiUser className="h-4 w-4" aria-hidden />
              </span>
              <input
                value={state.fullName}
                onChange={(e) => onChange("fullName", e.target.value)}
                required
                placeholder="Enter your full name"
                className={inputBase}
              />
            </div>
          </div>

          <div>
            <Label required>Email Address</Label>
            <div className={shell} onClick={focusField}>
              <span className={icon}>
                <FiMail className="h-4 w-4" aria-hidden />
              </span>
              <input
                value={state.email}
                onChange={(e) => onChange("email", e.target.value)}
                required
                type="email"
                placeholder="your.email@example.com"
                className={inputBase}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <Label required>Phone Number</Label>
          <div
            className="flex cursor-text overflow-hidden rounded-xl border border-(--border) bg-white shadow-sm shadow-black/4 transition-all duration-200 focus-within:border-[#faa426]/40 focus-within:ring-2 focus-within:ring-[#faa426]/25"
            onClick={(event) => focusField(event, 'input[inputmode="tel"]')}
          >
            <div className="flex items-center gap-1 border-r border-(--border) bg-[#fff7e8] px-2 py-2 sm:gap-1.5 sm:px-3 sm:py-2.5">
              <select
                value={state.phoneCode}
                onChange={(e) => onChange("phoneCode", e.target.value)}
                aria-label="Country code"
                className="max-w-[110px] bg-transparent text-[13px] font-extrabold text-[#193764] outline-none sm:max-w-[145px] sm:text-sm"
              >
                {phoneCodeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <FiChevronDown className="h-3 w-3 text-[#193764]/50 sm:h-3.5 sm:w-3.5" aria-hidden />
              {state.phoneCode === "other" && (
                <input
                  value={state.phoneCodeOther}
                  onChange={(e) => onChange("phoneCodeOther", e.target.value)}
                  placeholder="+__"
                  inputMode="tel"
                  className="w-14 rounded-lg bg-white px-1.5 py-1 text-[13px] font-extrabold text-[#193764] outline-none ring-1 ring-black/5 placeholder:text-slate-400 sm:w-16 sm:px-2 sm:text-sm"
                />
              )}
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-1.5 px-2 py-2 sm:gap-2 sm:px-3 sm:py-2.5">
              <span className={icon}>
                <FiPhone className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
              </span>
              <input
                value={state.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                required
                inputMode="tel"
                placeholder="Enter phone number"
                className={inputBase}
              />
            </div>
          </div>
        </div>

        {/* Row 3: Course + Nationality */}
        <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
          <div>
            <Label required>Select Course</Label>
            <div className={shell} onClick={focusField}>
              <span className={icon}>
                <FiGlobe className="h-4 w-4" aria-hidden />
              </span>
              <select
                value={state.courseId}
                onChange={(e) => onChange("courseId", e.target.value)}
                required
                className={`${inputBase} appearance-none`}
              >
                <option value="">Choose a course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
              <FiChevronDown className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
            </div>
          </div>

          <div>
            <Label required>Nationality</Label>
            <div className={shell} onClick={focusField}>
              <span className={icon}>
                <FiGlobe className="h-4 w-4" aria-hidden />
              </span>
              <input
                value={state.nationality}
                onChange={(e) => onChange("nationality", e.target.value)}
                required
                placeholder="Enter your nationality"
                className={inputBase}
              />
            </div>
          </div>
        </div>

        {/* Row 4: Preferred month — interactive pill selector */}
        <div>
          <Label required>When would you like to take this course?</Label>
          <div className="flex flex-wrap gap-2">
            {months.map((m) => {
              const selected = state.startMonth === m.value;
              return (
                <button
                  key={m.value}
                  type="button"
                  onClick={() => onChange("startMonth", selected ? "" : m.value)}
                  className={`group relative flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#faa426] sm:gap-2 sm:px-3 sm:py-2 ${
                    compact ? "text-xs" : "text-xs sm:text-sm"
                  } ${
                    selected
                      ? "border-[#faa426] bg-[#faa426]/10 shadow-sm shadow-[#faa426]/15"
                      : "border-(--border) bg-white hover:border-[#faa426]/30 hover:bg-[#faa426]/5"
                  }`}
                >
                  <span
                    className={`grid place-items-center rounded-lg transition-all duration-200 ${
                      compact ? "h-6 w-6" : "h-8 w-8 sm:h-10 sm:w-10 sm:rounded-xl"
                    } ${
                      selected
                        ? "bg-[#faa426] text-white shadow-md shadow-[#faa426]/30"
                        : "bg-[#fff7e8] text-[#193764] group-hover:bg-[#faa426]/20"
                    }`}
                  >
                    <FiCalendar className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span>
                    <span
                      className={`block font-extrabold ${
                        selected ? "text-[#193764]" : "text-slate-800"
                      }`}
                    >
                      {m.label}
                    </span>
                    <span className="block text-[11px] font-semibold text-slate-500">
                      {m.year}
                    </span>
                  </span>
                  {selected && (
                    <span className="absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center rounded-full bg-[#faa426] text-white shadow-sm">
                      <FiCheck className="h-2.5 w-2.5" aria-hidden />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {!state.startMonth && (
            <input
              tabIndex={-1}
              required
              value=""
              onChange={() => {}}
              className="h-0 w-0 opacity-0"
              aria-hidden
            />
          )}
        </div>

        {/* Row 5: Message */}
        <div>
          <Label>Message (Optional)</Label>
          <div
            className="group/shell cursor-text overflow-hidden rounded-xl border border-(--border) bg-white shadow-sm shadow-black/4 transition-all duration-200 focus-within:border-[#faa426]/40 focus-within:ring-2 focus-within:ring-[#faa426]/25"
            onClick={focusField}
          >
            <div className="flex items-start gap-1.5 p-2 sm:gap-2 sm:p-2.5">
              <span className={`mt-0.5 grid shrink-0 place-items-center rounded-lg bg-[#fff7e8] text-[#193764] transition-colors duration-200 group-focus-within/shell:bg-[#faa426] group-focus-within/shell:text-white ${compact ? "h-6 w-6 rounded-md" : "h-7 w-7 sm:h-8 sm:w-8"}`}>
                <FiMessageSquare className="h-4 w-4" aria-hidden />
              </span>
              <textarea
                value={state.message}
                onChange={(e) => onChange("message", e.target.value)}
                rows={compact ? 2 : 3}
                placeholder="Any questions or notes?"
                className={`${inputBase} resize-none`}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#faa426] px-5 text-[13px] font-extrabold text-[#193764] shadow-lg shadow-[#faa426]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[#faa426]/30 hover:brightness-105 disabled:opacity-70 disabled:shadow-none sm:h-11 sm:w-auto sm:px-6 sm:text-sm"
          >
            {(status === "idle" || status === "error") && (
              <>
                Send Message
                <FiSend className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </>
            )}
            {status === "sending" && (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#193764]/30 border-t-[#193764]" />
                Sending...
              </span>
            )}
            {status === "sent" && (
              <span className="flex items-center gap-2">
                <FiCheck className="h-4 w-4" aria-hidden />
                Sent!
              </span>
            )}
          </button>

          {status === "error" ? (
            <div className="animate-in fade-in-0 slide-in-from-bottom-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 ring-1 ring-red-200">
              {error || "Unable to submit your enquiry right now."}
            </div>
          ) : status === "sent" ? (
            <div className="animate-in fade-in-0 slide-in-from-bottom-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
              Thanks! We&apos;ll get back to you within 24 hours.
            </div>
          ) : (
            <div className="text-xs font-semibold text-slate-400">
              By submitting, you agree we may contact you about your enquiry.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
