import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const academyTestimonials = [
    {
        id: 1,
        image: "/img/team/team-1.jpg", // Added generic placeholders if needed, or leave empty
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "Got placed within 2 weeks after completing the course. The hands-on training made all the difference.",
        author: "Rahul Sharma",
        position: "HVAC Graduate"
    },
    {
        id: 2,
        image: "/img/team/team-2.jpg",
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "Now working as an SEO Executive at a top agency. The live project experience was incredibly valuable.",
        author: "Priya Patel",
        position: "Digital Marketing Graduate"
    },
    {
        id: 3,
        image: "/img/team/team-3.jpg",
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "The role-plays and mock presentations built real confidence. Landed my first sales job within a month.",
        author: "Amit Kumar",
        position: "Sales Executive Graduate"
    },
    {
        id: 4,
        image: "/img/team/team-4.jpg",
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "Launched my own small business using exactly what I learned. The mentorship was outstanding.",
        author: "Sneha Deshmukh",
        position: "Entrepreneurship Graduate"
    },
    {
        id: 5,
        image: "/img/team/team-5.jpg",
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "Now a BD Executive at a fast-growing startup. This course gave me a clear framework for growth.",
        author: "Vikram Singh",
        position: "Business Development Graduate"
    },
    {
        id: 6,
        image: "/img/team/team-6.jpg",
        stars: 5,
        title: "Testimonial",
        heading: "Aspiration Cleantech Academy",
        content: "Switched careers successfully at 28. The practical methodology was perfect for industry entry.",
        author: "Anjali Joshi",
        position: "HVAC Graduate"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonial-section section-padding fix">
            <div className="container">
                <div className="testimonial-wrapper">
                    <Swiper
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el: ".dot-2",
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {academyTestimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-items">
                                    <div
                                        className="tesimonial-image"
                                        style={{ 
                                            backgroundImage: `url(${testimonial.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundColor: '#f4f4f4'
                                        }}
                                    >
                                        <div className="star">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <i className="fas fa-star" key={i} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-title">
                                            <span>{testimonial.title}</span>
                                            <h2>{testimonial.heading}</h2>
                                        </div>
                                        <p className="mt-3 mt-md-0">{testimonial.content}</p>
                                        <div className="author-details">
                                            <h5>{testimonial.author}</h5>
                                            <span>{testimonial.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-dot-2">
                        <div className="dot-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
