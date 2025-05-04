import { Button } from "../components/Button";

type HomeProps = {
  
};

export const Home = ({  }: HomeProps) => {
  return (
    <div className="px-40 py-28 flex flex-col gap-20 items-center justify-center">
      <div className="w-[50%] flex flex-col gap-8 items-center">
        <div className="text-6xl text-center font-heading">Transform Your Space with Expert Renovation Services</div>
        <div className="text-center text-lg">At our renovation company, we specialize in creating beautiful, functional spaces tailored to your needs. From apartment corridors to complete renovations, our skilled team is here to bring your vision to life.</div>
        <div className="flex gap-4">
          <Button background="green">
            Start Your Renovation! 
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="#ffffff"/>
            </svg>
          </Button>
          <Button background="white">Learn More</Button>
        </div>
      </div>
      <div>
        <img src="home2.jpg" alt="Home Image" className="shadow-2xl rounded-xl" />
      </div>
    </div>
  );
};