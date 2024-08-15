import { testimonialType } from "@/components/home/Testimonial";
import LoginForm from "@/components/LoginForm";
import AuthDetails from "@/shareable-components/AuthDetails";
import React from "react";

const LOGIN_TEXT = {
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

const LoginPage = () => {
  return (
    <div className="wrapper my-8 md:my-20 2xl:my-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
     <AuthDetails text={LOGIN_TEXT} testimonials={testimonials}/>
     <LoginForm/>
    </div>
  );
};

export default LoginPage;
