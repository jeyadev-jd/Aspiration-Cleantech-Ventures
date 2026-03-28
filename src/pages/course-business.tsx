
import { Link } from 'react-router-dom'
import CourseSidebar from "@/components/sections/academy/CourseSidebar"

const programFor = [
    "Engineering Students & Graduates",
    "Diploma Holders",
    "ITI students",
    "Any interested candidate looking to upskill"
];

const whatYouGet = [
    "Expert led practical & hands-on training",
    "Official Course Completion Certificate",
    "Career Guidance & Industry Exposure",
    "Placement Support for top performers"
];

const careerOpportunities = [
    "Gain in depth practical knowledge and operational confidence",
    "Get placed as Project Engineer, Service Engineer, or Executive",
    "Work across commercial, industrial, and manufacturing sectors",
    "Start your own service or consultancy startup",
    "Earn continuously through installation, maintenance, and growth contracts"
];

const CourseBusiness = () => {
    return (
        <>

            <section className="service-details-section fix section-padding">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-5">
                            {/* Left Sidebar */}
                            <div className="col-12 col-lg-4 order-2 order-lg-1">
                                <CourseSidebar />
                            </div>

                            {/* Right Content */}
                            <div className="col-12 col-lg-8 order-1 order-lg-2">
                                <div className="service-details-items">
                                    <div className="details-image mb-5 wow slideUp">
                                        <img src="/img/academy/business-development.webp" alt="Business Development Header" style={{ width: "100%", borderRadius: "20px", display: "block" }} />
                                    </div>
                                    <div className="details-content wow slideUp">
                                        <h2 style={{ fontSize: "2.6rem", fontWeight: "800", marginBottom: "15px", color: "#1a1a2e" }}>Business Development Training Program</h2>

                                        <p style={{ fontSize: "1.15rem", color: "#666", lineHeight: 1.8, marginBottom: "40px" }}>
                                            Learn strategic business growth, client acquisition, partnership building, and market expansion techniques.
                                        </p>

                                        <div className="row mt-4 mb-5">
                                            <div className="col-md-12 mb-4 mb-md-0">
                                                <div className="p-4 h-100" style={{ background: "rgba(29, 143, 44, 0.05)", borderLeft: "4px solid var(--theme)", borderRadius: "10px" }}>
                                                    <h4 style={{ color: "var(--theme)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>Course Duration</h4>
                                                    <h3 style={{ fontSize: "1.5rem", margin: 0, fontWeight: 800 }}>2 Months (8 Weeks)</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="mb-4" style={{ fontWeight: 700, fontSize: "1.8rem" }}>Who Is This For?</h3>
                                        <ul className="list mb-5">
                                            {programFor.map((item, idx) => (
                                                <li key={idx} className="mb-3 d-flex align-items-center">
                                                    <i className="fa-solid fa-circle-check" style={{ color: "var(--theme)", marginRight: "12px", fontSize: "1.1rem" }} />
                                                    <span style={{ fontSize: "1.05rem", color: "#444" }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <h3 className="mb-4" style={{ fontWeight: 700, fontSize: "1.8rem" }}>What You Will Gain</h3>
                                        <div className="row align-items-center g-4 mb-5">
                                            <div className="col-md-5">
                                                <div style={{ position: "relative", overflow: "hidden", borderRadius: "15px" }}>
                                                    <img src="/img/academy/Mentor.webp" alt="Gain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-unstyled">
                                                    {whatYouGet.map((item, idx) => (
                                                        <li key={idx} className="mb-3 d-flex align-items-start">
                                                            <i className="fa-solid fa-star" style={{ color: "var(--theme)", marginRight: "12px", marginTop: "5px", fontSize: "0.9rem" }} />
                                                            <span style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.6 }}>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded wow slideUp" style={{ background: "#1a1a2e", color: "#fff" }}>
                                            <h3 className="mb-4" style={{ color: "#fff", fontWeight: 700, fontSize: "1.8rem" }}>Career Opportunities</h3>
                                            <ul className="list-unstyled mb-0">
                                                {careerOpportunities.map((opp, idx) => (
                                                    <li key={idx} className="mb-3 d-flex align-items-start">
                                                        <i className="fa-solid fa-briefcase" style={{ color: "var(--theme)", marginRight: "15px", marginTop: "6px" }} />
                                                        <span style={{ fontSize: "1.05rem", color: "#ccc", lineHeight: 1.6 }}>{opp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="text-center mt-5 pt-3 wow slideUp">
                                            <span className="d-block mb-4 fw-bold" style={{ color: "#1a1a2e", fontSize: "1.2rem", background: "#f8f9fa", display: "inline-block", padding: "12px 24px", borderRadius: "50px" }}>
                                                🎓 Food and Accommodation support will be Provided
                                            </span>
                                            <div>
                                                <Link to="/academy-register?course=business-development" className="theme-btn py-3 px-5">Apply For Training &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
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

export default CourseBusiness
