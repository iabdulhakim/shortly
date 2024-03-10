const Hero = () => {
  return (
    <>
      <div className="hero md:mb-[150px]">
        <div className="md:flex-row flex flex-col-reverse container mt-[64px] md:mt-[110px]">
          <div className="flex flex-col ">
            <h1 className="hero-title text-[var(--blackish-color)] max-w-[600px] text-[42px] md:text-start text-center md:text-[80px] font-bold">More than just shorter links</h1>
            <p className="text-[var(--grey-color)] text-[18px] md:text-start text-center md:text-[22px] font-medium leading-9 max-w-[540px] mt-1">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="md:self-start self-center mt-10 text-white bg-[var(--aqua-color)] px-10 py-3 rounded-[28px] hover:opacity-60 text-[20px] font-bold">Get Started</button>
          </div>
          <img src="./hero.png" alt="" className="h-[269px] w-[327px] flex items-center" />
        </div>
      </div>
    </>
  );
};

export default Hero;
