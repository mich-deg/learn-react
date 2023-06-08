import React from "react";
import PropTypes from "prop-types";

import getImageUrl from "../utils";

const Avatar = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

Avatar.propTypes = {
  person: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};

export default Avatar;
