
const courses = [
    { 
        id: 'course-hvac', 
        name: 'HVAC', 
        duration: '3 Months (12 Weeks)', 
        fee: '₹25,000', 
        desc: 'Master heating, ventilation, and air conditioning systems with hands-on practical training and industry-ready skills.', 
        icon: 'fa-fan' 
    },
    { 
        id: 'course-entrepreneurship', 
        name: 'Entrepreneurship', 
        duration: '2 Months (8 Weeks)', 
        fee: '₹18,000', 
        desc: 'Learn to build, launch, and scale your own business with practical entrepreneurship training and mentorship.', 
        icon: 'fa-lightbulb' 
    },
    { 
        id: 'course-digital-marketing', 
        name: 'Digital Marketing', 
        duration: '2.5 Months (10 Weeks)', 
        fee: '₹20,000', 
        desc: 'Master SEO, social media, content marketing, and paid advertising to drive business growth in the digital age.', 
        icon: 'fa-bullseye' 
    },
    { 
        id: 'course-sales', 
        name: 'Sales Executive', 
        duration: '6 Weeks', 
        fee: '₹12,000', 
        desc: 'Develop professional selling skills, customer relationship management, and sales techniques for career success.', 
        icon: 'fa-chart-line' 
    },
    { 
        id: 'course-business', 
        name: 'Business Development', 
        duration: '2 Months (8 Weeks)', 
        fee: '₹15,000', 
        desc: 'Learn strategic business growth, client acquisition, partnership building, and market expansion techniques.', 
        icon: 'fa-handshake' 
    }
];

const Courses = () => {
    return (
        <section className="courses-section fix section-padding bg-light">
            <div className="container">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <span className="sub-title d-inline-block px-3 py-1 rounded mb-3" style={{ backgroundColor: 'rgba(232, 128, 36, 0.1)', color: 'var(--theme)', fontWeight: 600 }}>
                        Programs
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#333' }}>Explore Our Courses</h2>
                    <p className="mt-3 text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Industry-designed programs that give you practical skills and real career opportunities.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {courses.map((course, idx) => (
                        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.1}s`}>
                            <div className="course-card h-100 p-4 bg-white rounded shadow-sm d-flex flex-column transition-all" style={{ border: '1px solid #eee', position: 'relative', overflow: 'hidden', borderTop: '4px solid var(--theme)' }}>
                                <div className="icon-box mb-4 d-inline-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: '60px', height: '60px' }}>
                                    <i className={`fa-solid ${course.icon}`} style={{ fontSize: '1.5rem', color: 'var(--theme)' }}></i>
                                </div>
                                <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333' }}>{course.name}</h3>
                                <p className="text-muted mb-4 flex-grow-1">{course.desc}</p>
                                
                                <div className="course-meta p-3 bg-light rounded mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <div className="d-flex align-items-center">
                                        <i className="fa-regular fa-clock me-2" style={{ color: 'var(--theme)' }}></i>
                                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>{course.duration}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-indian-rupee-sign me-2" style={{ color: 'var(--theme)' }}></i>
                                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#333' }}>{course.fee}</span>
                                    </div>
                                </div>
                                
                                <a href={`#${course.id}`} className="btn btn-outline-dark w-100 py-2 rounded font-weight-bold" style={{ borderColor: '#ddd', fontWeight: 600, transition: 'all 0.3s' }}>
                                    View Details <i className="fa-solid fa-arrow-right ms-2" style={{ fontSize: '0.8rem' }}></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
