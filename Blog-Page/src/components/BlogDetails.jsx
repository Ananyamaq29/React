import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5187/${id}`) // Replace with actual API
      .then(response => response.json())
      .then(data => setBlog(data.blog));
  }, [id]);

  return blog ? (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default BlogDetails;
