// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/top100" activeClassName="selected">Top 100 films</NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="selected">Films search</NavLink>
        </li>
        <li>
          <NavLink to="/random" activeClassName="selected">Random film</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
