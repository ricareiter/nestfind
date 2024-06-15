import { LuSearch, LuKeyRound, LuCamera, LuMailOpen } from "react-icons/lu";
import PropertyCard from "./PropertyCard";
import propertyImg1 from "@/public/property-1.png";
import propertyImg2 from "@/public/property-2.png";
import propertyImg3 from "@/public/property-3.png";
import propertyImg4 from "@/public/property-4.png";
import propertyImg5 from "@/public/property-5.png";
import propertyImg6 from "@/public/property-6.png";

const PickedProperties = () => {
  return (
    <section className="container mx-auto mt-12 mb-12 md:mt-36">
      <div className="flex flex-col mx-auto xl:w-5/6">
        <div className="px-8 space-y-6 text-center">
          <h2 className="text-4xl font-bold text-darkBlue xl:text-5xl">
            Based on your location
          </h2>
          <p className="text-lg text-darkBlue">
            Some of our picked properties near your location.
          </p>
        </div>
        <div className="flex flex-col self-center px-6 mt-12 md:w-full xl:w-5/6 md:px-10 lg:px-40 xl:px-2 md:flex-row-reverse md:mt-2 md:justify-between md:items-center">
          <div className="relative">
            <input
              type="text"
              className="w-full px-10 py-5 border-2 rounded-lg outline-none bg-lightGray border-lighterPurple placeholder:text-gray-500 pl-14 xl:w-80"
              placeholder="Search..."
            />
            <LuSearch className="absolute w-8 h-8 bottom-4 left-4 text-lightPurple" />
          </div>
          <div className="flex justify-between p-2 mt-12 mb-12 border-2 rounded-lg border-lighterPurple bg-lightGray xl:w-80">
            <div className="flex items-center px-4 py-2 space-x-2 bg-white border rounded-lg border-lighterPurple">
              <LuKeyRound className="text-lg font-bold text-lightPurple" />
              <p className="text-lg font-bold text-lightPurple">Rent</p>
            </div>
            <div className="flex items-center px-4 py-2 space-x-2">
              <LuCamera className="text-lg font-semibold text-gray-500" />
              <p className="text-lg text-gray-500">Buy</p>
            </div>
            <div className="flex items-center px-4 py-2 space-x-2">
              <LuMailOpen className="text-lg font-semibold text-gray-500" />
              <p className="text-lg text-gray-500">Sell</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 mx-auto space-y-12 md:flex-row md:space-y-0 md:flex-wrap md:justify-center md:gap-12">
          <PropertyCard
            propertyImage={propertyImg1}
            price="2,700"
            title="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            rooms={4}
            bathrooms={2}
            size="6x7.5 m²"
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={propertyImg2}
            price="2,095"
            title="Palm Harbor"
            address="2699 Green Valley, Highland Lake, FL"
            rooms={3}
            bathrooms={2}
            size="6x7 m²"
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={propertyImg3}
            price="4,550"
            title="Faulkner Ave"
            address="909 Woodland St, Michigan, IN"
            rooms={4}
            bathrooms={3}
            size="8x10 m²"
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={propertyImg4}
            price="2,400"
            title="St. Crystal"
            address="210 US Highway, Highland Lake, FL"
            rooms={4}
            bathrooms={2}
            size="6x8 m²"
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={propertyImg5}
            price="1,500"
            title="Cove Red"
            address="243 Curlew Road, Palm Harbor, TX"
            rooms={1}
            bathrooms={1}
            size="5x7.5 m²"
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={propertyImg6}
            price="1,600"
            title="Tarpon Bay"
            address="103 Lake Shores, Michigan, IN"
            rooms={3}
            bathrooms={1}
            size="5x7 m²"
            cardSize="md"
            border={false}
          />
        </div>
        <div className="px-8 mx-auto mt-12">
          <button className="px-8 py-4 font-semibold text-white border-2 rounded-lg bg-blueBlack border-blueBlack hover:text-blueBlack hover:bg-white">
            Browse more properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PickedProperties;
