const Products = require("./models/productSchema");

const productsdata = require("./constant/productsdata");

const DefaultData = async () => {
  try {
    await Products.deleteMany({}); // aana thi ek data ek j var database ma jase

    const storeData = await Products.insertMany(productsdata);
    console.log(storeData);
  } catch (error) {
    console.log("error" + error.message);
  }
};
module.exports = DefaultData();
