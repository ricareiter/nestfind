import { LuPlaySquare, LuFile, LuTrendingUp } from "react-icons/lu";

const Stats = () => {
  return (
    <section className="px-8 py-24 mt-12 mb-12 bg-blueBlack">
      <div>
        <div className="flex flex-col pt-4 mx-auto text-center md:w-full lg:w-4/5 md:space-x-12 md:text-left md:flex-row lg:justify-between w-80">
          <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl md:w-1/2">
            We make it easy for{" "}
            <span className="text-lightPurple">tenants</span> and{" "}
            <span className="text-lightPurple">landlords.</span>
          </h2>
          <p className="text-lighterPurple md:w-1/2 lg:text-lg">
            Whether it's selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you'll
            save a bunch of money and time with our services.
          </p>
        </div>
        <div className="flex flex-col mt-12 mb-8 space-y-6 md:mb-16 md:space-y-0 md:space-x-6 md:flex-row xl:px-48">
          <div className="flex flex-col p-8 bg-white rounded-lg bg-opacity-20">
            <LuPlaySquare className="p-3 mb-6 text-white rounded-full w-14 h-14 bg-blueBlack" />
            <h3 className="mb-4 text-2xl font-bold text-white">
              Virtual home tour
            </h3>
            <p className="text-lighterPurple">
              You can communicate directly with landlords and we provide you
              with virtual tour before you buy or rent the property.
            </p>
          </div>
          <div className="flex flex-col p-8 bg-white rounded-lg">
            <LuTrendingUp className="p-3 mb-6 rounded-full text-lightPurple w-14 h-14 bg-lighterPurple" />
            <h3 className="mb-4 text-2xl font-bold text-black">
              Find the best deal
            </h3>
            <p className="text-darkBlue">
              Browse thousands of properties, save your favorites and set up
              search alerts so you don't miss the best home deal!
            </p>
          </div>
          <div className="flex flex-col p-8 rounded-lg bg-lightPurple">
            <LuFile className="p-3 mb-6 bg-white rounded-full text-lightPurple w-14 h-14" />
            <h3 className="mb-4 text-2xl font-bold text-white">
              Get ready to apply
            </h3>
            <p className="text-lighterPurple">
              Find your dream house? You just need to do a little to no effort
              and you can start move in to your new dream home!
            </p>
          </div>
        </div>
        <div className="flex flex-col border-t border-gray-600 md:space-x-8 md:justify-around lg:px-48 md:flex-row md:items-center">
          <div className="flex flex-col items-center mt-12 text-center">
            <h3 className="text-4xl font-bold text-white">7.4%</h3>
            <p className="mt-4 mb-14 md:mb-0 text-lighterPurple">
              Property Return Rate
            </p>
            <div className="w-20 text-white border-b-2 md:hidden"></div>
          </div>
          <div className="hidden h-20 mt-12 border-r-2 md:block"></div>
          <div className="flex flex-col items-center mt-12 text-center">
            <h3 className="text-4xl font-bold text-white">3,856</h3>
            <p className="mt-4 mb-14 md:mb-0 text-lighterPurple">
              Property in Sell & Rent
            </p>
            <div className="w-20 text-white border-b-2 md:hidden"></div>
          </div>
          <div className="hidden h-20 mt-12 border-r-2 md:block"></div>
          <div className="flex flex-col items-center mt-12 text-center">
            <h3 className="text-4xl font-bold text-white">2,540</h3>
            <p className="mt-4 text-lighterPurple">
              Daily Completed Transactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
