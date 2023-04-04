import React from "react";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              COMING SOON
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
              BE THE FIRST TO GET THE APP
            </p>
            <div className="mt-6 flex max-w-lg gap-x-4">
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Your email"
                type="text"
                name="search"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                onHandleClick="()"
              >
                GET EARLY ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
