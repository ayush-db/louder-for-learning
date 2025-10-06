import React from 'react';
import Navbar from '../navbar.jsx';
export default function Articles() {
    return (
        <>
        <Navbar />
        <section>
            <div>
                <h1>Articles</h1>
            </div>
        </section>
        <article>
            <h2><a href = "https://mccartheydressman.org/teacher-development-grants/">MDEF</a></h2>
            <p>While the MDEF’s applications for 2025 are currently closed, their next application season is from January-April 2026 - about 3 months from now. The MDEF focuses on classroom improvement, and primarily tries to assist K-12 teachers. However, the MDEF grant is also very experimental, as they focus on making their application winners have specific projects in mind. The money gifted from grants goes specifically to the aforementioned projects. The foundation helps educators work on these projects, and pays $10,000 a year.</p>
            <p>While the MDEF pays a lot, especially compared to other grants, the requirement for additional projects may be detrimental. As the money the MDEF gives is only for projects, the main problem we are trying to solve - the fact that teachers don’t get resources - is not solved with the MDEF.</p>
        </article>
        </>
    );}