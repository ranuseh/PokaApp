import assets from "../assets";

function NavigationBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img
          className="fill-current"
          alt="icon"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          src={assets.logo}
        />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-black hover:border-black">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto p-2">
        <div className="text-md lg:flex-grow">
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
