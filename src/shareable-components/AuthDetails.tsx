import { testimonialType } from "@/components/home/Testimonial";
import SectionDescription from "./SectionDescription";
import TestimonialCard from "./TestimonialCard";

interface AuthDetailsType {
  text: {
    TITLE: string;
    DESCRIPTION: string;
  };
  testimonials: testimonialType[];
}

const AuthDetails = ({ text, testimonials }: AuthDetailsType) => {
  return (
    <div className="w-full md:w-[50%]">
        <h1 className="text-[#262626] font-bold text-3xl md:text-4xl">
          {text.TITLE}
        </h1>
        <p className="text-[#59595A] text-sm md:text-base">
          {text.DESCRIPTION}
        </p>

      <div className="my-10">
        {testimonials?.map((testimonial) => (
          <TestimonialCard {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default AuthDetails;
