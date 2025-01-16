import BrowseProperties from "./BrowseProperties";
import PropertyCard from "./PropertyCard";
import { getLatestProperties } from "@/lib/actions/property.actions";

const Hero = async () => {
  const latestProperties = await getLatestProperties();

  return (
    <section className="flex h-full mx-auto">
      <div className="container flex flex-col items-center w-full px-6 pt-16 pb-8 mx-auto space-y-10 text-center md:px-14 xl:items-start bg-lightGray xl:pt-24 xl:text-left xl:w-1/2 xl:p-24 xl:pl-40 2xl:pl-72">
        <h2 className="text-4xl font-bold sm:text-5xl xl:text-7xl text-darkBlue">
          Buy, rent, or sell your property easily
        </h2>
        <p className="px-1 text-lg font-semibold sm:text-xl text-darkBlue sm:px-9 xl:pl-0 xl:pr-12">
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>
        <div className="flex flex-col-reverse xl:space-y-4">
          <div className="flex justify-between pt-4 mx-12 space-x-14 xl:mx-0 xl:justify-start">
            <div className="w-32 pl-6 text-left border-l-4 border-lighterPurple">
              <h4 className="text-4xl font-bold text-lightPurple">50k+</h4>
              <p className="text-gray-600">renters</p>
            </div>
            <div className="relative w-32 pl-6 text-left border-l-4 border-lighterPurple">
              <h4 className="text-4xl font-bold text-lightPurple">10k+</h4>
              <p className="text-gray-600">properties</p>
            </div>
          </div>
          <BrowseProperties />
        </div>
      </div>
      <div className="hidden w-1/2 xl:block backgroundImage">
        <div className="ml-12 mt-28">
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
        </div>
        <div className="-mt-12 ml-[460px]">
          <PropertyCard
            propertyImage={latestProperties[0].images[0]}
            price={latestProperties[0].price}
            title={latestProperties[0].name}
            address={`${latestProperties[0].number} ${latestProperties[0].street}, ${latestProperties[0].city}, ${latestProperties[0].state}`}
            rooms={latestProperties[0].beds}
            bathrooms={latestProperties[0].baths}
            size={`${latestProperties[0].size} m²`}
            cardSize="sm"
            border={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
