import { createContext, useContext, useState } from "react";

const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [page, setPage] = useState("Homepage");
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [size, setSize] = useState("Desktop");

  const onSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        toggle,
        setToggle,
        activeSection,
        setActiveSection,
        onSectionClick,
        size,
        setSize,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => useContext(PageContext);

export { usePage, PageProvider };
