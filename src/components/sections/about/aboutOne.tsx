import SectionTitle from "@/components/ui/sectionTitle"
import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup"
import { Link } from "react-router-dom"

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3><span className="count">6,561</span>+</h3>
                  </div>
                </div>
                <AboutRoundedTextVideoPopup />
                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/01.jpg")' }}>
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img/about/02.jpeg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title> Welcome To Aspiration Cleantech Ventures</SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  Aspiration Cleantech Ventures delivers high-performance clean energy solutions for industrial decarbonization. We design scalable thermal systems that reduce fossil fuel use, lower costs, and turn wasted energy into measurable value.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <img src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Proven Industrial Performance</h4>
                      <p>
                        High-temperature systems engineered for demanding industrial applications up to 120°C
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <img src="/img/about/secure.png" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Backed by Institutional Support</h4>
                      <p>
                        Supported under the RE: Search (Renewable Energy Search) Program, a collaborative initiative of IIM Ahmedabad’s CIIE and the Ministry of New and Renewable Energy (MNRE), Government of India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/about" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.jpeg" alt="author-img" />
                    <div className="content">
                      <h6> Logesh Nagalingam</h6>
                      <p>Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutOne