import React from "react";
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Roasted = () => {
  const ingredients = [
    "Fresh Whole Chicken",
    "Olive Oil",
    "Garlic",
    "Rosemary",
    "Thyme",
    "Salt",
    "Black Pepper",
    "Paprika",
    "Lemon",
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
              src="roasted.jpg"
              alt="roasted chicken"
            />
          </div>
          <div className="sm:w-[50%] px-2 ">
            <div className="mt-3">
              <div className=" hover:bg-[#FCEBDF] hover:text-[grey] w-fit bg-[#FCEBDF] text-[#E4716E] mb-5 rounded-md   px-4">
                Details
              </div>
              <i className="text-5xl  font-bold  font-serif italic ">
                Blessed Roast <br /> Chicken
              </i>
              <p className="mt-8 text-2xl font-semibold font-serif text-[#E46419]">
                Golden, crispy, and tender.
              </p>
              <p className="text-justify mt-7 text-xl text-[#51453F]">
                Experience the ultimate comfort food with our Blessed Roast
                Chicken. Each bird is carefully selected, marinated for 24 hours
                in a blend of 12 secret herbs and spices, then slow-roasted to
                perfection until the skin is golden-crisp and the meat falls off
                the bone.
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
                  <p className="text-[#E46212] text-xl font-semibold">$15.99</p>
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

export default Roasted;
