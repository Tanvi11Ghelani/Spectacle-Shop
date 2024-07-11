import "./App.css";
import Navbaar from "./Components/header/Navbaar";
import Newnavbaar from "./Components/newnavbaar/newnavbaar";
import Maincomponent from "./Components/Home/Maincomponent";
import Footer from "./Components/footer/Footer";
import Sign_in from "./Components/Signup_Signin/Sign_in";
import Sign_up from "./Components/Signup_Signin/Sign_up";
import Cart from "./Components/cart/Cart";
import Buynow from "./Components/buynow/Buynow";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Newarrivals from "./Components/Newarrivals/Newarrivals";
import Sunglasses from "./Components/Sunglasses/Sunglasses";
import Accessories from "./Components/Accessories/Accessories";
function App() {
  return (
    <>
      <Navbaar />
      <Newnavbaar />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/Login" element={<Sign_in />} />
        <Route path="/Register" element={<Sign_up />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Newarrivals" element={<Newarrivals />} />
        <Route path="Sunglasses" element={<Sunglasses />} />
        <Route path="Accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
