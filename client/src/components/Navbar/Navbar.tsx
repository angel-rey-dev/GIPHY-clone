import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/reactions">Reactions</NavLink>
        </li>
        <li>
          <NavLink to="/entertainment">Entertainment</NavLink>
        </li>
        <li>
          <NavLink to="/sports">Sports</NavLink>
        </li>
        <li>
          <NavLink to="/stickers">Stickers</NavLink>
        </li>
      </ul>
    </nav>
  );
}
