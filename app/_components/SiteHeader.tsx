"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok, SiYoutube } from "react-icons/si";
import {
  FiChevronRight,
  FiMapPin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Student Affairs", href: "/student-affairs" },
  { label: "Courses", href: "/#courses" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const topBarLeft = useMemo(
    () => [
      { icon: FiPhone, label: "Call: +65 8221 6423", href: "tel:+6582216423" },
      {
        icon: FiMapPin,
        label: "7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591",
      },
      {
        icon: FiMail,
        label: "info@lumaxacademy.com.sg",
        href: "mailto:info@lumaxacademy.com.sg",
      },
    ],
    []
  );

  const socials = useMemo(
    () => [
      { label: "Facebook", href: "#", icon: FaFacebookF },
      { label: "Instagram", href: "#", icon: FaInstagram },
      { label: "TikTok", href: "#", icon: SiTiktok },
      { label: "YouTube", href: "#", icon: SiYoutube },
    ],
    []
  );

  return (
    <header id="home" className="relative z-50">
      <div className="hidden lg:block border-b border-(--border) bg-(--surface-2)">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-6 py-2 text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {topBarLeft.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-slate-700 hover:text-(--brand)"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-700">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {socials.map((s: { label: string; href: string; icon: IconType }) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-black/5 hover:text-(--brand)"
                  aria-label={s.label}
                >
                  <s.icon className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "sticky top-0 border-b border-(--border) bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70",
          scrolled ? "shadow-[0_12px_30px_-20px_rgba(2,6,23,0.35)]" : "",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[76px] items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-white text-slate-800 hover:bg-slate-50 lg:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu className="h-5 w-5" aria-hidden />
              </button>

              <Link href="/" className="flex min-w-0 items-center gap-3">
                <Image
                  src="/lumax_logo.jpg"
                  alt="Lumax Academy"
                  width={140}
                  height={46}
                  priority
                  className="h-10 w-auto rounded-md object-contain"
                />
              </Link>
            </div>

            <nav className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-1">
                {navItems.map((item) =>
                  item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </nav>

            <div className="h-10 w-10 shrink-0 lg:hidden" aria-hidden />
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute left-0 top-0 h-full w-[min(360px,92vw)] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-(--border) px-4 py-4">
              <span className="text-sm font-semibold text-slate-900">
                Navigation
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border)"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div className="p-3">
              {navItems.map((item) =>
                item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                    <FiChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                    <FiChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
