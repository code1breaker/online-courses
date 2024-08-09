"use client"
import Button from "./Button"
type SectionDescriptionPropType = {
    title:string,
    description:string,
    btn:string,

}
const SectionDescription = ({title,description,btn}:SectionDescriptionPropType) => {
  return (
    <div>
      <h1 className="text-[#262626] font-bold text-3xl md:text-4xl 2xl:text-5xl">{title}</h1>
      <div className="grid sm:grid-cols-[1fr,auto] gap-4 sm:gap-[8rem] items-end mt-3">
        <p className="text-[#59595A] text-sm md:text-base 2xl:text-lg">{description}</p>
        <Button variant="secondary" onClick={()=>{}} >{btn}</Button>
      </div>
    </div>
  )
}

export default SectionDescription
