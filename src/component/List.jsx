import React, { useState } from "react";

let nextId = 0;

const List = () => {
  const [name, setName] = useState(" ");
  const [artists, setArtists] = useState([]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAddButton() {
    setArtists([...artists, { id: nextId++, name: name }]);
  }
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleAddButton}>Add</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
