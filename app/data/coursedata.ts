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
    id: "advanced-certificate-in-nursing-aide",
    title: "Advanced Certificate in Nursing Aide",
    image:
      "/course_featureimage/Advanced Certificate in Nursing Aide.png",
    targetAudience: [
      "healthcare support professionals",
      "Caregivers",
      "Healthcare support staff",
    ],
    moduleCount: 3,
    hours: "36 Hours",
    featured: true,
  },
  {
    id: "advanced-certificate-in-professional-caregiving",
    title: "Advanced Certificate in Professional Caregiving (Elderly, Autism & Child Care)",
    image:
      "/course_featureimage/Advanced Certificate in Professional Caregiving.png",
    targetAudience: [
      "healthcare support professionals",
      "Caregivers",
      "Healthcare support staff",
    ],
    moduleCount: 3,
    hours: "36 Hours",
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
    moduleCount: 3,
    hours: "36 Hours",
    featured: true,
  },
];

export const featuredCourses = courses.filter((course) => course.featured);
export const allCourses = courses;
