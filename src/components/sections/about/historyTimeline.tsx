import Marquee from 'react-fast-marquee';

const timelineData = [
    {
        year: "2010",
        title: "ESTABLISHMENT",
        description: "The company is established and launched its services in renewable energy sectors."
    },
    {
        year: "2015",
        title: "RESEARCH AND DEVELOPMENT",
        description: "Our company, dedicated to research and development, strives to deliver innovative and useful solutions to society."
    },
    {
        year: "2017",
        title: "RESEARCH AND DEVELOPMENT",
        description: "Our company, dedicated to research and development, strives to deliver innovative and useful solutions to society."
    },
    {
        year: "2019",
        title: "INDIA'S FIRST 90°C HEAT PUMP",
        description: "Introduced India's first 90°C heat pump and delivered it to a leading automobile industry. A Mass production has been started from factory side."
    },
    {
        year: "2021",
        title: "INDIA'S FIRST 120°C HEAT PUMP",
        description: "Introduced India's first 120°C heat pump and delivered it to a leading automobile industry."
    },
    {
        year: "2022",
        title: "INSTALLED 120°C HEAT PUMP AT 365 kW",
        description: "Delivered and installed 365 kW 120°C to one of leading tyre manufacturing industry."
    }
];

const HistoryTimeline = () => {
    return (
        <section className="timeline-section section-padding position-relative" style={{ overflow: "hidden", backgroundColor: "#fcfdfe" }}>
            <div className="container-fluid px-0">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <span style={{ color: "#77b80f", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "10px" }}>Our Journey</span>
                    <h2 style={{ 
                        fontSize: "3rem", 
                        fontWeight: "800", 
                        color: "#1a2431",
                        fontFamily: '"Montserrat Alternates", sans-serif'
                    }}>
                        Company Milestones
                    </h2>
                </div>

                <div className="timeline-marquee-wrapper py-4 position-relative">
                    {/* Horizontal Background Line */}
                    <div style={{
                        position: "absolute",
                        top: "100px",
                        left: "0",
                        width: "100%",
                        height: "4px",
                        background: "linear-gradient(to right, #77b80f 0%, #e88024 100%)",
                        zIndex: 1,
                        opacity: 0.3
                    }}></div>

                    <Marquee
                        speed={40}
                        gradient={true}
                        gradientColor="white"
                        gradientWidth={100}
                        pauseOnHover={true}
                    >
                        <div className="d-flex align-items-stretch py-3">
                            {timelineData.map((item, index) => (
                                <div key={index} className="timeline-item-scroll" style={{ width: "350px", margin: "0 30px", flexShrink: 0 }}>
                                    <div className="timeline-card-wrapper h-100" style={{ display: "flex", flexDirection: "column" }}>
                                        <div style={{ textAlign: "center", marginBottom: "25px", position: "relative" }}>
                                            <h3 style={{ 
                                                fontWeight: "800", 
                                                color: index % 2 === 0 ? "#77b80f" : "#e88024", 
                                                fontSize: "2.5rem", 
                                                marginBottom: "15px",
                                                textShadow: "1px 1px 0px rgba(0,0,0,0.05)"
                                            }}>
                                                {item.year}
                                            </h3>
                                            {/* Node element */}
                                            <div className="d-flex align-items-center justify-content-center" style={{
                                                width: "30px", 
                                                height: "30px", 
                                                background: index % 2 === 0 ? "linear-gradient(135deg, #77b80f, #5a8e0a)" : "linear-gradient(135deg, #e88024, #c96b1b)", 
                                                borderRadius: "50%",
                                                margin: "0 auto", 
                                                position: "relative", 
                                                zIndex: 2, 
                                                border: "4px solid #fff", 
                                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                                            }}>
                                                <div style={{ width: "6px", height: "6px", backgroundColor: "#fff", borderRadius: "50%" }}></div>
                                            </div>
                                        </div>

                                        <div className="timeline-content p-4 transition-all h-100" style={{ 
                                            backgroundColor: "#fff", 
                                            borderRadius: "15px", 
                                            borderTop: `5px solid ${index % 2 === 0 ? "#77b80f" : "#e88024"}`,
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                            flex: "1",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            transition: "all 0.3s ease",
                                            minHeight: "220px"
                                        }}>
                                            <h5 style={{ color: "#1a2431", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.5px", fontSize: "1rem", textAlign: "center" }}>{item.title}</h5>
                                            <p className="mb-0 text-muted mt-3" style={{ fontSize: "0.95rem", lineHeight: "1.6", textAlign: "center" }}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default HistoryTimeline
