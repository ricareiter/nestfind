import BrowseProperties from "./BrowseProperties";
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

const Hero = async () => {
  const properties = await fetchProperties();

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
        </div>
        <div className="-mt-12 ml-[460px]">
          <PropertyCard
            propertyImage={properties[0].image}
            price={properties[0].price}
            title={properties[0].name}
            address={`${properties[0].address.number} ${properties[0].address.street}, ${properties[0].address.city}, ${properties[0].address.state}`}
            rooms={properties[0].beds}
            bathrooms={properties[0].baths}
            size={`${properties[0].size} m²`}
            cardSize="sm"
            border={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
