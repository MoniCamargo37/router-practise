import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="projectsNavlink">
      
            <NavLink to="games">Games</NavLink>
            <NavLink to="apps">Apps</NavLink>
      <Outlet />
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
    </div>
  )
}


