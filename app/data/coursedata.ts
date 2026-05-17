export type Course = {
  id: string;
  title: string;
  image: string;
  targetAudience: string[];
  moduleCount: number;
  hours: string;
  featured: boolean;
};

export const courses: Course[] = [
  {
    id: "physiotherapy-support-skills",
    title: "Advanced Certificate in Physiotherapy Support Skills",
    image:
      "/course_featureimage/Advanced Certificate in Physiotherapy Support Skills.jpg",
    targetAudience: [
      "Caregivers",
      "Therapy assistants",
      "Fitness trainers",
      "Healthcare support staff",
    ],
    moduleCount: 9,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "wound-care-support-management",
    title: "Advanced Certificate in Wound Care Support & Management",
    image:
      "/course_featureimage/Advanced Certificate in Wound Care Support & Management.jpg",
    targetAudience: [
      "Caregivers",
      "Nursing aides",
      "Home care assistants",
      "Domestic helpers",
    ],
    moduleCount: 7,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "professional-nanny-childcare-management",
    title: "Advanced Certificate in Professional Nanny & Childcare Management",
    image:
      "/course_featureimage/Advanced Certificate in Professional Nanny & Childcare Management.jpg",
    targetAudience: [
      "Aspiring nannies",
      "Domestic helpers",
      "Childcare assistants",
    ],
    moduleCount: 6,
    hours: "12-18 Hours",
    featured: true,
  },
  {
    id: "autism-caregiving-behaviour-support",
    title: "Advanced Certificate in Autism Caregiving & Behaviour Support",
    image:
      "/course_featureimage/Advanced Certificate in Autism Caregiving & Behaviour Support.jpg",
    targetAudience: [
      "Caregivers",
      "Nannies",
      "Parents",
      "Domestic helpers",
      "Childcare assistants",
    ],
    moduleCount: 7,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "occupational-therapy-assistant-skills",
    title: "Advanced Certificate in Occupational Therapy Assistant Skills",
    image:
      "/course_featureimage/Advanced Certificate in Occupational Therapy Assistant Skills.jpg",
    targetAudience: [
      "Caregivers",
      "Therapy aides",
      "Domestic helpers",
      "Family caregivers",
    ],
    moduleCount: 8,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "speech-therapy-assistant-skills",
    title: "Advanced Certificate in Speech Therapy Assistant Skills",
    image:
      "/course_featureimage/Advanced Certificate in Speech Therapy Assistant Skills.jpg",
    targetAudience: [
      "Caregivers",
      "Nannies",
      "Therapy aides",
      "Parents",
      "Special needs support staff",
    ],
    moduleCount: 8,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "behavioural-therapy-assistant-skills",
    title: "Advanced Certificate in Behavioural Therapy Assistant Skills",
    image:
      "/course_featureimage/Advanced Certificate in Behavioural Therapy Assistant Skills.jpg",
    targetAudience: [
      "Caregivers",
      "Nannies",
      "Teaching assistants",
      "Parents",
      "Special needs support staff",
    ],
    moduleCount: 8,
    hours: "24-36 Hours",
    featured: true,
  },
  {
    id: "hospital-healthcare-administration",
    title: "Advanced Certificate in Hospital & Healthcare Administration",
    image:
      "/course_featureimage/Advanced Certificate in Hospital & Healthcare Administration.jpg",
    targetAudience: [
      "Hospital administrator assistants",
      "Healthcare operations staff",
      "Patient service coordinators",
      "Clinic front office teams",
    ],
    moduleCount: 3,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "barista-arts",
    title: "Certificate in Barista Arts",
    image: "/course_featureimage/Certficate in Barista.jpg",
    targetAudience: [
      "Aspiring baristas",
      "Cafe service crew",
      "Coffee shop crew",
      "Food and beverage beginners",
    ],
    moduleCount: 9,
    hours: "24 Hours",
    featured: true,
  },
];

export const featuredCourses = courses.filter((course) => course.featured);
export const allCourses = courses;
