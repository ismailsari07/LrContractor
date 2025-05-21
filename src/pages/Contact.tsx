import { Button } from "../components/Button";

type ContactProps = {
  
};

export const Contact = ({}: ContactProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background-light gap-20 px-60 py-28">
      {/* Header */}
      <div className="flex justify-evenly items-center gap-20">
        <div className="w-[50%]">
          <div className="text-3xl md:text-3xl text-center font-semibold font-heading mb-4">Contact Us</div>
          <div className="text-lg mb-12 text-center ">Get in touch with our team for expert advice and personalized assistance.</div>
        </div>

        <hr className="hidden h-48 w-[2px] bg-background-dark opacity-15 lg:block" />

        <div className="w-[50%] flex flex-col items-start justify-center">
          <div className="flex items-center gap-3 mb-4 text-lg">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" fill="#222"/></svg>
            </span>
            +1 (555) 123-4567
          </div>
          <div className="flex items-center gap-3 mb-4 text-lg">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" fill="#222"/></svg>
            </span>
            123 Main Street, Anytown, USA
          </div>
          <div className="flex items-center gap-3 mb-4 text-lg">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 20v-9.99l7.29 6.59a1 1 0 0 0 1.42 0L20 10.01V20H4Z" fill="#222"/></svg>
            </span>
            info@exampie.com
          </div>
        </div>
      </div>
      {/* Form and Info Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full max-w-5xl mb-12">
        {/* Contact Form */}
        <form className="rounded-2xl flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            <input type="text" placeholder="Full Name" className="w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
            <input type="email" placeholder="Email Address" className="w-1/2 bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2" />
          <textarea placeholder="Message" className="w-full bg-transparent border-2 border-background-dark rounded-xl px-3 py-2 min-h-[100px]" />
          <div className="mt-2 w-full">
            <Button background="green">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};