import { Button } from "./Button";
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { Link, useLocation } from "react-router-dom";
import services from "../data/services.json";
import { useEffect } from "react";


type FooterProps = {
  
};

export const Footer = ({  }: FooterProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <footer className="px-4 md:px-20 lg:px-40 xl:px-80 py-16 md:py-20 xl:py-28 flex flex-col justify-center items-start gap-8 md:gap-12 bg-background-dark text-text-light text-lg">
      <div>
        <div className="text-3xl md:text-4xl xl:text-5xl font-semibold font-heading">LrConstruction</div>
        <div className="w-full md:w-[80%] xl:w-[50%] mt-2">Crafted with care, built on trust, and focused on your space — not just the surface. We renovate to elevate.</div>
      </div>
      <div>
        <Link to="/reservation">
          <Button background="white" showArrow>Let's Transform It!</Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-8 md:gap-20 xl:gap-60 w-full">
        <div className="font-semibold min-w-[120px] mb-4 md:mb-0">
          <div className="font-semibold">Follow Us</div>
          <div className="flex gap-4 mt-2">
            <InstagramIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
            <TwitterIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
            <FacebookIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
          </div>
        </div>
        <div className="min-w-[120px] mb-4 md:mb-0">
          <div className="font-semibold">Pages</div>
          <Link to="/services" className="block opacity-75 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Our Services</Link>
          <Link to="/about" className="block opacity-75 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
          <Link to="/reservation" className="block opacity-75 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Reservation</Link>
          <Link to="/contact" className="block opacity-75 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
        </div>
        <div className="min-w-[180px]">
          <div className="font-semibold">Services</div>
          <div className="flex gap-4 xl:gap-8 mt-2">
            <div className="flex flex-col gap-2">
              {services.slice(0, 4).map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="opacity-75 hover:underline" onClick={() => window.scrollTo(0, 0)}>{service.title}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {services.slice(4, 8).map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="opacity-75 hover:underline" onClick={() => window.scrollTo(0, 0)}>{service.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="font-semibold mt-8">Made With ❤️</div>
    </footer>
  );
};