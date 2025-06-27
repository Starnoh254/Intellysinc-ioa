// Blog Service for managing blog data
class BlogService {
  constructor() {
    this.storageKey = 'intellisync_blogs';
    this.initializeDefaultBlogs();
  }

  // Initialize with default blogs if none exist
  initializeDefaultBlogs() {
    const existingBlogs = this.getAllBlogs();
    if (existingBlogs.length === 0) {
      const defaultBlogs = [
        {
          id: 1,
          title: "10 Tips for Better Website Performance",
          excerpt: "Learn how to optimize your website for faster loading times and better user experience.",
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
            
            <h2>3. Minimize HTTP Requests</h2>
            <p>Combine CSS and JavaScript files, use CSS sprites, and implement lazy loading for images.</p>
            
            <h2>4. Use a CDN</h2>
            <p>Content Delivery Networks can significantly improve loading times by serving content from servers closer to your users.</p>
            
            <h2>5. Enable Gzip Compression</h2>
            <p>Compress your files before sending them to the browser to reduce file sizes.</p>
            
            <h2>6. Optimize CSS and JavaScript</h2>
            <p>Minify and combine your CSS and JavaScript files to reduce file sizes.</p>
            
            <h2>7. Use Efficient CSS Selectors</h2>
            <p>Write efficient CSS selectors to improve rendering performance.</p>
            
            <h2>8. Optimize Database Queries</h2>
            <p>Ensure your database queries are optimized and use proper indexing.</p>
            
            <h2>9. Implement Lazy Loading</h2>
            <p>Load images and other resources only when they're needed.</p>
            
            <h2>10. Monitor Performance</h2>
            <p>Use tools like Google PageSpeed Insights and WebPageTest to monitor and improve performance.</p>
          `,
          category: "Web Development",
          date: "May 15, 2024",
          readTime: "5 min read",
          author: {
            name: "Sarah Johnson",
            avatar: "/images/freepik/rm378-03c.jpg",
            bio: "Senior Frontend Developer with 8 years of experience specializing in performance optimization.",
            twitter: "https://twitter.com/sarahdev",
            linkedin: "https://linkedin.com/in/sarahdev"
          },
          image: "/images/freepik/rm378-03c.jpg",
          tags: ["performance", "webdev", "optimization"],
          slug: "website-performance-tips",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "The Complete Guide to Content Marketing in 2024",
          excerpt: "Discover the latest strategies for creating content that converts in the current digital landscape.",
          content: `
            <h2>Introduction</h2>
            <p>Content marketing has evolved significantly in 2024. This guide will help you understand the latest trends and strategies.</p>
            
            <h2>1. Video Content Dominance</h2>
            <p>Video content continues to dominate social media and search results. Short-form videos are particularly effective.</p>
            
            <h2>2. AI-Powered Content Creation</h2>
            <p>AI tools are revolutionizing content creation, from writing assistance to video generation.</p>
            
            <h2>3. Personalization at Scale</h2>
            <p>Use data and AI to create personalized content experiences for your audience.</p>
            
            <h2>4. Interactive Content</h2>
            <p>Quizzes, polls, and interactive infographics engage users more effectively than static content.</p>
            
            <h2>5. Voice Search Optimization</h2>
            <p>Optimize your content for voice search queries, which are becoming increasingly popular.</p>
          `,
          category: "Marketing",
          date: "April 28, 2024",
          readTime: "8 min read",
          author: {
            name: "Michael Chen",
            avatar: "/images/freepik/3470.jpg",
            bio: "Digital Marketing Specialist with expertise in content strategy and SEO.",
            twitter: "https://twitter.com/michaelchen",
            linkedin: "https://linkedin.com/in/michaelchen"
          },
          image: "/images/freepik/3470.jpg",
          tags: ["marketing", "content", "seo"],
          slug: "content-marketing-guide",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      this.saveBlogs(defaultBlogs);
    }
  }

  // Get all blogs
  getAllBlogs() {
    try {
      const blogs = localStorage.getItem(this.storageKey);
      return blogs ? JSON.parse(blogs) : [];
    } catch (error) {
      console.error('Error loading blogs:', error);
      return [];
    }
  }

  // Get published blogs only
  getPublishedBlogs() {
    return this.getAllBlogs().filter(blog => blog.published);
  }

  // Get blog by ID
  getBlogById(id) {
    const blogs = this.getAllBlogs();
    return blogs.find(blog => blog.id === id);
  }

  // Get blog by slug
  getBlogBySlug(slug) {
    const blogs = this.getAllBlogs();
    return blogs.find(blog => blog.slug === slug);
  }

  // Create new blog
  createBlog(blogData) {
    const blogs = this.getAllBlogs();
    const newBlog = {
      ...blogData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: blogData.published || false
    };
    
    blogs.push(newBlog);
    this.saveBlogs(blogs);
    return newBlog;
  }

  // Update blog
  updateBlog(id, blogData) {
    const blogs = this.getAllBlogs();
    const index = blogs.findIndex(blog => blog.id === id);
    
    if (index !== -1) {
      blogs[index] = {
        ...blogs[index],
        ...blogData,
        updatedAt: new Date().toISOString()
      };
      this.saveBlogs(blogs);
      return blogs[index];
    }
    return null;
  }

  // Delete blog
  deleteBlog(id) {
    const blogs = this.getAllBlogs();
    const filteredBlogs = blogs.filter(blog => blog.id !== id);
    this.saveBlogs(filteredBlogs);
  }

  // Toggle blog published status
  togglePublished(id) {
    const blog = this.getBlogById(id);
    if (blog) {
      return this.updateBlog(id, { published: !blog.published });
    }
    return null;
  }

  // Get categories
  getCategories() {
    const blogs = this.getPublishedBlogs();
    const categories = [...new Set(blogs.map(blog => blog.category))];
    return categories;
  }

  // Get related blogs
  getRelatedBlogs(currentBlogId, limit = 3) {
    const blogs = this.getPublishedBlogs();
    const currentBlog = this.getBlogById(currentBlogId);
    
    if (!currentBlog) return [];
    
    return blogs
      .filter(blog => blog.id !== currentBlogId && blog.category === currentBlog.category)
      .slice(0, limit);
  }

  // Search blogs
  searchBlogs(query) {
    const blogs = this.getPublishedBlogs();
    const lowercaseQuery = query.toLowerCase();
    
    return blogs.filter(blog => 
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
      blog.content.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Generate unique ID
  generateId() {
    const blogs = this.getAllBlogs();
    const maxId = blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) : 0;
    return maxId + 1;
  }

  // Generate slug from title
  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  // Save blogs to localStorage
  saveBlogs(blogs) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(blogs));
    } catch (error) {
      console.error('Error saving blogs:', error);
    }
  }

  // Export blogs (for backup)
  exportBlogs() {
    return JSON.stringify(this.getAllBlogs(), null, 2);
  }

  // Import blogs (for restore)
  importBlogs(jsonData) {
    try {
      const blogs = JSON.parse(jsonData);
      this.saveBlogs(blogs);
      return true;
    } catch (error) {
      console.error('Error importing blogs:', error);
      return false;
    }
  }
}

export default new BlogService(); 