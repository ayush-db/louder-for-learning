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
                            <a href="https://science.osti.gov/wdts/einstein" className="article-link" target="_blank" rel="noopener noreferrer">
                                Albert Einstein Distinguished Educator Fellowship (AEF) Program
                                <span className="link-icon">↗</span>
                            </a>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Intended For</span>
                                <span className="highlight-value">Teachers in STEM</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Duration</span>
                                <span className="highlight-value">11 Months</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Next Application</span>
                                <span className="highlight-value">Aug-Nov 2026</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                While the MDEF's applications for 2025 are currently closed, their next application season is from January-April 2026 - about 3 months from now. The MDEF focuses on classroom improvement, and primarily tries to assist K-12 teachers.
                            </p>
                            
                            <p className="article-paragraph">
                                However, the MDEF grant is also very experimental, as they focus on making their application winners have specific projects in mind. The money gifted from grants goes specifically to the aforementioned projects. The foundation helps educators work on these projects, and pays $10,000 a year.
                            </p>
                            <p className="article-paragraph">
                            The Einstein grant specifically targets teachers in STEM, where fellows spend eleven months working in Federal agencies. Fellows are selected through an application process, and are equipped with access to a national network of education leaders and programs. 

                            While the AEF is an interesting idea conceptually, it is very difficult to see any positives from it as there is no explicit payment from the AEF. This means that it will still be difficult for most teachers to get resources they need, unless they end up getting money from the national network the AEF gives them. I’d recommend not using this one since the cons far outweigh the pros. 

                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Gives additional experience to teachers</li>
                                        <li>Application season starts soon</li>
                                        <li>Focuses on K-12 education</li>
                                        <li>Experimental and innovative approach</li>                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>No specific payment mentioned</li>
                                        <li>May not address resource needs</li>
                                        <li>Experimental nature may be risky</li>
                                        <li>Applications currently closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="https://science.osti.gov/wdts/einstein" className="cta-button" target="_blank" rel="noopener noreferrer">
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