import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MenuManager from './components/MenuManager';
import Analytics from './components/Analytics';
import Access from './components/Access';
import Support from './components/Support';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu-manager" element={<MenuManager />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/access" element={<Access />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
