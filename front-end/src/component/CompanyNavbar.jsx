import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { jwtDecode } from "jwt-decode";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

function CompanyNavbar() {
  const { scrollYProgress } = useScroll();
  const [companyData, setCompanyData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      const companyToken = localStorage.getItem("company_token");
      if (companyToken) {
        const decoded = jwtDecode(companyToken);
        setCompanyData(decoded);
      } else {
        setCompanyData(null);
      }
    };

    fetchUser();

    // Listen for storage changes and custom logout event
    window.addEventListener("storage", fetchUser);
    window.addEventListener("userLoggedOut", fetchUser);

    return () => {
      window.removeEventListener("storage", fetchUser);
      window.removeEventListener("userLoggedOut", fetchUser);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-[#505050] h-1 w-full origin-left"
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <div>
          <Link to="/app/home">
            <img
              src="/images/logo (3).png"
              alt="DevMetricAI Logo"
              className="w-24"
            />
          </Link>
        </div>

        {/* Avatar / Button */}
        <div className="hidden md:block">
          {companyData ? (
            <Avatar decoded={companyData} />
          ) : (
            <Link to="/company/register">
              <button className="bg-white text-[#152F56] font-semibold w-32 py-2 rounded-full">
                Get Started
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default CompanyNavbar;
