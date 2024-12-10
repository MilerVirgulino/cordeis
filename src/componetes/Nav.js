import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
//import Login from "./Login";
import Metodologia from "./Metodologia"
import About from "./About"

export default function Nav() {
  return (
    <Router>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">A escola</Link>
            </li>
            <li>
              <Link to="/metodologia">Método</Link>
            </li>
            
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metodologia" element={<Metodologia />} />
        </Routes>
      </div>
    </Router>
  );
}
