import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import logo from "../assets/image/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Navbaar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  // console.log("user:", user);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary";

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND}cart/cartItems`)
      .then((res) => setCartItems(res.data.data))
      .catch((err) => console.error("Cart error:", err));

    axios
      .get(`${import.meta.env.VITE_BACKEND}wishlist/wishlistItems`)
      .then((res) => setWishlist(res.data.data))
      .catch((err) => console.error("Wishlist error:", err));
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}auth/login`,
        loginData
      );
      localStorage.setItem("token", res.data.token); // Store token
      localStorage.setItem("user", JSON.stringify(res.data.result));
      setUser(res.data.result);
      toast.success("Login Successful");
      setShowLogin(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      // toast.success("Login Failed")
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}auth/signup`,
        signupData
      );
      toast.success("Signup Successful");
      setShowSignup(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
      // toast.error("SignUp Failed")
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");
  };

  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm mx-auto px-4">
      <div className="py-4 flex items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Site Logo" />
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/courses" className={getNavLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/blogs" className={getNavLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Wishlist & Cart + Auth Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex gap-5">
            <NavLink
              to="/wishlist"
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              <div className="relative">
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>

          {/* <button onClick={() => setShowSignup(true)} className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50">
            Sign up
          </button>
          <button onClick={() => setShowLogin(true)} className="px-5 py-2 bg-blue-500 text-white rounded-md">
            Log in
          </button> */}
          {user ? (
            <>
              <div className="relative inline-block text-left">
                {/* User Name (Toggle Button) */}
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer"
                >
                  <div className="flex  items-center gap-1">
                    <span className="text-sm text-gray-700 ">
                    Hello, <br /> <i>{user.name}</i> 
                  </span>
                    <FaChevronDown className="w-2"  />
                  </div>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => {
                        // You can navigate to the dashboard here if needed
                        navigate('/dashboard');
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Dashboard
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowSignup(true)}
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50"
              >
                Sign up
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 bg-blue-500 text-white rounded-md"
              >
                Log in
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4 flex flex-col gap-3">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/courses" className={getNavLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/blogs" className={getNavLinkClass}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact Us
          </NavLink>

          <div className="flex gap-5">
            <NavLink
              to="/wishlist"
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              <div className="relative">
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              className="w-8 h-8 border rounded-full flex items-center justify-center"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>

          {/* <button
            onClick={() => setShowSignup(true)}
            className="border text-primary py-2 rounded-md"
          >
            Sign up
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 text-white py-2 rounded-md"
          >
            Log in
          </button> */}
           {user ? (
            <>
              <div className="relative inline-block text-left">
                {/* User Name (Toggle Button) */}
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="cursor-pointer"
                >
                  <span className="text-sm text-gray-700">
                    Hello, {user.name} 
                  </span>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                    <p
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </p>
                    <p
                      onClick={() => {
                        // You can navigate to the dashboard here if needed
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Dashboard
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowSignup(true)}
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50"
              >
                Sign up
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 bg-blue-500 text-white rounded-md"
              >
                Log in
              </button>
            </>
          )}
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Log In</h2>
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="text-sm text-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                required
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                className="border p-2 rounded"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowSignup(false)}
                  className="text-sm text-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbaar;
