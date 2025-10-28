import React from 'react';
import Navbar from './navbar.jsx';
import './about-me.css';

export default function AboutMe() {
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
                    <form className="contact-form">
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