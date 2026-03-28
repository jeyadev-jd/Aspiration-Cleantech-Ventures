import PageTitle from "@/components/sections/pageTitle"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup"
import { Link } from "react-router-dom"

const industryApplications = [
    {
        industry: "Automotive",
        applications: ["Paint drying and curing", "Component preheating", "Battery thermal management", "Water heating for cleaning and surface treatment", "HVAC systems in manufacturing plants"],
        delay: ".3",
        expanded: true
    },
    {
        industry: "Pharmaceutical",
        applications: ["Process heating and drying", "Clean steam generation", "Sterilization and CIP water heating", "Clean room temperature control"],
        delay: ".4"
    },
    {
        industry: "Chemical",
        applications: ["Reactor temperature control", "Distillation and evaporation", "Steam generation", "Solvent recovery heating"],
        delay: ".5"
    },
    {
        industry: "Food & Dairy",
        applications: ["Pasteurization", "Fermentation temperature control", "Steam generation", "Water heating for washing and processing"],
        delay: ".6"
    },
    {
        industry: "Textile",
        applications: ["Dyeing process heating", "Water heating for washing and bleaching"],
        delay: ".7"
    },
    {
        industry: "Wood Processing",
        applications: ["Glue and resin curing", "Kiln heating support"],
        delay: ".8"
    },
    {
        industry: "Paper & Pulp",
        applications: ["Coating and finishing heating", "Water heating for bleaching and cleaning"],
        delay: ".9"
    },
    {
        industry: "Rubber & Plastics",
        applications: ["Injection molding heating", "Vulcanization heating", "Thermoforming"],
        delay: "1.0"
    }
];

const technicalFeatures = [
    "Operating temperature range: 60°C–120°C",
    "High energy efficiency performance",
    "Integration with existing steam and heating systems",
    "Automated control and monitoring capability",
    "Designed for industrial-scale deployment"
];

const operationalBenefits = [
    "Reduced fossil fuel consumption",
    "Lower operating costs",
    "Improved energy efficiency",
    "Support for sustainability and compliance goals",
    "Enhanced system reliability"
];

