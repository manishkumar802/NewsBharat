import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Sports from "./components/Sports";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Bussiness from "./components/Bussiness";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar /> {/* Always visible */}
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<News />} /> {/* News top */}
            <Route path="/sports" element={<Sports />} /> {/* Sports */}
            <Route path="/about" element={<About />} /> {/* About */}
            <Route path="/business" element={<Bussiness />} />
            <Route path="/sports/cric" element={<Bussiness />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
