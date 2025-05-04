type FooterProps = {
  
};

export const Footer = ({  }: FooterProps) => {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address:</p>
              <p className="mb-5 text-sm md:mb-6">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
              <p className="mb-1 text-sm font-semibold">Contact:</p>
              <a
                href="tel:1800 123 4567"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                1800 123 4567
              </a>
              <a
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                facebook logo
              </a>
              <a href="#">
                instagram logo
              </a>
              <a href="#">
                twitter logo
              </a>
              <a href="#">
                linkedin 
              </a>
              <a href="#">
                logo youtbe
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Home Page</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Our Services</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Contact Us</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">About Us</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Get a Quote</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Facebook Page</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Twitter Profile</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">Instagram Feed</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">LinkedIn Page</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="#">YouTube Channel</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};