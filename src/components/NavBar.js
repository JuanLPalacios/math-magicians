import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="NavBar">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/Quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
