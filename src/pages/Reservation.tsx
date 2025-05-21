import { Button } from "../components/Button";
import { Link } from "react-router-dom";

type ReservationProps = {
  
};

export const Reservation = ({}: ReservationProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-12 bg-background-light py-12 px-80">
      {/* Header */}
      <div className="flex justify-evenly gap-20">
        <div className="w-[50%] flex flex-col justify-start gap-2">
          <div className="text-2xl font-heading font-semibold text-center">Book Your Renovation Appointment Today</div>
          <div className="text-lg text-center">Let us know your preferences to schedule a consultation at your convenience.</div>
        </div>

        <hr className="hidden h-40 w-[2px] bg-background-dark opacity-15 lg:block" />

        <div className="w-[50%] flex flex-col justify-start gap-2">
          <div className="text-2xl md:text-2xl font-heading font-semibold text-black">Need help?<br />Call us directly &rarr;</div>
          <div className="text-2xl md:text-3xl font-heading font-semibold text-green-600">
            <a href="tel:+15551234567">
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Form and Help Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full max-w-5xl mb-12">
        {/* Form */}
        <form className="rounded-2xl flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <input type="text" placeholder="Full Name" className="w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
            <input type="email" placeholder="Email Address" className="w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
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
    </div>
  );
};