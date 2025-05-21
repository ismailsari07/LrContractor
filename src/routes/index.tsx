import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Reservation } from "../pages/Reservation";
import { Services } from "../pages/Services";
import { About } from "../pages/About";
import { ServiceDetail } from "../pages/ServiceDetail";

export const AppRoutes = () => {
    const routes = [
        {
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/services', element: <Services /> },
                { path: '/services/:serviceId', element: <ServiceDetail /> },
                { path: '/about', element: <About /> },
                { path: '/reservation', element: <Reservation /> },
                { path: '/contact', element: <Contact /> }
            ]
        }
    ]

    return useRoutes(routes);
};