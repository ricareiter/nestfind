import { LuCalendarDays, LuSearch } from "react-icons/lu";

const BrowseProperties = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-8 rounded-lg shadow-lg w-80 md:w-full xl:0 xl:max-w-4xl xl:block xl:items-start xl:absolute xl:-bottom-24 2xl:bottom-12 left-46">
      <div className="flex items-center justify-between w-full bg-white rounded-t-lg md:px-0 xl:justify-center xl:w-72">
        <div className="px-6 py-3 bg-white border-b-2 border-lightPurple">
          <p className="text-xl font-bold text-lightPurple">Rent</p>
        </div>
        <div className="px-6 py-3 bg-white">
          <p className="text-xl font-semibold">Buy</p>
        </div>
        <div className="px-6 py-3 bg-white">
          <p className="text-xl font-semibold">Sell</p>
        </div>
      </div>
      <div className="mt-1">
        <div className="items-center justify-between hidden p-6 bg-white rounded-lg xl:flex">
          <div>
            <p className="text-gray-600">Location</p>
            <p className="text-xl font-bold text-darkBlue">Barcelona, Spain</p>
          </div>
          <div className="h-10 border-gray-200 border-e"></div>
          <div>
            <p className="text-gray-600">When</p>
            <div className="flex items-center space-x-4">
              <p className="text-xl font-bold text-darkBlue">
                Select Move-in Date
              </p>
              <LuCalendarDays className="text-gray-500" />
            </div>
          </div>
          <div className="h-10 border-gray-200 border-e"></div>
          <div>
            <button className="px-8 py-4 font-bold text-white border-2 rounded-lg bg-lightPurple border-lightPurple hover:text-lightPurple hover:bg-white">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full md:px-0 xl:hidden">
        <input
          type="text"
          placeholder="Search location"
          className="w-full py-8 pl-4 rounded-b-lg outline-none placeholder:text-gray-500"
        />
        <button className="absolute p-4 text-white border-2 rounded-lg bottom-4 right-6 bg-lightPurple border-lightPurple hover:bg-white hover:text-lightPurple">
          <LuSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BrowseProperties;
