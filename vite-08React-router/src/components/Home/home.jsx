import React from "react";

import { Link,Outlet } from "react-router-dom";

// Link is used to move from one page to another page without refreshing the full page.

export default function Home() {
  return (
  
  
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden rounded-lg text-black sm:mx-16 mx-2 sm:py-16">
        {/* Hero content section */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 pb-20 pt-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:ml-auto sm:mt-1 sm:text-right mt-80">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden text-4xl sm:block">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              to="/"
              className="inline-flex items-center rounded-lg bg-orange-700 px-6 py-3 font-medium text-white hover:opacity-75"
            >
              {/* SVG is used for logos, icons, and web page shapes */}
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>

              <span className="ml-2">Download now</span>
            </Link>
          </div>
        </div>

        {/* Hero image section */}
        <div className="absolute inset-0 flex items-center justify-center pt-12 sm:my-20 sm:pt-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlM61COu9kulDVyct0mUu0CouOsCS2LRb_g&s"
            alt="Developer illustration"
            className="h-auto w-40 rounded-2xl object-contain shadow-xl sm:w-56 md:w-72 lg:w-80"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9Q6GODw0Bx19ajTbmnqzVVbIEBQRPMI6WQ&s"
          alt="Software developer"
          className="w-48 sm:w-96"
        />
      </div>

      <h1 className="py-10 text-center text-2xl font-medium sm:text-5xl">
        Lorem Ipsum Yojo
      </h1>
      </div>
  

  
    
  );
}