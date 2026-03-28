
const courseDetailsData = [
    {
        id: 'course-hvac',
        title: 'HVAC',
        about: 'Covers design, installation, maintenance, and troubleshooting of HVAC systems with hands‑on experience using modern equipment and best practices. Prepares students for immediate employment in the HVAC industry.',
        benefits: [
            'Hands-on practical training with real HVAC equipment',
            'Industry-recognized certification',
            'Placement assistance with leading HVAC companies',
            'Experienced HVAC professionals as trainers',
            'Modern training labs and tools',
            'Weekend batch available for working professionals'
        ],
        skills: 'HVAC system design and installation, refrigeration cycle, electrical wiring and controls, preventive maintenance, troubleshooting and diagnostics, energy‑efficiency optimization, safety standards and compliance.',
        jobs: 'HVAC Technician, Service Engineer, Maintenance Support Executive, Installation Specialist, HVAC Sales Consultant, independent HVAC contractor, technical sales roles.'
    },
    {
        id: 'course-entrepreneurship',
        title: 'Entrepreneurship',
        about: 'Turn business ideas into reality; covers ideation, planning, funding, marketing, and scaling. Includes building a real business plan with mentorship from entrepreneurs.',
        benefits: [
            'Develop a full business plan',
            'Mentorship from successful entrepreneurs',
            'Financial planning and budgeting skills',
            'Networking and ecosystem access',
            'Pitch practice and investor readiness'
        ],
        skills: 'Idea validation, market research, financial planning, marketing strategy, team building and leadership, pitch deck creation, legal and compliance basics.',
        jobs: 'Startup founder, small business operator, business planner and consultant, franchise owner, business development manager; leading innovation teams in larger companies.'
    },
    {
        id: 'course-digital-marketing',
        title: 'Digital Marketing',
        about: 'Makes students proficient in SEO, Google Ads, social media, email marketing, and analytics with live projects and real campaigns.',
        benefits: [
            'Live projects',
            'Trainers who are practitioners',
            'Placement support with agencies',
            'Google/Meta certification prep',
            'Portfolio building with case studies',
            'Free tools access during training'
        ],
        skills: 'SEO, Google Ads/PPC, social media marketing, content marketing and copywriting, email marketing automation, analytics and performance tracking, WordPress and landing pages.',
        jobs: 'Social Media Executive, SEO Executive/Specialist, Marketing Assistant, Content Marketing Specialist, PPC / Google Ads Specialist, freelance marketer, performance marketing analyst.'
    },
    {
        id: 'course-sales',
        title: 'Sales Executive',
        about: 'Training in modern sales techniques, CRM tools, and customer psychology; heavy use of role‑plays and mock presentations.',
        benefits: [
            'Role‑play based training',
            'Mock presentations with feedback',
            'Resume and interview prep',
            'CRM hands‑on',
            'Industry guest lectures',
            'Placement assistance'
        ],
        skills: 'Prospecting and lead generation, CRM, communication and persuasion, negotiation and closing, product presentation, pipeline management, after‑sales service excellence.',
        jobs: 'Sales Executive, Customer Handling Executive, Field Sales Representative, Inside Sales Executive, Key Account Manager, Territory Sales Manager.'
    },
    {
        id: 'course-business',
        title: 'Business Development',
        about: 'Focus on identifying growth opportunities, building partnerships, and expanding markets; combines strategy and relationship building.',
        benefits: [
            'Real‑world case studies',
            'Simulations',
            'Networking skills',
            'Mentorship from BD leaders',
            'Market analysis and competitive intelligence',
            'Proposal writing and presentation training',
            'Career and placement support'
        ],
        skills: 'Strategic planning and market analysis, client acquisition and retention, partnership and alliance building, proposal writing and pitching, revenue growth strategies, lead generation, business networking.',
        jobs: 'Business Development Executive/Manager, partnerships and alliances roles, account management, growth roles in tech, consulting, and services companies.'
    }
];

const CourseDetails = () => {
    return (
        <section className="course-details-section fix section-padding">
            <div className="container">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#333' }}>Course Details</h2>
                </div>

                {courseDetailsData.map((course, idx) => (
                    <div id={course.id} key={course.id} className="course-detail-block mb-5 pt-4 wow fadeInUp" data-wow-delay=".3s" style={{ borderTop: idx !== 0 ? '1px solid #eee' : 'none' }}>
                        <h3 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--theme)' }}>{course.title}</h3>
                        
                        <div className="row g-4">
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <h4 style={{ fontWeight: 600, color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>About This Course</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{course.about}</p>
                                </div>

                                <div className="mb-4">
                                    <h4 style={{ fontWeight: 600, color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>Skills You'll Learn</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{course.skills}</p>
                                </div>

                                <div>
                                    <h4 style={{ fontWeight: 600, color: '#333', marginBottom: '1rem', fontSize: '1.2rem' }}>Job Opportunities / Roles</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{course.jobs}</p>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="p-4 rounded bg-light" style={{ border: '1px solid #e9ecef' }}>
                                    <h4 className="mb-3" style={{ fontWeight: 600, color: '#333', fontSize: '1.2rem', borderBottom: '2px solid var(--theme)', paddingBottom: '10px', display: 'inline-block' }}>Benefits</h4>
                                    <ul className="list-unstyled mt-2">
                                        {course.benefits.map((benefit, i) => (
                                            <li key={i} className="mb-3 d-flex align-items-start text-muted">
                                                <i className="fa-solid fa-check mt-1 me-2" style={{ color: 'var(--theme)' }}></i>
                                                <span style={{ fontSize: '0.95rem' }}>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseDetails;
