import React from "react";
import { usePage } from "../../contexts/use-page";

const IntroductionAside = ({ toggle }) => {
  const { activeSection, setActiveSection, onSectionClick } = usePage();
  return (
    <section
      href="#section1"
      onClick={() => {
        onSectionClick("section1");
      }}
      className={`flex w-full py-3 justify-center items-center transition-all flex-col hover:bg-green-500 gap-4 ${
        !toggle ? "-translate-x-28 opacity-0" : "translate-x-0 opacity-100 "
      } ${
        activeSection === "section1" ? "scale-105 bg-green-500" : ""
      } cursor-pointer `}
    >
      <p
        className={`body-2  text-2xl ${
          activeSection === "section1" ? "text-white" : "text-green-400"
        }`}
      >
        Introduction
      </p>
    </section>
  );
};

export default IntroductionAside;
