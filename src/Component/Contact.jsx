import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const icons = [
    {
      icon: <FaWhatsapp />,
      path: "https://wa.me/7026908248",
    },
  ];
  return (
    <>
      <main className="bg-[#130807] px-4 h-screen">
        <section className="pt-20 grid sm:grid-cols-3 gap-5 text-white">
          <div className=" sm:flex gap-3  items-center  sm:flex-col">
            <div className="font-bold  text-2xl text-center text-transparent bg-clip-text bg-linear-to-r from-[#EF9965] to-[orange]">
              BLESSED C&C
            </div>
            <p className="text-justify text-xl font-light text-white">
              Bringing the authentic taste of home-cooked blessings to your
              <br />
              table. Quality ingredients, traditional recipes, and modern
              convenience. <br />
              Good quality Games. Great food. Excellent laundry services. <br />
              We View All Sports Live.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#E46212] text-xl font-semibold">
              Social Media Handles
            </p>
            <div className="pt-4">
              {icons.map((icon, index) => (
                <Link t0={icon.path} key={index}>
                  <p className="text-5xl font-bold text-[green]">{icon.icon}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
