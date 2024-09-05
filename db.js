const mongoose = require("mongoose");
require("dotenv").config;

mongoose.connect(
  "mongodb+srv://george:george1324@customers.jmmu5cx.mongodb.net/pizza?retryWrites=true&w=majority&appName=Customers",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("db connected");
});

db.on("error", () => {
  console.log("db error");
});
