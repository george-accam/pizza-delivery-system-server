const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const db = require("./db");
app.use(express.json());

const otherRoutes = require("./routes/otherRoutes");
const pizzaRoutes = require("./routes/pizzaRoutes");
const userRoutes = require("./routes/userRoute");
const oderRoutes = require("./routes/orderRoute");
const deliveryPartnerRoutes = require("./routes/deliveryPartnerRoute");

app.use("/api/pizza/", pizzaRoutes);
app.use("/api/others/", otherRoutes);
app.use("/api/user/", userRoutes);
app.use("/api/order/", oderRoutes);
app.use("/api/deliverypartner/", deliveryPartnerRoutes);


app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server listening " + port));
