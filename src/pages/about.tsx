import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import PageTitle from "@/components/sections/pageTitle"
import VisionForFuture from "@/components/sections/about/visionForFuture"
import HistoryTimeline from "@/components/sections/about/historyTimeline"
import LeadershipTeam from "@/components/sections/teames/leadershipTeam"

const About = () => {
  return (
    <>
      <PageTitle title="About Us" currentPage="About Us"/>
      <VisionForFuture/>
      <HistoryTimeline/>
      <MarqueTwo className="section-padding"/>
      <LeadershipTeam/>
      <PartnersOne/>
    </>
  )
}

export default About