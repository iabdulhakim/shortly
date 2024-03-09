const Header = () => {
  return (
    <>
      <div className="container">
        <header className="flex items-center pt-8">
          <a href="" className="mr-12">
            <img src="./logo.svg" alt="" className="" />
          </a>
          <nav className="flex items-center gap-[30px]">
            <a
              href="#"
              className="text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all"
            >
              Features
            </a>
            <a
              href="#"
              className="text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all"
            >
              Resources
            </a>
          </nav>
          <div className="flex items-center ml-auto">
            <button className="mr-8 text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all">
              Login
            </button>
            <button className="text-white bg-[var(--aqua-color)] font-bold rounded-3xl px-6 py-2 text-[15px] hover:opacity-65 transition-all">
              Sign Up
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
