import React from "react";
import { NavLink } from "react-router-dom";
import { TiMediaRecord } from "react-icons/ti";

const About = () => {
  const list = [
    "Always Fresh Ingredients",
    "Viewing Centre ",
    "Exceptional Customer Service",
    "Cozy and Welcoming Atmosphere",
    "Laundry services",
  ];
  return (
    <>
      <main className="pt-15 px-10">
        <section className="sm:flex sm:flex-row flex flex-col pb-5 gap-10 ">
          <div className="sm:w-[50%]   sm:h-[85vh] ">
            <img
              className="h-full w-full  rounded-4xl object-cover"
              src="view.jpg"
              alt="Tigernut Drink"
            />
          </div>
          <div className="sm:w-[50%] px-2 ">
            <div className="mt-3">
              <i className="text-5xl  font-bold  font-serif italic ">
                Authentic Cooking <br />
              </i>
              <p className="text-4xl  font-semibold mt-3 font-serif mono italic  text-[#E46419]">
                Modern Experience
              </p>

              <p className="mt-8 text-2xl font-semibold font-serif text-[#E46419]">
                Laundry & Viewing centre available.
              </p>
              <p className="text-justify mt-7 text-xl text-[#51453F]">
                At Blessed C&C, we believe food is more than just
                nourishment—it's a connection to heritage and a source of joy.
                Every dish is prepared with the same care and traditional
                techniques used in our family kitchen for generations, Enjoy
                life matches , play Good games and Watch your dirty clothes.
              </p>
              <div className="flex flex-col gap-3 mt-5">
                {list.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex">
                      <p className="text-[#E46212] pt-1.5 gap-1">
                        <TiMediaRecord />
                      </p>
                      <p className="text-xl font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border hidden sm:block rounded-sm border-[grey] w-full my-8"></div>
              <div className="flex">
                <div className="mt-5">
                  <div className="bg-[#E46212] text-white text-xl  border-[#F9D9C5] border h-fit px-6 text-semibold rounded-md">
                    Our story
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

export default About;
