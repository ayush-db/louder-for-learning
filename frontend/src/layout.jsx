import React from 'react';
export default function Layout({ children }) {
    return (
        <div className="text-gray-800">
            <header className="px-8 py-4 bg-white shadow">
            <h1 className="text-4xl font-bold mb-4">Louder for Learning</h1>
            <p className="max-w-2xl mx-auto text-lg">We aspire to assist teachers in underfunded school districts, who often feel overlooked and don’t get enough support to properly do their jobs. This website is intended to help teachers find resources that  can help them better allow education to spread.</p>
            </header>
            <main className="px-8 py-12">
                {children}
            </main>
            <footer className="px-8 py-12 text-center bg-white">
                <p className="text-gray-600">© 2025 Louder for Learning. All rights reserved.</p>
            </footer>
        </div>
    );
}