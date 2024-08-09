import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import Video from "@/shareable-components/Video";
import Benefits from "@/components/home/Benefits";
import Courses from "@/components/home/Courses";
import Pricing from "@/components/home/Pricing";
import Testimonial from "@/components/home/Testimonial";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <Video src={"/assets/videos/home_1.mp4"} />
      <Benefits />
      <Courses />
      <Testimonial />
      <Pricing />
    </>
  );
};

export default HomePage;
