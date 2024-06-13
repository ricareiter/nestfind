import Image from "next/image";
import propertyImg from "@/public/property-1.png";
import { LuBedSingle, LuBath, LuPencilRuler } from "react-icons/lu";

interface Props {
  size: string;
  border: boolean;
}

const PropertyCard = ({ size, border }: Props) => {
  const resizeWidth = (size: string) => {
    if (size === "sm") {
      return "w-56";
    } else if (size === "md") {
      return "w-80";
    } else if (size === "lg") {
      return "w-96";
    }
  };

  const resizeFont = (size: string) => {
    if (size === "sm") {
      return "text-md";
    } else if (size === "md" || size === "lg") {
      return "text-2xl";
    }
  };

  const resizeAddressText = (size: string) => {
    if (size === "sm") {
      return "text-sm";
    } else if (size === "md" || size === "lg") {
      return "text-md";
    }
  };

  const resizeIcons = (size: string) => {
    if (size === "sm") {
      return 16;
    } else if (size === "md" || size === "lg") {
      return 24;
    }
  };

  return (
    <div
      className={`rounded-lg ${resizeWidth(size)} ${
        border ? "border-2 border-lightPurple" : ""
      }`}
    >
      <Image
        src={propertyImg}
        alt="property image"
        className={border ? "" : "rounded-t-lg"}
      />
      <div className="p-6 space-y-3 bg-white border-b-2 border-gray-100 rounded-b-lg border-x-2">
        <div className="flex items-center space-x-1">
          <p className={`${resizeFont(size)} font-bold text-lightPurple`}>
            $2,700
          </p>
          <p className="text-sm text-gray-500">/ month</p>
        </div>
        <p className={`${resizeFont(size)} font-bold text-darkBlue`}>
          Beverly Springfield
        </p>
        <p className={`text-gray-500 ${resizeAddressText(size)}`}>
          2821 Lake Sevilla, Palm Harbor, TX
        </p>
        <div className="border-b-2 border-gray-200"></div>
        <div
          className={`flex items-center justify-between ${
            size === "md" ? "mr-20" : ""
          }`}
        >
          <div className="flex items-center gap-1">
            <LuBedSingle
              className="text-lightPurple"
              size={resizeIcons(size)}
            />
            <p className="text-xs text-gray-500">4</p>
          </div>
          <div className="flex items-center gap-1">
            <LuBath className="text-lightPurple" size={resizeIcons(size)} />
            <p className="text-xs text-gray-500">2</p>
          </div>
          <div className="flex items-center gap-1">
            <LuPencilRuler
              className="text-lightPurple"
              size={resizeIcons(size)}
            />
            <p className="text-xs text-gray-500">6x7.5 m²</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
