import React, { useState } from "react";

const Form3 = () => {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@sculpture.com",
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label htmlFor="">
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label htmlFor="">
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label htmlFor="">
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default Form3;
