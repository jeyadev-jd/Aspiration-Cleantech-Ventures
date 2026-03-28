import SectionTitle from "@/components/ui/sectionTitle";

const About = () => {
    const highlights = [
        { icon: 'fa-screwdriver-wrench', label: '80% Practical, 20% Theory', desc: 'Industry immersion from day one.' },
        { icon: 'fa-bullseye', label: 'Market-Aligned Courses', desc: 'Designed around current hiring trends.' },
        { icon: 'fa-star', label: 'Expert Mentors', desc: 'Professionals with 10+ years experience.' },
    ];

    return (
        <section className="about-section fix section-padding" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Image column */}
                    <div className="col-lg-5 wow slideUp" data-delay=".3">
                        <div className="position-relative" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                            {/* Image placeholder — replace src with actual image */}
                            <div
                                style={{
                                    height: '420px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <img src="/img/academy/students.jpeg" alt="About Aspiration Cleantech Academy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            {/* Floating badge */}
                            <div
                                className="position-absolute d-flex align-items-center gap-2 bg-white px-3 py-2 rounded shadow"
                                style={{ bottom: '24px', left: '24px', borderLeft: '4px solid var(--theme)' }}
                            >
                                <i className="fa-solid fa-users" style={{ color: 'var(--theme)' }}></i>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1 }}>Industry Experts</div>
                                    <div style={{ color: '#888', fontSize: '0.8rem' }}>Designed Curriculum</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content column */}
                    <div className="col-lg-7 wow slideUp" data-delay=".5">
                        <SectionTitle className="mb-4">
                            <SectionTitle.SubTitle>ABOUT THE ACADEMY</SectionTitle.SubTitle>
                            <SectionTitle.Title>
                                Bridging Education<br />& <span style={{ color: 'var(--theme-color, var(--theme))' }}>Employment</span>
                            </SectionTitle.Title>
                        </SectionTitle>
                        <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '28px' }}>
                            Aspiration Cleantech Academy is a skill development institute dedicated to empowering students, freshers, and career switchers with practical, industry-relevant training. We bridge the gap between education and employment—ensuring every graduate is job-ready from day one.
                        </p>

                        <div className="d-flex flex-column gap-3">
                            {highlights.map((h, i) => (
                                <div key={i} className="d-flex align-items-center gap-3 p-3 bg-white rounded shadow-sm">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                        style={{ width: '46px', height: '46px', background: 'rgba(232,128,36,0.12)', color: 'var(--theme)', fontSize: '1.1rem' }}
                                    >
                                        <i className={`fa-solid ${h.icon}`}></i>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#222', lineHeight: 1.2 }}>{h.label}</div>
                                        <div style={{ color: '#888', fontSize: '0.9rem' }}>{h.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
