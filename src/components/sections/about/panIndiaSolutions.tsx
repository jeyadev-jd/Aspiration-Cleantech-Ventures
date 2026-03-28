import SectionTitle from "@/components/ui/sectionTitle"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const PanIndiaSolutions = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="pan-india-section fix section-padding pb-0" ref={ref}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="pan-india-content">
                            <SectionTitle>
                                <SectionTitle.Title>Pan-India Energy <br />Efficiency And <br />Sustainability Solutions</SectionTitle.Title>
                            </SectionTitle>
                            <p className="mt-3 wow slideUp" data-delay=".3">
                                We are proud to announce the successful implementation of projects across India, delivering energy-efficient and sustainable solutions to various industries. Our efforts have helped clients achieve significant energy savings, reduce operational costs, and minimize environmental impact.
                            </p>

                            <div className="progress-area mt-4 wow slideUp" data-delay=".5">
                                <div className="row">
                                    <div className="col-sm-6 mb-4">
                                        <div className="pro-head d-flex justify-content-between mb-2">
                                            <span className="title" style={{ color: '#6c757d', fontSize: '14px' }}>South</span>
                                            <span className="point" style={{ color: '#6c757d', fontSize: '14px' }}>
                                                {inView ? <CountUp end={75} duration={2} /> : 0}%
                                            </span>
                                        </div>
                                        <div className="progress" style={{ height: '10px', backgroundColor: '#e9ecef', borderRadius: 0 }}>
                                            <div className="progress-bar" style={{
                                                width: inView ? '75%' : '0%',
                                                backgroundColor: '#1D8F2C',
                                                transition: 'width 2s ease-in-out'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="pro-head d-flex justify-content-between mb-2">
                                            <span className="title" style={{ color: '#6c757d', fontSize: '14px' }}>North</span>
                                            <span className="point" style={{ color: '#6c757d', fontSize: '14px' }}>
                                                {inView ? <CountUp end={45} duration={2} /> : 0}%
                                            </span>
                                        </div>
                                        <div className="progress" style={{ height: '10px', backgroundColor: '#e9ecef', borderRadius: 0 }}>
                                            <div className="progress-bar" style={{
                                                width: inView ? '45%' : '0%',
                                                backgroundColor: '#232434',
                                                transition: 'width 2s ease-in-out'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="pro-head d-flex justify-content-between mb-2">
                                            <span className="title" style={{ color: '#6c757d', fontSize: '14px' }}>East</span>
                                            <span className="point" style={{ color: '#6c757d', fontSize: '14px' }}>
                                                {inView ? <CountUp end={35} duration={2} /> : 0}%
                                            </span>
                                        </div>
                                        <div className="progress" style={{ height: '10px', backgroundColor: '#e9ecef', borderRadius: 0 }}>
                                            <div className="progress-bar" style={{
                                                width: inView ? '35%' : '0%',
                                                backgroundColor: '#232434',
                                                transition: 'width 2s ease-in-out'
                                            }} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-4">
                                        <div className="pro-head d-flex justify-content-between mb-2">
                                            <span className="title" style={{ color: '#6c757d', fontSize: '14px' }}>West</span>
                                            <span className="point" style={{ color: '#6c757d', fontSize: '14px' }}>
                                                {inView ? <CountUp end={60} duration={2} /> : 0}%
                                            </span>
                                        </div>
                                        <div className="progress" style={{ height: '10px', backgroundColor: '#e9ecef', borderRadius: 0 }}>
                                            <div className="progress-bar" style={{
                                                width: inView ? '60%' : '0%',
                                                backgroundColor: '#1D8F2C',
                                                transition: 'width 2s ease-in-out'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className="pan-india-image-area position-relative wow slideUp" data-delay=".4">
                            <div className="image-wrapper" style={{ padding: '10px', backgroundColor: '#e5e5e5' }}>
                                <img src="/img/project/ORC-Image.jpg" alt="Chillers" className="img-fluid w-100" style={{ objectFit: 'cover' }} />
                            </div>

                            <div className="stats-cards-wrapper mt-3 d-flex gap-3">
                                <div className="stat-card" style={{ backgroundColor: '#1D8F2C', padding: '30px 20px', flex: 1, color: 'white', textAlign: 'center', boxShadow: '-10px 10px 30px rgba(0,0,0,0.1)' }}>
                                    <h2 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>
                                        {inView ? <CountUp end={200} duration={2} /> : 0}+
                                    </h2>
                                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>Completed<br />Projects in<br />southern region</p>
                                </div>
                                <div className="stat-card" style={{ backgroundColor: '#232434', padding: '30px 20px', flex: 1, color: 'white', textAlign: 'center' }}>
                                    <h2 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', marginTop: '20px' }}>
                                        {inView ? <CountUp end={50} duration={2} /> : 0}+
                                    </h2>
                                    <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.4' }}>Other Region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PanIndiaSolutions
