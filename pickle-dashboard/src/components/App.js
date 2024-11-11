// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MenuManager from './components/MenuManager';
import Analytics from './components/Analytics';
import Access from './components/Access';
import Support from './components/Support';

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu-manager" element={<MenuManager />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/access" element={<Access />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}
