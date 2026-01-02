const Newsletter = () => {
  return (
    <div className="py-[10vh] bg-[#F9FAFB]">
      <div className="w-[90vw] mx-auto bg-[#1A3827] rounded-2xl flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-[45%] lg:px-10 px-4 pt-20 pb-6 lg:pt-0 lg:pb-0 text-[#ffffff]">
          <h2 className="lg:text-[36px] text-[30px] mb-6 font-semibold">
            Get regular updates from us.
          </h2>
          <p className="lg:text-[20px]">
            We&apos;re still building. Subscribe for updates and get mails on
            ongoing project progress and also on educational tips for
            Muslim-Christian relations.
          </p>
          <div className="mt-6 flex lg:flex-row flex-col justify-between lg:space-x-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#ffffff] placeholder:text-[#404040] text-[#404040] p-3 rounded-lg outline-none border-none lg:w-[70%]"
            />
            <button className="bg-[#2B5D40] px-6 py-2 font-semibold lg:mt-0 mt-6 lg:w-[25%] rounded-lg">
              Subscribe
            </button>
          </div>
          <p className="pt-4">
            We care about your data in our{' '}
            <span className="underline">privacy policy</span>
          </p>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="/assets/newsletter.png"
            alt="newsletter-img"
            className="w-full lg:rounded-r-2xl lg:rounded-b-none rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
