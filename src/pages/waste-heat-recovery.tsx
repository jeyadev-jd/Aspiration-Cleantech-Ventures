import PageTitle from "@/components/sections/pageTitle"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import { Link } from "react-router-dom"

const technicalFeatures = [
    "Recovery from low- and high-temperature exhaust streams",
    "Integration with steam, hot water, or thermal oil systems",
    "Custom-designed heat exchangers",
    "Modular and scalable configurations",
    "Automated monitoring and control systems"
]

const operationalBenefits = [
    "Reduced fuel consumption",
    "Lower operating costs",
    "Improved total plant energy efficiency",
    "Decreased carbon emissions",
    "Enhanced sustainability compliance"
]

const industryApplications = [
    {
        industry: "Automotive",
        applications: [
            "Exhaust heat recovery from ovens and curing lines",
            "Process heat reuse in manufacturing operations"
        ],
        expanded: true
    },
    {
        industry: "Pharmaceutical",
        applications: [
            "Recovery of heat from steam and HVAC systems",
            "Energy reuse in sterilization and drying processes"
        ],
        expanded: false
    },
    {
        industry: "Chemical",
        applications: [
            "Heat recovery from reactors and distillation columns",
            "Energy capture from flue gases and condensate streams"
        ],
        expanded: false
    },
    {
        industry: "Food & Dairy",
        applications: [
            "Boiler exhaust heat recovery",
            "Reuse of thermal energy in pasteurization and processing"
        ],
        expanded: false
    },
    {
        industry: "Textile",
        applications: [
            "Recovery from boiler exhaust and dyeing operations"
        ],
        expanded: false
    },
    {
        industry: "Paper & Pulp",
        applications: [
            "Dryer section heat recovery",
            "Steam condensate heat reuse"
        ],
        expanded: false
    },
    {
        industry: "Wood Processing",
        applications: [
            "Kiln exhaust heat utilization"
        ],
        expanded: false
    },
    {
        industry: "Rubber & Plastics",
        applications: [
            "Recovery from extrusion and molding processes"
        ],
        expanded: false
    }
]

const lifecycleSupportServices = [
    "Periodic system inspections and cleaning",
    "Heat exchanger performance monitoring",
    "Thermal efficiency assessments",
    "Preventive maintenance planning",
    "Technical troubleshooting and on-site assistance"
]

const WasteHeatRecovery = () => {
    return (
        <>
            <PageTitle title="Waste Heat Recovery System" currentPage="Services" />
            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-4">
                            <div className="col-12 col-lg-4 order-2 order-lg-1">
                                <div className="sticky-top" style={{ top: '120px', zIndex: 1 }}>
                                    <ServiceSidebar />
                                </div>
                            </div>
                            <div className="col-12 col-lg-8 order-1 order-lg-2">
                                <div className="service-details-items">
                                    <div className="details-image wow fadeInUp" data-wow-delay=".3s">
                                        {/* You can replace this src with a WHR specific image */}
                                        <img src="/img/service/details-1.jpg" alt="Waste Heat Recovery System" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </div>
                                    <div className="details-content mt-4">
                                        <h3 className="wow fadeInUp" data-wow-delay=".5s">Waste Heat Recovery System</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                                            ASPCV’s Waste Heat Recovery (WHR) systems are engineered to capture and reuse thermal energy that would otherwise be lost through exhaust gases, process streams, or cooling systems. By recovering and upgrading unused heat, these systems improve overall plant efficiency, reduce fuel consumption, and support industrial decarbonization initiatives.
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
                                                        <li key={idx} className="mb-4 d-flex align-items-start">
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

                                        <div className="content mt-4 mb-5 wow fadeInUp" data-wow-delay=".6s">
                                            <h4>Lifecycle Support</h4>
                                            <p className="mt-2 text-muted">
                                                ASPCV provides structured maintenance and performance optimization services to ensure long-term reliability of Waste Heat Recovery systems. Our support includes:
                                            </p>
                                            <ul className="list mt-3 mb-3">
                                                {lifecycleSupportServices.map((service, idx) => (
                                                    <li key={idx} className="mb-3 d-flex align-items-start text-muted">
                                                        <div style={{ color: "var(--theme)", marginRight: "12px", fontSize: "1.2rem", marginTop: "3px" }}>
                                                            <i className="fa-solid fa-check" />
                                                        </div>
                                                        <div style={{ flex: 1, lineHeight: "1.5" }}>
                                                            {service}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-2 text-muted">
                                                Through proactive servicing and continuous monitoring, we ensure sustained efficiency, minimized downtime, and extended system lifespan.
                                            </p>
                                        </div>

                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Industry Applications</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                                            Our Waste Heat Recovery solutions are highly versatile and cater to a wide range of industrial requirements. Explore the primary applications across different sectors below:
                                        </p>

                                        <div className="faq-content mt-4">
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion">
                                                    {industryApplications.map((item, index) => (
                                                        <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`} key={index} style={{ border: 'none', borderRadius: '5px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
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
                </div>
            </section>
        </>
    )
}

export default WasteHeatRecovery