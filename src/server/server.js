const express = require("express");
const server = express();
const router = require("./routes/router");
const cors = require("cors");
require("dotenv").config();

const port = 8006;

server.use(express.json());
server.use(router);
server.use(cors());

server.listen(port, () => {
  console.log(`server start at port no  :${port}`);
});
