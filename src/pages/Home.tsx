import { Button } from "../components/Button";
import { ReactComponent as HammerIcon } from '../assets/icons/hammer.svg'
import { ReactComponent as PlanningIcon } from '../assets/icons/planning.svg'
import { ReactComponent as Review } from '../assets/icons/review.svg'
import { ReactComponent as ConsultationIcon } from '../assets/icons/consultation.svg'
import services from "../data/services.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


type HomeProps = {
  
};

export const Home = ({  }: HomeProps) => {
  return (
    <>
      <Helmet>
        <title>Home | Renovation Services Toronto | LR Contractor</title>
        <meta name="description" content="Transform your space with expert renovation services in Toronto. Specializing in apartment corridors, drywall, painting, flooring, and more. Book your renovation today!" />
        <meta name="keywords" content="renovation, Toronto, apartment corridors, drywall, painting, flooring, contractor, remodeling, home improvement" />
        <meta property="og:title" content="Home | Renovation Services Toronto | LR Contractor" />
        <meta property="og:description" content="Transform your space with expert renovation services in Toronto. Specializing in apartment corridors, drywall, painting, flooring, and more." />
        <meta property="og:image" content="/home2.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lrcontractor.ca/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Renovation Services Toronto | LR Contractor" />
        <meta name="twitter:description" content="Transform your space with expert renovation services in Toronto. Specializing in apartment corridors, drywall, painting, flooring, and more." />
        <meta name="twitter:image" content="/home2.jpg" />
        <link rel="canonical" href="https://www.lrcontractor.ca/" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Header Section */}
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20 xl:py-28 flex flex-col gap-10 md:gap-16 xl:gap-20 items-center justify-center w-full">
          <div className="w-full md:w-[80%] xl:w-[50%] flex flex-col gap-6 md:gap-8 items-center">
            <div className="text-3xl md:text-5xl xl:text-6xl text-center font-heading"><span className="text-text-special italic">Transform Your Space</span> with Expert Renovation Services</div>
            <div className="text-center text-base md:text-lg">At our renovation company, we specialize in creating beautiful, functional spaces tailored to your needs. From apartment corridors to complete renovations, our skilled team is here to bring your vision to life.</div>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center items-center">
              <Link to="reservation">
                <Button background="green" showArrow> Start Your Renovation! </Button>
              </Link>
              <Link to="services">
                <Button background="white">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[70%] xl:w-auto flex justify-center">
            <img src="home2.jpg" alt="Home Image" className="shadow-2xl rounded-xl w-full md:w-auto md:min-h-80 object-cover" />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20 xl:py-28 flex flex-col gap-10 md:gap-16 xl:gap-20 items-center justify-center">
          <div className="w-full md:w-[80%] xl:w-[60%] flex flex-col gap-2 justify-center items-center">
            <div className="font-semibold">Transform</div>
            <div className="text-2xl md:text-4xl xl:text-5xl font-semibold font-heading text-center">Our Seamless Renovation Process Explained</div>
            <div className="w-full md:w-[80%] xl:w-[70%] text-base md:text-lg text-center">We prioritize your vision and satisfaction from start to finish. Our structured approach ensures that every detail is meticulously planned and executed.</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 justify-center items-center w-full">
            <div className="w-full lg:w-[20%] flex flex-col justify-center items-center gap-8 md:gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center">
                  <ConsultationIcon className="w-6 h-6 text-background-dark opacity-50" />
                </div>
                <div className="text-2xl font-heading font-semibold text-center">
                  Consultation
                </div>
                <div className="text-center">
                  We begin with a one-on-one consultation to understand your needs, style preferences, and project goals.
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center">
                  <PlanningIcon className="w-6 h-6 text-background-dark opacity-50" />
                </div>
                <div className="text-2xl font-heading font-semibold text-center">
                  Planning & Proposal
                </div>
                <div className="text-center">
                  Our team creates a detailed plan and timeline, followed by a transparent proposal tailored to your scope and budget.
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] flex justify-center">
              <img src="home.jpg" alt="Image of How It Works" className="rounded-xl w-full md:min-h-80 object-cover" />
            </div>
            <div className="w-full lg:w-[20%] flex flex-col justify-center items-center gap-8 md:gap-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center">
                  <HammerIcon className="w-6 h-6 text-background-dark opacity-50" />
                </div>
                <div className="text-2xl font-heading font-semibold text-center">
                  Execution
                </div>
                <div className="text-center">
                  Skilled professionals carry out the work with precision, keeping your space clean and your expectations in focus at every step.
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center">
                  <Review className="w-6 h-6 text-background-dark opacity-50" />
                </div>
                <div className="text-2xl font-heading font-semibold text-center">
                  Final Review & Handover
                </div>
                <div className="text-center">
                  We walk you through the completed project to ensure your full satisfaction before final delivery.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20 xl:py-28 flex flex-col gap-10 md:gap-16 xl:gap-20 items-center justify-center">
          <div className="w-full md:w-[80%] xl:w-[60%] flex flex-col gap-2 justify-center items-center">
            <div className="font-semibold">Services</div>
            <div className="text-2xl md:text-4xl xl:text-5xl font-semibold font-heading text-center">Transform Your Space with Our Expertise</div>
            <div className="w-full md:w-[80%] xl:w-[70%] text-base md:text-lg text-center">Our Renovation Services are designed to enhance your living experience. We specialize in creating beautiful, functional spaces tailored to your needs.</div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="w-full md:w-[45%] lg:w-[27%] flex flex-col gap-3 md:gap-5 items-start">
                <img src={service.image} alt={service.title} className="rounded-md w-full h-40 md:h-48 object-cover border-2 border-background-dark" />
                <div className="text-xl md:text-2xl xl:text-3xl font-semibold font-heading">{service.title}</div>
                <div className="text-base md:text-lg">{service.description}</div>
              </div>
            ))}
          </div>
          <div></div>
        </div>

        {/* About Section */}
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20 xl:py-28 flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
          <div className="w-full md:w-[50%] text-xl md:text-2xl xl:text-3xl font-semibold font-heading text-center md:text-left">Transforming Spaces: Our Journey in Renovation Excellence</div>
          <div className="w-full md:w-[50%] text-base md:text-lg text-center md:text-left">Founded with a passion for quality renovations, we specialize in enhancing apartment corridors and living spaces. Our dedicated team combines expertise in demolition, framing, drywall, and more to deliver exceptional results. We believe in creating beautiful, functional environments that reflect our clients' visions.</div>
        </div>
        
        {/* CTA Section */}
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 py-16 md:py-20 xl:py-28 flex flex-col gap-6 md:gap-10 justify-center items-center">
          <div className="w-full md:w-[70%] xl:w-[50%] text-xl md:text-2xl xl:text-3xl font-semibold font-heading text-center">Secure Your Renovation Today</div>
          <div className="w-full md:w-[70%] xl:w-[50%] text-base md:text-lg text-center">Transform your space with our expert renovation services. Book your appointment now for a consultation!</div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full md:w-auto">
            <Link to="reservation">
              <Button background="green" showArrow> Reserve </Button>
            </Link>
            <Link to="services">
              <Button background="white"> Learn More </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};