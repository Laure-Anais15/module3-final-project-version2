import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Erreur :", err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h2>Item details</h2>
      <p>
        <strong>Title :</strong> {item.title}
      </p>
      <p>
        <strong>Description :</strong> {item.description}
      </p>
      <p>
        <strong>Tags :</strong> {item.tags?.join(", ") || "None"}
      </p>
    </div>
  );
}
