// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <Link to="/menu-manager" className="tile">Menu Manager</Link>
      <Link to="/analytics" className="tile">Analytics</Link>
      <Link to="/access" className="tile">Access</Link>
      <Link to="/support" className="tile">Support</Link>
    </div>
  );
}
