import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <NavLink
            exact
            activeClassName="Menu__link--active"
            className="Menu__link"
            to="/"
          >
            Panda
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName="Menu__link--active"
            className="Menu__link"
            to="/horse"
          >
            Horse
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName="Menu__link--active"
            className="Menu__link"
            to="/cat"
          >
            Cat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
