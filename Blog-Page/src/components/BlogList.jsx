import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div id="blog-posts">
      {blogs.map(blog => (
        <div key={blog.id} className="blog-post">
          <h4>{blog.title}</h4>
          <p>{blog.author}</p>
          <p>{blog.summary}</p>
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
