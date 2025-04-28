import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbaar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, wishlistItems } = useCart();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm mx-auto px-4  ">
      <div className=" py-4 flex items-center justify-between mx-auto ">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary  ">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary">
            About us
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-primary">
            Courses
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-primary">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary">
            Contact us
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-5  ">
          <div className="flex gap-5">
            <Link to="/wishlist" className="w-8 h-8 rounded-full border flex items-center justify-center transition duration-300 ease-in-out hover:scale-105 ">
              <div className="relative">
              <Heart className="w-4 h-4" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
              </div>
            </Link>
            <Link to="/cart" className="w-8 h-8 rounded-full border flex items-center justify-center transition duration-300 ease-in-out hover:scale-105 ">
              <div className="relative">
              <ShoppingCart  className="text-gray-700 w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            </Link>
          </div>

          <div className="lg:flex items-center gap-5">
            <Link
              to="/signup"
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50 transition duration-300 ease-in-out hover:scale-105 "
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out  hover:scale-105  "
            >
              Log in
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-gray-700    " onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4 ">
          <div className="flex flex-col gap-2">
            <Link to="/" className="py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-primary">
              About us
            </Link>
            <Link
              to="/courses"
              className="py-2 text-gray-700 hover:text-primary"
            >
              Courses
            </Link>
            <Link
              to="/blogs"
              className="py-2 text-gray-700 hover:text-primary"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="py-2 text-gray-700 hover:text-primary"
            >
              Contact us
            </Link>
            <div className="flex gap-4 pt-2">
              <Link
                to="/signup"
                className="flex-1 py-2 text-center border border-primary text-primary rounded-md hover:bg-blue-50"
              >
                Sign up
              </Link>

              <Link
                to="/login"
                className="flex-1 py-2 text-center bg-blue-600 text-white rounded-md "
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbaar;
