import AboutOne from '@/components/sections/about/aboutOne'
import AchievementOne from '@/components/sections/achievements/achievementOne'

import FaqHomeOne from '@/components/sections/faqHomeOne'
import HeroOne from '@/components/sections/heros/heroOne'
import MarqueOne from '@/components/sections/marques/marqueOne'
import MarqueTwo from '@/components/sections/marques/marqueTwo'
import PanIndiaSolutions from '@/components/sections/about/panIndiaSolutions'
import NewsLetter from '@/components/sections/newsLetter'
import PartnersOne from '@/components/sections/partners/partnersOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'
import SEO from '@/components/SEO'

const Home = () => {
    return (
        <div>
            <SEO 
                title="ASPCV | Cleantech Solutions, Thermal Engineering & Technical Training"
                description="Leading the future of green technology with industrial waste heat recovery, heat pumps, and comprehensive training at the ASPCV Academy."
            />
            <HeroOne />
            <MarqueOne />
            <AboutOne />
            <PartnersOne className='pt-0' />
            <ServicesOne />
            <AchievementOne />
            <MarqueTwo />
            <PanIndiaSolutions />
            <TestimonialOne />
            <FaqHomeOne />

            <NewsLetter />
        </div>
    )
}

export default Home