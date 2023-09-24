const http = require("http");
const express = require("express");

const app = express();
// app.use(express.json());
const dotenv = require("dotenv");
const buf = Buffer.from("BASIC=basic");
const config = dotenv.parse(buf); // will return an object

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

app.get("/api/users", (req, res) => {
  return res.status(200).send("hello");
});

app.get("/api/public", (req, res) => {
  res.status(200).send({
    Baby: "RB",
  });
});


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
// Importer les routes d'authentification
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
// Importer les routes d'envoi d'email
const MailingRoutes = require("./routes/MailingRoutes");
app.use("/api", MailingRoutes);

// Importer d'ajout de photos et articles
const ImagesRoutes = require("./routes/Images");
app.use("/api", ImagesRoutes);

const path = require("path");

// Serve the static React app (build) from the "client/build" directory
// app.use(express.static(path.join(__dirname, "front/build")));
app.use("/images", express.static(path.join(__dirname, "images")));
// Always serve the React app's HTML for all routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/build", "index.html"));
// });
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
