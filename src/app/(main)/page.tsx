import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import Video from "@/components/Video";
import Benefits from "@/components/home/Benefits";
import Courses from "@/components/home/Courses";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <Video src={"/assets/videos/home_1.mp4"} />
      <Benefits />
      <Courses />
    </>
  );
};

export default HomePage;
