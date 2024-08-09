"use client"
import Button from '@/shareable-components/Button';
import Price from '@/shareable-components/Price';
import SectionDescription from '@/shareable-components/SectionDescription'

const PRICING_TEXT = {
    TITLE: "Our Pricing",
    DESCRIPTION:
      "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
    BTN1: "Monthly",
    BTN2: "Yearly",
  };

const Pricing = () => {
  return (
    <div className="wrapper my-12 md:my-20 2xl:my-24">
    <SectionDescription
      title={PRICING_TEXT.TITLE}
      description={PRICING_TEXT.DESCRIPTION}
    >
      <div className='bg-white p-3 rounded-md'>
        <Button onClick={()=>{}}>{PRICING_TEXT.BTN1}</Button>
        <Button variant="tertiary" onClick={()=>{}}>{PRICING_TEXT.BTN2}</Button>
      </div>
    </SectionDescription>

    <div className="my-10">
      <Price/>
    </div>

  </div>
  )
}

export default Pricing
