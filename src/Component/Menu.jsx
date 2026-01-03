import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 3000, easing: "ease-in-out" });
const Menu = () => {
  const Menu = [
    {
      image: "/roasted.jpg",
      name: "Roasted Chicken",
      price: "$15.99",
      description: "Golden, crispy, and tender.",
      path: "/roasted",
    },
    {
      image: "/beef.jpg",
      name: "Beef Steak",
      price: "$22.99",
      description: "Juicy and perfectly seasoned.",
      path: "/beef",
    },
    {
      image: "/smoothie.jpg",
      name: "Fruit Smoothie",
      price: "$7.99",
      description: "Refreshing blend of seasonal fruits.",
      path: "/smothie",
    },
    {
      image: "/tigernut.jpg",
      name: "Tigernut Drink",
      price: "$5.99",
      description: "Nutritious and energizing beverage.",
      path: "/tigernut",
    },
    {
      image: "/noddles.jpg",
      name: "Noddles",
      price: "$9.99",
      description: "Delicious and easy to prepare.",
      path: "/noddles",
    },
    {
      image: "/snooker.jpg",
      name: "Snooker & Bar Menu",
      price: "$12.99",
      description: "Play games while you enjoy the menu.",
      path: "/snooker",
    },
  ];
  return (
    <>
      <main className="pt-10 bg-[#FFFAF6]  ">
        <h1 className="text-[#130807] sm:text-5xl text-center text-3xl font-bold">
          Our Signature Menu
        </h1>
        <div className="flex justify-center mt-4">
          <div className="border-2 w-20 rounded-full  h-1.5 bg-[#E5681B] border-[#E5681B]"></div>
        </div>
        <section className="pt-10 px-4">
          <div className="grid  sm:grid-cols-4 gap-4">
            {Menu.map((menu, index) => (
              <figure className="bg-[white]   rounded-md h-full" key={index}>
                <div className="">
                  <img
                    className="pt-6   "
                    src={menu.image}
                    alt={menu.name}
                    data-aos="zoom-in"
                  />
                </div>
                <figcaption className="px-3 py-6">
                  <div className="text-2xl py-4 font-bold">{menu.name}</div>
                  <div className="py-3 text-[#51487D] font-medium">
                    {menu.description}
                  </div>
                  <div className="flex text-xl font-medium py-4 justify-between">
                    <div className="pt-2 text-[#E5681B]">{menu.price}</div>
                    <Link
                      to={menu.path}
                      className="border rounded-md py-2 px-3 text-white hover:bg-[#cf4e0b] bg-[#E5681B]"
                    >
                      View More
                    </Link>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
