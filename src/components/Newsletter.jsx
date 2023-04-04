import React from "react";

const Newsletter = () => {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">COMING SOON</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              BE THE FIRST TO GET THE APP
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onHandleClick="()"
              >
                GET EARLY ACCESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Newsletter;



