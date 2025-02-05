import React, { useEffect, useState } from "react";
import { BlogPost as BlogPostType } from "../data/BlogData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch(`posts/${post.fileName}`);
      const markdown = await response.text();
      setContent(markdown);
    };
    loadContent();
  }, [post.fileName]);

  return (
    <div className="card shadow-lg border-0 mb-4 p-0">
      <div className="card-header">
        <button
          className="btn fw-bold w-100 text-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${post.id}`}
          aria-expanded="false"
          aria-controls={`collapse-${post.id}`}
        >
          <span className="float-end">▼</span>
          <h2 className="card-title text-primary fw-bold">{post.title}</h2>
          <h6 className="text-muted">{post.date.toDateString()}</h6>
        </button>
      </div>

      <div id={`collapse-${post.id}`} className="collapse p-2">
        <div className="card-body p-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
