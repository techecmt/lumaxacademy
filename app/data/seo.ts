export const SITE = {
  name: "Lumax Academy",
  legalName: "Lumax Academy Pte Ltd",
  url: "https://www.lumaxacademy.com.sg",
  phone: "+65 8221 6423",
  phoneIntl: "+6582216423",
  email: "info@lumaxacademy.com.sg",
  logo: "/lumax_logo.jpg",
  address: {
    street: "7500A Beach Road, #01-308 The Plaza",
    locality: "Singapore",
    postalCode: "199591",
    countryCode: "SG",
  },
  geo: {
    latitude: 1.3005,
    longitude: 103.863,
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=7500A%20Beach%20Rd%20%2301-308%20THE%20PLAZA%20Singapore%20199591",
  socials: [
    "https://www.facebook.com/profile.php?id=61589531251092",
    "https://www.instagram.com/lumax.academy/",
    "https://www.tiktok.com/@lumax.academy4",
    "https://www.youtube.com/@LumaxAcademy",
  ],
};

export type OpeningHoursDay = {
  day: string;
  label: string;
  opens?: string;
  closes?: string;
};

export const openingHours: OpeningHoursDay[] = [
  { day: "Monday", label: "9:30 am – 6:30 pm", opens: "09:30", closes: "18:30" },
  { day: "Tuesday", label: "9:30 am – 6:30 pm", opens: "09:30", closes: "18:30" },
  { day: "Wednesday", label: "9:30 am – 6:30 pm", opens: "09:30", closes: "18:30" },
  { day: "Thursday", label: "Closed" },
  { day: "Friday", label: "1:00 pm – 6:30 pm", opens: "13:00", closes: "18:30" },
  { day: "Saturday", label: "9:30 am – 6:30 pm", opens: "09:30", closes: "18:30" },
  { day: "Sunday", label: "9:00 am – 7:00 pm", opens: "09:00", closes: "19:00" },
];

export type CourseSeo = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  courseName: string;
  courseDescription: string;
  credentialAwarded: string;
  priceSGD: number;
  teaches: string[];
  occupations: string[];
  /** ISO 8601 duration. Defaults to PT36H when omitted. */
  timeRequired?: string;
  /** Defaults to ["Onsite", "Online"] when omitted. */
  courseMode?: string[];
};

