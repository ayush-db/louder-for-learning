import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './homepage.jsx';
import AboutMe from './about-me.jsx';
import Products from './products.jsx';
import Article1 from './articles/article1.jsx';
import Article2 from './articles/article2.jsx';
import Article3 from './articles/article3.jsx';
import Article4 from './articles/article4.jsx';
import Article5 from './articles/articles5.jsx';
import Article6 from './articles/article6.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles/article1" element={<Article1 />} />
        <Route path="/articles/article2" element={<Article2 />} />
        <Route path="/articles/article3" element={<Article3 />} />
        <Route path="/articles/article4" element={<Article4 />} />
        <Route path="/articles/article5" element={<Article5 />} />
        <Route path="/articles/article6" element={<Article6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
