import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogService from '../services/blogService';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    loadBlog();
  }, [slug]);

  const loadBlog = () => {
    setLoading(true);
    const blogPost = blogService.getBlogBySlug(slug);
    
    if (blogPost) {
      setBlog(blogPost);
      // Get related posts (excluding current post)
      const related = blogService.getRelatedBlogs(blogPost.id, 3);
      setRelatedPosts(related);
    }
    setLoading(false);
  };

  const handleBackToBlogs = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <div className="error-container">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <button onClick={handleBackToBlogs} className="back-button">
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* Back Button */}
      <motion.button
        className="back-button"
        onClick={handleBackToBlogs}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        ← Back to Blogs
      </motion.button>

      {/* Hero Section */}
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        <div className="hero-content">
          <span className="category-tag">{blog.category}</span>
          <h1>{blog.title}</h1>
          <p className="excerpt">{blog.excerpt}</p>
          <div className="post-meta">
            <div className="author-info">
              <img src={blog.author.avatar} alt={blog.author.name} className="author-avatar" />
              <div>
                <span className="author-name">By {blog.author.name}</span>
                <span className="author-bio">{blog.author.bio}</span>
              </div>
            </div>
            <div className="post-stats">
              <span>{blog.readTime}</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Content */}
      <motion.article 
        className="blog-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="content-wrapper">
          <div 
            className="content-html"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </motion.article>

      {/* Author Section */}
      <motion.section 
        className="author-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="author-card">
          <img src={blog.author.avatar} alt={blog.author.name} className="author-avatar-large" />
          <div className="author-details">
            <h3>{blog.author.name}</h3>
            <p>{blog.author.bio}</p>
            <div className="author-social">
              <a href={blog.author.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href={blog.author.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section 
          className="related-posts"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h2>Related Posts</h2>
          <div className="related-grid">
            {relatedPosts.map((post) => (
              <motion.article 
                key={post.id} 
                className="related-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-tag">{post.category}</span>
                </div>
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.readTime}</span>
                  </div>
                  <a href={`#/blog/${post.slug}`} className="read-more">Read More →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* Newsletter CTA */}
      <motion.section 
        className="newsletter-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest blog posts and insights</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail; 