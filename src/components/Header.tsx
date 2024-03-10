const Header = () => {
  return (
    <>
      <div className="container">
        <header className="flex items-center pt-8">
          <a href="" className="md:mr-12 mr-0">
            <img src="./logo.svg" alt="" className="" />
          </a>
          <nav className="md:flex items-center gap-[30px] hidden md:mr-[450px]">
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
          <div className="md:flex items-center ml-auto md:self-end hidden">
            <button className="mr-8 text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all">
              Login
            </button>
            <button className="text-white bg-[var(--aqua-color)] font-bold rounded-3xl px-6 py-2 text-[15px] hover:opacity-65 transition-all">
              Sign Up
            </button>
          </div>
          <div className="dropdown bg-white dropdown-bottom dropdown-end md:ml-0 ml-auto md:mr-0 mr-3">
            <a href="#" tabIndex={0} role="button" className=" m-1 md:hidden ">
              <img src="./menu.svg" alt="" className="" />
            </a>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="self-center text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all text-center">
                  Features
                </a>
              </li>
              <li>
                <a className="self-center text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all text-center">
                  Pricing
                </a>
              </li>
              <li>
                <a className="self-center text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all text-center">
                  Resources
                </a>
              </li>
              <li>
                <a className="self-center text-[var(--grey-color)] font-bold text-[15px] hover:text-[var(--blackish-color)] transition-all mt-3 text-center">
                  Login
                </a>
              </li>
              <li>
                <button className="text-center self-center text-white bg-[var(--aqua-color)] font-bold rounded-3xl px-6 py-2 text-[15px] hover:opacity-65 transition-all">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
