import Image from "next/image";
import logoIcon from "@/public/logo-icon.jpg";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between mx-auto mt-6 mb-8">
      <div className="flex items-center px-8 space-x-1 md:px-0">
        <Image
          src={logoIcon}
          alt="logo"
          width={32}
          height={32}
          className="min-w-8"
        />
        <p className="mt-1 text-xl font-bold text-darkBlue">NestFind</p>
      </div>
      <div className="justify-between hidden w-1/5 mt-1 md:flex lg:w-2/5 xl:ml-32">
        <Link
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Rent
        </Link>
        <Link
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Buy
        </Link>
        <Link
          href="#"
          className="font-semibold text-darkBlue hover:text-lightPurple"
        >
          Sell
        </Link>
        <Link
          href="#"
          className="hidden font-semibold lg:block text-darkBlue hover:text-lightPurple"
        >
          Manage Property
        </Link>
        <Link
          href="#"
          className="hidden font-semibold lg:block text-darkBlue hover:text-lightPurple"
        >
          Resources
        </Link>
      </div>
      <div className="hidden space-x-4 md:block">
        <button className="px-6 py-3 font-bold text-black bg-white border-2 rounded-lg border-lighterPurple hover:bg-lighterPurple">
          Login
        </button>
        <button className="px-6 py-3 font-semibold text-white rounded-lg bg-lightPurple hover:bg-opacity-80">
          Sign up
        </button>
      </div>
      <div className="block mt-1 px-14 md:hidden">
        <Bars2Icon className="w-8 h-8" />
      </div>
    </nav>
  );
};

export default Navbar;