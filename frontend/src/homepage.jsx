import React from 'react';
export default function Homepage() {
    return (
        <div>
            <section style={{ padding: '2rem', textAlign: 'center' }}> 
                <h1>Louder For Learning</h1>
                <p>We aspire to assist teachers in underfunded school districts, who often feel overlooked and don’t get enough support to properly do their jobs. This website is intended to help teachers find resources that  can help them better allow education to spread.</p>
                <button style={{ marginTop: "1rem"}}>Learn More</button>
            </section>
            <section>
                <img src = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Education" 
                style={{ width: '60%', height: 'auto' }} /> {/*-- Will update later --*/}
            </section>
            <section style={{ padding: '2rem'}}>
                <h2 style={{marginBottom: '1rem'}}>Potential Resources</h2>
                <div style={{flex: "1",midwidth: "250px"}}>
                    <div style={{flex: "1",midwidth: "250px"}}>
                        <img src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Grant Programs</h3>
                        <p>For teachers in underfunded school districts, grant programs could be a huge help.</p>
                    </div>
                    <div style={{flex: "1",midwidth: "250px"}}>
                        <img src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Professional Development</h3>
                        <p>The quality of training for teachers is often worse in underfunded school districts.</p>
                    </div>
                    <div style={{flex: "1",midwidth: "250px"}}>
                        <img src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Resource 1"></img>
                        <h3>Federal Funding</h3>
                        <p>For teachers in underfunded school districts, grant programs could be a huge help.</p>
                    </div>
                </div>
            </section>
        </div>
    );
    }
    