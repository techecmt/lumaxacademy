import type { IconType } from "react-icons";
import { FiBriefcase, FiDollarSign, FiHeadphones } from "react-icons/fi";

export type WhatsAppNumber = {
  display: string;
  href: string;
};

export type DepartmentPhone = {
  name?: string;
  numbers: WhatsAppNumber[];
};

export type Department = {
  icon: IconType;
  title: string;
  phones: DepartmentPhone[];
  items: string[];
};

export const departments: Department[] = [
  {
    icon: FiDollarSign,
    title: "Accounts / Finance Department",
    phones: [
      {
        numbers: [{ display: "+65 8110 2783", href: "https://wa.me/6581102783" }],
      },
    ],
    items: [
      "Course fee payments",
      "Outstanding balances",
      "Instalment enquiries",
      "Payment confirmation / receipts",
    ],
  },
  {
    icon: FiHeadphones,
    title: "Sales & Administration Department",
    phones: [
      {
        numbers: [{ display: "+65 8221 6423", href: "https://wa.me/6582216423" }],
      },
    ],
    items: [
      "Course enquiries",
      "Registration & enrolment",
      "Class schedules",
      "Student administrative matters",
      "General course information",
    ],
  },
  {
    icon: FiBriefcase,
    title: "Management",
    phones: [
      {
        name: "Mr. Mustafa",
        numbers: [
          { display: "+65 8972 7585", href: "https://wa.me/6589727585" },
          { display: "+65 8220 0095", href: "https://wa.me/6582200095" },
        ],
      },
    ],
    items: [
      "Feedback or concerns",
      "Matters requiring management attention",
      "Issues that could not be resolved through the respective department",
    ],
  },
];
