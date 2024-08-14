import React from "react";
import logo from "../../assets/logo.svg";
import { usePage } from "../../contexts/use-page";

const LogoAside = ({ toggle }) => {
  return (
    <section
      className={`py-10 px-6 flex justify-center items-center transition-all flex-col gap-4 ${
        !toggle
          ? "-translate-x-28 opacity-0"
          : "translate-x-0 opacity-100 delay-200"
      } `}
    >
      <img src={logo} alt="" />
      <p className="body-2 text-green-400">Neatly Presentation</p>
    </section>
  );
};

export default LogoAside;
