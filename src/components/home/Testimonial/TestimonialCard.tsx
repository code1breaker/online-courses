import Image from "next/image";
import { testimonialType } from "./";

interface testimonialCardPropType extends testimonialType {}

const TestimonialCard = ({
  name,
  description,
  img,
}: testimonialCardPropType) => {
  return (
    <div className="bg-white rounded-md ">
      <p className="text-[#333333] text-sm md:text-base p-8 lg:p-10">{description}</p>

      <div className="bg-[#FCFCFD] border-t-[1px] border-solid grid grid-cols-[1fr,auto] px-8 py-5 rounded-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 relative">
            <Image src={img} alt="testimonial" fill className="rounded-md" />
          </div>
          <span className="text-base xl:text-lg font-semibold">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
