import React from "react";
import { FaMoon } from "react-icons/fa";

const MoonHero = () => {
  return (
    <>
      <div className="moon-icon">
        <FaMoon />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
        Moon Circles
      </h1>
      <p className="text-lg md:text-xl text-white text-center max-w-2xl">
        A sacred space for connection, reflection, and lunar alignment.
      </p>
    </>
  );
};

export default MoonHero;
