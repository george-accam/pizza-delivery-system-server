const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.DATABASE_URL;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => {
  console.log("db connected");
});

db.on("error", () => {
  console.log("db error");
});