export const courseSeoBySlug: Record<string, CourseSeo> = {
  "advanced-certificate-in-nursing-aide": {
    slug: "advanced-certificate-in-nursing-aide",
    metaTitle: "Nursing Aide Course in Singapore (Advanced Certificate)",
    metaDescription:
      "36-hour Advanced Certificate in Nursing Aide at Lumax Academy, Beach Road Singapore — near Nicoll Highway & Bugis MRT. First aid & CPR/AED, wound care support and physiotherapy support skills. Weekend classes. Enquire now.",
    keywords: [
      "nursing aide course Singapore",
      "healthcare assistant course Singapore",
      "patient care assistant training Singapore",
      "first aid CPR course Singapore",
      "wound care course Singapore",
      "nursing aide certificate Beach Road",
    ],
    courseName: "Advanced Certificate in Nursing Aide",
    courseDescription:
      "A 36-hour part-time programme in Singapore combining classroom learning with hands-on practical training in first aid & CPR/AED, wound care support, and physiotherapy support skills — preparing students for healthcare support roles in hospitals, nursing homes, rehabilitation centres, and home care settings.",
    credentialAwarded: "Advanced Certificate in Nursing Aide",
    priceSGD: 600,
    teaches: [
      "First aid and emergency response",
      "CPR and AED skills",
      "Wound care support and management",
      "Physiotherapy support skills",
      "Infection prevention and control",
      "Safe patient handling and mobility",
    ],
    occupations: [
      "Nursing Aide",
      "Healthcare Assistant",
      "Patient Care Assistant",
      "Home Care Aide",
    ],
  },
  "advanced-certificate-in-professional-caregiving": {
    slug: "advanced-certificate-in-professional-caregiving",
    metaTitle: "Caregiver Course in Singapore — Elderly, Autism & Child Care",
    metaDescription:
      "36-hour Advanced Certificate in Professional Caregiving at Lumax Academy, Beach Road Singapore — near Nicoll Highway & Bugis MRT. Hands-on elderly care, autism care and child care training. Weekend classes. Enquire now.",
    keywords: [
      "caregiver course Singapore",
      "caregiver training Singapore",
      "elderly care course Singapore",
      "autism caregiving course Singapore",
      "childcare course Singapore",
      "caregiver training for domestic helpers Singapore",
    ],
    courseName:
      "Advanced Certificate in Professional Caregiving (Elderly, Autism & Child Care)",
    courseDescription:
      "A 36-hour part-time caregiving programme in Singapore covering three high-demand specialisations — elderly care, autism care, and child care — with hands-on, person-centred training for home, community, and institutional care settings.",
    credentialAwarded: "Advanced Certificate in Professional Caregiving",
    priceSGD: 600,
    teaches: [
      "Elderly caregiving",
      "Autism care support",
      "Child care",
      "Person-centred care",
      "Daily living assistance",
    ],
    occupations: [
      "Professional Caregiver",
      "Elderly Care Assistant",
      "Special Needs Support Aide",
      "Childcare Support Assistant",
    ],
  },
  "hospital-healthcare-administration": {
    slug: "hospital-healthcare-administration",
    metaTitle: "Healthcare Administration Course in Singapore",
    metaDescription:
      "36-hour Advanced Certificate in Hospital & Healthcare Administration at Lumax Academy, Beach Road Singapore — near Nicoll Highway & Bugis MRT. Patient administration, medical records, healthcare IT and service excellence. Enquire now.",
    keywords: [
      "healthcare administration course Singapore",
      "hospital administration course Singapore",
      "medical records course Singapore",
      "patient service associate course Singapore",
      "clinic administration training Singapore",
    ],
    courseName: "Advanced Certificate in Hospital & Healthcare Administration",
    courseDescription:
      "A 36-hour, industry-focused programme in Singapore building practical skills in healthcare operations, patient administration, medical records, healthcare IT systems, and customer service excellence for administrative roles in hospitals, clinics, and healthcare organisations.",
    credentialAwarded: "Advanced Certificate in Hospital & Healthcare Administration",
    priceSGD: 1200,
    teaches: [
      "Healthcare operations",
      "Patient administration",
      "Medical records management",
      "Healthcare IT systems",
      "Customer service excellence",
    ],
    occupations: [
      "Hospital Administrative Assistant",
      "Patient Service Coordinator",
      "Clinic Front Office Executive",
      "Healthcare Operations Staff",
    ],
  },
  "barista-arts": {
    slug: "barista-arts",
    metaTitle: "Barista Course in Singapore (Certificate in Barista Arts)",
    metaDescription:
      "36-hour Certificate in Barista Arts at Lumax Academy, Beach Road Singapore — near Nicoll Highway & Bugis MRT. Espresso extraction, milk texturing, latte art and café service, hands-on. Weekend classes. Enquire now.",
    keywords: [
      "barista course Singapore",
      "barista training Singapore",
      "coffee making class Singapore",
      "latte art class Singapore",
      "barista certificate Singapore",
      "F&B course Singapore",
    ],
    courseName: "Certificate in Barista Arts",
    courseDescription:
      "A 36-hour part-time barista training programme in Singapore covering espresso extraction, milk texturing, latte art, and café service — preparing students for barista and café roles in coffee chains, hotels, and specialty coffee establishments.",
    credentialAwarded: "Certificate in Barista Arts",
    priceSGD: 600,
    teaches: [
      "Espresso extraction",
      "Milk texturing",
      "Latte art",
      "Café service and workflow",
      "Coffee fundamentals",
    ],
    occupations: ["Barista", "Café Service Crew", "Coffee Specialist"],
  },
  "advanced-certificate-in-air-conditioning-installation-maintenance": {
    slug: "advanced-certificate-in-air-conditioning-installation-maintenance",
    metaTitle: "Aircon Course in Singapore — HVAC Installation & Servicing",
    metaDescription:
      "36-hour, 3-month Advanced Certificate in Air-Conditioning Installation & Maintenance (Residential & Commercial) at Lumax Academy, Beach Road Singapore — near Nicoll Highway & Bugis MRT. Hands-on aircon installation, servicing and HVAC troubleshooting. Weekend classes. Enquire now.",
    keywords: [
      "aircon course Singapore",
      "aircon servicing course Singapore",
      "HVAC course Singapore",
      "air-conditioning installation course Singapore",
      "aircon technician training Singapore",
      "HVAC technician course Beach Road",
    ],
    courseName:
      "Advanced Certificate in Air-Conditioning Installation & Maintenance (Residential & Commercial)",
    courseDescription:
      "A 36-hour, 3-month part-time HVAC programme in Singapore combining classroom theory with extensive hands-on practical training in air-conditioning installation, commissioning, preventive maintenance, and fault troubleshooting — preparing learners for technician roles in the HVAC, facilities management, and building services sectors.",
    credentialAwarded:
      "Advanced Certificate in Air-Conditioning Installation & Maintenance (Residential & Commercial)",
    priceSGD: 600,
    timeRequired: "PT36H",
    courseMode: ["Onsite"],
    teaches: [
      "Refrigeration and air-conditioning principles",
      "Split-unit installation and commissioning",
      "Preventive maintenance and servicing",
      "Electrical and mechanical fault diagnosis",
      "Commercial HVAC systems (FCU, AHU, VRF)",
      "Workplace Safety and Health (WSH) practices",
    ],
    occupations: [
      "Air-Conditioning Installation Technician",
      "HVAC Service Technician",
      "Building Maintenance Technician",
      "Facilities Maintenance Technician",
      "M&E Maintenance Technician",
    ],
  },
};

