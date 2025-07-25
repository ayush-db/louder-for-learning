import React from 'react';
import Navbar from './navbar.jsx';
export default function AboutMe() {
    return (
        <>
        <Navbar />
        <div className = "text-gray-800"> 
            <section className="flex justify-center my-10">
                <div>
                    <h2>Our Mission</h2>
                    <p>We want to help teachers in underfunded school districts get the resources they deserve.</p>
                </div>
            </section>
            <section>
                    <h2>Contact Us: </h2>
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="border rounded p-2 w-full" required />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="border rounded p-2 w-full" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="mt-4">Message</label>
                            <textarea id="message" name="message" className="border rounded p-2 w-full" rows="4" required></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
                        </div>
                    </form>
            </section>
        </div>
        </>
    );
    }