import React from 'react';
import '../styles/BlogPost.css';

const BlogPost = () => {
  // Sample blog post data
  const post = {
    id: 1,
    title: "10 Tips for Better Website Performance in 2025",
    content: `
      <h2>Introduction</h2>
      <p>Website performance is crucial for user experience and SEO. In this post, we'll explore ten actionable tips to speed up your website.</p>
      
      <h2>1. Optimize Images</h2>
      <p>Use modern formats like WebP and compress images without losing quality. Tools like Squoosh can help reduce file sizes by up to 70%.</p>
      
      <h3>Example Code:</h3>
      <pre><code>&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Fallback"&gt;
&lt;/picture&gt;</code></pre>
      
      <h2>2. Leverage Browser Caching</h2>
      <p>Set proper cache headers to reduce server load and improve repeat visit performance.</p>
    `,
    category: "Web Development",
    date: "May 15, 2024",
    readTime: "5 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "/author-avatar.jpg",
      bio: "Senior Frontend Developer with 8 years of experience specializing in performance optimization.",
      twitter: "https://twitter.com/sarahdev",
      linkedin: "https://linkedin.com/in/sarahdev"
    },
    image: "/website-performance.jpg",
    tags: ["performance", "webdev", "optimization"]
  };

  // Related posts data
  const relatedPosts = [
    {
      id: 2,
      title: "The Ultimate Guide to Lighthouse Metrics",
      category: "Web Development",
      date: "April 10, 2024",
      readTime: "7 min read",
      image: "/lighthouse-guide.jpg",
      slug: "lighthouse-metrics-guide"
    },
    {
      id: 3,
      title: "React Performance Optimization Techniques",
      category: "Web Development",
      date: "March 28, 2024",
      readTime: "6 min read",
      image: "/react-performance.jpg",
      slug: "react-performance-techniques"
    }
  ];

  return (
    <div className="blog-post-page">
      {/* Post Header */}
      <header className="post-header">
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
            <button className="share-button twitter">Twitter</button>
            <button className="share-button linkedin">LinkedIn</button>
            <button className="share-button copy">Copy Link</button>
          </div>
        </div>
        
        <img src={post.image} alt={post.title} className="featured-image" />
      </header>

      {/* Main Content */}
      <article className="post-content">
        <div className="content-wrapper">
          {/* Table of Contents (optional) */}
          <aside className="toc">
            <h3>Table of Contents</h3>
            <ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#optimize-images">Optimize Images</a></li>
              <li><a href="#browser-caching">Browser Caching</a></li>
            </ul>
          </aside>
          
          {/* Actual Post Content */}
          <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Post Footer */}
      <footer className="post-footer">
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
              <a href={post.author.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        {/* Newsletter CTA */}
        <div className="newsletter-cta">
          <h3>Enjoyed this article?</h3>
          <p>Subscribe to our newsletter for more content like this</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
        {/* Related Posts */}
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
      </footer>
    </div>
  );
};

export default BlogPost;