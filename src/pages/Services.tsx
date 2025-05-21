import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import services from "../data/services.json";

type ServicesProps = {};

export const Services = ({}: ServicesProps) => {
	return (
		<div>
			{/* Header Section */}
			<div className="px-60 py-28 flex flex-col gap-20 justify-center">
				<div className="w-[50%] flex flex-col gap-8">
					<div className="text-6xl font-heading">Our Services</div>
					<div className="text-lg">
						We offer a wide range of professional renovation services, from
						structural work to final finishes — all tailored to your needs. With a
						focus on quality, trust, and personalized care, we’re here to bring
						your vision to life.
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-60">
				{services.map((service) => (
					<div
						key={service.id}
						className="bg-background-light rounded-xl shadow-md flex flex-col justify-between items-start p-6 mb-8"
					>
						<div>
							<img
								src={service.image}
								alt={service.title}
								className="rounded-md mb-6 w-full h-48 object-cover border-2 border-background-dark"
							/>
							<div className="text-2xl font-heading font-semibold mb-2">
								{service.title}
							</div>
							<div className="mb-6">
								{Array.isArray(service.description)
									? service.description[0]
									: service.description}
							</div>
						</div>
						<Link to={`/services/${service.id}`} className="w-full">
							<Button background="green">Learn More</Button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};