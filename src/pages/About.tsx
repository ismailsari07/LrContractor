import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

type AboutProps = {
  
};

export const About = ({  }: AboutProps) => {
  return (
    <>
      <Helmet>
        <title>About Us | LR Contractor | Renovation Experts Toronto</title>
        <meta name="description" content="Learn about LR Contractor, Toronto’s trusted renovation experts. Discover our story, values, and commitment to quality craftsmanship." />
        <meta name="keywords" content="about, renovation, Toronto, contractor, craftsmanship, company, team, values" />
        <meta property="og:title" content="About Us | LR Contractor | Renovation Experts Toronto" />
        <meta property="og:description" content="Learn about LR Contractor, Toronto’s trusted renovation experts. Discover our story, values, and commitment to quality craftsmanship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lrcontractor.ca/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | LR Contractor | Renovation Experts Toronto" />
        <meta name="twitter:description" content="Learn about LR Contractor, Toronto’s trusted renovation experts. Discover our story, values, and commitment to quality craftsmanship." />
        <link rel="canonical" href="https://www.lrcontractor.ca/about" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="px-4 md:px-10 lg:px-20 xl:px-60 py-12 md:py-20 xl:py-28 flex flex-col gap-10 md:gap-16 xl:gap-20 justify-center items-center"
      >
        <div className="text-3xl md:text-4xl xl:text-5xl font-semibold font-heading">About Us</div>

        <div className="text-base md:text-lg text-center w-full md:w-[70%] xl:w-[50%]">
          Founded on craftsmanship and driven by a passion for transformation, our journey began with a simple belief — every space has the potential to be extraordinary. From humble beginnings to completing large-scale renovations, our story is rooted in integrity, quality, and the desire to create lasting impact through design.
        </div>

        <div className="w-full md:w-[90%] xl:w-[70%] flex flex-col lg:flex-row items-center gap-6 md:gap-8 xl:gap-12">
          <div className="text-base md:text-lg text-center lg:text-left w-full lg:w-1/2">
            From your first consultation to the final brushstroke, we’re committed to delivering a renovation experience that’s seamless, inspiring, and stress-free. No shortcuts. No surprises. Just results that reflect your goals — and craftsmanship that stands the test of time.
          </div>
          <hr className="hidden lg:block h-48 w-[2px] bg-background-dark opacity-15" />
          <div className="text-base md:text-lg text-center lg:text-left w-full lg:w-1/2">
            We believe in transparency, precision, and care. Every project we take on is treated as if it were our own, with respect for your space and your vision. We don’t just renovate buildings — we build trust, one wall at a time. Clean execution, honest communication, and client satisfaction are at the core of what we do.
          </div>
        </div>
      </motion.div>
    </>
  );
};