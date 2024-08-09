type VideoPropType = {
  src:string
}
const Video = ({src}:VideoPropType) => {
  return (
    <div className="wrapper my-12 md:my-20 2xl:my-24">
        <video className="w-full rounded-lg" controls src={src}></video>
    </div>
  )
}

export default Video
