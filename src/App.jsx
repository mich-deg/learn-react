import React from "react";

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const List = () => {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person => <li key={person.id}>
    <b>{person.name}:</b>
       {' ' + person.profession + ' '}
  </li>)
  return <ul>{listItems}</ul>

}

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default App;
