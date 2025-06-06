import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomepage from "./pages/WelcomePage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PagenotFound from "./pages/PagenotFound";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
       <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-gray-800 text-white",
          duration: 3000,
          style: {
            fontSize: "16px",
          },
        }}
      />
    </Router>
  );
}

export default App;
