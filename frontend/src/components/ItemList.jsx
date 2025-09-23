import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error :", err));
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      {items.length === 0 ? (
        <p>No item found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.title}</Link> –{" "}
              {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
