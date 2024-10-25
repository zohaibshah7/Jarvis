import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`body-font w-full fixed z-50 transition-all duration-300 ${
        isScrolled ? "bg-indigo-500 shadow-lg text-white" : "bg-white text-gray-600"
      }`}
    >
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className={`w-10 h-10 p-2 rounded-full ${
              isScrolled ? "text-indigo-500 bg-white" : "text-white bg-indigo-500"
            }`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <AnchorLink href="#home">
            <span className="ml-3 text-xl">Jarvis</span>
          </AnchorLink>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <AnchorLink href="#home" className="mr-5 hover:text-gray-200 cursor-pointer">
            Home
          </AnchorLink>
          <AnchorLink href="#features" className="mr-5 hover:text-gray-200 cursor-pointer">
            Features
          </AnchorLink>
          <AnchorLink href="#blogs" className="mr-5 hover:text-gray-200 cursor-pointer">
            Blogs
          </AnchorLink>
          <AnchorLink href="#testimonials" className="mr-5 hover:text-gray-200 cursor-pointer">
            Testimonials
          </AnchorLink>
          <AnchorLink href="#contact" className="mr-5 hover:text-gray-200 cursor-pointer">
            Contact Us
          </AnchorLink>
        </nav>
        <Button onClick={() => navigate("/login")} label="Login" />
      </div>
    </header>
  );
}

export default Header;
