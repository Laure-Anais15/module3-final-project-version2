import { useState } from "react";

export default function ItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setDescription("");
        alert("Item added!");
      })
      .catch((err) => console.error("Error :", err));
  };

  return (
    <div>
      <h2>Add an Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre : </label>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
