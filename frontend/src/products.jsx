import React from 'react';
import Navbar from './navbar';

export default function Products() {
     return (
            <div className = "text-gray-800"> 
                <Navbar />
                <section className="bg-purple-600 text-white p-6">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">Products</h1>
                    </div>
                </section>
                <section className="flex justify-center my-10">
                    <div>
                        <p>Here, we have resources that can potentially help teachers, especially those in underfunded school districts. The resources are categorized into 3 categories.</p>
                        <div>
                            <h2>Table of Contents:</h2>
                            <ol>
                                <li>Grant Proposals</li>
                                <li>Professional Development</li>
                                <li>Donators</li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <h2>Featured Articles</h2>
                            <ul>
                                <li><a href="/articles/article1">Fund For Teachers</a></li>
                                <li><a href="/articles/article2">AAEF</a></li>
                                <li><a href="/articles/article3">DonorsChoose Grants</a></li>
                                <li><a href="/articles/article4">NEA Foundation Grants</a></li>
                                <li><a href="/articles/article5">MDEF</a></li>             
                                </ul>
                    </div>
                </section>
            </div>
        )}