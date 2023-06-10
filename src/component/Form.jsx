import React, { useState } from "react";

const Form = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
