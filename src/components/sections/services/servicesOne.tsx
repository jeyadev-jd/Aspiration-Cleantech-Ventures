import { serviceOneData } from "@/db/serviceOneData"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ServiceCard from "./serviceCard"
import SectionTitle from "@/components/ui/sectionTitle"

import 'swiper/css'
import 'swiper/css/pagination'

const ServicesOne = () => {
  return (
    <section id="services" className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}>
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>
              Provide Industrial Energy Solutions
            </SectionTitle.Title>
          </SectionTitle>
        </div>
        <div className="service-wrapper">
          <Swiper
            spaceBetween={30}
            speed={1500}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".service-dot-pagination"
            }}
            breakpoints={{
              1199: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Autoplay]}
          >
            {serviceOneData.map((service, index) => (
              <SwiperSlide key={index} style={{ height: "auto", display: "flex", flexDirection: "column" }}>
                <ServiceCard service={service} className="h-100 w-100" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot-2 text-center mt-4 position-relative z-1" style={{ width: "fit-content", margin: "0 auto", padding: "0 20px" }}>
            <div className="service-dot-pagination" />
          </div>
        </div>
      </div >
    </section >

  )
}

export default ServicesOne