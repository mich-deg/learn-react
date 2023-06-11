import React, { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const List3 = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  const [list, setList] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      {
        id: nextId++,
        name: name,
      },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  function handleList() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <button onClick={handleList}>Reverse</button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List3;
