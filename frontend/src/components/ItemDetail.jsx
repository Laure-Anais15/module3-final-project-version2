import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error :", err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch(`http://localhost:8080/api/items/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Item deleted!");
          navigate("/items"); // redirects towards list
        })
        .catch((err) => console.error("Erreur :", err));
    }
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>Item details</h2>
      <p>
        <strong>Title:</strong> {item.title}
      </p>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Tags:</strong> {item.tags?.join(", ") || "None"}
      </p>
      <p>
        <strong>Created on:</strong>{" "}
        {item.createdAt ? new Date(item.createdAt).toLocaleString() : "N/A"}
      </p>
      <p>
        <strong>Updated on:</strong>{" "}
        {item.updatedAt ? new Date(item.updatedAt).toLocaleString() : "N/A"}
      </p>

      {/* Buttons */}
      <button
        onClick={() => navigate(`/items/${id}/edit`)}
        style={{ marginLeft: "10px", color: "blue" }}
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}
