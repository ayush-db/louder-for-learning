import React from 'react';
export default function Homepage() {
    return (
        <div className = "text-gray-800"> 
            <section className="px-8 py-12 text-center bg-white"> 
                <h1 className="text-4xl font-bold mb-4">Louder for Learning</h1>
                <p className="max-w-2xl mx-auto text-lg">We aspire to assist teachers in underfunded school districts, who often feel overlooked and don’t get enough support to properly do their jobs. This website is intended to help teachers find resources that  can help them better allow education to spread.</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Learn More</button>
            </section>
            <section className="flex justify-center my-10">
              <img className="w-3/4 rounded shadow-md" 
                src = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Education">
                </img>
            </section>
            <section className="px-8 py-12 bg-gray-100"> 
                <h2 className="text-3xl font-semibold text-center mb-10">Potential Resources</h2>
                <div className="grid-cols-1 md:grids-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-4 rounded shadow">
                        <img className="w-full h-48 object-cover rounded mb-4" 
                        src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Grant Programs</h3>
                        <p>For teachers in underfunded school districts, grant programs could be a huge help.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <img className="w-full h-48 object-cover rounded mb-4" 
                        src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Professional Development</h3>
                        <p>The quality of training for teachers is often worse in underfunded school districts.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <img className="w-full h-48 object-cover rounded mb-4" 
                        src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Federal Funding</h3>
                        <p>For teachers in underfunded school districts, grant programs could be a huge help.</p>
                    </div>
                </div>
            </section>
        </div>
    );
    }
    