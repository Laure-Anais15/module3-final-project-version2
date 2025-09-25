import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
        setMeta(data.meta);
      })
      .catch((err) => console.error("Error :", err));
  }, []);

  //filter items based on search term
  // search insensible à la casse
  const search = searchTerm.toLowerCase();

  // Filtrer les items selon le titre, la description ou les tags
  const filteredItems = items.filter((item) => {
    const matchesTitle = item.title.toLowerCase().includes(search);
    const matchesDescription = item.description?.toLowerCase().includes(search);
    const matchesTags = item.tags?.some((tag) =>
      tag.toLowerCase().includes(search)
    );

    return matchesTitle || matchesDescription || matchesTags;
  });

  return (
    <div>
      <h2>Book List</h2>

      {/* search bar */}
      <input
        type="text"
        placeholder="Search a book or a tag..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px", width: "200px" }}
      />

      {filteredItems.length === 0 ? (
        <p>No item found.</p>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.title}</Link> –{" "}
              {item.description}
              {item.tags && item.tags.length > 0 && (
                <span
                  style={{
                    marginLeft: "10px",
                    fontStyle: "italic",
                    color: "gray",
                  }}
                >
                  Tags: {item.tags.join(", ")}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
