import assets from "../assets";

function NavigationBar() {
  return (
    <nav className="flex items-center justify-evenly flex-wrap bg-white sticky top-0 z-30">
      <div className="flex items-center flex-shrink-0 text-black p-2">
        <img
          className="fill-current"
          alt="icon"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          src={assets.logoNew}
        />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex justify-center text-md lg:flex-grow">
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
          >
            ABOUT
          </a>
          <a
            href="#features"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
          >
            FEATURES
          </a>
          <a
            href="#blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
          >
            BLOG
          </a>
          <a
            href="#app"
            className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
          >
            APP
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
