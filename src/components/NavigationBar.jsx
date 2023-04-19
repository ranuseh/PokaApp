import assets from "../assets";

function NavigationBar() {
  return (
    <div className="navbar bg-white navbar-sticky">
      <div className="navbar-start">
        <div className="flex flex-row align items-center">
          <a href="#home">
            <img
              width="40"
              height="40"
              src={assets.logoNew}
              alt="logo"
              className="lg:ml-64 md:ml-8 sm:ml-6"
            />
          </a>
          <p className="text-purple lg:ml-1 md:ml-6 sm:ml-8 sm:mr-7 font-bold text-base">
            POKA
          </p>
        </div>
      </div>
      <div className="navbar-end lg:mr-64 md:mr-16 sm:mr-0">
        <a
          className="navbar-item text-purple text-sm lg:ml-6 md:ml-4 sm:ml-0"
          href="#home"
        >
          Home
        </a>

        <a
          className="navbar-item text-purple text-sm lg:ml-6 md:ml-4 sm:ml-0"
          href="#about"
        >
          About
        </a>

        <a
          className="navbar-item text-purple text-sm lg:ml-6 md:ml-4 sm:ml-0"
          href="#features"
        >
          Features
        </a>
        <a
          href="#app"
          className=" navbar-item text-sm flex-none rounded-full bg-pink text-purple font-semibold shadow-sm hover:bg-pink lg:ml-6 md:ml-4 sm:ml-0"
        >
        <button> Download App</button>
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
