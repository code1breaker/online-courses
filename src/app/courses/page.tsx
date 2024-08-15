import CourseCard from "@/components/course/CourseCard";
import PageDescription from "@/shareable-components/PageDescription";

const COURSE_CONTENT = {
  TITLE: "Online Courses on Design and Development",
  DESCRIPTION:
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.",
};

const courseCards = [
  {
    title: "Mastering React",
    desc: "Learn React from scratch and build amazing web applications.",
    button: {
      text: "Enroll Now",
      link: "/enroll/react",
    },
    images: ["/assets/images/courses.png", "/assets/images/courses.png", "/assets/images/courses.png"],
    duration: "30 hours",
    level: "Beginner",
    author: "John Doe",
    curriculum: [
      { sno:"01", chapterName: "Introduction to React" },
      { sno:"02", chapterName: "Components and JSX" },
      { sno:"03", chapterName: "State and Props" },
      { sno:"04", chapterName: "Lifecycle Methods" },
      { sno:"05", chapterName: "React Router" },
    ],
  },
  {
    title: "Mastering React",
    desc: "Learn React from scratch and build amazing web applications.",
    button: {
      text: "Enroll Now",
      link: "/enroll/react",
    },
    images: ["/assets/images/courses.png", "/assets/images/courses.png"],
    duration: "30 hours",
    level: "Beginner",
    author: "John Doe",
    curriculum: [
      { sno:"01", chapterName: "Introduction to React" },
      { sno:"02", chapterName: "Components and JSX" },
      { sno:"03", chapterName: "State and Props" },
      { sno:"04", chapterName: "Lifecycle Methods" },
      { sno:"05", chapterName: "React Router" },
    ],
  },
];

const CoursePage = () => {
  return (
    <>
      <PageDescription
        title={COURSE_CONTENT.TITLE}
        description={COURSE_CONTENT.DESCRIPTION}
      />

      <div className="wrapper my-8 md:my-20 2xl:my-24 flex flex-col gap-8">

      {courseCards?.map((courseCard) => (
          <CourseCard {...courseCard} />
        ))}
        </div>
    </>
  );
};

export default CoursePage;
