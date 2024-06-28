import Image from "next/image";
import zapier from "../../../public/assets/icons/zapier.svg";
import spotify from "../../../public/assets/icons/spotify.svg";
import zoom from "../../../public/assets/icons/zoom.svg";
import amazon from "../../../public/assets/icons/amazon.svg";
import adobe from "../../../public/assets/icons/adobe.svg";
import notion from "../../../public/assets/icons/notion.svg";
import netflix from "../../../public/assets/icons/netflix.svg";

const brands = [zapier, spotify, zoom, amazon, adobe, notion, netflix];

const Brand = ({ key, brand }) => {
  return (
    <div
      key={key}
      className="w-full h-[3rem] md:h-[4rem] border-l-2 grid place-content-center"
    >
      <Image src={brand} width={70} height={40} alt="icon" />
    </div>
  );
};

const BrandSection = () => {
  return (
    <div className="grid mx-0 lg:mx-20 xl:mx-32 items-center">
      <div className="bg-white flex overflow-hidden rounded-md p-2 lg:p-6 2xl:p-7" >
        <div className="loop-scroll flex shrink-0 w-[50rem] md:w-full">
          {brands?.map((brand) => (
            <Brand key={brand+"l"} brand={brand} />
          ))}
        </div>

        <div aria-hidden className="loop-scroll flex shrink-0 w-[50rem]  md:w-full">
          {brands?.map((brand) => (
            <Brand key={brand+"r"} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
