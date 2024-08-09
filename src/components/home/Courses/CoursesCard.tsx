import Image from "next/image";
import { coursesType } from ".";

interface CourseCardPropType extends coursesType {}
const CoursesCard = ({
  title,
  description,
  img,
  instructorName,
  level,
  duration,
}: CourseCardPropType) => {
  return (
    <div className="bg-white rounded-md p-8 lg:p-10">
      <div className="w-full h-[12rem] sm:h-[12rem] xl:h-[17rem] relative rounded-md">
        <Image src={img} alt="course" fill className="rounded-md" />
      </div>
      <div className="grid sm:grid-cols-[1fr,auto] max-sm:gap-2 my-4 items-center">
        <div className="flex gap-3">
          <p className="w-fit border-2 border-[F1F1F3] rounded-md px-3 py-2 text-sm lg:text-lg">
            {duration}
          </p>
          <p className="w-fit border-2 border-[F1F1F3] rounded-md px-3 py-2 text-sm lg:text-lg">
            {level}
          </p>
        </div>
        <p className="text-base xl:text-xl font-semibold">By {instructorName}</p>
      </div>

      <h3 className="text-[#333333] text-lg md:text-xl font-semibold my-3 ">
        {title}
      </h3>
      <p className="text-[#333333] text-sm md:text-base mb-8">
        {description}
      </p>

      <button className="bg-[#F7F7F8] rounded-md w-full py-4 font-medium">Get it Now</button>
    </div>
  );
};

export default CoursesCard;
