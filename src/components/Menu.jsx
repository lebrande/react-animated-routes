import React from 'react';
import { NavLink } from 'react-router-dom';

import { animals } from '../animals';

const Menu = () => {
  return (
    <nav className="Menu">
      <ul>
        {animals.map((animal) => {
          return (
            <li key={animal}>
              <NavLink
                exact
                activeClassName="Menu__link--active"
                className="Menu__link"
                to={`/animal/${animal}`}
              >
                {animal}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
