import { Button } from "../components/Button";

type HomeProps = {
  
};

export const Home = ({  }: HomeProps) => {
  return (
    <>
      { /* Header Section */}
      <div className="px-40 py-28 flex flex-col gap-20 items-center justify-center">
        <div className="w-[50%] flex flex-col gap-8 items-center">
          <div className="text-6xl text-center font-heading"><span className="text-text-special italic">Transform Your Space</span> with Expert Renovation Services</div>
          <div className="text-center text-lg">At our renovation company, we specialize in creating beautiful, functional spaces tailored to your needs. From apartment corridors to complete renovations, our skilled team is here to bring your vision to life.</div>
          <div className="flex gap-4">
            <Button background="green" showArrow> Start Your Renovation! </Button>
            <Button background="white">Learn More</Button>
          </div>
        </div>
        <div>
          <img src="home2.jpg" alt="Home Image" className="shadow-2xl rounded-xl" />
        </div>
      </div>

      { /* How It Works Section */}
      <div className="px-40 py-28 flex flex-col gap-20 items-center justify-center">
        <div className="w-[60%] flex flex-col gap-2 justify-center items-center">
          <div className="font-semibold">Transform</div>
          <div className="text-5xl font-semibold font-heading text-center">Our Seamless Renovation Process Explained</div>
          <div className="w-[70%] text-lg text-center">We prioritize your vision and satisfaction from start to finish. Our structured approach ensures that every detail is meticulously planned and executed.</div>
        </div>

        <div className="flex gap-12 justify-center items-center">
          <div className="w-[20%] flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center">
                <img src="logo192.png" alt="How It Works?" className="w-6 h-6" />
              </div>
              <div className="text-2xl font-heading font-semibold text-center">
                Lorem ipsum dolor sit.
              </div>
              <div className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore aliquam sequi dolor delectus? Tenetur.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center">
                <img src="logo192.png" alt="How It Works?" className="w-6 h-6" />
              </div>
              <div className="text-2xl font-heading font-semibold text-center">
                Lorem ipsum dolor sit.
              </div>
              <div className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore aliquam sequi dolor delectus? Tenetur.
              </div>
            </div>
          </div>

          <div className="w-[50%]">
            <img src="home.jpg" alt="Image of How It Works" className="rounded-xl" />
          </div>

          <div className="w-[20%] flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center">
                <img src="logo192.png" alt="How It Works?" className="w-6 h-6" />
              </div>
              <div className="text-2xl font-heading font-semibold text-center">
                Lorem ipsum dolor sit.
              </div>
              <div className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore aliquam sequi dolor delectus? Tenetur.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center">
                <img src="logo192.png" alt="How It Works?" className="w-6 h-6" />
              </div>
              <div className="text-2xl font-heading font-semibold text-center">
                Lorem ipsum dolor sit.
              </div>
              <div className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore aliquam sequi dolor delectus? Tenetur.
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* Features Section */}
      <div className="px-40 py-28 flex flex-col gap-20 items-center justify-center">
        <div className="w-[60%] flex flex-col gap-2 justify-center items-center">
          <div className="font-semibold">Services</div>
          <div className="text-5xl font-semibold font-heading text-center">Transform Your Space with Our Expertise</div>
          <div className="w-[70%] text-lg text-center">Our Renovation Services are designed to enhance your living experience. We specialize in creating beautiful, functional spaces tailored to your needs.</div>
        </div>
        <div className="flex justify-center gap-8">
          {[1,2,3,4].map(x => (
            <div className="w-[27%] flex flex-col gap-5 items-start">
              <img src="home2.jpg" alt="Services Images" className="rounded-md" />
              <div className="text-3xl font-semibold font-heading">Expert Apartment Corridor Renovations</div>
              <div>Revitalize Your Apartment corridors with our expert touch.</div>
            </div>
          ))}
        </div>
        <div></div>
      </div>

      { /* About Section */}
      <div className="px-40 py-28 flex gap-20 justify-center items-center">
          <div className="w-[50%] text-3xl font-semibold font-heading">Transforming Spaces: Our Journey in Renovation Excellence</div>
          <div className="w-[50%] text-lg">Founded with a passion for quality renovations, we specialize in enhancing apartment corridors and living spaces. Our dedicated team combines expertise in demolition, framing, drywall, and more to deliver exceptional results. We believe in creating beautiful, functional environments that reflect our clients' visions.</div>
      </div>
      
      { /* CTA Section */}
      <div className="px-40 py-28 flex flex-col gap-10 justify-center items-center">
          <div className="w-[50%] text-3xl font-semibold font-heading text-center">Secure Your Renovation Today</div>
          <div className="w-[50%] text-lg text-center">Transform your space with our expert renovation services. Book your appointment now for a consultation!</div>
          <div className="flex justify-center items-center gap-4">
            <Button background="green" showArrow> Reserve </Button>
            <Button background="white"> Learn More </Button>
          </div>
      </div>
    </>
  );
};