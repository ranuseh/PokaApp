import assets from "../assets";

function NavigationBar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white-500">
      <div class="flex items-center flex-shrink-0 text-black mr-6">
        <img
          class="fill-current ml-8"
          alt="icon"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          src={assets.lotus}
        />

      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-black hover:border-black">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#about"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8 ml-20"
          >
            ABOUT
          </a>
          <a
            href="#features"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8 ml-20"
          >
            FEATURES
          </a>
          <a
            href="#blog"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8 ml-20"
          >
            BLOG
          </a>
          <a
            href="#app"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-teal mr-8 ml-20"
          >
            APP
          </a>
        </div>
        <div>
          <a
            href="yahoo.com"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
    // <nav class="flex items-center justify-between bg-white">
    //   <div class="flex items-center flex-shrink-0">
    //     <img
    //       class="fill-current ml-8"
    //       alt="icon"
    //       width="100"
    //       height="100"
    //       viewBox="0 0 100 100"
    //       src={assets.lotus}
    //     />
    //   </div>
    //   <div>
    //     <a
    //       href="#about"
    //       class="block mt-4 lg:inline-block lg:mt-0 text-black mr-20 ml-20"
    //     >
    //       ABOUT
    //     </a>
    //     <a
    //       href="#responsive-header"
    //       class="block mt-4 lg:inline-block lg:mt-0 text-black mr-20 ml-20"
    //     >
    //       FEATURES
    //     </a>

    //     <a
    //       href="#responsive-header"
    //       class="block mt-4 lg:inline-block lg:mt-0 text-black mr-20 ml-20"
    //     >
    //       BLOG
    //     </a>
    //     <a
    //       href="#responsive-header"
    //       class="block mt-4 lg:inline-block lg:mt-0 text-black mr-20 ml-20"
    //     >
    //       APP
    //     </a>
    //   </div>
    // </nav>
  );
}

export default NavigationBar;
