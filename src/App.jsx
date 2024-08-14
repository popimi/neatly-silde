import "./App.css";
import { Route, Routes } from "react-router-dom";
import Aside from "./components/aside-components/aside";
import IntroductionMain from "./components/main-components/introduction-main";
import { usePage } from "./contexts/use-page";
import { useEffect, useRef, useState } from "react";

function App() {
  const { page, setPage, activeSection, setActiveSection, onSectionClick } =
    usePage();
  const mainRef = useRef(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const { top } = section.getBoundingClientRect();
      if (top <= 0 && top + section.offsetHeight > 0) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => mainElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-row w-full">
      <Aside page={page} setPage={setPage} activeSection={activeSection} />
      <div
        id="main"
        ref={mainRef}
        className="w-full h-[100dvh] overflow-y-scroll"
      >
        <Routes>
          <Route path="/" element={<IntroductionMain />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
