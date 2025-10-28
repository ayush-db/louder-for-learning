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
                        <div className="article-badge">Crowdfunding Platform</div>
                        <h2 className="article-title">
                            <a href="https://www.donorschoose.org/" className="article-link" target="_blank" rel="noopener noreferrer">
                                DonorsChoose
                                <span className="link-icon">↗</span>
                            </a>
                        </h2>
                    </div>

                    <div className="article-content">
                        <div className="highlight-box">
                            <div className="highlight-item">
                                <span className="highlight-label">Platform Type</span>
                                <span className="highlight-value">Crowdfunding</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Accessibility</span>
                                <span className="highlight-value">Any Teacher</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-label">Geolocation</span>
                                <span className="highlight-value">Local Focus</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <p className="article-paragraph">
                                In contrast to the AAE grant, DonorsChoose uses fundraisers as their primary way of using money to help teachers. DonorsChoose, in my opinion, is easily the most accessible option for teachers because it allows any teacher to create a fundraiser.
                            </p>
                            
                            <p className="article-paragraph">
                                An interesting fact about it is that it also uses geolocation in order to find fundraisers created by teachers near the IP address of the site's visitor, so it makes sure that more immediate change is happening in the teacher's area.
                            </p>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-number">100%</div>
                                    <div className="stat-label">Accessible</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">A+</div>
                                    <div className="stat-label">BBB Rating</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">4★</div>
                                    <div className="stat-label">Charity Navigator</div>
                                </div>
                            </div>

                            <p className="article-paragraph">
                                DonorsChoose's fundraisers work very similarly to sites such as GoFundMe. Teachers can create fundraisers in order to solve an issue for their class or school, and even has built-in buttons to connect to social media platforms. The site has received the highest ratings on Better Business Bureau and Charity Navigator, showing that DonorsChoose has some form of reliability.
                            </p>
                        </div>

                        <div className="pros-cons-section">
                            <div className="pros-cons-grid">
                                <div className="pros-section">
                                    <h3 className="section-title pros-title">✅ Advantages</h3>
                                    <ul className="pros-list">
                                        <li>Most accessible option for all teachers</li>
                                        <li>Uses geolocation for local impact</li>
                                        <li>Social media integration</li>
                                        <li>Highest ratings on BBB and Charity Navigator</li>
                                        <li>No application deadlines</li>
                                    </ul>
                                </div>
                                
                                <div className="cons-section">
                                    <h3 className="section-title cons-title">⚠️ Considerations</h3>
                                    <ul className="cons-list">
                                        <li>Requires active fundraising effort</li>
                                        <li>Success depends on donor engagement</li>
                                        <li>May take longer to reach funding goals</li>
                                        <li>Requires marketing and promotion skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="https://www.donorschoose.org/" className="cta-button" target="_blank" rel="noopener noreferrer">
                                Start Fundraising
                                <span className="button-arrow">→</span>
                            </a>
                            <p className="cta-note">Create your project today - no deadlines!</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}