// src/components/MenuManager.js

import React from 'react';

export default function MenuManager() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--pickle-green)' }}>Menu Manager</h2>
      <p>Manage your menus across DoorDash, Menulog, and Uber Eats.</p>
      <div>
        <label>
          Same price across platforms:
          <input type="checkbox" />
        </label>
        <br />
        <label>
          Price for DoorDash:
          <input type="number" placeholder="$" />
        </label>
        <br />
        <label>
          Price for Menulog:
          <input type="number" placeholder="$" />
        </label>
        <br />
        <label>
          Price for Uber Eats:
          <input type="number" placeholder="$" />
        </label>
      </div>
    </div>
  );
}
