import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  title: string;
  text: string;
}

const Feature = ({ icon, title, text }: Props) => {
  return (
    <div className="flex mb-12 space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6 lg:max-w-lg">
      <Image src={icon} alt="" className="w-48 h-full md:w-32 lg:w-14" />
      <div className="space-y-3 lg:space-y-5">
        <h3 className="text-2xl font-bold text-darkBlue">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
