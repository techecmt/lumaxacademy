"use client";

import dynamic from "next/dynamic";

import LazyMount from "./LazyMount";

const DomeGallery = dynamic(() => import("./DomeGallery/DomeGallery"), {
  ssr: false,
});

const TILE_COUNT = 55;

/**
 * Graduation photo wall, built on React Bits' DomeGallery: a 3D dome of our
 * graduation photos that visitors drag to spin and tap to enlarge.
 *
 * The tiles are ~1.3 MB in total, so the gallery is both code-split and
 * deferred until it scrolls into view — nothing here costs anything on the
 * initial page load.
 */
const PHOTOS = Array.from({ length: TILE_COUNT }, (_, index) => ({
  src: `/graduation/dome/grad-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Lumax Academy graduates in caps and gowns at the Beach Road campus, photo ${
    index + 1
  } of ${TILE_COUNT}`,
}));

export default function GraduationGallery() {
  return (
    <section
      id="graduation"
      className="relative overflow-hidden bg-[#0f1b2d] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
            CELEBRATING OUR GRADUATES
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every Achievement Deserves to Be Celebrated.
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              A proud moment, a new milestone, and the beginning of exciting
              opportunities. Take a look back at the special moments from our
              graduation ceremony at The Plaza, Beach Road, as we celebrate the
              dedication, hard work, and achievements of our graduates.
            </p>
            <p>
              From Nursing Aide and Professional Caregiving to Healthcare
              Administration and Barista Arts, every graduate has a unique
              journey worth celebrating.
            </p>
            <p className="font-semibold text-white">
              Your journey starts here. Your success is our inspiration.
            </p>
          </div>
        </div>
      </div>

      <LazyMount
        className="relative mt-10 h-[460px] w-full sm:h-[560px] lg:h-[680px]"
        rootMargin="300px"
        placeholder={
          <div className="h-full w-full animate-pulse bg-white/5" />
        }
      >
        <DomeGallery
          images={PHOTOS}
          grayscale={false}
          overlayBlurColor="#0f1b2d"
          imageBorderRadius="18px"
          openedImageBorderRadius="18px"
          openedImageWidth="min(78vw, 420px)"
          openedImageHeight="min(78vw, 420px)"
          minRadius={460}
          fit={0.62}
          dragSensitivity={22}
        />
      </LazyMount>
    </section>
  );
}
