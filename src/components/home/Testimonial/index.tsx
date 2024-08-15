import SectionDescription from '@/shareable-components/SectionDescription'
import TestimonialCard from '../../../shareable-components/TestimonialCard';

export interface testimonialType {
  readonly id: number;
  description: string;
  img: string;
  name: string;
  btn: string;
}

const Testimonial_TEXT = {
    TITLE: "Our Testimonials",
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
    {
      id: 2,
      description:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      btn: "Read Full Story",
      img: "/assets/images/testimonial1.png",
    },
    {
      id: 3,
      description:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      btn: "Read Full Story",
      img: "/assets/images/testimonial1.png",
    },
    {
      id: 4,
      description:
        "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      btn: "Read Full Story",
      img: "/assets/images/testimonial1.png",
    },
   
  ];
  

const Testimonial = () => {
  return (
    <div className="wrapper my-8 md:my-20 2xl:my-24">
    <SectionDescription
      title={Testimonial_TEXT.TITLE}
      description={Testimonial_TEXT.DESCRIPTION}
    />

    <div className="grid md:grid-cols-2 gap-5 my-10">
      {testimonials?.map((testimonial) => (
        <TestimonialCard {...testimonial} />
      ))}
    </div>
  </div>
  )
}

export default Testimonial
