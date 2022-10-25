const express = require("express");
const DonationRouter = express.Router();

const { 
    NewDonation ,
    GetDonations,
    GetOneDonations,
    UpdateDonation,
    DeleteDonation
} = require("../controllers/donation.controller");

DonationRouter.post("/adddonation", NewDonation);
DonationRouter.get("/getdonation", GetDonations);
DonationRouter.get("/getonedonation/:donationID", GetOneDonations);
DonationRouter.put("/update/:donationID",UpdateDonation);
DonationRouter.delete("/delete/:donationID",DeleteDonation);


module.exports = DonationRouter;
