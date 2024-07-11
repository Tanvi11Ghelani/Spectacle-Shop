const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

//get product data api (to postman)
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find();
    // console.log("console the data" + productsdata);

    // frontend ma responce send kariyu
    res.status(201).json(productsdata);
  } catch (error) {
    console.log("error" + error.message);
  }
});

//get individual data
router.get("/getproductsone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const individualdata = await Products.findOne({ id: id });
    // console.log(individualdata + "individual data");

    res.status(201).json(individualdata);
  } catch (error) {
    res.status(400).json(individualdata);
    console.log("error" + error.message);
  }
});

//register data(signup)

router.post("/register", async (req, res) => {
  // console.log(req.body);

  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    res.status(422).json({ error: "fill the all data" });
    console.log("no data available");
  }

  try {
    const preuser = await USER.findOne({ email: email });

    if (preuser) {
      res.status(422).json({ error: "this user is already present" });
    } else if (password != cpassword) {
      res.status(422).json({ error: "password and cpassword is not match" });
    } else {
      const finalUser = new USER({
        fname,
        email,
        mobile,
        password,
        cpassword,
      });
      //encryption-decryption
      //bcryptjs
      //npm i bcryptjs
      //password hashing process

      const storedata = await finalUser.save();
      console.log(storedata);

      res.status(201).json(storedata);
    }
  } catch (error) {}
});

//3 kalak
//login(signin) user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill all data" });
  }
  try {
    const userlogin = await USER.findOne({ email: email });
    console.log(userlogin + "user value");

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password); // userlogin no and data base nu login compare karaviye
      // console.log(isMatch);

      //cookie or token generate
      // jyare password lakhai tyare token generate karvani method start thase pachi te userschema ma je method banavi tya jase
      //pachi aya ave

      const token = await userlogin.generateAuthtoken();
      // console.log(token);

      res.cookie("pspectacle", token, {
        expires: new Date(Date.now() + 90000000),
        //apde je cookie degine karobhoi te only 15 min j chalse
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid details" });
      } else {
        res.status(201).json(userlogin);
      }
    }
  } catch (error) {
    res.status(400).json({ error: "invalid details" });
  }
});

//adding the data into cart

router.post("/addcart/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await Products.findOne({ id: id });
    console.log(cart + "cart value"); // have aa item ne apde kya store karvani che user ni cart ni andar

    const userContact = await USER.findOne({ _id: req.userID });
    console.log(userContact);
    //have userschema ma ek function call karvanu

    if (userContact) {
      const cartData = await userContact.addcartdata(cart);
      await userContact.save();
      console.log(cartData);
      res.status(201).json(userContact);
    } else {
      res.status(401).json({ error: "invalid user" });
    }
  } catch (error) {
    res.status(401).json({ error: "invalid user" });
  }
});

//get cart details
//api call kari
router.get("/cartdetails", authenticate, async (req, res) => {
  try {
    const buyuser = await USER.findOne({ _id: req.userID });
    res.status(201).json(buyuser);
  } catch (error) {
    console.log("error" + error);
  }
});

//get valid user
router.get("/validuser", authenticate, async (req, res) => {
  try {
    const validuserone = await USER.findOne({ _id: req.userID });
    res.status(201).json(validuserone);
  } catch (error) {
    console.log("error" + error);
  }
});

//delete item from cart
router.get("/remove/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
      return cruval.id != id;
    });
    req.rootUser.save();
    res.status(201).json(req.rootUser);
    console.log("item remove");
  } catch (error) {
    console.log("error" + error);
    res.status(400).json(req.rootUser);
  }
});

module.exports = router;
