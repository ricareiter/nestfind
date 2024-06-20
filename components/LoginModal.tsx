interface Props {
  display: boolean;
  handleClick: () => void;
}

const LoginModal = ({ display, handleClick }: Props) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        display ? "block" : "hidden"
      } fixed top-0 left-0 w-screen h-screen bg-opacity-80 backdrop-blur-md bg-black z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-96 h-96 mt-32 bg-white shadow-xl rounded-lg border border-white m-auto backdrop-blur"
      >
        <div className="px-4 absolute -top-6 w-full">
          <div className="bg-lightPurple text-center py-5 px-10 rounded-lg">
            <p className="text-white text-2xl font-bold">Sign in</p>
          </div>
        </div>
        <div className="mt-24 px-6">
          <form action="" className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full border rounded-lg py-2 px-4 placeholder:text-sm outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg py-2 px-4 placeholder:text-sm outline-none"
            />
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-lighterPurple peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightPurple"></div>
              <span className="ms-3 text-sm text-gray-600 hover:text-lightPurple hover:font-semibold">
                Remember me
              </span>
            </label>
          </form>
        </div>
        <div className="px-6 mt-4">
          <button className="bg-lightPurple text-white py-3 text-xs w-full rounded-lg border border-lightPurple shadow-lg font-bold hover:bg-white hover:text-lightPurple">
            SIGN IN
          </button>
        </div>
        <div className="text-center mt-8 mb-8">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <span className="font-bold text-lightPurple hover:cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
