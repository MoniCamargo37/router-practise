import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
          <li>
            <Link to="games">Games</Link>
          </li>
          <li>
            <Link to="apps">Apps</Link>
         </li>
      <Outlet />
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
    </div>
  )
}


