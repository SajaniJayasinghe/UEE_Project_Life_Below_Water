const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connection } = require("../backend/utils/connection");
const dotenv = require("dotenv");

//@import router
const DonationRouter = require("./routes/donations");
const UserRouter = require("./routes/users");
const OrganizationRouter = require("./routes/organizations");

const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use("/api/donation", DonationRouter);
app.use("/api/user", UserRouter);
app.use("/api/organization", OrganizationRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
  connection();
});
