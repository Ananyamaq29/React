import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function BlogDetail() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
     const response = await fetch(`http://localhost:5007/api/blogs/${id}`);
     const post = await response.json();
     setBlog(post );
    };
    fetchBlog();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail-container">
      <h2>{blog.title}</h2>
      <p className="author">By {blog.author}</p>
      <p className="publish-date">{blog.date}</p>
      <p className="category">Category: {blog.category}</p>
      <p className="content">{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
