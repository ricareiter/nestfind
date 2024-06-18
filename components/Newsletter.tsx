const Newsletter = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col px-6 mb-8 space-y-4 text-center">
          <h4 className="text-2xl font-bold text-lightPurple">
            No Spam Promise
          </h4>
          <h3 className="text-3xl font-bold text-darkBlue">
            Are you a landlord?
          </h3>
          <p className="text-gray-500">
            Discover ways to increase your home's value and get listed. No spam.
          </p>
        </div>
        <div className="flex flex-col items-center px-6 mb-8">
          <form className="w-full px-4 space-y-4 md:w-2/3 xl:w-1/3 lg:relative lg:space-y-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full px-6 py-3 rounded-lg shadow-xl outline-none placeholder:text-gray-500 placeholder:font-semibold lg:py-5 lg:px-10"
            />
            <button className="w-full px-3 py-3 font-bold text-white border rounded-lg border-lightPurple bg-lightPurple hover:bg-white hover:text-lightPurple lg:w-1/5 lg:px-4 lg:bottom-2.5 lg:right-8 lg:text-sm lg:absolute lg:py-3">
              Submit
            </button>
          </form>
        </div>
        <div className="px-6 mb-12 text-center">
          <p className="text-sm text-gray-400">
            Join <span className="text-lightPurple">10,000+</span> other
            landlords in our estatery community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
