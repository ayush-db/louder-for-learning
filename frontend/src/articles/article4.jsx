import React from 'react';
import Navbar from '../navbar.jsx';
import './articles.css';

export default function Articles() {
    return (
        <>
        <Navbar />
        <div className="article-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Educational Grants & Opportunities</h1>
                    <p className="hero-subtitle">Discover funding opportunities that can transform your teaching career</p>
                </div>
                <div className="hero-decoration">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
            </div>

            <div className="article-wrapper">
                <article className="main-article">
                    <div className="article-header">
                        <div className="article-badge">Learning Grant</div>
                        <h2 className="article-title">
                            <span className="article-link">
                                NEA Foundation Learning & Leadership Grants
                            </span>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Grant Amount</span>
                                <span className="highlight-value">$5,000</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Duration</span>
                                <span className="highlight-value">12 Months</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Deadline</span>
                                <span className="highlight-value">Sep 15</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                The NEA Foundation's Learning and Leadership Grants has a similar approach to the AAE's grant program, in the sense that it uses an application format. This means that support is not guaranteed, which could be a potential downside of using this program.
                            </p>
                            
                            <p className="article-paragraph">
                                It is also important to note that the application deadline for 2025 is almost up, with it ending on September 15, so change will most likely not happen. They also seem to only pay for supplies, meaning professional development will most likely not be implemented.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-number">$5,000</div>
                                    <div className="stat-label">Grant Amount</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">12</div>
                                    <div className="stat-label">Months Duration</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">10x</div>
                                    <div className="stat-label">More than AAE</div>
                                </div>
                            </div>

                            <p className="article-paragraph">
                                However, a pro of this site is that it provides about 10 times the amount of money the AAE does: it provides $5000 while AAE provides $500, with it lasting 12 months. Overall, however, I think that the AAE should be used over this as its pros outweigh its cons.
                            </p>
                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Significantly higher funding amount ($5,000)</li>
                                        <li>Longer duration (12 months)</li>
                                        <li>Established foundation backing</li>
                                        <li>Professional application process</li>
                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>Application deadline almost passed (Sep 15)</li>
                                        <li>Support not guaranteed</li>
                                        <li>Limited to supplies only</li>
                                        <li>No professional development support</li>
                                        <li>Competitive selection process</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <div className="cta-button" style={{background: '#6b7280', cursor: 'not-allowed'}}>
                                Application Closed
                                <span className="button-arrow">❌</span>
                            </div>
                            <p className="cta-note">Deadline passed: September 15th, 2025</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}