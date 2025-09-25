import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { jwtDecode } from "jwt-decode";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

function CommonNavbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

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
      </nav>
    </>
  );
}

export default CommonNavbar;
