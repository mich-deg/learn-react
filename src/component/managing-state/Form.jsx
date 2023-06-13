/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That is right!</h1>;
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city there is a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again."));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default Form;
