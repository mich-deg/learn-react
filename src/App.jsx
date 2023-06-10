import React, { useState } from "react";
// import Form3 from "./component/Form3";
// import Form4 from "./component/Form4";
import List from "./component/List";

const App = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "blue",
          borderRadius: "50%",
          transform: ` translate(${position.x}px, ${position.y}px) `,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
      {/* <Form3 /> */}
      {/* <Form4 /> */}
      <List />
    </div>
  );
};

export default App;
