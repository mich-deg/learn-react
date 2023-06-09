import React from "react";
import Button from "./component/Button";

// const AlertButton = ({ msg, children }) => {
//   return (
//     <button
//       onClick={() => {
//         alert(msg);
//       }}
//       style={{padding: "4px", margin: "4px"}}
//     >
//       {children}
//     </button>
//   );
// };

// AlertButton.propTypes = {
//   msg: PropTypes.string,
//   children: PropTypes.children,
// };

// eslint-disable-next-line react/prop-types
const PlayButton = ({movieName}) => {
  
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`)
  }

  return (
    <Button onClick={handlePlayClick}>
      Play {movieName}
    </Button>
  )
}

const UploadButton = () => {

  const handleUploadClick = () => {
    alert("Uploading!")
  }

  return <Button onClick={handleUploadClick}>
    Upload Image
  </Button>
}

const App = () => {
  return (
    <>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
      {/* <AlertButton msg="Playing">Play Movie</AlertButton>
      <AlertButton msg="Uploading">Upload Image</AlertButton> */}
    </>
  );
};

export default App;
