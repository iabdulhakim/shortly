const Advanced = () => {
  return (
    <div className="bg-[#EFF1F7]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="pt-[120px] text-[40px] font-bold text-[var(--blackish-color)] text-center">
            Advanced Statistics
          </h3>
          <p className="mt-4.5 text-[18px] font-semibold max-w-[540px] text-[var(--grey-color)] text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-[30px] pb-[120px]">
          <div className="bg-white h-[250px] px-8 w-[350px] md:mt-[100px] mt-[92px]  rounded-[5px]">
            <img src="./advanced1.svg" alt="" className="absolute mt-[-44px]" />
            <h4 className="text-[22px] font-bold text-[var(--blackish-color)] pt-20">
              Brand Recognition
            </h4>
            <p className="text-[15px] font-medium text-[var(--grey-color)] mt-3">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="bg-white h-[250px] px-8 w-[350px] md:mt-[144px] mt-[92px] rounded-[5px]">
            <img src="./advanced2.svg" alt="" className="absolute mt-[-44px]" />
            <h4 className="text-[22px] font-bold text-[var(--blackish-color)] pt-20">
              Detailed Records
            </h4>
            <p className="text-[15px] font-medium text-[var(--grey-color)] mt-3">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-white h-[250px] px-8 w-[350px] md:mt-[188px] mt-[92px] rounded-[5px]">
            <img src="./advanced3.svg" alt="" className="absolute mt-[-44px]" />
            <h4 className="text-[22px] font-bold text-[var(--blackish-color)] pt-20">
              Fully Customizable
            </h4>
            <p className="text-[15px] font-medium text-[var(--grey-color)] mt-3">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
