import React from "react";
import PropTypes from "prop-types";

import getImageUrl from "../utils";

const Profile = (props) => {
  const {
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70,
  } = props;
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession:</b> {profession}{" "}
        </li>
        <li>
          <b>Awards: {awards.length}</b> ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b> {discovery}
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  imageId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
  awards: PropTypes.string,
  discovery: PropTypes.string,
  imageSize: PropTypes.number,
};

export default Profile;
