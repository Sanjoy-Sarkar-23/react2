
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;