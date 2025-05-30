import React, { useState } from "react";
import {
  FaHome,
  FaTools,
  FaUsers,
  FaEnvelope,
  FaCog,
  FaBook,
  FaCommentDots,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/footerlogo.png";
import logo1 from "../assets/logobg.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* ✅ Top Navbar for Mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white p-4 md:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo1} alt="Logo" className="w-8 h-8" />
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {sidebarOpen ? (
            <FaTimes size={24} className="hidden" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-64 bg-blue-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-auto`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between gap-2 p-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="hidden sm:block w-24 h-24" />
          </div>

          {/* Close Button (mobile only) */}
          <button
            onClick={closeSidebar}
            className="md:hidden text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <Link to='/'>
           
            <NavItem icon={<FaHome />} label="Home" />
          </Link>
          <NavItem icon={<FaBook />} label="Bookings" active />
          <NavItem icon={<FaTools />} label="Services" />
          <NavItem icon={<FaUsers />} label="Users" />
          <NavItem icon={<FaCommentDots />} label="Feedback" />
          <NavItem icon={<FaEnvelope />} label="Contact Queries" />
          <NavItem icon={<FaChartBar />} label="Reports" />
          <NavItem icon={<FaCog />} label="Settings" />
        </nav>
      </div>
    </>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer ${
      active ? "bg-white text-blue-900 font-semibold" : "hover:bg-blue-700"
    }`}
  >
    {icon}
    {label}
  </div>
);

export default Nav;
