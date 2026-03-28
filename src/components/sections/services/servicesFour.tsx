import { serviceOneData } from "@/db/serviceOneData"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

const ServicesFour = () => {
    return (
        <section id="services" className="service-section-3 section-padding pt-0">
            <div className="line-shape-2">
                <img src="/img/service/line-shape-2.png" alt="shape-img" />
            </div>
            <div className="container">
                <SectionTitle className="text-center">
                    <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
                    <SectionTitle.Title>Provide Comprehensive<br /> Ecological Service</SectionTitle.Title>
                </SectionTitle>
                <div className="service-wrapper">
                    <Swiper
                        spaceBetween={30}
                        speed={1500}
                        loop
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".service-dot-pagination"
                        }}
                        breakpoints={{
                            1199: { slidesPerView: 4 },
                            991: { slidesPerView: 3 },
                            767: { slidesPerView: 2 },
                            575: { slidesPerView: 2 },
                            0: { slidesPerView: 1 },
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            serviceOneData.map((service) => {
                                return (
                                    <SwiperSlide key={service.id} style={{ height: "auto", display: "flex", flexDirection: "column" }}>
                                        <div className="wow slideUp h-100 w-100 d-flex flex-column" data-delay=".9" style={{ paddingBottom: '40px' }}>
                                            <ServiceCard service={service} className={`style-3 mt-70 h-100 w-100 ${service.active ? 'active' : ''}`} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className="swiper-dot-2 text-center mt-4">
                        <div className="service-dot-pagination" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ServicesFour