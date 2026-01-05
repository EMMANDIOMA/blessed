import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneMinusFill } from "react-icons/bs";
const Contact = () => {
  const icons = [
    {
      icon: <FaWhatsapp />,
      path: "https://wa.me/+2349076264160",
      color: "text-[green]",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/blessedcc",
      color: "text-[blue]",
    },
    {
      icon: <FaInstagram />,
      path: "https://www.instagram.com/blessedcc",
      color: "text-[purple]",
    },
    {
      icon: <MdOutlineEmail />,
      path: "https://www.instagram.com/blessedcc",
      color: "text-[orange]",
    },
  ];
  return (
    <>
      <main className="bg-[#130807] px-4 h-full py-4">
        <section className="pt-20 grid sm:grid-cols-3 gap-5 text-white">
          <div className=" sm:flex gap-3  items-center  sm:flex-col">
            <div className="font-bold  mb-2.5 text-2xl text-center text-transparent bg-clip-text bg-linear-to-r from-[#EF9965] to-[orange]">
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
                <a href={icon.path} key={index}>
                  <p className={`text-5xl pt-5 font-bold ${icon.color}`}>
                    {icon.icon}
                  </p>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <p className="text-[#E46212] text-xl font-semibold">Contact</p>
            </div>
            <p className="text-justify text-xl font-light text-white">
              Besides Ugwucheleku <br /> Okija 1 Transformer, <br /> Ihiala LGA,
              Anambra State
            </p>
            <div className="flex justify-center items-center gap-3">
              <p className="text-3xl  pt-5 font-bold text-[orange]">
                <BsTelephoneMinusFill />
              </p>
              <p className="pt-3"> 09069654093</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
