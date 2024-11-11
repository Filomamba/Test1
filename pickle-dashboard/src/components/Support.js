// src/components/Support.js

import React from 'react';

export default function Support() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: 'var(--pickle-green)' }}>Support</h2>
      <p>Contact us or find answers to your questions.</p>
      <div style={{ marginTop: '20px' }}>
        <h4>Contact Support</h4>
        <form>
          <label>
            Issue:
            <textarea placeholder="Describe your issue" rows="4" cols="50" />
          </label>
          <br />
          <button type="submit" style={{ backgroundColor: 'var(--pickle-green)', color: 'var(--white)', padding: '8px 12px', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Submit Ticket</button>
        </form>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Knowledge Base</h4>
        <ul>
          <li><a href="#">How to manage menus across platforms</a></li>
          <li><a href="#">How to invite team members</a></li>
          <li><a href="#">Common troubleshooting tips</a></li>
        </ul>
      </div>
    </div>
  );
}
