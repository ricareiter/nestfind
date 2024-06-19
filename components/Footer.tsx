import Link from "next/link";
import {
  LuDoorClosed,
  LuLinkedin,
  LuFacebook,
  LuTwitter,
  LuInstagram,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="mt-4 pt-8 md:px-8 xl:px-18 bg-lightGray">
      <div className="flex flex-col xl:flex-row">
        <div className="flex items-center mr-6 space-x-1 xl:px-0 justify-center xl:mr-0 xl:w-1/4 xl:items-start xl:my-12 xl:pl-28">
          <LuDoorClosed className="text-lightPurple w-9 h-9" />
          <p className="text-2xl font-bold text-darkBlue">NestFind</p>
        </div>
        <div className="flex flex-col mt-12 space-y-10 text-center mb-12 md:flex-row md:flex-wrap md:space-y-0">
          <div className="px-9 space-y-3 md:w-1/3 md:mb-8 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">Sell a Home</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Request an offer
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Reviews
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Stories
              </Link>
            </div>
          </div>
          <div className="px-9 space-y-3 md:w-1/3 md:mb-8 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">Buy a Home</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Buy
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Finance
              </Link>
            </div>
          </div>
          <div className="px-9 space-y-3 md:w-1/3 md:mb-8 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">
              Buy, Rent and Sell
            </p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Buy and sell properties
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Rent home
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Builder trade-up
              </Link>
            </div>
          </div>
          <div className="px-9 space-y-3 md:w-1/3 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">Terms & Privacy</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Trust & Safety
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="px-9 space-y-3 md:w-1/3 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">About</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Company
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                How it Works
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Investors
              </Link>
            </div>
          </div>
          <div className="px-9 space-y-3 md:w-1/3 xl:w-1/4">
            <p className="uppercase font-bold text-darkBlue">Resources</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Guides
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="text-gray-600 text-sm  hover:text-lightPurple"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 mb-8"></div>
      <div className="flex flex-col space-y-6 items-center px-8 pb-8 lg:flex-row lg:space-y-0 lg:justify-between lg:px-12 lg:w-4/5 lg:mx-auto">
        <div>
          <p className="text-gray-500 font-semibold">
            ©2024 NestFind. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-8">
          <LuFacebook className="w-7 h-7 text-gray-400 hover:text-lightPurple hover:cursor-pointer" />
          <LuInstagram className="w-7 h-7 text-gray-400 hover:text-lightPurple hover:cursor-pointer" />
          <LuTwitter className="w-7 h-7 text-gray-400 hover:text-lightPurple hover:cursor-pointer" />
          <LuLinkedin className="w-7 h-7 text-gray-400 hover:text-lightPurple hover:cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
