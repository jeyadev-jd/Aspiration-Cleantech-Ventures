import SectionTitle from "@/components/ui/sectionTitle";

const reasons = [
    { title: 'Practical Learning',   desc: 'Hands-on training with real-world projects — not just theory.',  icon: 'fa-screwdriver-wrench' },
    { title: 'Certified Courses',    desc: 'Industry-recognized certifications that employers trust.',        icon: 'fa-certificate' },
    { title: 'Placement Support',    desc: 'Dedicated career assistance and hiring partner network.',         icon: 'fa-handshake-angle' },
    { title: 'Expert Trainers',      desc: 'Industry professionals with 10+ years of hands-on experience.',  icon: 'fa-user-tie' },
    { title: 'Flexible Batches',     desc: 'Weekday and weekend batches to suit your schedule.',             icon: 'fa-calendar-days' },
    { title: 'Affordable Fees',      desc: 'Quality education at student-friendly pricing with instalments.', icon: 'fa-piggy-bank' },
];

const WhyChooseUs = () => {
    return (
        <section className="fix section-padding" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="text-center mb-5 wow slideUp" data-delay=".3">
                    <SectionTitle className="text-center">
                        <SectionTitle.SubTitle>WHY CHOOSE US</SectionTitle.SubTitle>
                        <SectionTitle.Title>What Sets Us Apart</SectionTitle.Title>
                    </SectionTitle>
                </div>

                <div className="row g-4">
                    {reasons.map((r, i) => (
                        <div key={i} className="col-lg-4 col-md-6 wow slideUp" data-delay={`${0.2 + i * 0.1}`}>
                            <div
                                className="h-100 p-4 bg-white rounded d-flex align-items-start gap-3"
                                style={{
                                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                                    borderRadius: '14px',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(232,128,36,0.15)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'; }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                                    style={{ width: '48px', height: '48px', background: 'rgba(232,128,36,0.12)', color: 'var(--theme)', fontSize: '1.2rem', borderRadius: '12px' }}
                                >
                                    <i className={`fa-solid ${r.icon}`}></i>
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1rem', marginBottom: '6px' }}>{r.title}</h5>
                                    <p className="mb-0" style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.6 }}>{r.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
