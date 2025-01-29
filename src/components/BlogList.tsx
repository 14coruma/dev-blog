import React from "react";
import { blogPosts } from "../data/BlogData";
import BlogPost from "./BlogPost";

const BlogList: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold display-4 pt-5 mb-4">Weekly Dev Updates</h1>
      <p className="text-muted text-center">Follow my journey as I build and improve projects!</p>
      
      <div className="row justify-content-center">
        <h1 className="mb-4">Dev Blog</h1>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;