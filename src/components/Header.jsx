import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  return (
    <>
      <header className="text-gray-600 bg-indigo-300 body-font shadow-lg w-full fixed">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <AnchorLink href='#home'><span className="ml-3 text-xl">Jarvis</span></AnchorLink>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <AnchorLink href='#home' className="mr-5 hover:text-gray-900 cursor-pointer">Home</AnchorLink>
            <AnchorLink href='#features' className="mr-5 hover:text-gray-900 cursor-pointer">Features</AnchorLink>
            <AnchorLink href='#blogs' className="mr-5 hover:text-gray-900 cursor-pointer">Blogs</AnchorLink>
            <AnchorLink href='#testimonials' className="mr-5 hover:text-gray-900 cursor-pointer">Testimonials</AnchorLink>
            <AnchorLink href='#contact' className="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</AnchorLink>
          </nav>
          <Button onClick={()=> navigate("/login")} label="Login" />
        </div>
      </header>
    </>
  );
}

export default Header;