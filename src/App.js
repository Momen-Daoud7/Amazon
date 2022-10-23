import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/login" element={<h1>llogin</h1>} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
