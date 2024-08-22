const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
require("dotenv").config();

const server = express();
const port = 8006;

// Middleware setup
server.use(cors());
server.use(express.json());
server.use(router);

// Start server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
