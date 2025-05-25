import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import servicesData from "../data/services.json";
import { motion } from "framer-motion";

interface Benefit {
  title: string;
  text: string;
}

interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  whyTitle: string;
  benefits: Benefit[];
}

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const found = (servicesData as Service[]).find((s) => s.id === serviceId);
    setService(found || null);
  }, [serviceId]);

  if (!service) {
    return <div className="text-center py-20">Service not found.</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl md:max-w-4xl xl:max-w-5xl mx-auto px-4 md:px-8 xl:px-6 py-8 md:py-12 xl:py-16"
    >
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading mb-2 md:mb-4">{service.title}</h1>
      <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-primary mb-2 md:mb-4">{service.headline}</h2>
      <p className="text-base md:text-lg text-neutral-700 mb-4 md:mb-6">{service.description}</p>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 md:h-96 xl:h-[540px] object-cover rounded-xl mb-6 md:mb-10"
      />

      <h3 className="text-lg md:text-xl xl:text-2xl font-semibold mb-4 md:mb-6">{service.whyTitle}</h3>
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {service.benefits.map((item, index) => (
          <div key={index} className="bg-neutral-100 p-4 md:p-6 rounded-lg shadow">
            <h4 className="text-base md:text-lg xl:text-xl font-semibold mb-1 md:mb-2">{item.title}</h4>
            <p className="text-neutral-700 text-sm md:text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
