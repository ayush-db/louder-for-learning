import React from 'react';
const articletemplate = ({ title, subtitle, category, author, content }) => {
    return (
        <article className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md my-8">
            <header className="mb-6">
                <div>
                    <span className="text-sm text-gray-500">{category}</span>
                </div>
                <h1>
                    {title}
                </h1>
                {subtitle && <h2 className="text-xl text-gray-700 mt-2">{subtitle}</h2>}
                <p className="text-sm text-gray-600 mt-1">By {author}</p>
            </header>
        </article> }
        
    )
export default articletemplate;