import CourseDescriptionCard from "@/components/course-description/CourseDescriptionCard";
import PageDescription from "@/shareable-components/PageDescription";
import Video from "@/shareable-components/Video";

interface lesson {
  title: string;
  duration: string;
}

export interface courseDescriptionsType {
  readonly id: number;
  sno: string;
  title: string;
  lessons: lesson[];
}

const HOME_CONTENT = {
  TITLE: "UI/UX Design Course",
  DESCRIPTION:
    "Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum",
};

const courseDescriptions: courseDescriptionsType[] = [
  {
    id: 1,
    sno: "01",
    title: "Flexible Learning Schedule",
    lessons: [
      {
        title: "Understanding UI/UX Design Principles",
        duration: "45 Minutes",
      },
      {
        title: "Understanding UI/UX Design Principles",
        duration: "1 Hour",
      },
      {
        title: "The Role of UI/UX Design in Product Development",
        duration: "45 Minutes",
      },
    ],
  },
  {
    id: 1,
    sno: "02",
    title: "User Research and Analysis",
    lessons: [
      {
        title: "Understanding UI/UX Design Principles",
        duration: "45 Minutes",
      },
      {
        title: "Understanding UI/UX Design Principles",
        duration: "1 Hour",
      },
      {
        title: "The Role of UI/UX Design in Product Development",
        duration: "45 Minutes",
      },
    ],
  },
];

const page = () => {
  return (
    <>
      <PageDescription
        title={HOME_CONTENT.TITLE}
        description={HOME_CONTENT.DESCRIPTION}
      />

      <Video src={"/assets/videos/ui-ux.mp4"} />

      <div className="wrapper my-8 md:my-20 2xl:my-24 grid sm:grid-cols-2 gap-8">
        {courseDescriptions?.map((course) => (
          <CourseDescriptionCard {...course} />
        ))}
      </div>
    </>
  );
};

export default page;
