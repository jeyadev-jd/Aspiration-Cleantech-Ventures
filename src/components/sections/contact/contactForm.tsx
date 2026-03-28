import { useState } from 'react';
import API from '@/api';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            await API.post('/contact', {
                ...formData,
                sourcePage: 'Contact Page'
            });
            setStatus({ loading: false, success: true, error: '' });
            setFormData({ name: '', email: '', message: '' }); // reset form
        } catch (err: any) {
            setStatus({ 
                loading: false, 
                success: false, 
                error: err.response?.data?.error || 'Failed to send message.'
            });
        }
    };

    return (
        <div className="contact-content">
            <h2>Discuss Your Industrial Energy Requirements!</h2>
            <p>
                Have a high-temperature process or energy efficiency challenge? Our engineering team will evaluate your requirements and recommend scalable, cost-effective clean energy solutions tailored to your operations.
            </p>
            <form onSubmit={handleSubmit} className="contact-form-items">
                {status.success && <div className="alert alert-success">Message sent successfully!</div>}
                {status.error && <div className="alert alert-danger">{status.error}</div>}
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Your name*</span>
                            <input type="text" name="name" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Your Email*</span>
                            <input type="email" name="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea name="message" id="message" placeholder="Write Message" required value={formData.message} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn" disabled={status.loading}>
                            {status.loading ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm