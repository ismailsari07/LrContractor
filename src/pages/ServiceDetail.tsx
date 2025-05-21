import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  services  from "../data/services.json";
import apartmentCorridorImg from "../assets/images/apartment-corridor.jpeg";

type ServiceDetailProps = {};

interface Service {
  id: string;
  title: string;
  image: string;
  description: string[];
  features: string[];
}

export const ServiceDetail = ({ }: ServiceDetailProps) => {
	const { serviceId } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = services.find((s: Service) => s.id === serviceId);
    setService(foundService || null);
  }, [serviceId]);

	if (!service) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center px-60 py-28">
				<div className="text-3xl font-heading font-semibold">Service Not Found</div>
			</div>
		);
	}

	return (

    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading mb-4">{service.title}</h1>
      <img
        src={apartmentCorridorImg}
        alt={service.title}
        className="w-full h-80 object-cover rounded-xl mb-8"
      />

      {service.description.map((paragraph, index) => (
        <p key={index} className="text-lg text-neutral-700 mb-4">
          {paragraph}
        </p>
      ))}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
      <ul className="list-disc list-inside text-neutral-800">
        {service.features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="mt-8">
        <button className="bg-button-bg text-white px-6 py-3 rounded-md shadow hover:scale-105 transition">
          Book This Service
        </button>
      </div>
    </div>
  );
};