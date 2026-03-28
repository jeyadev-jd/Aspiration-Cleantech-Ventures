import PageTitle from "@/components/sections/pageTitle"
import ServiceSidebar from "@/components/sections/services/serviceSidebar"
import { Link } from "react-router-dom"

const technicalFeatures = [
    "Utilizes low- and medium-temperature heat sources",
    "Closed-loop thermodynamic cycle",
    "Continuous and stable power generation",
    "Integration with existing process heat systems",
    "Automated control and monitoring"
]

const operationalBenefits = [
    "Converts waste heat into valuable electricity",
    "Reduces grid power dependency",
    "Improves total plant energy efficiency",
    "Enhances sustainability performance",
    "Supports decarbonization initiatives"
]

const industryApplications = [
    {
        industry: "Chemical",
        applications: [
            "Power generation from reactor and distillation waste heat",
            "Recovery of exhaust thermal energy"
        ],
        expanded: true
    },
    {
        industry: "Paper & Pulp",
        applications: [
            "Electricity generation from dryer section waste heat",
            "Recovery from steam condensate systems"
        ],
        expanded: false
    },
    {
        industry: "Food & Dairy",
        applications: [
            "Conversion of process waste heat into electrical power",
            "Energy recovery from boilers and exhaust streams"
        ],
        expanded: false
    },
    {
        industry: "Automotive",
        applications: [
            "Recovery of exhaust heat from manufacturing systems",
            "Supplemental on-site power generation"
        ],
        expanded: false
    },
    {
        industry: "Textile",
        applications: [
            "Heat recovery from dyeing and finishing processes"
        ],
        expanded: false
    },
    {
        industry: "Wood Processing",
        applications: [
            "Energy recovery from kiln exhaust systems"
        ],
        expanded: false
    }
]

const lifecycleSupportServices = [
    "Periodic system inspections and preventive maintenance",
    "Turbine and working fluid performance monitoring",
    "Diagnostic evaluation and efficiency optimization",
    "Spare parts planning and technical upgrades",
    "On-site and remote engineering support"
]

const Orc = () => {
    return (
        <>
            <PageTitle title="Organic Rankine Cycle (ORC)" currentPage="Services" />
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
                                        <img src="/img/service/ORC-Image.jpg" alt="Organic Rankine Cycle" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </div>
                                    <div className="details-content mt-4">
                                        <h3 className="wow fadeInUp" data-wow-delay=".5s">Organic Rankine Cycle (ORC)</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".6s">
                                            ASPCV’s Organic Rankine Cycle (ORC) systems convert low- to medium-grade waste heat into usable electrical power. Designed for industrial environments, ORC technology enables facilities to recover thermal losses and transform them into reliable on-site energy generation, improving overall plant efficiency and reducing operational costs.
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
                                                ASPCV provides structured maintenance and operational support to ensure reliable ORC system performance. Our lifecycle services include:
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
                                                Through continuous monitoring and proactive servicing, we ensure stable power output, minimized downtime, and long-term system reliability.
                                            </p>
                                        </div>

                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Industry Applications</h3>
                                        <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                                            Our ORC solutions are highly versatile and cater to a wide range of industrial requirements. Explore the primary applications across different sectors below:
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

export default Orc