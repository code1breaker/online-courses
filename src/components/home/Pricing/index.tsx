"use client";
import Price from "@/shareable-components/Price";
import SectionDescription from "@/shareable-components/SectionDescription";
import Button from "@/shareable-components/Button";
import { useState } from "react";

const PRICING_TEXT = {
  TITLE: "Our Pricing",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  const handleTabChange = (e) => {
    setActiveTab(e.target.value)
  };
  return (
    <div className="wrapper my-12 md:my-20 2xl:my-24">
      <SectionDescription
        title={PRICING_TEXT.TITLE}
        description={PRICING_TEXT.DESCRIPTION}
      >
        <div className="bg-white p-3 rounded-md w-fit max-sm:mx-auto">
          <Button variant={activeTab=="Monthly" ? "primary": "tertiary"} onClick={handleTabChange} value="Monthly">
            Monthly
          </Button>
          <Button variant={activeTab=="Yearly" ? "primary": "tertiary"} onClick={handleTabChange} value="Yearly">
            Yearly
          </Button>
        </div>{" "}
      </SectionDescription>

      <div className="my-10">
        <Price activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Pricing;
