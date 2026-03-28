
import Hero from "@/components/sections/academy/Hero";
import AcademyHeroSlider from "@/components/sections/academy/AcademyHeroSlider";
import About from "@/components/sections/academy/About";
import CourseCatalog from "@/components/sections/academy/CourseCatalog";
import PartnersOne from "@/components/sections/partners/partnersOne";
import WhyChooseUs from "@/components/sections/academy/WhyChooseUs";
import CareerOpportunities from "@/components/sections/academy/CareerOpportunities";
import Testimonials from "@/components/sections/academy/Testimonials";
import Faq from "@/components/sections/academy/Faq";
import SEO from "@/components/SEO";

const Academy = () => {
    return (
        <>
            <SEO 
                title="ASPCV Academy | Technical Training for HVAC, Entrepreneurship & More"
                description="Explore job-oriented courses in HVAC, CleanTech, Digital Marketing, and Sales at ASPCV Academy. Get trained by industry experts with 100% placement assistance."
            />
            <AcademyHeroSlider />
            <Hero />
            <About />
            <CourseCatalog />
            <PartnersOne title="Placement in 30+ Brands" />
            <WhyChooseUs />
            <CareerOpportunities />
            <Testimonials />
            <Faq />
        </>
    );
};

export default Academy;