export function absoluteUrl(path: string) {
  return `${SITE.url}${path === "/" ? "" : path}`;
}

const organizationId = `${SITE.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": organizationId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.logo),
    telephone: SITE.phoneIntl,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapUrl,
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    openingHoursSpecification: openingHours
      .filter((day) => day.opens && day.closes)
      .map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.day,
        opens: day.opens,
        closes: day.closes,
      })),
    sameAs: SITE.socials,
  };
}

export function courseJsonLd(seo: CourseSeo) {
  const timeRequired = seo.timeRequired ?? "PT36H";
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(`/courses/${seo.slug}`)}#course`,
    name: seo.courseName,
    description: seo.courseDescription,
    url: absoluteUrl(`/courses/${seo.slug}`),
    provider: { "@id": organizationId },
    educationalCredentialAwarded: seo.credentialAwarded,
    teaches: seo.teaches,
    availableLanguage: "en",
    timeRequired,
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: seo.priceSGD,
      priceCurrency: "SGD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/courses/${seo.slug}`),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: seo.courseMode ?? ["Onsite", "Online"],
      courseWorkload: timeRequired,
      location: {
        "@type": "Place",
        name: `${SITE.name} — The Plaza, Beach Road`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.countryCode,
        },
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  category: string;
  readingTime: string;
};

// Newest first — controls the /blog listing order.
export const blogPosts: BlogPostSummary[] = [
  {
    slug: "barista-interview-questions-singapore",
    title: "50 Barista Interview Questions and Answers (Singapore Guide)",
    excerpt:
      "50 common barista interview questions with why each is asked, a sample answer, and a tip — covering coffee knowledge, customer service, situational scenarios, and Singapore café-specific questions.",
    image:
      "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Barista at an espresso machine in a Singapore café during a job trial",
    datePublished: "2026-07-13",
    category: "Barista Careers",
    readingTime: "18 min read",
  },
  {
    slug: "how-to-become-a-barista-in-singapore",
    title: "How to Become a Barista in Singapore: Skills, Training & Careers",
    excerpt:
      "A complete guide to becoming a barista in Singapore — what baristas do, the skills you need, how a barista course works, and the career paths open to you in Singapore's café scene.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=80",
    imageAlt:
      "Barista preparing espresso on a café coffee machine in Singapore",
    datePublished: "2026-07-12",
    category: "Barista Careers",
    readingTime: "8 min read",
  },
];

export function articleJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-SG",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
  };
}
