/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"; // Changed import

export const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
    { title: "Login", to: "/login" },
  ];

  return (
    <div className="py-40">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full bg-neutral-100 px-4">
        {navLinks.map((link, id) => (
          <NavLink
            key={id}
            to={link.to}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="relative w-full py-3 text-center"
          >
            {/* Background */}
            {hovered === id && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 z-0 h-full w-full rounded-full bg-neutral-900"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            {/* Text */}
            <motion.span
              animate={{ color: hovered === id ? "white" : "black" }}
              transition={{ delay: 0.1 }}
              className="relative z-10"
            >
              {link.title}
            </motion.span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
