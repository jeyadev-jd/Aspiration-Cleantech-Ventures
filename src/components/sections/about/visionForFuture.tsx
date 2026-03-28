const VisionForFuture = () => {
    return (
        <section className="vision-section section-padding pb-0 position-relative" style={{ overflow: "hidden" }}>
            {/* Background Decorations */}
            <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(119,184,15,0.1) 0%, transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>
            <div style={{ position: "absolute", bottom: "50px", right: "-100px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(232,128,36,0.1) 0%, transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                            <span style={{ color: "#e88024", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "10px" }}>Our Core Mission</span>
                            <h2 style={{ 
                                fontSize: "3rem", 
                                fontWeight: "800", 
                                color: "#1a2431",
                                textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
                                marginBottom: "20px",
                                fontFamily: '"Montserrat Alternates", sans-serif'
                            }}>
                                Vision For The Future
                            </h2>
                            <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }}>
                                <div style={{ width: "40px", height: "3px", backgroundColor: "#e88024", borderRadius: "5px" }}></div>
                                <div style={{ width: "10px", height: "10px", backgroundColor: "#77b80f", borderRadius: "50%" }}></div>
                                <div style={{ width: "40px", height: "3px", backgroundColor: "#e88024", borderRadius: "5px" }}></div>
                            </div>
                        </div>
                        
                        <div className="vision-content wow fadeInUp" data-wow-delay=".5s" style={{ 
                            backgroundColor: "#fff", 
                            padding: "40px 50px", 
                            borderRadius: "20px", 
                            boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
                            borderTop: "5px solid #77b80f",
                            position: "relative"
                        }}>
                            <i className="fa-solid fa-quote-left" style={{ position: "absolute", top: "30px", left: "30px", fontSize: "3rem", color: "rgba(119,184,15,0.1)", zIndex: 0 }}></i>
                            
                            <p className="mb-4" style={{ 
                                color: "#444", 
                                lineHeight: "1.9", 
                                fontSize: "1.15rem", 
                                position: "relative",
                                zIndex: 1,
                                fontWeight: "500"
                            }}>
                                Aspiration Cleantech Ventures is dedicated to pioneering innovative clean technologies that address the pressing environmental challenges of our time. <strong style={{ color: "#222" }}>Our mission goes beyond merely reducing carbon emissions;</strong> we aim to create transformative, scalable solutions that empower industries to operate more sustainably, efficiently, and responsibly. 
                            </p>
                            
                            <p className="mb-4" style={{ color: "#555", lineHeight: "1.8", fontSize: "1.05rem" }}>
                                By integrating advanced technologies with a commitment to environmental stewardship, we strive to redefine the role of industries in combating climate change, reducing resource consumption, and fostering a greener, more resilient future for generations to come. We help industries transition with green energy solutions and our expertise lies in converting unutilized spaces and addressing complex applications, effectively eliminating the reliance on expensive and dirty fossil fuels.
                            </p>

                            <div className="offerings-box p-4 mb-4" style={{ backgroundColor: "#f9fafb", borderRadius: "10px", borderLeft: "4px solid #e88024" }}>
                                <p className="mb-0" style={{ color: "#444", fontWeight: "500" }}>
                                    Our comprehensive range of offerings includes <strong style={{ color: "#e88024" }}>Heat pumps, High temperature heat pumps</strong>, Solar dryers, Solar thermal systems, Heat pump dryers, Waste heat recovery systems, Hydrogen generators, Waste to methanol systems, and Organic Rankine cycle (ORC) systems.
                                </p>
                            </div>

                            
                            <p className="mb-0" style={{ color: "#666", lineHeight: "1.8", fontSize: "1rem", fontStyle: "italic" }}>
                                Aspiration Cleantech Ventures was founded by the co-founders of Aspire Systems, a successful ISO 9001:2008 certified software services company with a workforce of 5000+ employees. Our journey is supported and seed-funded by the Renewable Search program (RE: Search), a collaborative initiative by IIM Ahmedabad’s (IIMA) Centre for Innovation Incubation and Entrepreneurship (CIIE) and the Ministry of New and Renewable Energy (MNRE). Our Director, Mr Logesh Nagalingam, is leading the integration and advancement of these state-of-the-art technologies, ensuring we stay ahead in the green energy sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionForFuture
