import { GoArrowUpRight as ArrowIcon } from "react-icons/go";

import { benefitsType } from "."

interface BenefitCardPropType extends benefitsType{

}

const BenefitCard = ({sno,title,description}:BenefitCardPropType) => {
  return (
    <div className="bg-white rounded-md px-8 md:px-10 2xl:px-12 py-10">
        <h1 className="text-[#262626] text-[3rem] lg:text-[4rem] 2xl:text-[5rem] text-right font-bold leading-[4rem]">{sno}</h1>
        <h3 className="text-[#333333] text-lg md:text-xl font-semibold mt-8 md:mt-10: 2xl:mt-12">{title}</h3>
        <p className="text-[#4C4C4D] text-sm md:text-base mb-8 md:mb-10: 2xl:mb-12">{description}</p>
        <div className="p-4 border-2 border-[#F1F1F3] bg-[#FCFCFD] rounded-md w-fit ml-auto">
            <ArrowIcon className="text-[#FF9500] text-2xl font-bold"/>
        </div>
    </div>
  )
}

export default BenefitCard
