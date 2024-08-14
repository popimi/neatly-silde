import React from "react";
import { usePage } from "../../contexts/use-page";

const InterLudeAside = ({ toggle }) => {
  const { activeSection, setActiveSection, onSectionClick } = usePage();
  return (
    <section
      href="#section5"
      onClick={() => {
        onSectionClick("section5");
      }}
      className={`flex w-full py-3 justify-center items-center transition-all hover:bg-green-500 flex-col gap-4 ${
        !toggle ? "-translate-x-28 opacity-0" : "translate-x-0 opacity-100 "
      } ${
        activeSection === "section5" ? "scale-105 bg-green-500 " : ""
      } cursor-pointer `}
    >
      <p
        className={`body-2 text-2xl ${
          activeSection === "section5" ? "text-white" : "text-green-400"
        }`}
      >
        Interlude
      </p>
    </section>
  );
};

export default InterLudeAside;
