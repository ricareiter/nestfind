import { LuSearch, LuKeyRound, LuCamera, LuMailOpen } from "react-icons/lu";
import { getLatestProperties } from "@/lib/actions/property.actions";
import PropertyCard from "./PropertyCard";

const PickedProperties = async () => {
  const latestProperties = await getLatestProperties();

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
            propertyImage={latestProperties[0].images[0]}
            price={latestProperties[0].price}
            title={latestProperties[0].name}
            address={`${latestProperties[0].number} ${latestProperties[0].street}, ${latestProperties[0].city}, ${latestProperties[0].state}`}
            rooms={latestProperties[0].beds}
            bathrooms={latestProperties[0].baths}
            size={`${latestProperties[0].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={latestProperties[1].images[0]}
            price={latestProperties[1].price}
            title={latestProperties[1].name}
            address={`${latestProperties[1].number} ${latestProperties[1].street}, ${latestProperties[1].city}, ${latestProperties[1].state}`}
            rooms={latestProperties[1].beds}
            bathrooms={latestProperties[1].baths}
            size={`${latestProperties[1].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={latestProperties[2].images[0]}
            price={latestProperties[2].price}
            title={latestProperties[2].name}
            address={`${latestProperties[2].number} ${latestProperties[2].street}, ${latestProperties[2].city}, ${latestProperties[2].state}`}
            rooms={latestProperties[2].beds}
            bathrooms={latestProperties[2].baths}
            size={`${latestProperties[2].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={latestProperties[3].images[0]}
            price={latestProperties[3].price}
            title={latestProperties[3].name}
            address={`${latestProperties[3].number} ${latestProperties[3].street}, ${latestProperties[3].city}, ${latestProperties[3].state}`}
            rooms={latestProperties[3].beds}
            bathrooms={latestProperties[3].baths}
            size={`${latestProperties[3].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={latestProperties[4].images[0]}
            price={latestProperties[4].price}
            title={latestProperties[4].name}
            address={`${latestProperties[4].number} ${latestProperties[4].street}, ${latestProperties[4].city}, ${latestProperties[4].state}`}
            rooms={latestProperties[4].beds}
            bathrooms={latestProperties[4].baths}
            size={`${latestProperties[4].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={latestProperties[5].images[0]}
            price={latestProperties[5].price}
            title={latestProperties[5].name}
            address={`${latestProperties[5].number} ${latestProperties[5].street}, ${latestProperties[5].city}, ${latestProperties[5].state}`}
            rooms={latestProperties[5].beds}
            bathrooms={latestProperties[5].baths}
            size={`${latestProperties[5].size} m²`}
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
