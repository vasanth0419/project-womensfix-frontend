import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Navbar from "./components/Navbar";
import Forgetpassword from "./components/Forgetpassword";
import Resetpassword from "./components/Resetpassword";

import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/layouts/Error";
import Trends from "./components/Trends";
import Contactus from "./components/Contactus";
import Dresses from "./components/dressespage/Dresses";
import CartPage from "./components/Cartpage";

import Pants from "./components/dressespage/Pants";
import Formals from "./components/dressespage/Formals";
import Casuals from "./components/dressespage/Casuals";
import Tops from "./components/dressespage/Tops";
import Skirts from "./components/dressespage/Skirts";
import Jumpsuits from "./components/dressespage/Jumpsuits";
import Rompers from "./components/dressespage/Rompers";


import SuccessMessage from "./components/SuccessMessage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Clear authentication-related data and update logged-in state
    setIsLoggedIn(false);
    // Other logout logic (e.g., clear token)
  };
  const addToCart = (dress) => {
    console.log("Adding dress to cart:", dress);

    const existingItem = cartItems.find((item) => item._id === dress._id);

    if (existingItem) {
      console.log("Existing item found in cart:", existingItem);
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((item) =>
        item.id === dress.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      console.log("Updated cart items:", updatedCartItems);
      setCartItems(updatedCartItems);
    } else {
      console.log("New item added to cart");
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...dress, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={<Loginpage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/dresses" element={<Dresses addToCart={addToCart} />} />

          <Route path="/pants" element={<Pants />} />
          <Route path="/formaldress" element={<Formals />} />
          <Route path="/casualdress" element={<Casuals />} />
          <Route path="/tops" element={<Tops />} />
          <Route path="/jumpsuits" element={<Jumpsuits />} />
          <Route path="/skirts" element={<Skirts />} />
          <Route path="/rompers" element={<Rompers />} />
          <Route path="/success" element={<SuccessMessage />} />

          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/cartpage"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
         

          {/* error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
