
import SectionTitle from "@/components/ui/sectionTitle";
import { Link } from 'react-router-dom';

interface Course {
    id: string;
    name: string;
    duration: string;
    fee: string;
    desc: string;
    icon: string;
    about: string;
    benefits: string[];
    skills: string[];
    jobs: string[];
    // Set to an actual image path like '/img/academy/hvac.jpg' when available
    image: string | null;
}

const courses: Course[] = [
    {
        id: 'course-hvac',
        name: 'HVAC',
        duration: '3 Months (12 Weeks)',
        fee: '25,000',
        desc: 'Master heating, ventilation, and air conditioning systems with hands-on practical training and industry-ready skills.',
        icon: 'fa-fan',
        image: '/img/service/hvac.jpg', // Replace with: '/img/academy/hvac.jpg'
        about: 'Covers design, installation, maintenance, and troubleshooting of HVAC systems with hands-on experience using modern equipment and best practices. Prepares students for immediate employment in the HVAC industry.',
        benefits: ['Hands-on training with real HVAC equipment', 'Industry-recognized certification', 'Placement assistance with leading companies', 'Weekend batch available for working professionals'],
        skills: ['HVAC system design & installation', 'Refrigeration cycle fundamentals', 'Electrical wiring and controls', 'Preventive maintenance', 'Energy-efficiency optimization'],
        jobs: ['HVAC Technician', 'Service Engineer', 'Installation Specialist', 'HVAC Sales Consultant', 'Independent Contractor'],
    },
    {
        id: 'course-entrepreneurship',
        name: 'Entrepreneurship',
        duration: '2 Months (8 Weeks)',
        fee: '18,000',
        desc: 'Learn to build, launch, and scale your own business with practical entrepreneurship training and mentorship.',
        icon: 'fa-lightbulb',
        image: '/img/academy/entrepreneur.jpg', // Replace with: '/img/academy/entrepreneurship.jpg'
        about: 'Turn business ideas into reality; covers ideation, planning, funding, marketing, and scaling. Includes building a real business plan with mentorship from entrepreneurs.',
        benefits: ['Build a complete business plan', 'Mentorship from successful entrepreneurs', 'Financial planning & budgeting', 'Investor readiness & pitch practice'],
        skills: ['Idea validation', 'Market research', 'Financial planning', 'Marketing strategy', 'Pitch deck creation'],
        jobs: ['Startup Founder', 'Business Planner', 'Franchise Owner', 'BD Manager', 'SME Consultant'],
    },
    {
        id: 'course-digital-marketing',
        name: 'Digital Marketing',
        duration: '2.5 Months (10 Weeks)',
        fee: '20,000',
        desc: 'Master SEO, social media, content marketing, and paid advertising to drive business growth in the digital age.',
        icon: 'fa-bullseye',
        image: '/img/academy/digitalmarketing.jpg', // Replace with: '/img/academy/digital-marketing.jpg'
        about: 'Makes students proficient in SEO, Google Ads, social media, email marketing, and analytics with live projects and real campaigns.',
        benefits: ['Live project work', 'Google/Meta certification prep', 'Portfolio building with case studies', 'Free tools access during training'],
        skills: ['SEO', 'Google Ads / PPC', 'Social media marketing', 'Content & copywriting', 'Email automation & analytics'],
        jobs: ['SEO Executive', 'Social Media Manager', 'PPC Specialist', 'Content Marketer', 'Freelance Digital Marketer'],
    },
    {
        id: 'course-sales',
        name: 'Sales Executive',
        duration: '6 Weeks',
        fee: '12,000',
        desc: 'Develop professional selling skills, customer relationship management, and sales techniques for career success.',
        icon: 'fa-chart-line',
        image: '/img/academy/sales-executive.webp', // Replace with: '/img/academy/sales.jpg'
        about: 'Training in modern sales techniques, CRM tools, and customer psychology with heavy use of role-plays and mock presentations.',
        benefits: ['Role-play based training', 'Mock presentations with feedback', 'CRM hands-on practice', 'Resume & interview prep'],
        skills: ['Prospecting & lead generation', 'CRM tools', 'Negotiation & closing', 'Pipeline management', 'After-sales excellence'],
        jobs: ['Sales Executive', 'Inside Sales Rep', 'Key Account Manager', 'Territory Sales Manager', 'Field Sales Rep'],
    },
    {
        id: 'course-business',
        name: 'Business Development',
        duration: '2 Months (8 Weeks)',
        fee: '15,000',
        desc: 'Learn strategic business growth, client acquisition, partnership building, and market expansion techniques.',
        icon: 'fa-handshake',
        image: '/img/academy/business-development.webp', // Replace with: '/img/academy/business-development.jpg'
        about: 'Focus on identifying growth opportunities, building partnerships, and expanding markets; combines strategy and relationship building.',
        benefits: ['Real-world case studies & simulations', 'Mentorship from BD leaders', 'Market analysis training', 'Proposal writing & presentation'],
        skills: ['Strategic planning', 'Client acquisition & retention', 'Partnership building', 'Revenue growth strategy', 'Proposal writing'],
        jobs: ['Business Development Executive', 'Account Manager', 'BD Manager', 'Growth Manager', 'Partnerships Executive'],
    }
];

