const http = require("http");
const express = require("express");

const app = express();
// app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/api/users", (req, res) => {
  return res.status(200).send("hello");
});



app.get("/api/public", (req, res) => {
  res.status(200).send({
    Baby: "RB",
  });
});
// Always serve the React app's HTML for all routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/build", "index.html"));
// });
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
