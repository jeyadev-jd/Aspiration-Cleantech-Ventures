import { Link, useLocation } from "react-router-dom";

const services = [
    { name: 'Heat Pump', link: '/heat-pump' },
    { name: 'Organic Rankine Cycle (ORC)', link: '/orc' },
    { name: 'Waste to Energy Technology', link: '/waste-to-energy' },
    { name: 'Heat Pump Dryer', link: '/heat-pump-dryer' },
    { name: 'Waste Heat Recovery System', link: '/waste-heat-recovery' },
    { name: 'Solar Dryer', link: '/solar-dryer' },
    { name: 'Hydrogen Generator', link: '/hydrogen-generator' },
];

const ServiceSidebar = () => {
    const location = useLocation();

    return (
        <div className="main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h3>All Services</h3>
                </div>
                <div className="widget-categories">
                    <ul>
                        {services.map((service, index) => (
                            <li key={index} className={location.pathname === service.link ? 'active' : ''}>
                                <Link to={service.link}>{service.name}</Link>
                                <i className="fa-solid fa-arrow-right-long" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;