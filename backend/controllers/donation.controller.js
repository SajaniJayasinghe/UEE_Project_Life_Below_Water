const GetMessage = async (req, res) => {
  try {
    return res.status(200).send({ succes: true, message: "Moda sajani" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  GetMessage,
};
