// src/components/Analytics.js

import React from 'react';

export default function Analytics() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--pickle-green)' }}>Analytics</h2>
      <p>Order statistics and trends across different delivery platforms.</p>
      <div style={{ marginTop: '20px' }}>
        <div>✔️ Completed Orders: <strong>120</strong></div>
        <div>❌ Canceled Orders: <strong>8</strong></div>
        <div>💵 Refunded Orders: <strong>5</strong></div>
        <div>📊 Platform Breakdown: <strong>Uber Eats, DoorDash, Menulog</strong></div>
      </div>
    </div>
  );
}


