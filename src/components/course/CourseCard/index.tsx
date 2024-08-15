import Button from "@/shareable-components/Button";
import Image from "next/image";

interface chapterName {
  sno: string;
  chapterName: string;
}
interface CourseCardPropType {
  sno: string;
  title: string;
  desc: string;
  button: {
    text: string;
    link: string;
  };
  images: string[];
  duration: string;
  level: string;
  author: string;
  curriculum: chapterName[];
}

const CourseCard = ({
  title,
  desc,
  button,
  images,
  duration,
  level,
  author,
  curriculum,
}: CourseCardPropType) => {
  return (
    <div className=" p-6 sm:p-8 lg:p-10 bg-white rounded-md">
      <h3 className="text-[#333333] text-lg md:text-xl font-semibold">
        {title}
      </h3>
      <div className="grid sm:grid-cols-[1fr,auto]">
        <p className="text-[#333333] text-sm md:text-base mb-4 md:mb-8">
          {desc}
        </p>
        <Button variant="quatrernary">{button.text}</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        {images?.map((image) => (
          <div className="w-full h-[12rem] sm:h-[15rem] rounded-md relative">
            <Image src={image} alt="course image" fill className="rounded-md" />
          </div>
        ))}
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
        <p className="text-base xl:text-xl font-semibold">By {author}</p>
      </div>

      <div className="border-2 border-[#F1F1F3] rounded-md">
        <p className="border-b-2 p-4 font-bold text-base md:text-xl lg:text-2xl">Curriculum</p>
        <div className="grid md:grid-cols-3 xl:grid-cols-5">
          {curriculum?.map((data) => (
            <div className="border-b-2 md:border-b-0 md:border-r-2 md:[&:nth-child(3)]:border-r-0 xl:[&:nth-child(3)]:border-r-2 last:border-r-0 py-4 mx-4 md:px-6 md:my-6">
              <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">{data?.sno}</p>
              <p className="text-sm md:text-base font-medium">
                {data?.chapterName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
