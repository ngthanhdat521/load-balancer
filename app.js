const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World from App " + JSON.stringify(process.env.PORT));
});

app.listen(process.env.PORT || 6000);
