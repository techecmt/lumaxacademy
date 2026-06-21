"use client";

import { FormEvent, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";

type RatingField = "overallRating" | "trainingRating" | "trainerRating";

type FormValues = {
  name: string;
  overallRating: string;
  trainingRating: string;
  trainerRating: string;
  description: string;
};

const initialForm: FormValues = {
  name: "",
  overallRating: "",
  trainingRating: "",
  trainerRating: "",
  description: "",
};

const ratingOptions = [1, 2, 3, 4, 5];

export default function ReviewsCollectionPage() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const averageRating = useMemo(() => {
    const values = [
      Number(form.overallRating),
      Number(form.trainingRating),
      Number(form.trainerRating),
    ].filter((rating) => Number.isFinite(rating) && rating > 0);

    if (!values.length) return null;
    return (values.reduce((sum, rating) => sum + rating, 0) / values.length).toFixed(1);
  }, [form.overallRating, form.trainingRating, form.trainerRating]);

  const setRating = (field: RatingField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!form.overallRating || !form.trainingRating || !form.trainerRating) {
      setErrorMessage("Please choose a star rating for all rating fields.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          overallRating: Number(form.overallRating),
          trainingRating: Number(form.trainingRating),
          trainerRating: Number(form.trainerRating),
          description: form.description,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Unable to submit your review right now.");
        return;
      }

      setForm(initialForm);
      setSuccessMessage("Thank you. Your review has been submitted successfully.");
    } catch {
      setErrorMessage("Network issue while submitting review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_22px_70px_-60px_rgba(2,6,23,0.65)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--brand)">
            Student Feedback
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#193764] sm:text-3xl">
            Review Collection Form
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Please share your learning experience with Lumax Academy. Your feedback helps
            us improve programme quality and support future students.
          </p>

          <form className="mt-8 space-y-5" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="mt-1.5 w-full rounded-xl border border-(--border) px-3.5 py-2.5 text-sm outline-none ring-(--brand)/20 transition focus:ring-2"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="overallRating"
                  className="text-sm font-semibold text-slate-800"
                >
                  Overall Rating
                </label>
                <div
                  id="overallRating"
                  className="mt-2 flex items-center gap-1"
                  role="radiogroup"
                  aria-label="Overall rating"
                >
                  {ratingOptions.map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setRating("overallRating", String(rating))}
                      className="rounded-md p-0.5 outline-none ring-(--brand)/30 transition hover:scale-105 focus:ring-2"
                      aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
                    >
                      <FaStar
                        className={[
                          "h-5 w-5 transition",
                          Number(form.overallRating) >= rating
                            ? "text-amber-400"
                            : "text-slate-300",
                        ].join(" ")}
                        aria-hidden
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600">
                  {form.overallRating ? `${form.overallRating}/5` : "Select rating"}
                </div>
              </div>

              <div>
                <label
                  htmlFor="trainingRating"
                  className="text-sm font-semibold text-slate-800"
                >
                  Training Rating
                </label>
                <div
                  id="trainingRating"
                  className="mt-2 flex items-center gap-1"
                  role="radiogroup"
                  aria-label="Training rating"
                >
                  {ratingOptions.map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setRating("trainingRating", String(rating))}
                      className="rounded-md p-0.5 outline-none ring-(--brand)/30 transition hover:scale-105 focus:ring-2"
                      aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
                    >
                      <FaStar
                        className={[
                          "h-5 w-5 transition",
                          Number(form.trainingRating) >= rating
                            ? "text-amber-400"
                            : "text-slate-300",
                        ].join(" ")}
                        aria-hidden
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600">
                  {form.trainingRating ? `${form.trainingRating}/5` : "Select rating"}
                </div>
              </div>

              <div>
                <label
                  htmlFor="trainerRating"
                  className="text-sm font-semibold text-slate-800"
                >
                  Trainer Rating
                </label>
                <div
                  id="trainerRating"
                  className="mt-2 flex items-center gap-1"
                  role="radiogroup"
                  aria-label="Trainer rating"
                >
                  {ratingOptions.map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setRating("trainerRating", String(rating))}
                      className="rounded-md p-0.5 outline-none ring-(--brand)/30 transition hover:scale-105 focus:ring-2"
                      aria-label={`${rating} star${rating > 1 ? "s" : ""}`}
                    >
                      <FaStar
                        className={[
                          "h-5 w-5 transition",
                          Number(form.trainerRating) >= rating
                            ? "text-amber-400"
                            : "text-slate-300",
                        ].join(" ")}
                        aria-hidden
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600">
                  {form.trainerRating ? `${form.trainerRating}/5` : "Select rating"}
                </div>
              </div>
            </div>

            {averageRating ? (
              <div className="rounded-xl bg-(--surface-2) px-4 py-3 text-sm font-medium text-slate-700">
                Current average from selected ratings:{" "}
                <span className="font-bold text-[#193764]">{averageRating} / 5</span>
              </div>
            ) : null}

            <div>
              <label htmlFor="description" className="text-sm font-semibold text-slate-800">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={form.description}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, description: event.target.value }))
                }
                className="mt-1.5 w-full resize-y rounded-xl border border-(--border) px-3.5 py-2.5 text-sm outline-none ring-(--brand)/20 transition focus:ring-2"
                placeholder="Describe your experience with the training and trainer."
                required
              />
            </div>

            {errorMessage ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            ) : null}

            {successMessage ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-bold text-[#193764] shadow-md shadow-[#faa426]/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
