import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ReservationProps = {
  
};

export const Reservation = ({}: ReservationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-start gap-8 md:gap-12 xl:gap-16 bg-background-light py-8 md:py-12 xl:py-20 px-4 md:px-10 lg:px-20 xl:px-80"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-8 md:gap-16 xl:gap-20 w-full items-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-start gap-2">
          <div className="text-xl md:text-2xl font-heading font-semibold text-center">Book Your Renovation Appointment Today</div>
          <div className="text-base md:text-lg text-center">Let us know your preferences to schedule a consultation at your convenience.</div>
        </div>

        <hr className="hidden lg:block h-40 w-[2px] bg-background-dark opacity-15" />

        <div className="w-full lg:w-1/2 flex flex-col justify-start gap-2 mt-8 lg:mt-0">
          <div className="text-xl md:text-2xl font-heading font-semibold text-black">Need help?<br />Call us directly &rarr;</div>
          <div className="text-xl md:text-3xl font-heading font-semibold text-green-600">
            <a href="tel:+15551234567">
              +1 (647) 680-9164
            </a>
          </div>
        </div>
      </div>

      {/* Form and Help Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center w-full max-w-5xl mb-8 md:mb-12">
        {/* Form */}
        <form className="rounded-2xl flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Full Name" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
            <input type="email" placeholder="Email Address" className="w-full md:w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
          </div>
          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
          <input type="text" placeholder="Preferred Date" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
          <select className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2">
            <option value="">Select Service</option>
            <option value="painting">Painting</option>
            <option value="demolition">Demolition</option>
            <option value="framing">Framing</option>
            <option value="drywall">Drywall</option>
            <option value="plastering">Plastering</option>
            <option value="renovation">Renovation</option>
            <option value="wallpaper">Wallpaper Installation</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Optional Note/Request" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2 min-h-[70px]" />
          <div className="mt-2 w-full">
            <Link to="/reservation">
              <Button background="green">Schedule Appointment</Button>
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};