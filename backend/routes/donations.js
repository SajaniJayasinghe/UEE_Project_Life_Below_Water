const express = require("express");
const DonationRouter = express.Router();

const { GetMessage } = require("../controllers/donation.controller");

DonationRouter.get("/getMessage", GetMessage);

module.exports = DonationRouter;
