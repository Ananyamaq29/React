import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import SubscriptionForm from "./components/SubscriptionForm";

function App() {
  return (
    <Router>
      <header>
        <h2>Blogging Platform</h2>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

      <div className="App">
        <Routes id='routers'>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
        <SubscriptionForm />
      </div>

      <footer>
        <p>&copy; 2025 Dynamic Blogging Platform</p>
        <p>Follow us on:
            <a href="#">Facebook</a> |
            <a href="#">Instagram</a>
        </p>
        <p>Contact: info@blogplatform.com</p>
    </footer>
    </Router>
  );
}

export default App;
