import RootLayout from "@/layout/root";
import Error from "@/pages/404";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import BlogDetails from "@/pages/blog-details";
import BlogStandard from "@/pages/blog-standard";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import Home from "@/pages/home";
import Pricing from "@/pages/pricing";
import Project from "@/pages/project";
import ProjectCarousel from "@/pages/project-carousel";
import ProjectDetails from "@/pages/project-details";
import Service from "@/pages/service";
import ServiceCarousel from "@/pages/service-carousel";
import ServiceDetails from "@/pages/service-details";
import Team from "@/pages/team";
import TeamCarousel from "@/pages/team-carousel";
import TeamDetails from "@/pages/team-details";
import { createBrowserRouter } from "react-router-dom";
import HeatPump from "@/pages/heat-pump";
import Orc from "@/pages/orc";
import WasteToEnergy from "@/pages/waste-to-energy";
import HeatPumpDryer from "@/pages/heat-pump-dryer";
import WasteHeatRecovery from "@/pages/waste-heat-recovery";
import SolarDryer from "@/pages/solar-dryer";
import HydrogenGenerator from "@/pages/hydrogen-generator";
import CourseHvac from "@/pages/course-hvac";
import CourseEntrepreneurship from "@/pages/course-entrepreneurship";
import CourseDigitalMarketing from "@/pages/course-digital-marketing";
import CourseSales from "@/pages/course-sales";
import CourseBusiness from "@/pages/course-business";
import Academy from "@/pages/academy";
import AcademyRegister from "@/pages/academy-register";
import ApiTester from "@/components/admin/ApiTestLayer";

// Admin Imports
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/layout/admin";
import AdminLogin from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ManageServices from "@/pages/admin/ManageServices";
import ManageAcademy from "@/pages/admin/ManageAcademy";
import ManageLeads from "@/pages/admin/ManageLeads";
import ManageRegistrations from "@/pages/admin/ManageRegistrations";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/service',
                element: <Service />
            },
            {
                path: '/service-carousel',
                element: <ServiceCarousel />
            },
            {
                path: '/service-details',
                element: <ServiceDetails />
            },
            { path: '/heat-pump', element: <HeatPump /> },
            { path: '/orc', element: <Orc /> },
            { path: '/waste-to-energy', element: <WasteToEnergy /> },
            { path: '/heat-pump-dryer', element: <HeatPumpDryer /> },
            { path: '/waste-heat-recovery', element: <WasteHeatRecovery /> },
            { path: '/solar-dryer', element: <SolarDryer /> },
            { path: '/hydrogen-generator', element: <HydrogenGenerator /> },
            { path: '/course-hvac', element: <CourseHvac /> },
            { path: '/course-entrepreneurship', element: <CourseEntrepreneurship /> },
            { path: '/course-digital-marketing', element: <CourseDigitalMarketing /> },
            { path: '/course-sales', element: <CourseSales /> },
            { path: '/course-business', element: <CourseBusiness /> },
            { path: '/academy', element: <Academy /> },
            { path: '/academy-register', element: <AcademyRegister /> },
            {
                path: '/project',
                element: <Project />
            },
            {
                path: '/project-carousel',
                element: <ProjectCarousel />
            },
            {
                path: '/project-details',
                element: <ProjectDetails />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/team-carousel',
                element: <TeamCarousel />
            },
            {
                path: '/team-details',
                element: <TeamDetails />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/404',
                element: <Error />
            },
            {
                path: '/news',
                element: <Blog />
            },
            {
                path: '/news-standard',
                element: <BlogStandard />
            },
            {
                path: '/news-details',
                element: <BlogDetails />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/admin',
        element: <ProtectedRoute />,
        children: [
            {
                path: '',
                element: <AdminLayout />,
                children: [
                    { path: 'dashboard', element: <Dashboard /> },
                    { path: 'services', element: <ManageServices /> },
                    { path: 'academy', element: <ManageAcademy /> },
                    { path: 'leads', element: <ManageLeads /> },
                    { path: 'registrations', element: <ManageRegistrations /> },
                    { path: 'test', element: <ApiTester /> }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])