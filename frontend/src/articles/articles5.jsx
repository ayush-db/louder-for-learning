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
                        <div className="article-badge">Project Grant</div>
                        <h2 className="article-title">
                            <a href="https://mccartheydressman.org/teacher-development-grants/" className="article-link" target="_blank" rel="noopener noreferrer">
                                McCarthey Dressman Education Foundation (MDEF)
                                <span className="link-icon">↗</span>
                            </a>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Grant Amount</span>
                                <span className="highlight-value">$10,000</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Duration</span>
                                <span className="highlight-value">1 Year</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Next Application</span>
                                <span className="highlight-value">Jan-Apr 2026</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                While the MDEF's applications for 2025 are currently closed, their next application season is from January-April 2026 - about 3 months from now. The MDEF focuses on classroom improvement, and primarily tries to assist K-12 teachers.
                            </p>
                            
                            <p className="article-paragraph">
                                However, the MDEF grant is also very experimental, as they focus on making their application winners have specific projects in mind. The money gifted from grants goes specifically to the aforementioned projects. The foundation helps educators work on these projects, and pays $10,000 a year.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-number">$10,000</div>
                                    <div className="stat-label">Annual Grant</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">K-12</div>
                                    <div className="stat-label">Target Audience</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">2026</div>
                                    <div className="stat-label">Next Season</div>
                                </div>
                            </div>

                            <p className="article-paragraph">
                                While the MDEF pays a lot, especially compared to other grants, the requirement for additional projects may be detrimental. As the money the MDEF gives is only for projects, the main problem we are trying to solve - the fact that teachers don't get resources - is not solved with the MDEF.
                            </p>
                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Highest funding amount ($10,000 annually)</li>
                                        <li>Foundation support for project development</li>
                                        <li>Focuses on K-12 education</li>
                                        <li>Experimental and innovative approach</li>
                                        <li>Next application season coming soon</li>
                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>Requires specific project proposals</li>
                                        <li>May not address basic resource needs</li>
                                        <li>Experimental nature may be risky</li>
                                        <li>Applications currently closed</li>
                                        <li>Project-focused rather than general support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="https://mccartheydressman.org/teacher-development-grants/" className="cta-button" target="_blank" rel="noopener noreferrer">
                                Learn More
                                <span className="button-arrow">→</span>
                            </a>
                            <p className="cta-note">Next application season: January-April 2026</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}