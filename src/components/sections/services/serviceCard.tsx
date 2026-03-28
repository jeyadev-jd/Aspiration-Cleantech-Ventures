import { ServiceDataType } from "@/db/serviceOneData";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, className }: { service: ServiceDataType; className?: string }) => {
    return (
        <div className={`service-box-items d-flex flex-column h-100 ${className}`}>
            <div className="icon align-self-start">
                <img src={service.icon} alt="icon-img" />
            </div>
            <div className="content d-flex flex-column flex-grow-1">
                <h4>
                    <Link to={service.link}>
                        {service.title}
                    </Link>
                </h4>
                <p>
                    {service.description}
                </p>
                <Link to={service.link} className="theme-btn-2 mt-auto">
                    read More
                    <i className="fa-solid fa-arrow-right-long" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard