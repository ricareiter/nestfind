import BrowseProperties from "./BrowseProperties";
import PropertyCard from "./PropertyCard";
import propertyImg1 from "@/public/property-1.png";

const Hero = () => {
  return (
    <section className="flex h-screen mx-auto">
      <div className="container flex flex-col items-center w-full pt-16 mx-auto space-y-10 text-center xl:items-start px-14 bg-lightGray xl:pt-24 xl:text-left xl:w-1/2 xl:p-24 xl:pl-40 2xl:pl-72">
        <h2 className="text-5xl font-bold xl:text-7xl text-darkBlue">
          Buy, rent, or sell your property easily
        </h2>
        <p className="text-xl font-semibold text-darkBlue px-9 xl:pl-0 xl:pr-12">
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
        </div>
        <div className="-mt-12 ml-[460px]">
          <PropertyCard
            propertyImage={propertyImg1}
            price="2,700"
            title="Beverly Springfield"
            address="2821 Lake Sevilla, Palm Harbor, TX"
            rooms={4}
            bathrooms={2}
            size="6x7.5 m²"
            cardSize="sm"
            border={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
