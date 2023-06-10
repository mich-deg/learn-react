import React, { useState } from "react";

const Form2 = () => {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form2;
