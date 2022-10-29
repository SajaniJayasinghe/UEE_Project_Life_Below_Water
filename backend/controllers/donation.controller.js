const Donations = require("../models/donations.models");

//add new donations
const NewDonation = async (req,res) =>{
  let newDonation = new Donations(req.body);
  newDonation.save((err)=>{
    if(err){
      return res.status(400).json({
        error :err ,
      });
    }
    return res.status(200).send({ 
      success: "New Donation add Successfully !!",
      donation: newDonation 
    });
  });
};

//get all donations
const GetDonations = async (req,res)=>{
  Donations.find().exec((err , donations)=>{
    if(err){
      return res.status(400).json({
        error:err,
      });
    }
    return res.status(200).json({
      success : true,
      existingDonations : donations
    });
  });
}

//get specific donations
const GetOneDonations = async (req,res)=>{
  let donationID = req.params.donationID;
  Donations.findById(donationID,(err,donation)=>{
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingDonations : donation
    });
  });
}

//update donations
const UpdateDonation = (req, res) => {
  Donations.findByIdAndUpdate(
    req.params.donationID,
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Donation Updated Successfully",
      });
    }
  );
};

//delete donations


module.exports = {
    NewDonation,
    GetDonations,
    GetOneDonations,
    UpdateDonation,
    DeleteDonation
}