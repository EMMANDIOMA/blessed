import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        {/*......................... Herosection.............................. */}
        <section
          id="Home"
          className="w-full h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Container that holds video and content together */}
          <div className="w-full h-screen flex flex-col items-center justify-center">
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen object-cover"
              poster="/videos/fallback.jpg"
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Content inside video naturally */}
            <div className="absolute flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-6xl pt-3 md:text-6xl font-bold mb-4">
                TASTE THE <p className="text-[#E5681B]">BLESSING</p>
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                We deliver quality services
              </p>
              <Link
                to="/menu"
                className="px-8 py-3 bg-[#E5681B] rounded-full hover:bg-[#cf4e0b] transition-all shadow-md"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
