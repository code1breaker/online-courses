import PageDescription from "@/components/PageDescription"
import Video from "@/components/Video"

const HOME_CONTENT = {
  TITLE:"UI/UX Design Course",
  DESCRIPTION:"Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum",
}

const HomePage = () => {
  return (
    <>
      <PageDescription title={HOME_CONTENT.TITLE} description={HOME_CONTENT.DESCRIPTION}/>

      <Video src={"/assets/videos/ui-ux.mp4"} />

    </>
  )
}

export default HomePage
