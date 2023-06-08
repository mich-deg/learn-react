// const getImageUrl = (person, size = "s") => {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// };

// export default getImageUrl;

const getImageUrl = (imageId, size = "s") => {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
};

export default getImageUrl;
