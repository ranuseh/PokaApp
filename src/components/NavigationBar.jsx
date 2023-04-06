import assets from "../assets";

function NavigationBar() {
  return (
    <div className="navbar bg-white navbar-sticky">
      <div className="navbar-start ml-4">
        <a href="#home">
          <img width="40" height="40" src={assets.logoNew} alt="logo" />
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item text-black" href="#home">
          Home
        </a>

        <a className="navbar-item text-black" href="#about">
          About
        </a>

        <a className="navbar-item text-black" href="#features">
          Features
        </a>
        <a className="navbar-item text-black" href="#blog">
          Blog
        </a>
        <a className="navbar-item text-black" href="#app">
          App
        </a>
      </div>
    </div>

    // <nav className="flex items-center justify-evenly flex-wrap bg-white sticky top-0 z-30">
    //   <div className="flex items-center flex-shrink-0 text-black p-2">
    //     <a href="#home">
    //       <img
    //         className="fill-current"
    //         alt="icon"
    //         width="50"
    //         height="50"
    //         viewBox="0 0 50 50"
    //         src={assets.logoNew}
    //       />
    //     </a>
    //   </div>
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="flex justify-center text-md lg:flex-grow">
    //       <a
    //         href="#about"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
    //       >
    //         ABOUT
    //       </a>
    //       <a
    //         href="#features"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
    //       >
    //         FEATURES
    //       </a>
    //       <a
    //         href="#blog"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
    //       >
    //         BLOG
    //       </a>
    //       <a
    //         href="#app"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8"
    //       >
    //         APP
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavigationBar;
