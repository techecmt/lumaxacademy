"use client";

import { preload } from "react-dom";

import TiltedCard from "./TiltedCard/TiltedCard";

const PHOTO = "/graduation/graduates-campus-steps.webp";
const PHOTO_ALT =
  "Lumax Academy graduates in black and blue gowns and mortarboards, gathered on the steps of the Beach Road campus";

/**
 * Hero image: a single graduation photo in React Bits' TiltedCard, which leans
 * toward the cursor on hover. Nothing moves on its own.
 *
 * The height is a CSS clamp rather than a measured value, so the card is the
 * right size on the first paint and the hero never shifts. The card is also the
 * largest thing above the fold, so its photo is preloaded.
 */
export default function GraduationShowcase() {
  preload(PHOTO, { as: "image", fetchPriority: "high" });

  return (
    <TiltedCard
      imageSrc={PHOTO}
      altText={PHOTO_ALT}
      containerWidth="100%"
      imageWidth="100%"
      containerHeight="clamp(420px, 52vw, 640px)"
      imageHeight="clamp(420px, 52vw, 640px)"
      radius={24}
      rotateAmplitude={9}
      scaleOnHover={1.03}
      glare={0.28}
      shadow={0.35}
      // No caption bubble, no idle drift, and no device-orientation tilt: the
      // gyroscope path asks iOS for motion permission on first touch, which is
      // not something a homepage should prompt for.
      showTooltip={false}
      floating={false}
      gyroscope={false}
    />
  );
}
