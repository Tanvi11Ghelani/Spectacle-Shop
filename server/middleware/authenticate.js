const jwt = require("jsonwebtoken");
const USER = require("../models/userSchema");
const secretkey = process.env.KEY;

const authenticate = async (req, res, next) => {
  // aa next keyword je apde next continue karvana chiye tene call kare
  try {
    // have ahi cookie ni value set kariye te pela apde cookie ni value get to kariye
    const token = req.cookies.pspectacle;

    //have pela cookie ni value avse tyare token ni andar store thase store thay apchi token verify thay
    //cookie and secret key bane verify thay
    const verifyToken = jwt.verify(token, secretkey);
    console.log(verifyToken);

    //have user find karvanu
    const rootUser = await USER.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    console.log(rootUser);

    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("unauthorized:no token provide");
    console.log(error);
  }
};
module.exports = authenticate;
