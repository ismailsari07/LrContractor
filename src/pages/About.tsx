type AboutProps = {
  
};

export const About = ({  }: AboutProps) => {
  return (
    <div className="px-60 py-28 flex flex-col gap-20 justify-center items-center">
      <div className="text-5xl font-semibold font-heading">About Us</div>

      <div className="text-lg text-center w-[50%]">
        Founded on craftsmanship and driven by a passion for transformation, our journey began with a simple belief — every space has the potential to be extraordinary. From humble beginnings to completing large-scale renovations, our story is rooted in integrity, quality, and the desire to create lasting impact through design.
      </div>

      <div className="w-[70%] flex items-center gap-8">
        <div className="text-lg text-center">
          From your first consultation to the final brushstroke, we’re committed to delivering a renovation experience that’s seamless, inspiring, and stress-free. No shortcuts. No surprises. Just results that reflect your goals — and craftsmanship that stands the test of time.
        </div>
        <hr className="hidden h-48 w-[2px] bg-background-dark opacity-15 lg:block" />
        <div className="text-lg text-center">
          We believe in transparency, precision, and care. Every project we take on is treated as if it were our own, with respect for your space and your vision. We don’t just renovate buildings — we build trust, one wall at a time. Clean execution, honest communication, and client satisfaction are at the core of what we do.
        </div>
      </div>
    </div>
  );
};