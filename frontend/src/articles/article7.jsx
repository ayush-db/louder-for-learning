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
                            <a href="https://www.nsf.gov/funding/opportunities/drk-12-discovery-research-prek-12/500047/nsf23-596" className="article-link" target="_blank" rel="noopener noreferrer">
                                Discovery Research Grant
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
                            This is more of a research program rather than a full on grant, but it serves as a development program that PreK-12 teachers in STEM programs can use to improve their learning experiences.
                            </p>
                            
                            <p className="article-paragraph">
                            Those affected are selected through an application system, consisting of two parts: learning and teaching.
                            </p>

                            <p className="article-paragraph">
                            This is more of a research program rather than a full on grant, but it serves as a development program that PreK-12 teachers in STEM programs can use to improve their learning experiences.
                            
Similar to the AEF, there is no explicit payment as this grant appears to be mainly for the experience, meaning that it will improve quality of education but not help with resources. This one could be a good experience, but does not help with resources.

                        </p>
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