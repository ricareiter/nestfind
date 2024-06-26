import { LuSearch, LuKeyRound, LuCamera, LuMailOpen } from "react-icons/lu";
import PropertyCard from "./PropertyCard";

async function fetchProperties() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const PickedProperties = async () => {
  const properties = await fetchProperties();

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
            propertyImage={properties[0].image}
            price={properties[0].price}
            title={properties[0].name}
            address={`${properties[0].address.number} ${properties[0].address.street}, ${properties[0].address.city}, ${properties[0].address.state}`}
            rooms={properties[0].beds}
            bathrooms={properties[0].baths}
            size={`${properties[0].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={properties[1].image}
            price={properties[1].price}
            title={properties[1].name}
            address={`${properties[1].address.number} ${properties[1].address.street}, ${properties[1].address.city}, ${properties[1].address.state}`}
            rooms={properties[1].beds}
            bathrooms={properties[1].baths}
            size={`${properties[1].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={properties[2].image}
            price={properties[2].price}
            title={properties[2].name}
            address={`${properties[2].address.number} ${properties[2].address.street}, ${properties[2].address.city}, ${properties[2].address.state}`}
            rooms={properties[2].beds}
            bathrooms={properties[2].baths}
            size={`${properties[2].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={properties[3].image}
            price={properties[3].price}
            title={properties[3].name}
            address={`${properties[3].address.number} ${properties[3].address.street}, ${properties[3].address.city}, ${properties[3].address.state}`}
            rooms={properties[3].beds}
            bathrooms={properties[3].baths}
            size={`${properties[3].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={properties[4].image}
            price={properties[4].price}
            title={properties[4].name}
            address={`${properties[4].address.number} ${properties[4].address.street}, ${properties[4].address.city}, ${properties[4].address.state}`}
            rooms={properties[4].beds}
            bathrooms={properties[4].baths}
            size={`${properties[4].size} m²`}
            cardSize="md"
            border={false}
          />
          <PropertyCard
            propertyImage={properties[5].image}
            price={properties[5].price}
            title={properties[5].name}
            address={`${properties[5].address.number} ${properties[5].address.street}, ${properties[5].address.city}, ${properties[5].address.state}`}
            rooms={properties[5].beds}
            bathrooms={properties[5].baths}
            size={`${properties[5].size} m²`}
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
