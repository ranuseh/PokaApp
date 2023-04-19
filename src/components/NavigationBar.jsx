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
              className="lg:ml-64 md:ml-8 sm:ml-8"
            />
          </a>
          <b className="text-purple-950 lg:ml-2 md:ml-8 sm:ml-10 sm:mr-8">
            POKA
          </b>
        </div>
      </div>
      <div className="navbar-end lg:mr-64 md:mr-16 sm:mr-0 ml:10">
        <a className="navbar-item text-purple-950 text-l" href="#home">
          Home
        </a>

        <a className="navbar-item text-purple-950 text-l" href="#about">
          About
        </a>

        <a className="navbar-item text-purple-950 text-l" href="#features">
          Features
        </a>
        <a
          href="#app"
          className=" navbar-item text-purple-950 text-l flex-none rounded-full bg-purple-300 text-sm font-semibold text-purple-950 shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
        >
          <button>Download App</button>
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
