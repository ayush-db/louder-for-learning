import React from 'react';
import Navbar from './navbar.jsx';
import SubstackEmbed from './components/substack-embed.jsx';
import './homepage.css';

export default function Homepage() {
    return (
        <>
        <Navbar />
        <div className="homepage-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Louder for Learning</h1>
                    <p className="hero-subtitle">Empowering teachers in underfunded school districts with the resources they need to transform education</p>
                    <div className="hero-buttons">
                        <button className="cta-button primary">Explore Resources</button>
                        <button className="cta-button secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-decoration">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                    <div className="floating-shape shape-4"></div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mission-section">
                <div className="mission-content">
                    <div className="mission-text">
                        <h2 className="section-title">Our Mission</h2>
                        <p className="mission-description">
                            We aspire to assist teachers in underfunded school districts, who often feel overlooked and don't get enough support to properly do their jobs. This website is intended to help teachers find resources that can help them better allow education to spread.
                        </p>
                        <div className="mission-stats">
                            <div className="stat-item">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Teachers Helped</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">$2M+</div>
                                <div className="stat-label">Grants Found</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">School Districts</div>
                            </div>
                        </div>
                    </div>
                    <div className="mission-image">
                        <img 
                            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                            alt="Education and Learning"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>

            {/* Resources Section */}
            <div className="resources-section">
                <div className="resources-header">
                    <h2 className="section-title">Potential Resources</h2>
                    <p className="section-subtitle">Discover the tools and opportunities that can transform your teaching career</p>
                </div>
                
                <div className="resources-grid">
                    <div className="resource-card">
                        <div className="card-icon">
                            <span className="icon">💰</span>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Grant Programs</h3>
                            <p className="card-description">For teachers in underfunded school districts, grant programs could be a huge help in securing funding for classroom resources and professional development.</p>
                            <div className="card-features">
                                <span className="feature-tag">Individual Grants</span>
                                <span className="feature-tag">Team Funding</span>
                                <span className="feature-tag">Equipment Support</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="card-button">Explore Grants</button>
                        </div>
                    </div>

                    <div className="resource-card">
                        <div className="card-icon">
                            <span className="icon">🎓</span>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Professional Development</h3>
                            <p className="card-description">The quality of training for teachers is often worse in underfunded school districts. We help you find high-quality professional development opportunities.</p>
                            <div className="card-features">
                                <span className="feature-tag">Online Courses</span>
                                <span className="feature-tag">Workshops</span>
                                <span className="feature-tag">Certifications</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="card-button">Find Training</button>
                        </div>
                    </div>

                    <div className="resource-card">
                        <div className="card-icon">
                            <span className="icon">🏛️</span>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Federal Funding</h3>
                            <p className="card-description">Navigate the complex world of federal education funding with our comprehensive guides and application assistance.</p>
                            <div className="card-features">
                                <span className="feature-tag">Title I Funding</span>
                                <span className="feature-tag">ESSA Programs</span>
                                <span className="feature-tag">Application Help</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="card-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter Section */}
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h2 className="section-title">Stay Updated</h2>
                    <p className="section-subtitle">Subscribe to our newsletter for the latest resources and opportunities</p>
                    <SubstackEmbed />
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">Ready to Transform Your Teaching?</h2>
                    <p className="cta-description">Join thousands of teachers who have already discovered new opportunities and resources through our platform.</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary large">Get Started Today</button>
                        <button className="cta-button secondary large">Browse Articles</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
    