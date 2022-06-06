// Import Statements
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const https = require("https");

// Initialize Express
const app = express();

// Config
app.use(cors());
app.use(express.json());
app.use(compression());

// PARSE application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// PARSE application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const SERVER = https.createServer(app);

/*
METHOD: GET
URL: /
DESCRIPTION: Home route for the Backend
ACCESS: PUBLIC
*/
app.get("/", (req, res) => {
  return res.send({
    server: "On Read",
    status: "online",
    timeStamp: new Date().toLocaleString(),
    host: req.headers.host,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`OnRead server is up and Running at PORT : ${PORT}`);
});

module.exports = SERVER;
