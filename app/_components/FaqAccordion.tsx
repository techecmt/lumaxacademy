"use client";

import { useId, useMemo, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
  defaultOpenIndex?: number;
};

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: Props) {
  const baseId = useId();
  const safeItems = useMemo(() => items ?? [], [items]);
  const [open, setOpen] = useState<number | null>(
    safeItems.length ? Math.min(defaultOpenIndex, safeItems.length - 1) : null
  );

  return (
    <div className="space-y-3">
      {safeItems.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-(--border) bg-white"
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen((cur) => (cur === i ? null : i))}
            >
              <span className="text-base font-semibold text-slate-900">
                {item.q}
              </span>
              <span
                className={[
                  "grid h-9 w-9 place-items-center rounded-xl border border-(--border) text-slate-700 transition",
                  isOpen ? "bg-(--surface-2)" : "bg-white",
                ].join(" ")}
                aria-hidden
              >
                {isOpen ? (
                  <FiMinus className="h-4 w-4" aria-hidden />
                ) : (
                  <FiPlus className="h-4 w-4" aria-hidden />
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={isOpen ? "block" : "hidden"}
            >
              <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

