import { Link, useLocation } from "react-router-dom";

export const coursesList = [
    { name: 'HVAC Training', link: '/course-hvac' },
    { name: 'Entrepreneurship', link: '/course-entrepreneurship' },
    { name: 'Digital Marketing', link: '/course-digital-marketing' },
    { name: 'Sales Executive', link: '/course-sales' },
    { name: 'Business Development', link: '/course-business' },
];

const CourseSidebar = () => {
    const location = useLocation();

    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>All Programs</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {coursesList.map((course, index) => (
                            <li key={index} className={location.pathname === course.link ? 'active' : ''}>
                                <Link to={course.link}>{course.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget mt-4" style={{ padding: '30px', background: 'var(--theme)', borderRadius: '15px', color: '#fff', textAlign: 'center' }}>
                <h4 style={{ color: '#fff', marginBottom: '20px' }}>Need Help?</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '15px' }}>
                    Speak with our academy advisors for career counseling.
                </p>
                <div style={{ padding: '15px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px' }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: '1.5rem', marginBottom: '10px' }}></i>
                    <h5 style={{ color: '#fff', margin: 0 }}>+91 96777 63170</h5>
                </div>
            </div>
        </div>
    );
};

export default CourseSidebar;
