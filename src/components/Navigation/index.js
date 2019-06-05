import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import "./navigation.scss";

class Navigation extends PureComponent {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/werk">Werk</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;