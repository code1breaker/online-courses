import SectionDescription from "../../../shareable-components/SectionDescription";
import CoursesCard from "./CoursesCard";

export interface coursesType {
  readonly id: number;
  title: string;
  description: string;
  img: string;
  instructorName: string;
  level: string;
  duration: string;
}
const COURSES_TEXT = {
  TITLE: "Our Courses",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
  BTN: "View All",
};

const courses: coursesType[] = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    instructorName: "John Smith",
    duration: "4 Weeks",
    level: "Beginner",
    img: "/assets/images/courses.png",
  },
  {
    id: 2,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    instructorName: "John Smith",
    duration: "4 Weeks",
    level: "Beginner",
    img: "/assets/images/courses.png",
  },
  {
    id: 3,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    instructorName: "John Smith",
    duration: "4 Weeks",
    level: "Beginner",
    img: "/assets/images/courses.png",
  },
  {
    id: 4,
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    instructorName: "John Smith",
    duration: "4 Weeks",
    level: "Beginner",
    img: "/assets/images/courses.png",
  },
];

const Courses = () => {
  return (
    <div className="wrapper my-8 md:my-20 2xl:my-24">
      <SectionDescription
        title={COURSES_TEXT.TITLE}
        description={COURSES_TEXT.DESCRIPTION}
        btn={COURSES_TEXT.BTN}
      />

      <div className="grid md:grid-cols-2 gap-5 my-10">
        {courses?.map((course) => (
          <CoursesCard {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
