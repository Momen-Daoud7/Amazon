import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
          <Route exact path="/login" element={<h1>llogin</h1>} />
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
