import { Fragment } from 'react'
import Marquee from 'react-fast-marquee';

const textSliderData = [
    "Automotive",
    "Pharma",
    "Chemical",
    "Machinery & Equipments",
    "Food & Dairy",
    "Textile",
    "Wood",
    "Paper",
    "Rubber & Plastic"
];

const MarqueTwo = ({ className }: { className?: string }) => {
    return (
        <div className={`marque-section ${className}`}>
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <Marquee
                        speed={50}
                        gradient={false}
                        autoFill={true}
                    >
                        <div className="marquee-item style-2 d-flex align-items-center" style={{ whiteSpace: 'nowrap', float: 'none', margin: 0 }}>
                            {textSliderData.map((text, index) => (
                                <Fragment key={index}>
                                    <span className="text-slider d-flex align-items-center justify-content-center" style={{ marginRight: '30px' }}>
                                        <img src="/img/asterisk.svg" alt="img" style={{ width: '30px', height: '30px' }} />
                                    </span>
                                    <span className="text-slider text-style" style={{ marginRight: '40px' }}>{text}</span>
                                </Fragment>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default MarqueTwo