import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Better Website Performance",
      excerpt: "Learn how to optimize your website for faster loading times and better user experience.",
      category: "Web Development",
      date: "May 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      image: "/placeholder-dev.jpg",
      slug: "website-performance-tips"
    },
    {
      id: 2,
      title: "The Complete Guide to Content Marketing in 2024",
      excerpt: "Discover the latest strategies for creating content that converts in the current digital landscape.",
      category: "Marketing",
      date: "April 28, 2024",
      readTime: "8 min read",
      author: "Michael Chen",
      image: "/placeholder-marketing.jpg",
      slug: "content-marketing-guide"
    },
    {
      id: 3,
      title: "How to Implement Dark Mode in React Applications",
      excerpt: "A step-by-step tutorial for adding dark mode functionality to your React projects.",
      category: "Web Development",
      date: "April 10, 2024",
      readTime: "6 min read",
      author: "David Wilson",
      image: "/placeholder-react.jpg",
      slug: "react-dark-mode"
    },
    {
      id: 4,
      title: "SEO Trends You Can't Ignore This Year",
      excerpt: "Stay ahead of the competition with these essential SEO techniques for 2024.",
      category: "SEO",
      date: "March 22, 2024",
      readTime: "7 min read",
      author: "Emily Rodriguez",
      image: "/placeholder-seo.jpg",
      slug: "seo-trends-2024"
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>Insights, tutorials, and industry news from our team</p>
        
        {/* Search Bar */}
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search blog posts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="featured-post">
          <div className="featured-image">
            <img src={filteredPosts[0].image} alt={filteredPosts[0].title} />
          </div>
          <div className="featured-content">
            <span className="category-tag">{filteredPosts[0].category}</span>
            <h2>{filteredPosts[0].title}</h2>
            <p className="excerpt">{filteredPosts[0].excerpt}</p>
            <div className="post-meta">
              <span>By {filteredPosts[0].author}</span>
              <span>{filteredPosts[0].date}</span>
              <span>{filteredPosts[0].readTime}</span>
            </div>
            <a href={`/blog/${filteredPosts[0].slug}`} className="read-more">Read Article →</a>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="posts-grid">
        {filteredPosts.slice(1).map(post => (
          <article key={post.id} className="post-card">
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
          </article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="cta-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest blog posts and news</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;