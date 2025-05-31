import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";

type NavbarProps = {
  
};

export const Navbar = ({  }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full">
      <div className="w-full flex flex-row items-center justify-between py-4 px-4 md:px-10 lg:px-20 xl:px-60 mt-[-20px]">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl xl:text-3xl font-semibold text-text">
          <img src="/images/logo.png" className="w-20 h-28" alt="logo" />
          LrContractors
        </Link>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-7 h-0.5 bg-text mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-text mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-text transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation Links & Button (Desktop) */}
        <nav className="hidden md:flex gap-6 font-heading items-center">
          <Link to="/services" className="text-text hover:text-primary-600 transition">
            Our Services
          </Link>
          <Link to="/about" className="text-text hover:text-primary-600 transition">
            About
          </Link>
          <Link to="/reservation" className="text-text hover:text-primary-600 transition">
            Reservation
          </Link>
          <Link to="/contact" className="text-text hover:text-primary-600 transition">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link to="/reservation">
            <Button background="green" showArrow>Let’s Transform It</Button>
          </Link>
        </div>
      </div>
      {/* Hamburger Menu Dropdown (Mobile Only) */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden w-full bg-background-light shadow-lg absolute left-0 top-[64px] z-50 animate-fade-in flex flex-col items-center gap-4 py-6">
          <Link to="/services" className="text-text hover:text-primary-600 transition text-lg font-heading" onClick={() => setMenuOpen(false)}>
            Our Services
          </Link>
          <Link to="/about" className="text-text hover:text-primary-600 transition text-lg font-heading" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/reservation" className="text-text hover:text-primary-600 transition text-lg font-heading" onClick={() => setMenuOpen(false)}>
            Reservation
          </Link>
          <Link to="/contact" className="text-text hover:text-primary-600 transition text-lg font-heading" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/reservation" className="w-full flex justify-center" onClick={() => setMenuOpen(false)}>
            <Button background="green" showArrow>Let’s Transform It</Button>
          </Link>
        </motion.div>
      )}
    </header>
  );
};