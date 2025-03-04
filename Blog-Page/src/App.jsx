import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import CategoryFilter from "./components/CategoryFilter";
import SubscriptionForm from "./components/SubscriptionForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subscriptionEmail, setSubscriptionEmail] = useState("");

  // Fetch blogs data from an API (mocked)
  useEffect(() => {
    fetch("http://localhost:5187") // Replace with actual API
      .then(response => response.json())
      .then(data => {
        setBlogs(data.blogs);
        setCategories(data.categories);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <div id="mid">
            <div id="blog-posts">
              <Routes>
                <Route
                  path="/blogs"
                  element={<BlogList blogs={blogs} />}
                />
                <Route
                  path="/blogs/:id"
                  element={<BlogDetails />}
                />
              </Routes>
            </div>
            <aside>
              <CategoryFilter categories={categories} />
              <SubscriptionForm email={subscriptionEmail} setEmail={setSubscriptionEmail} />
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
