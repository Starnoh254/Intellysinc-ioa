import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import blogService from '../services/blogService';
import '../styles/Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    setLoading(true);
    const publishedBlogs = blogService.getPublishedBlogs();
    setBlogPosts(publishedBlogs);
    
    const allCategories = ['All', ...blogService.getCategories()];
    setCategories(allCategories);
    setLoading(false);
  };

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="blog-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          Insights, tutorials, and industry news from our team
        </motion.p>
        
        {/* Search Bar */}
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search blog posts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </motion.section>

      {/* Category Filters */}
      <motion.div 
        className="category-filters"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <motion.div 
          className="featured-post"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="featured-image">
            <img src={filteredPosts[0].image} alt={filteredPosts[0].title} />
          </div>
          <div className="featured-content">
            <span className="category-tag">{filteredPosts[0].category}</span>
            <h2>{filteredPosts[0].title}</h2>
            <p className="excerpt">{filteredPosts[0].excerpt}</p>
            <div className="post-meta">
              <span>By {filteredPosts[0].author.name}</span>
              <span>{filteredPosts[0].date}</span>
              <span>{filteredPosts[0].readTime}</span>
            </div>
            <a href={`/blog/${filteredPosts[0].slug}`} className="read-more">Read Article →</a>
          </div>
        </motion.div>
      )}

      {/* Posts Grid */}
      <div className="posts-grid">
        {filteredPosts.slice(1).map((post, index) => (
          <motion.article 
            key={post.id} 
            className="post-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + (index * 0.1) }}
          >
            <div className="card-image">
              <img src={post.image} alt={post.title} />
              <span className="category-tag">{post.category}</span>
            </div>
            <div className="card-content">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a href={`/blog/${post.slug}`} className="read-more">Read More →</a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <motion.div 
          className="no-posts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3>No blog posts found</h3>
          <p>Try adjusting your search or category filters.</p>
        </motion.div>
      )}

      {/* Newsletter CTA */}
      <motion.section 
        className="newsletter-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="cta-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest blog posts and news</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;