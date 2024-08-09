import { priceDataType } from ".";
import Button from "../Button";

interface PriceCardPropType extends priceDataType {
  activeTab:string
}
const Pricecard = ({
  id,
  plan,
  monthlyPrice,
  yearlyPrice,
  features,
  activeTab,
}: PriceCardPropType) => {
  return (
    <div className="bg-[#FCFCFD] border-[1px] rounded-md px-5 py-8 sm:px-8 sm:py-12 grid gap-8">
      <p className="bg-[#FFEACC] text-center p-2 border-[1px] border-primary rounded-md">{plan} Plan</p>
      <div className="flex items-end justify-center">
        <p className="text-[#262626] text-[3rem] lg:text-[4rem] 2xl:text-[5rem] font-bold leading-[4rem]">
          ${activeTab == "Monthly" ? monthlyPrice : yearlyPrice}
        </p>
        <span className="font-semibold text-[#4C4C4D]">/{activeTab}</span>
      </div>

      <div className="bg-white rounded-md">
        <div className="p-5 sm:p-8 flex flex-col items-center">
          <p>Available Features</p>

          <div className="">
            {features?.map((feature) => (
              <div className="flex items-center gap-2 my-5 border-[1px] p-2 rounded-md">
                <p
                  className={`flex items-center justify-center rounded-md p-1 w-6 h-6  ${
                    feature?.available == "✓" ? "bg-[#FFEACC]" : "border-[1px]"
                  }`}
                >
                  {feature?.available}
                </p>
                <p>{feature?.feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary text-white p-3 rounded-b-md w-full text-center cursor-pointer ">Get Started</div>
      </div>
    </div>
  );
};

export default Pricecard;
