import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import servicesData from "../data/services.json";

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
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading mb-4">{service.title}</h1>
      <h2 className="text-2xl font-semibold text-primary mb-4">{service.headline}</h2>
      <p className="text-lg text-neutral-700 mb-6">{service.description}</p>

      <img
        src={service.image}
        alt={service.title}
        className="w-full h-80 object-cover rounded-xl mb-10"
      />

      <h3 className="text-2xl font-semibold mb-6">{service.whyTitle}</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {service.benefits.map((item, index) => (
          <div key={index} className="bg-neutral-100 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-neutral-700 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
