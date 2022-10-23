const mongoose = require("mongoose");
const DonationsSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  donatorName: {
    type: String,
    required: true,
  },

  paymenttype: {
    type: String,
    required: true,
  },

  depositeDate: {
    type: Date,
    required: true,
  },

  receipt: {
    type: String,
    required: true,
  },
});

const Donations = mongoose.model('donations',DonationsSchema)
module.exports = Donations