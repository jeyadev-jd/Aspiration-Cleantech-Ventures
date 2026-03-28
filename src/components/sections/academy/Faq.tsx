import SectionTitle from "@/components/ui/sectionTitle";

const academyFaqData = [
    {
        id: 'faq1',
        question: 'Who can join Aspiration Cleantech Academy?',
        answer: 'Our programs are ideal for Engineering, Diploma, and ITI students, as well as freshers and career switchers who want practical skill development and job placement in their chosen field.',
        delay: '.3',
        isOpen: true
    },
    {
        id: 'faq2',
        question: 'Are the courses online or offline?',
        answer: 'We offer both classroom and blended learning options. Most courses include hands-on lab sessions at our training center for practical exposure.',
        delay: '.5',
        isOpen: false
    },
    {
        id: 'faq3',
        question: 'What certifications will I receive?',
        answer: 'Upon successful completion, you receive an industry-recognized certification from Aspiration Cleantech Academy that demonstrates your practical competence.',
        delay: '.7',
        isOpen: false
    },
    {
        id: 'faq4',
        question: 'Do you provide placement assistance?',
        answer: 'Yes — we provide dedicated placement assistance, regular placement drives with hiring partners, and special placement opportunities within our own organization for top performers.',
        delay: '.9',
        isOpen: false
    },
    {
        id: 'faq5',
        question: 'Can I pay the fees in installments?',
        answer: 'Yes. We offer flexible fee payment plans including installment options to make quality education accessible to all students.',
        delay: '1.1',
        isOpen: false
    },
    {
        id: 'faq6',
        question: 'What is the batch size?',
        answer: 'To ensure personalized attention and adequate hands-on practice with equipment, we keep batch sizes small and manageable.',
        delay: '1.3',
        isOpen: false
    }
];

const Faq = () => {
    return (
        <section className="faq-section fix section-padding">
            <div className="right-shape">
                <img src="/img/faq/right-shape.png" alt="shape-img" />
            </div>
            <div className="faq-shape-box">
                <div className="faq-shape">
                    <img src="/img/faq/shape.png" alt="shape-img" />
                </div>
            </div>
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6 wow slideUp d-flex" data-delay=".4">
                            <div className="faq-image w-100">
                                <img src="/img/faq/safety-gear.jpeg" alt="faq-img" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-start">
                            <div className="faq-content w-100">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>See Our Faqs</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Frequently asked question</SectionTitle.Title>
                                </SectionTitle>
                                <div className="faq-accordion mt-4 mt-md-0">
                                    <div className="accordion" id="accordion">
                                        {academyFaqData.map((faq) => (
                                            <div className="accordion-item mb-3 wow slideUp" data-delay={faq.delay} key={faq.id}>
                                                <h5 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${faq.isOpen ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${faq.id}`}
                                                        aria-expanded={faq.isOpen}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                    </button>
                                                </h5>
                                                <div id={faq.id} className={`accordion-collapse collapse ${faq.isOpen ? 'show' : ''}`} data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
