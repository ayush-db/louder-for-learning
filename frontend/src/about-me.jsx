import React from 'react';
export default function AboutMe() {
    return (
        <div className = "text-gray-800"> 
            <header className="px-8 py-12 text-center bg-white"> 
                <h1 className="text-4xl font-bold mb-4">Louder for Learning</h1>
                <p className="max-w-2xl mx-auto text-lg">We aspire to assist teachers in underfunded school districts, who often feel overlooked and don’t get enough support to properly do their jobs. This website is intended to help teachers find resources that  can help them better allow education to spread.</p>
            </header>
            <main className="px-8 py-12">
            <section className="flex justify-center my-10">
                <div>
                    <h2>Our Mission</h2>
                    <p>We want to help teachers in underfunded school districts get the resources they deserve.</p>
                </div>
            </section>
            <section>
                <div>
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
                </div>
            </section>
            </main>
            <footer className="px-8 py-12 text-center bg-white">
                <p className="text-gray-600">© 2025 Louder for Learning. All rights reserved.</p>
        </footer>
        </div>
    );
    }