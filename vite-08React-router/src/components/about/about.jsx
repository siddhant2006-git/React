import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-10 md:space-y-0 md:flex md:gap-10 lg:items-center lg:gap-16">

          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPyXYfeWdULCAxOX7wSr_dKTDvULJnk-Wag&s"
              alt="Frontend development"
              className="w-full max-w-md h-[420px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-6/12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">
              About Me
            </span>

            <h2 className="mt-3 text-3xl text-gray-900 font-bold md:text-5xl leading-tight">
              Frontend Developer
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Hi, I am{""}
              <span className="font-semibold text-gray-900">
                Siddhant Bhatnagar
              </span>
              , a passionate frontend developer focused on building clean,
              responsive, and user-friendly web applications.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              I enjoy turning ideas into real projects using{" "}
              <span className="font-semibold text-gray-900">
                HTML, CSS, JavaScript, React, and Tailwind CSS
              </span>
              . I focus on writing simple, reusable, and well-structured code
              that improves both user experience and application performance.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              I have worked on projects such as a{" "}
              <span className="font-semibold text-gray-900">
                Currency Converter, Markdown Notes App, React Router Website,
                Weather App, and GitHub Profile Finder
              </span>
              . These projects helped me gain practical experience with React
              components, props, state management, hooks, API integration,
              routing, localStorage, and responsive UI design.
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                HTML
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                CSS
              </span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-medium">
                Tailwind CSS
              </span>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}