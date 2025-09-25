import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  //const navigate = useNavigate();
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      description,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== ""),
    };

    fetch("http://localhost:8080/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setDescription("");
        setTags("");
        alert("Item added!");
      })
      .catch((err) => console.error("Error :", err));
  };

  return (
    <div>
      <h2>Add a Book</h2>
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
          <label>Author : </label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description (optional): </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Tags (separated by a comma): </label>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            placeholder="e.g. science, programming, biology"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
