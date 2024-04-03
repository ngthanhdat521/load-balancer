const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 1000, // 15 minutes
  limit: 1, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello World from App " + JSON.stringify(process.env.PORT));
});

app.listen(process.env.PORT || 6000);
