import { useState } from "react";
import ModalVideo from 'react-modal-video';

interface Props {
    videoId?: string;
    imageSrc?: string;
}

const ServiceDetailsVideoPopup = ({ videoId = "Cn4G2lZ_g2I", imageSrc }: Props) => {
    const [isOpen, setOpen] = useState(false);

    const imageUrl = imageSrc || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <>
            <div className="video-thumb">
                <img src={imageUrl} alt="img" style={{ borderRadius: '10px' }} />
                <div className="video-box">
                    <a href="#" onClick={(e) => { e.preventDefault(), setOpen(true) }} className="video-btn ripple video-popup">
                        <i className="fa-solid fa-play" />
                    </a>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default ServiceDetailsVideoPopup