import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogService from '../services/blogService';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    loadBlogPost();
  }, [slug]);

  const loadBlogPost = () => {
    setLoading(true);
    setError(null);
    
    try {
      const blogPost = blogService.getBlogBySlug(slug);
      if (blogPost) {
        setPost(blogPost);
        // Get related posts (same category, excluding current post)
        const related = blogService.getPublishedBlogs()
          .filter(p => p.category === blogPost.category && p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        setError('Blog post not found');
      }
    } catch (err) {
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    let shareUrl;
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank');
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      alert(`Thank you! You've been subscribed to our newsletter with: ${newsletterEmail}`);
      setNewsletterEmail('');
    }
  };

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-page">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')} className="back-btn">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="error-container">
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/blog')} className="back-btn">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Post Header */}
      <motion.header 
        className="post-header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="breadcrumb">
          <a href="/blog">Blog</a> &gt; <span>{post.category}</span>
        </div>
        <h1>{post.title}</h1>
        
        <div className="post-meta">
          <div className="author-info">
            <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
            <div>
              <span className="author-name">{post.author.name}</span>
              <span className="post-date">{post.date} • {post.readTime}</span>
            </div>
          </div>
          <div className="share-buttons">
            <button 
              className="share-button twitter"
              onClick={() => handleShare('twitter')}
            >
              Twitter
            </button>
            <button 
              className="share-button linkedin"
              onClick={() => handleShare('linkedin')}
            >
              LinkedIn
            </button>
            <button 
              className="share-button copy"
              onClick={() => handleShare('copy')}
            >
              Copy Link
            </button>
          </div>
        </div>
        
        <img src={post.image} alt={post.title} className="featured-image" />
      </motion.header>

      {/* Main Content */}
      <motion.article 
        className="post-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="content-wrapper">
          {/* Table of Contents (optional) */}
          <aside className="toc">
            <h3>Table of Contents</h3>
            <ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#content">Content</a></li>
            </ul>
          </aside>
          
          {/* Actual Post Content */}
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.article>

      {/* Post Footer */}
      <motion.footer 
        className="post-footer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* Tags */}
        <div className="post-tags">
          {post.tags.map(tag => (
            <a key={tag} href={`/blog/tag/${tag}`} className="tag">#{tag}</a>
          ))}
        </div>
        
        {/* Author Bio */}
        <div className="author-bio">
          <img src={post.author.avatar} alt={post.author.name} />
          <div>
            <h3>About {post.author.name}</h3>
            <p>{post.author.bio}</p>
            <div className="author-social">
              {post.author.twitter && (
                <a href={post.author.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              )}
              {post.author.linkedin && (
                <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
            </div>
          </div>
        </div>
        
        {/* Newsletter CTA */}
        <div className="newsletter-cta">
          <h3>Enjoyed this article?</h3>
          <p>Subscribe to our newsletter for more content like this</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map(relatedPost => (
                <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="related-card">
                  <img src={relatedPost.image} alt={relatedPost.title} />
                  <div className="related-content">
                    <span className="category">{relatedPost.category}</span>
                    <h3>{relatedPost.title}</h3>
                    <div className="meta">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.footer>
    </motion.div>
  );
};

export default BlogPost;