"use client";
import Image from "next/image";
import googleLogo from "@/public/google-logo.png";

interface Props {
  display: boolean;
  handleSignupClick: () => void;
}

const SignupModal = ({ display, handleSignupClick }: Props) => {
  return (
    <div
      onClick={handleSignupClick}
      className={`${
        display ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-opacity-80 backdrop-blur-md bg-black z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-[384px] lg:w-[768px] mt-20 xl:mt-32 mx-auto rounded-3xl bg-white"
      >
        <div className="w-full px-8 py-8 lg:w-1/2 ">
          <div className="mb-12 text-2xl font-semibold">Sign up</div>
          <div>
            <form action="" className="flex flex-col">
              <label className="mb-1 text-sm text-gray-500">Name</label>
              <input
                type="text"
                className="px-6 py-3 mb-5 border rounded-lg outline-none"
              />
              <label className="mb-1 text-sm text-gray-500">Email</label>
              <input
                type="email"
                className="px-6 py-3 mb-5 border rounded-lg outline-none"
              />
              <label className="mb-1 text-sm text-gray-500">Password</label>
              <input
                type="password"
                className="px-6 py-3 mb-5 border rounded-lg outline-none"
              />
              <button className="px-6 py-3 mt-2 text-lg font-semibold text-white border rounded-full bg-lightPurple border-lightPurple hover:bg-white hover:text-lightPurple">
                Sign up
              </button>
            </form>
          </div>
          <div className="flex justify-between mt-5 mb-5">
            <div className="w-2/5 mb-2 border-b-2"></div>
            <p className="text-sm font-semibold text-gray-500">OR</p>
            <div className="w-2/5 mb-2 border-b-2"></div>
          </div>
          <div>
            <button className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold bg-white border rounded-full text-lightPurple text-md border-lightPurple hover:bg-lighterPurple">
              <Image src={googleLogo} alt="google logo" className="w-5" />
              Continue with Google
            </button>
          </div>
          <div className="mt-8 mb-3">
            <p className="text-sm text-gray-700">
              By continuing, you agree to the{" "}
              <span className="font-semibold underline hover:cursor-pointer hover:font-bold">
                Terms of use
              </span>{" "}
              and{" "}
              <span className="font-semibold underline hover:cursor-pointer hover:font-bold">
                Privacy Policy.
              </span>
            </p>
          </div>
        </div>
        <div className="hidden w-1/2 lg:block signupImage rounded-r-3xl"></div>
      </div>
    </div>
  );
};

export default SignupModal;
