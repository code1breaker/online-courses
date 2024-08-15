import { courseDescriptionsType } from "@/app/course-description/page";

interface CourseDescriptionCardPropType extends courseDescriptionsType {}

const CourseDescriptionCard = ({
  sno,
  title,
  lessons,
}: CourseDescriptionCardPropType) => {
  return (
    <div className="bg-white rounded-md px-8 md:px-10 2xl:px-12 py-8">
      <h1 className="text-[#262626] text-[3rem] lg:text-[4rem] 2xl:text-[5rem] text-right font-bold leading-[4rem]">
        {sno}
      </h1>
      <h3 className="text-[#333333] text-lg md:text-xl font-semibold mt-8 md:mt-10: 2xl:mt-12">
        {title}
      </h3>

      {lessons?.map((lesson, index) => (
        <div className="border-2 rounded-md my-4 p-6 grid lg:grid-cols-[1fr,auto] gap-4">
          <div>
            <p className="text-[#333333] font-semibold text-sm md:text-base ">
              {lesson?.title}
            </p>
            <p className="text-[#59595A] text-sm">Lesson 0{index + 1}</p>
          </div>
          <p className="bg-[#F7F7F8] rounded-md px-4 py-2 w-fit h-fit">{lesson.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDescriptionCard;
