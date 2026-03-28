import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const leadershipData = [
    {
        id: 1,
        name: "Dr Bhoovarahan Thirumalai",
        role: "CEO and Co-founder",
        image: "/img/team/BHOOVARAHAN-THIRUMALAI.png"
    },
    {
        id: 2,
        name: "Mr Logesh Nagalingam",
        role: "Director",
        image: "/img/team/logesh.jpeg"
    },
    {
        id: 3,
        name: "Dr Madhavan Nampoothiri",
        role: "Mentor",
        image: "/img/team/madhavan-nampoothri.jpg"
    },
    {
        id: 4,
        name: "Mr Kannan Narayanaswamy",
        role: "Mentor",
        image: "/img/team/Kannan.png"
    },
    {
        id: 5,
        name: "Mr Narasimhan Santhanam",
        role: "Mentor",
        image: "/img/team/Narasimhan.jpeg"
    }
];

const LeadershipTeam = () => {
    return (
        <section className="leadership-team-section section-padding section-bg">
            <div className="container">
                <SectionTitle className="text-center mb-5">
                    <SectionTitle.Title>Leadership Team</SectionTitle.Title>
                </SectionTitle>

                {/* Top Row: 3 members */}
                <div className="row justify-content-center g-4 mb-4">
                    {leadershipData.slice(0, 3).map((member) => (
                        <div key={member.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="team-member-card text-center" style={{ maxWidth: "250px" }}>
                                <div className="member-img mb-3">
                                    <img src={member.image} alt={member.name} className="img-fluid" style={{ width: "100%", height: "250px", objectFit: "cover", backgroundColor: "#eee" }} />
                                </div>
                                <h5 className="mb-1" style={{ fontSize: "1.1rem", color: "#1a2431" }}>{member.name}</h5>
                                <p className="mb-3 text-muted" style={{ fontSize: "0.9rem" }}>{member.role}</p>
                                <Link to="#" className="theme-btn" style={{ padding: "8px 20px", fontSize: "0.9rem", backgroundColor: "#e88024", color: "white" }}>
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: 2 members */}
                <div className="row justify-content-center g-4">
                    {leadershipData.slice(3, 5).map((member) => (
                        <div key={member.id} className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                            <div className="team-member-card text-center" style={{ maxWidth: "250px" }}>
                                <div className="member-img mb-3">
                                    <img src={member.image} alt={member.name} className="img-fluid" style={{ width: "100%", height: "250px", objectFit: "cover", backgroundColor: "#eee" }} />
                                </div>
                                <h5 className="mb-1" style={{ fontSize: "1.1rem", color: "#1a2431" }}>{member.name}</h5>
                                <p className="mb-3 text-muted" style={{ fontSize: "0.9rem" }}>{member.role}</p>
                                <Link to="#" className="theme-btn" style={{ padding: "8px 20px", fontSize: "0.9rem", backgroundColor: "#e88024", color: "white" }}>
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default LeadershipTeam
