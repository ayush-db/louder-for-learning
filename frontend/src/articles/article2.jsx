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
                        <div className="article-badge">Classroom Grant</div>
                        <h2 className="article-title">
                            <a href="https://www.aaeteachers.org/awards/" className="article-link" target="_blank" rel="noopener noreferrer">
                                American Association of Educators (AAE)
                                <span className="link-icon">↗</span>
                            </a>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Scholarship Amount</span>
                                <span className="highlight-value">$500</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Classroom Grant</span>
                                <span className="highlight-value">$500</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Application Deadlines</span>
                                <span className="highlight-value">Oct 1 & Mar 1</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                One of the major ways in which teachers in underfunded school districts suffer is that they are often unable to afford good-quality resources for their students to use due to their lack of funding. However, grant programs solve this - with the American Association of Educators Classroom Grant being created to deliberately combat this issue.
                            </p>
                            
                            <p className="article-paragraph">
                                The program has two different means of assisting teachers: the Teacher Scholarship program and the Classroom Grant program. In the Teacher Scholarship program, teachers can be paid up to $500 in scholarship money for professional developments and workshops. Meanwhile, the Classroom Grant program allows teachers to receive $500 to pay for school supplies.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-number">$500</div>
                                    <div className="stat-label">Maximum Award</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">2</div>
                                    <div className="stat-label">Program Types</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">US</div>
                                    <div className="stat-label">Eligibility</div>
                                </div>
                            </div>

                            <p className="article-paragraph">
                                The way that a teacher is able to receive this grant is by filling out an application form. The two deadlines the site currently provides are October 1st and March 1st. All teachers in the US are able to qualify for this grant, and the AAE themselves have posted several articles about how previous grant winners have helped with several educational opportunities.
                            </p>
                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Two different grant programs available</li>
                                        <li>Supports both supplies and professional development</li>
                                        <li>Multiple application deadlines per year</li>
                                        <li>Open to all US teachers</li>
                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>Operates on a lottery system</li>
                                        <li>Only one winner per application period</li>
                                        <li>Limited funding amount ($500)</li>
                                        <li>Competitive selection process</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="https://www.aaeteachers.org/awards/" className="cta-button" target="_blank" rel="noopener noreferrer">
                                Apply Now
                                <span className="button-arrow">→</span>
                            </a>
                            <p className="cta-note">Next deadlines: October 1st & March 1st</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}