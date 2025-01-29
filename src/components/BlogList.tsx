import React from "react";
import { blogPosts } from "../data/BlogData";
import BlogPost from "./BlogPost";

const BlogList: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold display-4 mb-4">Andrew's Dev Blog</h1>
      <p className="text-muted text-center mb-4">Follow my journey as I build and improve personal development projects!</p>
      
      <div className="row justify-content-center">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;