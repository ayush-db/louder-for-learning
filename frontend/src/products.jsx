import React from 'react';
import Navbar from './navbar.jsx';
import './products.css';

export default function Products() {
     return (
        <>
        <Navbar />
        <div className="products-container">
            {/* Hero Section */}
            <div className="products-hero">
                <div className="products-hero-content">
                    <h1>Our Resources</h1>
                    <p>Comprehensive tools and opportunities to help teachers in underfunded school districts succeed</p>
                </div>
            </div>

            {/* Description Section */}
            <div className="description-section">
                <div className="description-content">
                    <p>Here, we have resources that can potentially help teachers, especially those in underfunded school districts. The resources are categorized into 3 main categories to help you find exactly what you need.</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="products-content">
                <div className="content-wrapper">
                    {/* Table of Contents */}
                    <div className="toc-section">
                        <h2>Table of Contents</h2>
                        <ol className="toc-list">
                            <li>Grant Proposals</li>
                            <li>Professional Development</li>
                            <li>Donators</li>
                        </ol>
                    </div>

                    {/* Featured Articles */}
                    <div className="featured-section">
                        <h2>Featured Articles</h2>
                        <ul className="featured-list">
                            <li><a href="/articles/article1">Fund For Teachers</a></li>
                            <li><a href="/articles/article2">AAEF</a></li>
                            <li><a href="/articles/article3">DonorsChoose Grants</a></li>
                            <li><a href="/articles/article4">NEA Foundation Grants</a></li>
                            <li><a href="/articles/article5">MDEF</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}