import React from "react";

const App = () => {
  const handleClick = () => {
    alert("You clicked me!")
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
};

export default App;
