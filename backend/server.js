const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const { connection } = require("../backend/utils/connection");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
