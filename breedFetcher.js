const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName,
    (error, response, body) => {
      if (error) {
        return callback(error);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          return callback("Not valid");
        } else {
          return callback(null, data[0].description);
        }
      }
    }
  );
};

module.exports = { fetchBreedDescription };
