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

        <Button background="green" showArrow>
          Let’s Transform It
        </Button>
      </div>
    </header>
  );
};