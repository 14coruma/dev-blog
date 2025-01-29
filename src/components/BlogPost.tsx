import React, { useEffect, useState } from 'react';
import { BlogPost as BlogPostType } from "../data/BlogData";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadContent = async () => {
            const response = await fetch(`posts/${post.fileName}`);
            const markdown = await response.text();
            setContent(markdown);
        };
        loadContent();
  }, [post.fileName]);

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <h6 className="text-muted">{post.date}</h6>
        <hr />
        <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;