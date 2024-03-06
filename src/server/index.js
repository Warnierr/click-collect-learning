/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! :)");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
