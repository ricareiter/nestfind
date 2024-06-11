import Image from "next/image";
import logoIcon from "@/public/logo-icon.jpg";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="container mt-6 mb-8 mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-1 px-8 md:px-0">
        <Image
          src={logoIcon}
          alt="logo"
          width={32}
          height={32}
          className="min-w-8"
        />
        <p className="font-bold text-darkBlue text-xl mt-1">NestFind</p>
      </div>
      <div className="hidden md:flex justify-between w-1/5 lg:w-2/5 mt-1 xl:ml-32">
        <Link
          href="#"
          className="text-darkBlue font-semibold hover:text-lightPurple"
        >
          Rent
        </Link>
        <Link
          href="#"
          className="text-darkBlue font-semibold hover:text-lightPurple"
        >
          Buy
        </Link>
        <Link
          href="#"
          className="text-darkBlue font-semibold hover:text-lightPurple"
        >
          Sell
        </Link>
        <Link
          href="#"
          className="hidden lg:block text-darkBlue font-semibold hover:text-lightPurple"
        >
          Manage Property
        </Link>
        <Link
          href="#"
          className="hidden lg:block text-darkBlue font-semibold hover:text-lightPurple"
        >
          Resources
        </Link>
      </div>
      <div className="hidden md:block space-x-4">
        <button className="text-black py-3 px-6 bg-white font-bold rounded-lg border-2 border-lighterPurple hover:bg-lighterPurple">
          Login
        </button>
        <button className="bg-lightPurple py-3 px-6 text-white rounded-lg font-semibold hover:bg-opacity-80">
          Sign up
        </button>
      </div>
      <div className="block px-14 mt-1 md:hidden">
        <Bars2Icon className="w-8 h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