interface CourseCatalogCardProps {
    course: Course;
}

const CourseCatalogCard = ({ course }: CourseCatalogCardProps) => {
    return (
        <div
            id={course.id}
            className="course-catalog-card wow slideUp"
            data-delay=".3"
            style={{
                background: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                marginBottom: '24px',
            }}
        >
            {/* Card Header Row */}
            <div className="row g-0 align-items-stretch">
                {/* Image Area */}
                <div className="col-md-3" style={{ minHeight: '220px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                    {course.image ? (
                        <img
                            src={course.image}
                            alt={course.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    ) : (
                        /* Placeholder — swap for <img> when you add a real photo */
                        <div
                            style={{
                                height: '100%',
                                minHeight: '220px',
                                background: 'linear-gradient(145deg, #1a1a2e 0%, #0f3460 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                            }}
                        >
                            <i className={`fa-solid ${course.icon}`} style={{ fontSize: '3rem', color: 'var(--theme)', opacity: 0.85 }}></i>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>COURSE IMAGE</span>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="col-md-9">
                    <div className="p-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <span
                                    className="badge px-3 py-1"
                                    style={{ background: 'rgba(29, 143, 44, 0.12)', color: 'var(--theme)', fontWeight: 600, fontSize: '0.8rem', borderRadius: '30px' }}
                                >
                                    <i className={`fa-solid ${course.icon} me-1`}></i>{course.name}
                                </span>
                            </div>
                            <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: '1.35rem', marginBottom: '8px' }}>{course.name} Training Program</h3>
                            <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.97rem', margin: 0 }}>{course.desc}</p>
                        </div>

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-3">
                            <div className="d-flex gap-4 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <i className="fa-regular fa-clock" style={{ color: 'var(--theme)' }}></i>
                                    <span style={{ fontWeight: 600, color: '#444', fontSize: '0.9rem' }}>{course.duration}</span>
                                </div>

                            </div>
                            <div className="d-flex gap-2">
                                <Link to={`/${course.id}`} className="theme-btn py-2 px-4" style={{ fontSize: '0.9rem' }}>
                                    More Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

const CourseCatalog = () => {
    return (
        <section id="courses" className="fix section-padding">
            <div className="container">
                <div className="text-center mb-5 wow slideUp" data-delay=".3">
                    <SectionTitle className="text-center">
                        <SectionTitle.SubTitle>COURSE CATALOG</SectionTitle.SubTitle>
                        <SectionTitle.Title>Explore Our Programs</SectionTitle.Title>
                    </SectionTitle>
                    <p className="text-muted mt-2" style={{ fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
                        Industry-designed programs that give you practical skills and real career opportunities.
                    </p>
                </div>

                <div>
                    {courses.map(course => (
                        <CourseCatalogCard
                            key={course.id}
                            course={course}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseCatalog;
