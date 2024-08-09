import Pricecard from "./Pricecard";

export interface Feature{
  readonly id:number,
  feature:string,
  available:string
}

export interface priceDataType {
  readonly id:number,
  plan:string,
  monthlyPrice:number,
  yearlyPrice:number,
  features:Feature[],
}

const pricingData:priceDataType[] = [
  {
    id: 1,
    plan: "Free",
    monthlyPrice: 0,
    yearlyPrice:0,
    features: [
      { id:11, feature: "Access to selected free courses.", available: "✓" },
      { id:12, feature: "Limited course materials and resources.", available: "✓" },
      { id:13, feature: "Basic community support.", available: "✓" },
      { id:14, feature: "No certification upon completion.", available: "✓" },
      { id:15, feature: "Ad-supported platform.", available: "✓" },
      { id:16, feature: "Access to exclusive Pro Plan community forums.", available: "✗" },
      { id:17, feature: "Early access to new courses and updates.", available: "✗" },
    ],
  },
  {
    id: 2,
    plan: "Pro",
    monthlyPrice: 79,
    yearlyPrice:799,
    features: [
      { id: 21, feature: "Unlimited access to all courses.", available: "✓" },
      { id: 22, feature: "Unlimited course materials and resources.", available: "✓" },
      { id: 23, feature: "Priority support from instructors.", available: "✓" },
      { id: 24, feature: "Course completion certificates.", available: "✓" },
      { id: 25, feature: "Ad-free experience.", available: "✓" },
      { id: 26, feature: "Access to exclusive Pro Plan community forums.", available: "✓" },
      { id: 27, feature: "Early access to new courses and updates.", available: "✓" },
    ],
  },
];


const Price = ({activeTab}:{activeTab:string}) => {
  return (
    <div className="bg-white rounded-md p-5 sm:p-8 lg:p-10 grid xl:grid-cols-2 gap-5">
      {pricingData?.map((price) => (
        <Pricecard activeTab={activeTab} {...price}/>
      ))}
    </div>
  );
};

export default Price;
