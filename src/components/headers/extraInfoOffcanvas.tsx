import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuList from './mobileNavBar';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/" className="d-flex align-items-center gap-2">
                                        <img src="/img/logo/aspcv-logo1.png" alt="logo-img" className="img-fluid" style={{ maxHeight: '50px', width: 'auto' }} />
                                        <h4 className="mb-0 d-none d-sm-block" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                                        <h4 className="mb-0 d-block d-sm-none" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList />
                            <p className="text d-none d-lg-block">
                                Delivering high-performance thermal and renewable energy solutions for industrial decarbonization. We help industries reduce fossil fuel dependency, lower operating costs, and achieve measurable carbon reduction.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fa-solid fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#">No : 2, 1st Main Rd, Poompuhar Nagar, Kolathur, Chennai, Tamil Nadu 600099</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-solid fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="mailto:info@aspcv.com"><span className="mailto:info@aspcv.com">info@aspcv.com</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-solid fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#">Mon-Friday, 11am -06pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fa-solid fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="tel:+91 96777 63170">+91 96777 63170</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link to="/contact" className="theme-btn text-center">
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </Link>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link to="https://www.facebook.com/AEPLsolar"><i className="fab fa-facebook-f" /></Link>
                                    <Link to="https://www.youtube.com/@aspcv"><i className="fab fa-youtube" /></Link>
                                    <Link to="https://www.linkedin.com/company/aspiration-cleantech-ventures/"><i className="fab fa-linkedin-in" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );
};

export default ExtraInfoOffcanvas;