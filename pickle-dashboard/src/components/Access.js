// src/components/Access.js

import React from 'react';

export default function Access() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--pickle-green)' }}>Access</h2>
      <p>Manage user permissions and logins for different platforms.</p>
      <div style={{ marginTop: '20px' }}>
        <div>
          <label>
            Invite a Team Member: 
            <input type="email" placeholder="Enter email" />
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button style={{ backgroundColor: 'var(--pickle-green)', color: 'var(--white)', padding: '8px 12px', border: 'none', borderRadius: '5px' }}>Invite</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h4>Active Team Members</h4>
          <ul>
            <li>John Doe - Admin</li>
            <li>Jane Smith - Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
