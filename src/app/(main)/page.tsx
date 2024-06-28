import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import Video from "@/components/Video";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <BrandSection/>
      <Video src={"/assets/videos/home_1.mp4"} />


    </>
  );
};

export default HomePage;
