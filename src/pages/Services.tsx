import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import services from "../data/services.json";
import { motion } from "framer-motion";

type ServicesProps = {};

export const Services = ({}: ServicesProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.3 }}
		>
			{/* Header Section */}
			<div className="px-4 md:px-10 lg:px-20 xl:px-60 py-12 md:py-20 xl:py-28 flex flex-col gap-10 md:gap-16 xl:gap-20 justify-center">
				<div className="w-full md:w-[80%] xl:w-[50%] flex flex-col gap-6 md:gap-8">
					<div className="text-3xl md:text-5xl xl:text-6xl font-heading">
						Our Services
					</div>
					<div className="text-base md:text-lg">
						We offer a wide range of professional renovation services, from
						structural work to final finishes — all tailored to your needs. With a
						focus on quality, trust, and personalized care, we’re here to bring
						your vision to life.
					</div>
				</div>
			</div>

			{/* Services Section */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 md:px-10 lg:px-20 xl:px-60">
				{services.map((service) => (
					<div
						key={service.id}
						className="bg-background-light rounded-xl shadow-md flex flex-col justify-between items-start p-4 md:p-6 mb-6 md:mb-8"
					>
						<div>
							<img
								src={service.image}
								alt={service.title}
								loading="lazy"
								decoding="async"
								className="rounded-md mb-4 md:mb-6 w-full h-40 md:h-48 object-cover border-2 border-background-dark"
							/>
							<div className="text-xl md:text-2xl font-heading font-semibold mb-1 md:mb-2">
								{service.title}
							</div>
							<div className="mb-4 md:mb-6 text-base md:text-lg">
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
		</motion.div>
	);
};