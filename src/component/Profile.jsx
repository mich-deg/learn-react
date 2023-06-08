import React from "react";

export const Avatar = () => {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
      width={100}
      height={100}
    />
  );
};

const Profile = () => {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
      <Avatar />
    </div>
  );
};

export default Profile;
