import React from "react";
import Gallery from "./component/Gallery";
import Profile from "./component/Profile";

const today = new Date();

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(date);
};

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "grey",
    color: "pink",
  },
};

export const TodoList = () => {
  // const name = "Gregorio Y. Zara";
  return (
    <div style={person.theme}>
      <h1>{person.name} Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <h1>Hedy Lamarr Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <h1>To Do List for {formatDate(today)}</h1>
    </div>
  );
};

// export const Avatar = () => {
//   const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
//   const description = "regorio Y. Zara";

//   return <img className="avatar" src={avatar} alt={description} />;
// };

const App = () => {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Gallery />
      <TodoList />
      {/* <Avatar /> */}
    </section>
  );
};

export default App;
