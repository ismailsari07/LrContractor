import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

type MainLayoutProps = {
  
};

export const MainLayout = ({  }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};