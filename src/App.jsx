import React from "react";

import PropTypes from "prop-types";

// import Gallery from "./component/Gallery";

const Item = ({ name, isPacked }) => {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
    // return <li className="item">{name} ✔</li>; // option 1
    // return null; // option 2

    /* ternary operator --- option 3 */
    // return (
    //   <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>
    // );

      /* AND operator && --- option 4 */

    // return (
    //   <li className="item">
    //     {name} {isPacked && '✔'}
    //   </li>
    // );
  return (
    <li className="item">
      {itemContent}
    </li>
  );
  }
  // return <li className="item">{name}</li>; // with option 1 or 2
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  isPacked: PropTypes.bool.isRequired,
};

const PackingList = () => {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
};

const App = () => {
  return (
    <div>
      {/* <Gallery /> */}
      <PackingList />
    </div>
  );
};

export default App;
