import Image from "next/image";
import { LuBedSingle, LuBath, LuPencilRuler } from "react-icons/lu";

interface Props {
  propertyImage: string;
  price: number;
  title: string;
  address: string;
  rooms: number;
  bathrooms: number;
  size: string;
  cardSize: string;
  border: boolean;
}

const PropertyCard = ({
  propertyImage,
  price,
  title,
  address,
  rooms,
  bathrooms,
  size,
  cardSize,
  border,
}: Props) => {
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
      className={`rounded-lg ${resizeWidth(cardSize)} ${
        border ? "border-2 border-lightPurple" : ""
      }`}
    >
      <Image
        unoptimized
        src={propertyImage}
        width={350}
        height={300}
        alt="property image"
        className={border ? "" : "rounded-t-lg"}
      />
      <div className="p-6 space-y-3 bg-white border-b-2 border-gray-100 rounded-b-lg border-x-2">
        <div className="flex items-center space-x-1">
          <p className={`${resizeFont(cardSize)} font-bold text-lightPurple`}>
            ${price}
          </p>
          <p className="text-sm text-gray-500">/ month</p>
        </div>
        <p className={`${resizeFont(cardSize)} font-bold text-darkBlue`}>
          {title}
        </p>
        <p className={`text-gray-500 ${resizeAddressText(cardSize)}`}>
          {address}
        </p>
        <div className="border-b-2 border-gray-200"></div>
        <div
          className={`flex items-center justify-between ${
            cardSize === "md" ? "mr-20" : ""
          }`}
        >
          <div className="flex items-center gap-1">
            <LuBedSingle
              className="text-lightPurple"
              size={resizeIcons(cardSize)}
            />
            <p className="text-xs text-gray-500">{rooms}</p>
          </div>
          <div className="flex items-center gap-1">
            <LuBath className="text-lightPurple" size={resizeIcons(cardSize)} />
            <p className="text-xs text-gray-500">{bathrooms}</p>
          </div>
          <div className="flex items-center gap-1">
            <LuPencilRuler
              className="text-lightPurple"
              size={resizeIcons(cardSize)}
            />
            <p className="text-xs text-gray-500">{size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
