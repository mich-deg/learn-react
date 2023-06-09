import React from "react";
import PropTypes from "prop-types";

const AlertButton = ({ msg, children }) => {
  return (
    <button
      onClick={() => {
        alert(msg);
      }}
      style={{padding: "4px", margin: "4px"}}
    >
      {children}
    </button>
  );
};

AlertButton.propTypes = {
  msg: PropTypes.string,
  children: PropTypes.children,
};

const App = () => {
  return (
    <>
      <AlertButton msg="Playing">Play Movie</AlertButton>
      <AlertButton msg="Uploading">Upload Image</AlertButton>
    </>
  );
};

export default App;
