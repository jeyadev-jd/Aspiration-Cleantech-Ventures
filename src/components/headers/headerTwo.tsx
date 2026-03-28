import { Link } from "react-router-dom"
import TopHeaderOne from "./topHeaderOne"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"

const HeaderTwo = () => {
    const [isSticky] = useSticky()
    return (
        <header className="header-section-2">
            <TopHeaderOne className="top-style-2" wrapperClass="style-2" />
            <div id="header-sticky" className={`header-2 ${isSticky ? 'sticky' : ''}`}>
                <div className="main-logo">
                    <Link to="/" className="d-flex align-items-center gap-2">
                        <img src="/img/logo/aspcv-logo1.png" alt="logo-image" className="img-fluid" style={{ maxHeight: '50px', width: 'auto' }} />
                        <h4 className="mb-0 text-white d-none d-sm-block" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                        <h4 className="mb-0 text-white d-block d-sm-none" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-none">
                                <Link to="/" className="header-logo d-flex align-items-center gap-2">
                                    <img src="/img/logo/aspcv-logo1.png" alt="logo-img" className="img-fluid" style={{ maxHeight: '50px', width: 'auto' }} />
                                    <h4 className="mb-0 d-none d-sm-block" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                                    <h4 className="mb-0 d-block d-sm-none" style={{ fontFamily: '"Montserrat Alternates", sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '1.2' }}>Aspiration Cleantech <br /> Ventures</h4>
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/contact" className="theme-btn">
                                        <span>
                                            free Consultancy
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderTwo