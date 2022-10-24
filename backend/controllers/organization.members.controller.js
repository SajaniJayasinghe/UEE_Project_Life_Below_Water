// const Organization = require("../models/organizations.models");
// const User = require("../models/users.models");
// const userauth = require("../middlewear/userauth.middlewear");

// const AddMember = async (req, res) => {
//   const organizationID = req.params.id;
//   const user_id = req.body.organizationMembers;

//   try {
//     const organization1 = await Organization.findById(organizationID);
//     const user = await User.findById(req.User_s._id);

//     if (!organization1) {
//       throw new Error("There is no organization..!!!");
//     }

//     if (!user) {
//       throw new Error("There is no user");
//     } else {
//       const gID = organizationID;

//       user.grp_id = gID;

//       await user.save();

//       //add registering member details to user group db
//       // const id1 = await user.find({  m_user_id},{"_id":1});
//       // const mem1 = await user.findById(id1);

//       let user_groupItem = {
//         user_id: user.user_id,
//         name: user.name,
//       };

//       await Organization.findOneAndUpdate(
//         { _id: organizationID },
//         { $push: { organizationMembers: user_groupItem } },
//         { new: true, upsert: true }
//       );
//       res.status(200).send({
//         status: "user Added to the Group ",
//         user_group: user_groupItem,
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ error: error.message });
//   }
// };

// module.exports = {
//   AddMember,
// };
