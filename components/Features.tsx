import Image from "next/image";
import featureImg from "@/public/features-image.png";
import featuresIcon1 from "@/public/features-icon-1.png";
import featuresIcon2 from "@/public/features-icon-2.png";
import featuresIcon3 from "@/public/features-icon-3.png";
import featuresIcon4 from "@/public/features-icon-4.png";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="container mx-auto mt-12 mb-8 lg:mt-24">
      <div className="flex flex-col px-8 md:flex-row lg:gap-12 lg:ml-16">
        <div className="border-2 rounded-lg bg-lightGray border-lighterPurple lg:w-1/3">
          <div className="p-8 space-y-6">
            <h2 className="text-4xl font-bold text-blueBlack">
              The new way to find your new home
            </h2>
            <p className="pr-8 font-semibold text-blueBlack">
              Find your dream place to live in with more than 10k+ properties
              listed.
            </p>
            <button className="px-4 py-2 text-white border-2 rounded-lg bg-blueBlack border-blueBlack hover:bg-white hover:text-blueBlack">
              Browse Properties
            </button>
          </div>
          <div className="overflow-hidden">
            <Image src={featureImg} alt="" className="ml-8" />
          </div>
        </div>
        <div className="mt-14 md:mt-0 md:ml-6 lg:flex lg:gap-24">
          <div className="lg:w-1/3">
            <Feature
              icon={featuresIcon1}
              title="Property Insurance"
              text="We offer our customer property protection of liability coverage
                and insurance for their better life."
            />
            <Feature
              icon={featuresIcon2}
              title="Best Price"
              text="Not sure what you should be charging for your property? No need
                to worry, let us do the numbers for you."
            />
          </div>
          <div className="lg:w-1/3">
            <Feature
              icon={featuresIcon3}
              title="Lowest Commission"
              text="You no longer have to negotiate commissions and haggle with
                other agents it only cost 2%!"
            />
            <Feature
              icon={featuresIcon4}
              title="Overall Control"
              text="Get a virtual tour, and schedule visits before you rent or buy
                any properties. You get overall control."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
