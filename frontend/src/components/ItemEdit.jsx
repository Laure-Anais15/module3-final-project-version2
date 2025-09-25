import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ItemEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((err) => console.error("Error :", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Item updated!");
        navigate(`/items/${id}`); // retour aux détails
      })
      .catch((err) => console.error("Error :", err));
  };

  return (
    <div>
      <h2>Edit a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book title : </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description : </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
