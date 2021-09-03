const request = require("request");
request("https://aa.zzz", (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("not found");
    return;
  }
  console.log(data.length);
  console.log(data[0].description);
  console.log(typeof data);
});
