import { Button } from "./Button";
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';


type FooterProps = {
  
};

export const Footer = ({  }: FooterProps) => {
  return (
    <footer className="px-80 py-28 flex flex-col justify-center items-start gap-12 bg-text text-text-light text-lg">
      <div>
        <div className="text-5xl font-semibold font-heading">LrConstruction</div>
        <div className="w-[50%]">Crafted with care, built on trust, and focused on your space — not just the surface. We renovate to elevate.</div>
      </div>
      <div>
        <Button background="white" showArrow>Let's Transform It!</Button>
      </div>
      <div className="flex justify-start gap-60">
        <div className="font-semibold">
          <div className="font-semibold">Follow Us</div>
          <div className="flex gap-4">
            <InstagramIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
            <TwitterIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
            <FacebookIcon className="w-4 h-4 fill-background-1 hover:scale-110 transition opacity-70" />
          </div>
        </div>
        <div className="">
          <div className="font-semibold">Pages</div>
          <div className="opacity-75">Our Services</div>
          <div className="opacity-75">About</div>
          <div className="opacity-75">Reservation</div>
          <div className="opacity-75">Contact</div>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <div className="opacity-75">Services 1</div>
          <div className="opacity-75">Services 1</div>
          <div className="opacity-75">Services 1</div>
          <div className="opacity-75">Services 1</div>
        </div>
      </div>

      <div className="font-semibold">
        Made With ❤️
      </div>
    </footer>
  );
};