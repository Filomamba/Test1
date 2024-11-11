// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/menu-manager">Menu Manager</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/access">Access</Link>
      <Link to="/support">Support</Link>
    </nav>
  );
}
