import SectionTitle from "@/components/ui/sectionTitle";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CareerOpportunities = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    return (
        <section className="fix section-padding" style={{ background: '#1a1a2e', color: '#fff' }}>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <SectionTitle>
                            <SectionTitle.SubTitle>PLACEMENTS</SectionTitle.SubTitle>
                            <SectionTitle.Title>
                                <span className="text-white">Career Opportunities</span>
                            </SectionTitle.Title>
                        </SectionTitle>
                        <p style={{ color: '#aab', lineHeight: 1.8, fontSize: '1.05rem', margin: '16px 0 24px' }}>
                            Our graduates are working at leading companies across industries. Your career transformation starts here.
                        </p>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            {[
                                'Industry Certification that employers recognize and trust.',
                                'Regular placement drives with hiring partners.',
                                'Dedicated career guidance and resume support.',
                            ].map((item, i) => (
                                <li key={i} className="d-flex align-items-center gap-3">
                                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--theme)', fontSize: '1.1rem', flexShrink: 0 }}></i>
                                    <span style={{ color: '#ccc', fontSize: '1rem' }}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#register" className="theme-btn mt-4 d-inline-block">Start Your Journey</a>
                    </div>

                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="row g-3" ref={ref}>
                            {[
                                { value: '90%', label: 'Career advancement within 6 months', icon: 'fa-rocket' },
                                { value: '500+', label: 'Students placed since inception', icon: 'fa-users' },
                                { value: '50+', label: 'Hiring partner companies', icon: 'fa-building' },
                                { value: '10+', label: 'Years of training expertise', icon: 'fa-book-open' },
                            ].map((stat, i) => (
                                <div key={i} className="col-6">
                                    <div className="p-4 rounded text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px' }}>
                                        <i className={`fa-solid ${stat.icon} mb-2`} style={{ fontSize: '1.4rem', color: 'var(--theme)', display: 'block' }}></i>
                                        <h3 style={{ fontWeight: 800, color: '#fff', fontSize: '1.8rem', marginBottom: '4px' }}>
                                            {inView ? <CountUp end={parseInt(stat.value)} duration={2.5} /> : 0}
                                            {stat.value.replace(/[0-9]/g, '')}
                                        </h3>
                                        <p style={{ color: '#aab', fontSize: '0.85rem', margin: 0, lineHeight: 1.4 }}>{stat.label}</p>
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

export default CareerOpportunities;
