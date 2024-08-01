import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