const ServiceDetails = () => {
    return (
        <>
            <PageTitle title="Heat Pumps" currentPage="Services" />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-md-1">
                                <div className="sticky-top" style={{ top: '120px', zIndex: 1 }}>
                                    <ServiceSidebar />
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-md-2">
                                <div className="service-details-items">
                                    <div className="details-image wow fadeInUp" data-wow-delay=".3s">
                                        <img src="/img/service/heat-pumps.jpg" alt="Heat Pumps" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </div>
                                    <div className="details-content mt-4">
                                        <h3 className="wow fadeInUp" data-wow-delay=".5s">Heat Pumps</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                                            ASPCV’s industrial heat pumps are engineered to deliver reliable high-temperature process heating up to 120°C for demanding industrial applications. Designed to replace conventional fossil-fuel-based boilers, these systems significantly reduce energy consumption, operating costs, and carbon emissions.
                                        </p>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".7s">
                                            By upgrading low-grade heat into usable thermal energy, they improve overall plant efficiency while ensuring stable and consistent performance. Seamlessly integrated into existing systems, they provide scalable, sustainable solutions for long-term industrial decarbonization and operational optimization.
                                        </p>

                                        <div className="row mt-5 pt-4 mb-4">
                                            <div className="col-md-6 wow fadeInLeft" data-wow-delay=".4s">
                                                <h4 className="mb-4">Key Technical Features</h4>
                                                <ul className="list">
                                                    {technicalFeatures.map((feature, idx) => (
                                                        <li key={idx} className="mb-4 d-flex align-items-start">
                                                            <div style={{ color: "var(--theme)", marginRight: "12px", fontSize: "1.2rem", marginTop: "3px" }}>
                                                                <i className="fa-regular fa-circle-check" />
                                                            </div>
                                                            <div style={{ flex: 1, lineHeight: "1.5" }}>
                                                                {feature}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-6 wow fadeInRight" data-wow-delay=".6s">
                                                <h4 className="mb-4 mt-4 mt-md-0">Operational Benefits</h4>
                                                <ul className="list">
                                                    {operationalBenefits.map((benefit, idx) => (
                                                        <li key={idx} className="mb-3 d-flex align-items-start">
                                                            <div style={{ color: "var(--theme)", marginRight: "12px", fontSize: "1.2rem", marginTop: "3px" }}>
                                                                <i className="fa-regular fa-circle-check" />
                                                            </div>
                                                            <div style={{ flex: 1, lineHeight: "1.5" }}>
                                                                {benefit}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="details-video-items mt-5 pt-3 wow fadeInUp" data-wow-delay=".5s">
                                            <div className="w-100">
                                                <ServiceDetailsVideoPopup
                                                    videoId="S0SowX6OlNs"
                                                />
                                            </div>
                                        </div>

                                        <div className="content mt-4 mb-5 wow fadeInUp" data-wow-delay=".6s">
                                            <h4>Lifecycle Support</h4>
                                            <p className="mt-2 text-muted">
                                                ASPCV provides structured maintenance programs and technical support to ensure long-term performance, reliability, and optimized system operation. Our team is dedicated to maximizing your investment's efficiency over its entire lifespan.
                                            </p>
                                        </div>

                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Industry Applications</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                                            Our heat pump solutions are versatile and cater to a wide range of industrial requirements. Explore the primary applications across different sectors below:
                                        </p>
                                    </div>
                                    <div className="faq-content style-3 mt-4">
                                        <div className="faq-accordion">
                                            <div className="accordion" id="accordion">
                                                {industryApplications.map((item, index) => (
                                                    <div className={`accordion-item mb-3 wow slideUp`} data-wow-delay={`${item.delay}s`} key={index}>
                                                        <h5 className="accordion-header">
                                                            <button className={`accordion-button ${item.expanded ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index}`} aria-expanded={item.expanded ? "true" : "false"} aria-controls={`faq${index}`}>
                                                                {item.industry}
                                                            </button>
                                                        </h5>
                                                        <div id={`faq${index}`} className={`accordion-collapse collapse ${item.expanded ? 'show' : ''}`} data-bs-parent="#accordion">
                                                            <div className="accordion-body">
                                                                <ul className="list-unstyled mb-0 ms-3">
                                                                    {item.applications.map((app, appIdx) => (
                                                                        <li key={appIdx} className="mb-2 d-flex align-items-center">
                                                                            <i className="fa-solid fa-angle-right" style={{ color: "var(--theme)", marginRight: "10px", fontSize: "0.9rem" }} />
                                                                            {app}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Call to Action Section */}
                                    <div className="call-to-action-box mt-5 p-5 rounded text-white wow slideInUp" data-wow-delay="0.6s" style={{
                                        backgroundColor: "var(--theme)",
                                        background: "linear-gradient(135deg, #77b80f 0%, #5a8e0a 100%)",
                                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                                        position: "relative",
                                        overflow: "hidden"
                                    }}>
                                        {/* Decorative circles */}
                                        <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}></div>
                                        <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}></div>

                                        <div className="row align-items-center position-relative z-1">
                                            <div className="col-md-8 mb-4 mb-md-0 text-center text-md-start">
                                                <h3 className="text-white mb-3" style={{ fontSize: "2rem", fontWeight: "700" }}>Ready to Upgrade?</h3>
                                                <p className="text-white mb-0" style={{ fontSize: "1.1rem", opacity: 0.9 }}>For technical specifications, project consultation, or application assessment, please contact our engineering team.</p>
                                            </div>
                                            <div className="col-md-4 text-center text-md-end">
                                                <Link to="/contact" className="theme-btn hover-white" style={{
                                                    backgroundColor: "#fff",
                                                    color: "#77b80f",
                                                    padding: "15px 30px",
                                                    borderRadius: "5px",
                                                    fontWeight: "bold",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "1px",
                                                    display: "inline-block",
                                                    transition: "all 0.3s ease",
                                                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                                                }}>
                                                    Contact Us <i className="fa-solid fa-arrow-right-long ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetails