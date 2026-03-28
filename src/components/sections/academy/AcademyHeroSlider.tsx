import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}

const slidesData: SlideType[] = [
  {
    id: 1,
    image: '/img/academy/Mentor.webp',
    title: 'WELCOME TO ASPIRATION CLEANTECH ACADEMY',
    heading: 'We help you build skills that actually get you hired!',
    description: 'Aspiration Cleantech Academy bridges the gap between classroom learning and real industry needs. Our expert trainers, hands-on labs, and dedicated placement support give every student the edge they need.',
    link: '#courses',
  }
];

const AcademyHeroSlider = () => {
  return (
    <section className="hero-section hero-1">
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {(({ isActive }) => <Card slide={slide} isActive={isActive} />)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  )
}

export default AcademyHeroSlider

const Card = ({ slide, isActive }: { slide: SlideType; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
    >
      <div className="hero-image bg-cover" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="hero-content" style={{ padding: '100px 0 100px' }}>
              <motion.h6
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.3,
                  ease: 'linear',
                }}
              >
                {slide.title}
              </motion.h6>
              <motion.h1
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.5,
                  ease: 'linear',
                }}
                dangerouslySetInnerHTML={{ __html: slide.heading }}></motion.h1>
              <motion.p
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.7,
                  ease: 'linear',
                }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: isActive ? '0' : '100%', opacity: isActive ? 1 : 0 }}
                transition={{
                  duration: .5,
                  delay: 0.9,
                  ease: 'linear',
                }}
                className="hero-button"
              >
                <a href={slide.link} className="theme-btn theme-color-2">
                  <span>Explore Courses <i className="fas fa-chevron-right" /></span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
