import React, {useState} from 'react';
import Navbar from './navbar.jsx';
import './about-me.css';

export default function AboutMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (status) setStatus('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');
        const formPayload = new FormData();
        formPayload.append('form-name', 'contact-form');
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('message', formData.message);
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formPayload).toString()
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An error occurred. Please try again later.');
        }
        finally {
            setIsSubmitting(false);
        }
    return (
        <>
        <Navbar />
        <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1>About Our Mission</h1>
                    <p>Empowering educators with the resources they need to transform education in underfunded communities</p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mission-section">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>We want to help teachers in underfunded school districts get the resources they deserve. Our platform connects educators with funding opportunities, professional development resources, and support networks to ensure every student receives quality education.</p>
                </div>
            </div>

            {/* Contact Section */}

            <div className="contact-section">
                <div className="contact-content">
                    <h2>Get In Touch</h2>
                    <form
                        className="contact-form"
                        name="contact-form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact-form" />
                        <input type="hidden" name="bot-field"/>
                        {/*start here*/}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Your full name"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="your.email@example.com"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder="Tell us how we can help you..."
                                rows="4" 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}