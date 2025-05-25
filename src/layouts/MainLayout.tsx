import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { motion } from "framer-motion";

type MainLayoutProps = {
  
};

export const MainLayout = ({  }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light text-text">
      <Navbar />

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};