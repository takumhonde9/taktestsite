import { Link } from 'react-router-dom';
import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className="container px-16 y-1">
      <nav>
        <ul
          className="flex flex-row space-x-10"
          role="navigation"
          aria-label="navigation bar"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div role="main" aria-label="main content">
          {children}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
