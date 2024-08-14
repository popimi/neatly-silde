import LogoAside from "./logo-aside";
import IntroductionAside from "./introduction-aside";
import TechStackAside from "./tech-stack-aside";
import { usePage } from "../../contexts/use-page";
import FeatureAside from "./feature-aside";
import MemberAside from "./member-aside";
import InterLudeAside from "./interlude-aside";
import QandAAside from "./q-and-a-aside";

const Aside = () => {
  const { toggle, setToggle, onSectionClick, setSize } = usePage();
  return (
    <aside
      className={`${
        !toggle ? "w-[50px]" : "w-[240px]"
      } z-20 transition-all duration-200 h-[100dvh] bg-green-800 flex flex-col justify-between`}
    >
      <LogoAside toggle={toggle} />
      <div className="flex flex-col justify-center items-center">
        <IntroductionAside toggle={toggle} />
        <FeatureAside toggle={toggle} />
        <MemberAside toggle={toggle} />
        <TechStackAside toggle={toggle} />
        <InterLudeAside toggle={toggle} />
        <QandAAside toggle={toggle} />
      </div>
      <div
        className={` transition-all transform flex justify-center items-center flex-wrap gap-5 m-2 text-white`}
      >
        <button
          onClick={() => setSize("Mobile")}
          className="p-1 px-2 w-8 bg-green-400 rounded-md duration-300 transition-all transform delay-300"
        >
          S
        </button>
        <button
          onClick={() => setSize("Tablet")}
          className="p-1 px-2 w-8 bg-green-400 rounded-md duration-300 transition-all transform delay-300"
        >
          M
        </button>
        <button
          onClick={() => setSize("Desktop")}
          className="p-1 px-2 w-8 bg-green-400 rounded-md duration-300 transition-all transform delay-300"
        >
          L
        </button>
      </div>
      <div className="flex p-4 justify-end">
        <button onClick={() => setToggle(!toggle)} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
