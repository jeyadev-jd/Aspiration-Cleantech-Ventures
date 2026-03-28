import { Link } from "react-router-dom"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"

const HeaderOne = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <div id="header-sticky" className={`header-1 ${isSticky ? 'sticky' : ''} `}>
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main style-2">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo d-flex align-items-center gap-2">
                                        <img src="/img/logo/aspcv-logo1.png" alt="logo-img" className="img-fluid" style={{ maxHeight: '45px', width: 'auto', flexShrink: 0 }} />
                                        <h4 className="mb-0" style={{
                                            fontFamily: '"Montserrat Alternates", sans-serif',
                                            fontWeight: 700,
                                            fontSize: 'clamp(11px, 3vw, 20px)',
                                            lineHeight: '1.25',
                                            whiteSpace: 'normal',
                                            wordBreak: 'break-word',
                                        }}>Aspiration Cleantech <br /> Ventures</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />

                                {/* Small mascot icon in navbar */}
                                <img
                                    src="/img/he.png"
                                    alt="ASPCV Mascot"
                                    style={{
                                        height: '34px',
                                        width: '34px',
                                        objectFit: 'contain',
                                        opacity: 0.85,
                                        flexShrink: 0,
                                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
                                    }}
                                />

                                <div className="header__hamburger d-xl-block my-auto">
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

export default HeaderOne