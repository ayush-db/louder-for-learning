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
                <section className="container mx-auto p-6">
                    <div>
                        <h1 className="text-3xl font-bold">Products</h1>
                        <p className="mt-4">Louder For Learning is a non-profit organization that provides resources to help teachers in underfunded school districts.</p>
                    </div>
                </section>
                <section className="flex justify-center my-10">
                    <div>
                        <h2>What We Offer</h2>
                        <p>Louder For Learning offers several resources that can help teachers in underfunded school districts - these include grant proposals, sites that can provide cheaper textbooks and other supplies, and ways to get in contact with representatives that could potentially help.</p>
                    </div>
                    
                </section>
            </div>
        )}