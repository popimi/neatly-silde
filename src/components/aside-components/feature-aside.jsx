import React from "react";
import { usePage } from "../../contexts/use-page";

const FeatureAside = ({ toggle }) => {
  const { activeSection, setActiveSection, onSectionClick } = usePage();
  return (
    <section
      href="#section2"
      onClick={() => {
        onSectionClick("section2");
      }}
      className={`flex w-full py-3 justify-center items-center transition-all flex-col hover:bg-green-500 gap-4 ${
        !toggle ? "-translate-x-28 opacity-0" : "translate-x-0 opacity-100 "
      } ${
        activeSection === "section2" ? "scale-105 bg-green-500" : ""
      } cursor-pointer `}
    >
      <p
        className={`body-2  text-2xl ${
          activeSection === "section2" ? "text-white" : "text-green-400"
        }`}
      >
        Features
      </p>
    </section>
  );
};

export default FeatureAside;
