import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuClose = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <rect
          x="5"
          y="5"
          width="2"
          height="24"
          transform="rotate(-45 5 5)"
          fill="#FF6F61"
        />
        <rect
          x="5"
          y="19"
          width="2"
          height="24"
          transform="rotate(-135 6 20)"
          fill="#FF6F61"
        />
      </svg>
    );
  };

  const menuOpen = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <rect y="4" width="24" height="2" fill="#FF6F61" />
        <rect y="11" width="24" height="2" fill="#FF6F61" />
        <rect y="18" width="24" height="2" fill="#FF6F61" />
      </svg>
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navLinkStyles =
    "p-2 hover:bg-accent hover:text-white transition-all duration-300 ease-in-out";

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? menuClose() : menuOpen()}
      </button>
      {isOpen && (
        <div className="absolute right-0 text-center mt-2 w-48 bg-white shadow-lg border border-primary rounded-md">
          <ul>
            <li className={`${navLinkStyles} border-b border-gray-200`}>
              <button
                onClick={() => handleNavigation("/")}
                className="w-full text-left"
              >
                Home
              </button>
            </li>
            <li className={`${navLinkStyles} border-b border-gray-200`}>
              <button
                onClick={() => handleNavigation("/about")}
                className="w-full text-left"
              >
                About
              </button>
            </li>
            <li className={`${navLinkStyles}`}>
              <button
                onClick={() => handleNavigation("/contact")}
                className="w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
