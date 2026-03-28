import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us",
        value: "+91-96777 63170",
        link: "tel:+919677763170",
    },
    {
        icon: <SuEmail />,
        label: "Make a Quote",
        value: "info@aspcv.com",
        link: "mailto:info@aspcv.com",
    },
    {
        icon: <SuLocation />,
        label: "Location",
        value: "1st Main Rd, Poompuhar Nagar, Kolathur, Chennai, Tamil Nadu 600099",
    },
];

const quickLinks = [
    { text: "About", link: "/about" },
    { text: "Our Services", link: "/service" },

    { text: "FAQ’S", link: "/faq" },
    { text: "Contact Us", link: "/contact" },
];

const services = [
    { text: "Heat Pumps", link: "/heat-pump" },
    { text: "Organic Ranking Cycle", link: "/orc" },
    { text: "Waste to Energy Technology", link: "/waste-to-energy" },
    { text: "Heat Pump Dryer", link: "/heat-pump-dryer" },
    { text: "Waste Heat Recovery System", link: "/waste-heat-recovery" },
    { text: "Solar Dryer", link: "/solar-dryer" },
    { text: "Hydrogen Generator", link: "/hydrogen-generator" },
];



const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/img/logo/aspcv-logo1.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Delivering high-performance thermal and renewable energy solutions for industrial decarbonization. We help industries reduce fossil fuel dependency, lower operating costs, and achieve measurable carbon reduction.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link to="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>

                                        <Link to="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp d-flex justify-content-xl-center"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-6 wow slideUp d-flex justify-content-xl-center"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Services</h3>
                                </div>
                                <ul className="list-area">
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link to={service.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {service.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2025 by <Link to="/">Aspiration Cleantech Ventures</Link> {" "}
                        </p>
                        <ul className="footer-menu wow slideRight" data-delay=".5">
                            <li>
                                <Link to="contact">Terms &amp; Condition</Link>
                            </li>
                            <li>
                                <Link to="contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;