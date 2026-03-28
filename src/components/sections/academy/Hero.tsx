import SectionTitle from "@/components/ui/sectionTitle";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className="hero-section fix section-padding" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 wow slideUp" data-delay=".3">
            <SectionTitle>
              <SectionTitle.SubTitle>ASPIRATION CLEANTECH ACADEMY</SectionTitle.SubTitle>
              <SectionTitle.Title>
                Build Real Skills. <br />
                Launch Your <span style={{ color: 'var(--theme)' }}>Career.</span>
              </SectionTitle.Title>
            </SectionTitle>
            <p className="mt-3 wow slideUp" data-delay=".5" style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.7, maxWidth: '560px' }}>
              Industry-designed programs with 80% hands-on practical training. Join thousands of graduates working at top companies across India.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4 wow slideUp" data-delay=".6">
              <Link to="/academy-register" className="theme-btn">Register Now &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-5 wow slideUp" data-delay=".5">
            <div className="row g-3" ref={ref}>
              {[
                { value: '80%', label: 'Practical Training', icon: 'fa-flask', accent: true },
                { value: '20%', label: 'Theory', icon: 'fa-book-open', accent: false },
                { value: '100%', label: 'Career Ready', icon: 'fa-briefcase', accent: true },
                { value: '24h', label: 'Response Time', icon: 'fa-headset', accent: false },
              ].map((stat, i) => (
                <div className="col-6" key={i}>
                  <div
                    className="p-4 rounded text-center"
                    style={{
                      background: stat.accent ? 'var(--theme)' : '#1a1a2e',
                      color: '#fff',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s',
                    }}
                  >
                    <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'block', opacity: 0.85 }}></i>
                    <h3 className="mb-0 text-white" style={{ fontWeight: 800, fontSize: '1.8rem' }}>
                      {inView ? <CountUp end={parseInt(stat.value)} duration={2.5} /> : 0}
                      {stat.value.replace(/[0-9]/g, '')}
                    </h3>
                    <p className="mb-0" style={{ opacity: 0.85, fontSize: '0.9rem', fontWeight: 500 }}>{stat.label}</p>
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

export default Hero;
