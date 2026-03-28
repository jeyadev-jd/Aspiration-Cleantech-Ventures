import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import API from '@/api';

const courses = [
    { id: 'hvac', name: 'HVAC - 3 Months (12 Weeks)' },
    { id: 'entrepreneurship', name: 'Entrepreneurship - 2 Months (8 Weeks)' },
    { id: 'digital-marketing', name: 'Digital Marketing - 2.5 Months (10 Weeks)' },
    { id: 'sales', name: 'Sales Executive - 6 Weeks' },
    { id: 'business-development', name: 'Business Development - 2 Months (8 Weeks)' }
];

const RegistrationForm = () => {
    const [searchParams] = useSearchParams();
    const initialCourse = searchParams.get('course') || '';
    const [step, setStep] = useState(1);
    
    // Auto-advance to Step 2 if course is present? No, we need user details first.
    // The course is still prefilled in formData.course for when they reach Step 2.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        batch: 'weekday',
        course: initialCourse,
        message: ''
    });

    const [status, setStatus] = useState({ loading: false, error: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = async () => {
        if (step === 1) {
            if (!formData.name || !formData.phone) {
                alert("Name and Phone are required.");
                return;
            }
            if (!formData.email) {
                alert("Email is required for updates.");
                return;
            }
            setStep(2);
        } else if (step === 2) {
            if (!formData.course) {
                alert("Please select a course.");
                return;
            }
            
            setStatus({ loading: true, error: '' });
            try {
                // Post to our new strict database backend correctly
                await API.post('/academy/register', {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    courseName: courses.find(c => c.id === formData.course)?.name || formData.course,
                    message: `City: ${formData.city} | Batch: ${formData.batch}`
                });
                
                setStatus({ loading: false, error: '' });
                setStep(3);
            } catch (err: any) {
                setStatus({ loading: false, error: err.response?.data?.error || 'Failed to submit registration. Please try again later.' });
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            batch: 'weekday',
            course: '',
            message: ''
        });
        setStep(1);
    };

    return (
        <section id="register" className="registration-section fix section-padding bg-light" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bg-white p-4 p-md-5 rounded shadow-lg position-relative overflow-hidden wow fadeInUp" data-wow-delay=".3s" style={{ borderTop: '5px solid var(--theme)' }}>
                            <div className="text-center mb-5">
                                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#333' }}>Register Today</h2>
                                <p className="text-muted mt-2" style={{ fontSize: '1.1rem' }}>Take the first step towards a successful career.</p>
                                
                                {/* Progress Bar */}
                                <div className="d-flex justify-content-center mt-4 position-relative" style={{ maxWidth: '400px', margin: '0 auto' }}>
                                    <div className="position-absolute" style={{ top: '15px', left: '10%', right: '10%', height: '2px', backgroundColor: '#eee', zIndex: 1 }}></div>
                                    <div className="d-flex justify-content-between w-100 position-relative" style={{ zIndex: 2 }}>
                                        {[1, 2, 3].map(item => (
                                            <div key={item} className="d-flex flex-column align-items-center">
                                                <div className="rounded-circle d-flex align-items-center justify-content-center text-white" 
                                                    style={{ width: '32px', height: '32px', backgroundColor: step >= item ? 'var(--theme)' : '#ccc', fontWeight: 600, transition: 'all 0.3s' }}>
                                                    {step > item ? <i className="fa-solid fa-check"></i> : item}
                                                </div>
                                                <span className="mt-2 text-muted" style={{ fontSize: '0.8rem', fontWeight: 600, color: step >= item ? 'var(--theme)' : '#999' }}>
                                                    {item === 1 ? 'Details' : item === 2 ? 'Course' : 'Done'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Step 1: Personal Details */}
                            {step === 1 && (
                                <div className="step-content animation-fadeIn">
                                    <h4 className="mb-4" style={{ fontWeight: 700, borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Step 1: Personal Details</h4>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-2 text-muted" style={{ fontWeight: 600 }}>Full Name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control p-3 bg-light border-0 rounded" placeholder="John Doe" name="name" value={formData.name} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-2 text-muted" style={{ fontWeight: 600 }}>Email Address</label>
                                                <input type="email" className="form-control p-3 bg-light border-0 rounded" placeholder="john@example.com" name="email" value={formData.email} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-2 text-muted" style={{ fontWeight: 600 }}>Phone Number <span className="text-danger">*</span></label>
                                                <input type="tel" className="form-control p-3 bg-light border-0 rounded" placeholder="+91 98765 43210" name="phone" value={formData.phone} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="mb-2 text-muted" style={{ fontWeight: 600 }}>City</label>
                                                <input type="text" className="form-control p-3 bg-light border-0 rounded" placeholder="Chennai" name="city" value={formData.city} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="mb-2 text-muted" style={{ fontWeight: 600 }}>Preferred Batch <span className="text-danger">*</span></label>
                                                <select className="form-select p-3 bg-light border-0 rounded" name="batch" value={formData.batch} onChange={handleInputChange}>
                                                    <option value="weekday">Weekday Batch</option>
                                                    <option value="weekend">Weekend Batch</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4 text-end">
                                            <button className="btn text-white px-5 py-3 rounded" style={{ backgroundColor: 'var(--theme)', fontWeight: 600, fontSize: '1.1rem' }} onClick={nextStep}>
                                                Continue <i className="fa-solid fa-arrow-right ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Choose Course */}
                            {step === 2 && (
                                <div className="step-content animation-fadeIn">
                                    <h4 className="mb-4" style={{ fontWeight: 700, borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Step 2: Choose Your Course</h4>
                                    <div className="course-selection d-flex flex-column gap-3 mb-5">
                                        {courses.map(course => (
                                            <label key={course.id} className={`course-option p-4 rounded d-flex align-items-center cursor-pointer ${formData.course === course.id ? 'active-course' : 'bg-light'}`}
                                                style={{ border: formData.course === course.id ? '2px solid var(--theme)' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
                                                <input type="radio" name="course" value={course.id} className="me-3" style={{ transform: 'scale(1.2)' }} checked={formData.course === course.id} onChange={handleInputChange} />
                                                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: formData.course === course.id ? 'var(--theme)' : '#333' }}>{course.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-3 d-flex justify-content-between align-items-center">
                                        <button className="btn btn-outline-dark px-4 py-3 rounded" style={{ fontWeight: 600, fontSize: '1.1rem' }} onClick={() => setStep(1)} disabled={status.loading}>
                                            <i className="fa-solid fa-arrow-left me-2"></i> Back
                                        </button>
                                        <button className="btn text-white px-5 py-3 rounded" style={{ backgroundColor: 'var(--theme)', fontWeight: 600, fontSize: '1.1rem' }} onClick={nextStep} disabled={status.loading}>
                                            {status.loading ? 'Submitting...' : 'Complete Registration'} <i className="fa-solid fa-check ms-2"></i>
                                        </button>
                                    </div>
                                    {status.error && <div className="alert alert-danger mt-3">{status.error}</div>}
                                </div>
                            )}

                            {/* Step 3: Confirmation */}
                            {step === 3 && (
                                <div className="step-content animation-fadeIn text-center py-5">
                                    <div className="success-icon d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 style={{ fontWeight: 800, color: '#333' }}>Registration Successful!</h3>
                                    <p className="mt-3 text-muted" style={{ fontSize: '1.2rem' }}>
                                        Thank you, <strong className="text-dark">{formData.name}</strong>. You have chosen the <strong style={{ color: 'var(--theme)' }}>{courses.find(c => c.id === formData.course)?.name.split(' - ')[0]}</strong> course.
                                    </p>
                                    <div className="p-3 bg-light rounded mt-4 mb-4 d-inline-block border">
                                        <p className="mb-0" style={{ fontWeight: 600 }}>Our team will contact you within 24 hours.</p>
                                    </div>
                                    <div className="d-flex justify-content-center gap-3 mt-3">
                                        <button className="btn text-white px-4 py-2 rounded" style={{ backgroundColor: 'var(--theme)', fontWeight: 600 }} onClick={resetForm}>
                                            Register Another
                                        </button>
                                        <Link to="/academy#courses" className="btn btn-outline-dark px-4 py-2 rounded" style={{ fontWeight: 600 }}>
                                            Back to Courses
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;
