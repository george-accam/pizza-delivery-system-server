const mongoose = require("mongoose");
require("dotenv").config;

mongoose.connect(process.env.DATABASE_URL, {
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
