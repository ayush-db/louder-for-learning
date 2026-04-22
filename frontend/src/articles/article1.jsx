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
                        <div className="article-badge">Featured Grant</div>
                        <h2 className="article-title">
                            <a href="https://fundforteachers.org/" className="article-link" target="_blank" rel="noopener noreferrer">
                                Fund For Teachers
                                <span className="link-icon">↗</span>
                            </a>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Individual Grant</span>
                                <span className="highlight-value">$5,000</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Team Grant</span>
                                <span className="highlight-value">$10,000</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Total Distributed</span>
                                <span className="highlight-value">$39M+</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                Fund For Teachers is an organization that specializes in giving grants to teachers. It notably has 2 separate options: $5000 for individual teachers - about the same as the NEA Foundation, but $10000 for teams. Fund For Teachers is based on the principle that teachers are the best judgements for education, letting teachers choose their own professional development opportunities.
                            </p>
                            
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-number">$39M+</div>
                                    <div className="stat-label">Grant Money Paid</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">10</div>
                                    <div className="stat-label">Countries Impacted</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">2025</div>
                                    <div className="stat-label">Current Year</div>
                                </div>
                            </div>

                            <p className="article-paragraph">
                                They also have a monthly newsletter called "The Current" that goes into detail about their current achievements, with the latest issue of it being in August 2025.
                            </p>
                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Higher funding amounts than most grants</li>
                                        <li>Teacher autonomy in professional development</li>
                                        <li>Proven track record and reputation</li>
                                        <li>Team collaboration opportunities</li>
                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>Applications open on: October 1st</li>
                                        <li>Limited professional development options in some areas</li>
                                        <li>Requires self-directed planning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="https://fundforteachers.org/" className="cta-button" target="_blank" rel="noopener noreferrer">
                                Apply Now
                                <span className="button-arrow">→</span>
                            </a>
                            <p className="cta-note">Application are closed currently, but the applications for the 2027 school year open on October 1st, 2026</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}