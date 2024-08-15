import SectionDescription from "../../../shareable-components/SectionDescription";
import BenefitCard from "./BenefitCard";

export interface benefitsType {
  readonly id: number;
  sno: string;
  title: string;
  description: string;
}

const BENEFITS_TEXT = {
  TITLE: "Benefits",
  DESCRIPTION:
    "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
  BTN: "View All",
};

const benefits: benefitsType[] = [
  {
    id: 1,
    sno: "01",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 2,
    sno: "02",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 3,
    sno: "03",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 4,
    sno: "04",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 5,
    sno: "05",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 6,
    sno: "06",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
];

const Benefits = () => {
  return (
    <div className="wrapper my-8 md:my-20 2xl:my-24">
      <SectionDescription
        title={BENEFITS_TEXT.TITLE}
        description={BENEFITS_TEXT.DESCRIPTION}
        btn={BENEFITS_TEXT.BTN}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 2xl:grid-cols-3 gap-5 my-10">
        {benefits?.map((benefit) => (
          <BenefitCard {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
