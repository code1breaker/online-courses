import { testimonialType } from "@/components/home/Testimonial";
import SignupForm from "@/components/SignupForm";
import AuthDetails from "@/shareable-components/AuthDetails";
import React from "react";

const SIGNUP_TEXT = {
  TITLE: "Students Testimonials",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
};

const testimonials: testimonialType[] = [
  {
    id: 1,
    description:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    name: "Sarah L",
    btn: "Read Full Story",
    img: "/assets/images/testimonial1.png",
  },
];

const SignupPage = () => {
  return (
    <div className="wrapper my-8 md:my-20 2xl:my-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
     <AuthDetails text={SIGNUP_TEXT} testimonials={testimonials}/>
     <SignupForm/>
    </div>
  );
};

export default SignupPage;
