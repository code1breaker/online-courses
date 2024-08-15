interface PageDescPropType{
  title:string,
  description:string,
}
const PageDescription = ({title,description}:PageDescPropType) => {
  return (
    <>
        <div className='my-8 md:my-20 2xl:my-24 mx-0 lg:mx-20 xl:mx-32 grid md:grid-cols-2 md:gap-8 items-center'>
        <h1 className='mb-4 text-3xl md:text-4xl 2xl:text-5xl text-[#262626] font-semibold'>{title}</h1>
        <p className='text-sm md:text-base 2xl:text-lg text-[#59595A]'>{description}</p>
        </div>
        <hr />
    </>
  )
}

export default PageDescription
