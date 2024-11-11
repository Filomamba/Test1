// src/components/Dashboard.js

import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--pickle-green)' }}>Dashboard</h2>
      <p>Quick overview of your restaurant's performance.</p>
      <div style={{ marginTop: '20px' }}>
        <div>📊 Daily Orders: <strong>45</strong></div>
        <div>💬 Recent Feedback: <strong>Positive</strong></div>
        <div>🔝 Top Selling Item: <strong>Avocado Salad</strong></div>
        <div>📈 Revenue Trend: <strong>Up 10%</strong></div>
      </div>
    </div>
  );
}
