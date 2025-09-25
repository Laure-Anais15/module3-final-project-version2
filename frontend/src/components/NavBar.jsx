import "../navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/items">Items List</Link>
        </li>
        <li>
          <Link to="/items/new">Add an Item</Link>
        </li>
      </ul>
    </nav>
  );
}
