const Hero = () => {
  return (
    <>
      <div className="hero mb-[150px]">
        <div className="flex container mt-[110px]">
          <div className="flex flex-col ">
            <h1 className="hero-title text-[var(--blackish-color)] max-w-[600px] text-[80px] font-bold">More than just shorter links</h1>
            <p className="text-[var(--grey-color)] text-[22px] font-medium leading-9 max-w-[540px] mt-1">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="self-start mt-10 text-white bg-[var(--aqua-color)] px-10 py-3 rounded-[28px] hover:opacity-60 text-[20px] font-bold">Get Started</button>
          </div>
          <img src="./hero.png" alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
