import React from "react";
import { blogPosts } from "../data/BlogData";
import BlogPost from "./BlogPost";

const BlogList: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dev Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;