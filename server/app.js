require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");
const cookieParser = require("cookie-parser");

const Products = require("./models/productSchema");

const DefaultData = require("./defaultdata");

const cors = require("cors"); //front and backend bane alg alg port par kam kare tyare error ave
//atle cors install karvanu

const router = require("./routes/router");

app.use(express.json()); // data json file maj jai atle aa lakhu

//cookie parser ne define kariyu
app.use(cookieParser("")); //ani andar blank value hase
app.use(cors()); //cors define karu

app.use(router); //router define karu

//server start karvanu have
const port = 8005;
app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});

DefaultData;
