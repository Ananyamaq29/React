import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState();
 

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch("http://localhost:5007/api/blogs");
        const blog = await response.json();
        setBlogs(blog);
        console.log(blogs);
        
      } catch (error) {
        console.assertlog(error.message);
      }
    }
    fetchBlog();
  }, []);

 

    const filtered =category? blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase()):blogs;

  

  return (
    <div className="blog-list-container">
      <div className="search-container">
        <label id="search" htmlFor="">
          Search Blogs:
        </label>
        <input
          id="search-bar"
          type="text"
          placeholder="Title or Author"
         
        />
      </div>

      <div className="categories">
        <h3>Categories</h3>
        <ul id="category-list">
          <li>
            <a href="#" onClick={() => setCategory("Travel")}>
              Travel
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCategory("Lifestyle")}>
              Lifestyle
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCategory("Technology")}>
              Technology
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setCategory("Education")}>
              Education
            </a>
          </li>
        </ul>
      </div>

      <div id="blog-posts">
        {filtered.map((post, index) => (
          <article className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p className="author">By {post.author}</p>
            <p className="publish-date">{post.date}</p>
            <p className="summary">{post.summary}</p>
            <p className="category">
              Category: <span>{post.category}</span>
            </p>
            <Link to={`/blogs/${index}`} className="read-more">
              Read More
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
