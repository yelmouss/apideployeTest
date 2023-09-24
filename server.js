const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/api/users", (req, res) => {
  return res.status(200).send("hello");
});

// Connexion à la base de données MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error(err));


app.get("/api/public", (req, res) => {
  res.status(200).send({
    data: "test",
  });
});
// Always serve the React app's HTML for all routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/build", "index.html"));
// });
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
