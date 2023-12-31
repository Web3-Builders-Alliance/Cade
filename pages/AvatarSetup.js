import React from "react";
import SuppliesAvatar from "../components/AvatarSetup/SuppliesAvatar";
import AvatarList from "../components/AvatarSetup/AvatarList";
const AvatarSetup = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative bg-[url('/kn.jpg')] p-5">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start">
            <div className="px-10 bg-black  flex-grow  py-6 rounded shadow-md">
              <h2 className=" font-abc text-white text-5xl mb-1 font-medium title-font">
                Create Your Avatar
              </h2>
              <div className=" sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                <div>
                  <img
                    height={200}
                    width={200}
                    className="mt-10 rounded-full"
                    src="/personn.png"
                    alt="alt"
                  />
                  <AvatarList />
                </div>
              </div>

              <div className=" bg-black flex-grow  md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <p className="leading-relaxed mb-5 text-2xl font-abc text-white">
                  Post-ironic portland shabby chic echo park, banjo fashion
                  axefghgfjffjtru
                </p>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="text-3xl font-abc text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mb-5 w-1/2 mt-5 bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />

                  <label
                    htmlFor="name"
                    className="text-3xl font-abc text-white"
                  >
                    Custom ID
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-1/2 mt-5 bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <button className="text-black font-abc bg-white border-0 py-2 px-6 focus:outline-none rounded text-2xl">
                  Create
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white font-abc text-4xl px-10 mb-1 font-medium title-font">
              Additional Items
            </h2>
            <p className="leading-relaxed mb-5 text-white font-abc text-2xl px-10">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>

            <SuppliesAvatar />
          </div>
        </div>
      </section>
    </>
  );
};

export default AvatarSetup;
