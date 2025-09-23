import { useState } from "react";
import { checkHealth } from "../api/api";

export default function Home() {
  const [status, setStatus] = useState("");

  const testConnection = async () => {
    try {
      const res = await checkHealth();
      setStatus(res.status);
    } catch {
      setStatus("No connection to the database");
    }
  };

  return (
    <div>
      <div>
        <h1>Welcome to MyItems</h1>
        <p>Use the menu to see, add or manage your items.</p>
      </div>
      <button onClick={testConnection}>Check connection</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
}
