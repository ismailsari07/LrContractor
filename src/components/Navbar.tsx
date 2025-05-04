import { Link } from "react-router-dom";
import { Button } from "./Button";

type NavbarProps = {
  
};

export const Navbar = ({  }: NavbarProps) => {
  return (
    <header className="w-full">
      <div className="w-full flex items-center justify-between py-4 px-60">
        {/* Logo */}
        <Link to="/" className="text-5xl font-heading text-text">
          Logo
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 font-heading">
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

        <Button background="green">
          Let’s Transform It
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="#ffffff"/>
          </svg>
        </Button>
      </div>
    </header>
  );
};