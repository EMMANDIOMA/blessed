import React from "react";

import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
const Beef = () => {
  const ingredients = [
    "Grass-Fed Beef",
    "Carrots",
    "Potatoes",
    "Onions",
    "Celery",
  ];
  return (
    <>
      <main className="pt-15 px-10">
        <NavLink to="/menu">
          <div className="flex gap-2 text-[grey] text-xl hover:text-[#E5681B] items-center font-extralight mb-4">
            <div className="pt-1">
              <GoArrowLeft />
            </div>
            <p>Back to Menu</p>
          </div>
        </NavLink>
        <section className="sm:flex sm:flex-row flex flex-col pb-5 gap-10 ">
          <div className="sm:w-[50%]   sm:h-[85vh] ">
            <img
              className="h-full w-full  rounded-4xl object-cover"
              src="beef.jpg"
              alt="Beef Steak"
            />
          </div>
          <div className="sm:w-[50%] px-2 ">
            <div className="mt-3">
              <div className=" hover:bg-[#FCEBDF] hover:text-[grey] w-fit bg-[#FCEBDF] text-[#E4716E] mb-5 rounded-md   px-4">
                Details
              </div>
              <i className="text-5xl  font-bold  font-serif italic ">
                Savory Beef Stew
              </i>
              <p className="mt-8 text-2xl font-semibold font-serif text-[#E46419]">
                Slow-cooked for ultimate flavor.
              </p>
              <p className="text-justify mt-7 text-xl text-[#51453F]">
                Our Savory Beef Stew is a labor of love. We use only the finest
                cuts of grass-fed beef, seared to lock in juices and then
                slow-simmered for 6 hours with fresh root vegetables and a
                robust red wine reduction.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {ingredients.map((ing, index) => (
                  <div
                    className="bg-[#FDF2EA] border-[#F9D9C5] border px-2 rounded-md"
                    key={index}
                  >
                    {ing}
                  </div>
                ))}
              </div>
              <div className="border rounded-sm border-[grey] w-full my-8"></div>
              <div className="flex  justify-between">
                <div className="flex text-xl flex-col gap-1.5 text-[grey]">
                  <p>price</p>
                  <p className="text-[#E46212] text-xl font-semibold">1,500</p>
                </div>
                <div className="mt-7">
                  <div className="bg-[#E46212] text-white text-xl  border-[#F9D9C5] border h-fit px-6 text-semibold rounded-md">
                    Enjoy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Beef;
