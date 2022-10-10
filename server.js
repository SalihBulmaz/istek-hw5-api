const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db_connection = require("./config/mongodb")();
app.use(express.json());
app.use(require('morgan')('dev'));

app.get("/", (req, res, next) => {
  res.send("Index route");
});
app.use("/user", require("./routes/user"));
app.use("/new", require("./routes/new"));


const PORT = 5000;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
