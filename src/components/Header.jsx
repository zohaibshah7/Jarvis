import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/FireBaseConfig"; // Firebase config
import { signOut, onAuthStateChanged } from "firebase/auth"; // Importing signOut and onAuthStateChanged
import { toast } from "react-toastify"; // Importing toast and ToastContainer from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // No user is signed in
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully!", {
          style: { top: "3.5em" },
        }); // Show success toast
        navigate("/login"); // Redirect to login page after logout
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          style: { top: "3.5em" },
        });
      });
  };

  return (
    <>
      <header
        className={`body-font w-full fixed z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-indigo-500 shadow-lg text-white"
            : "bg-white text-gray-600"
        }`}
      >
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <AnchorLink
            href="#home"
            className="flex title-font font-medium items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className={`w-10 h-10 p-2 rounded-full ${
                isScrolled
                  ? "text-indigo-500 bg-white"
                  : "text-white bg-indigo-500"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Jarvis</span>
          </AnchorLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <AnchorLink
              href="#home"
              className="mr-5 hover:text-gray-200 cursor-pointer"
            >
              Home
            </AnchorLink>
            <AnchorLink
              href="#features"
              className="mr-5 hover:text-gray-200 cursor-pointer"
            >
              Features
            </AnchorLink>
            <AnchorLink
              href="#blogs"
              className="mr-5 hover:text-gray-200 cursor-pointer"
            >
              Blogs
            </AnchorLink>
            <AnchorLink
              href="#testimonials"
              className="mr-5 hover:text-gray-200 cursor-pointer"
            >
              Testimonials
            </AnchorLink>
            <AnchorLink
              href="#contact"
              className="mr-5 hover:text-gray-200 cursor-pointer"
            >
              Contact Us
            </AnchorLink>
          </nav>
          {user ? ( // Show logout button if user is logged in
            <Button onClick={handleLogout} label="Logout" />
          ) : (
            <Button onClick={() => navigate("/login")} label="Login" /> // Show login button if user is logged out
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
