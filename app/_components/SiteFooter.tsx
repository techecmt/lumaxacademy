import Image from "next/image";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiArrowRight, FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiTiktok, SiYoutube } from "react-icons/si";

type FooterProps = {
  className?: string;
};

export default function SiteFooter({ className }: FooterProps) {
  const socials: { label: string; href: string; icon: IconType }[] = [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589531251092", icon: FaFacebookF },
    { label: "Instagram", href: "https://www.instagram.com/lumax.academy/", icon: FaInstagram },
    { label: "TikTok", href: "https://www.tiktok.com/@lumax.academy4", icon: SiTiktok },
    { label: "YouTube", href: "https://www.youtube.com/@LumaxAcademy", icon: SiYoutube },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Student Affairs", href: "/student-affairs" },
    { label: "Courses", href: "/#courses" },
    { label: "Contact", href: "/#contact" },
  ];

  const categories = [
    "Physiotherapy Support",
    "Wound Care Support",
    "Autism Caregiving",
    "Therapy Assistant Skills",
    "Childcare Management",
  ];

  return (
    <footer
      id="contact"
      className={[
        "relative overflow-hidden rounded-t-[28px] bg-[#10143a] text-white",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#faa426]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1.25fr] lg:gap-12">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-white/10 sm:h-24 sm:w-24">
                <Image
                  src="/lumax_logo.jpg"
                  alt="Lumax Academy"
                  width={96}
                  height={192}
                  className="h-full w-full object-contain"
                />
              </span>
                          </a>

            <div className="mt-7 space-y-5">
              {[
                {
                  icon: FiPhone,
                  title: "Call us",
                  text: "+65 8221 6423",
                  href: "tel:+6582216423",
                },
                {
                  icon: FiMail,
                  title: "Need support?",
                  text: "info@lumaxacademy.com.sg",
                  href: "mailto:info@lumaxacademy.com.sg",
                },
                {
                  icon: FiMapPin,
                  title: "Visit us",
                  text: "7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591",
                  href: "https://www.google.com/maps/search/?api=1&query=7500A%20Beach%20Rd%20%2301-308%20THE%20PLAZA%20Singapore%20199591",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-3"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#faa426] text-[#193764] shadow-lg shadow-[#faa426]/20 transition group-hover:scale-105">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-white/55">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-sm font-bold leading-relaxed text-white">
                      {item.text}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide">
              Company Info
            </div>
            <div className="mt-3 h-px w-16 bg-white/30" />
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 hover:text-white"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-[#faa426] transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide">
              Categories
            </div>
            <div className="mt-3 h-px w-16 bg-white/30" />
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {categories.map((x) => (
                <li key={x}>
                  <a
                    href="/#courses"
                    className="group inline-flex items-center gap-2 hover:text-white"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-[#faa426] transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-3xl bg-linear-to-br from-[#faa426] to-[#d98a16] p-7 text-[#193764] shadow-[0_28px_80px_-55px_rgba(250,164,38,0.8)]">
            <div className="text-xl font-extrabold">Subscribe Our Newsletter</div>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-[#193764]/80">
              Get programme updates, admission news, and learning resources from
              Lumax Academy.
            </p>
            <form className="mt-6 flex rounded-full bg-white/15 p-1.5 ring-1 ring-[#193764]/15 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[#193764] outline-none placeholder:text-[#193764]/60"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-white px-5 text-sm font-bold text-[#193764] shadow-sm transition hover:bg-[#193764] hover:text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            Copyright © {new Date().getFullYear()} Lumax Academy. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white">Follow Us:</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#faa426] hover:text-[#193764]"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#"
        className="absolute bottom-0 right-4 grid h-12 w-12 place-items-center rounded-t-2xl bg-[#faa426] text-[#193764] shadow-lg transition hover:brightness-110 sm:right-8"
        aria-label="Back to top"
      >
        <FiArrowUp className="h-5 w-5" aria-hidden />
      </a>
    </footer>
  );
}

