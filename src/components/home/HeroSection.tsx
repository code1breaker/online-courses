import Image from "next/image"
import Button from "../Button"

const HeroSection = () => {
  return (
    <div className="mx-0  my-12 md:my-20 2xl:my-24 text-center flex flex-col items-center bg-red-20">
        <h1 className="text-base sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#1A1A1A] bg-white py-3 px-4 rounded-md flex items-center">
          <Image
            width={62}
            height={62}
            src="/assets/icons/lightningIcon.png"
            alt="icon"
            className="w-12 h-12 2xl:w-16 2xl:h-16"
          />
          <span className="text-primary mr-2">Unlock</span> Your Creative Potential
        </h1>
        <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-[#262626] font-medium mt-5 mb-3 w-fit">
          with Online Design and Development Courses.
        </h2>
        <p className="text-sm md:text-text-base 2xl:text-lg w-fit text-[#262626]">
          Learn from Industry Experts and Enhance Your Skills.
        </p>

        <div className="flex gap-4 justify-center mt-12 md:mt-14 ">
          <Button>Explore Courses </Button>
          <Button variant={"secondary"}>View Pricing</Button>
        </div>
      </div>
  )
}

export default HeroSection
