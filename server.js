const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const buf = Buffer.from("BASIC=basic");
const config = dotenv.parse(buf); // will return an object
dotenv.config()
const mongoose = require("mongoose");

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const cors = require("cors");
app.use(cors());


//header d'accès global à l'API
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


app.get("/api/users", (req, res) => {
  return res.status(200).send("hello");
});

app.get("/api/public", (req, res) => {
  res.status(200).send({
    Baby: "RB",
  });
});

const ImagesRoutes = require("./routes/Images");
app.use("/api", ImagesRoutes);




app.listen(3001, () => {
  console.log("Listening on port 3000");
});
