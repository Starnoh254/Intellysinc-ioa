import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogService from '../services/blogService';
import '../styles/AdminBlogManager.css';

const AdminBlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: {
      name: '',
      bio: '',
      twitter: '',
      linkedin: ''
    },
    image: '',
    tags: '',
    published: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    const allBlogs = blogService.getAllBlogs();
    setBlogs(allBlogs);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('author.')) {
      const authorField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        author: {
          ...prev.author,
          [authorField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      slug: blogService.generateSlug(formData.title),
      author: {
        ...formData.author,
        avatar: formData.author.avatar || '/images/freepik/rm378-03c.jpg'
      }
    };

    if (editingBlog) {
      blogService.updateBlog(editingBlog.id, blogData);
    } else {
      blogService.createBlog(blogData);
    }

    resetForm();
    loadBlogs();
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: {
        name: blog.author.name,
        bio: blog.author.bio,
        twitter: blog.author.twitter,
        linkedin: blog.author.linkedin
      },
      image: blog.image,
      tags: blog.tags.join(', '),
      published: blog.published
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      blogService.deleteBlog(id);
      loadBlogs();
    }
  };

  const handleTogglePublished = (id) => {
    blogService.togglePublished(id);
    loadBlogs();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      author: {
        name: '',
        bio: '',
        twitter: '',
        linkedin: ''
      },
      image: '',
      tags: '',
      published: false
    });
    setEditingBlog(null);
    setShowForm(false);
  };

  const categories = ['Web Development', 'Marketing', 'SEO', 'Design', 'Business', 'Technology'];

  return (
    <div className="admin-blog-manager">
      <div className="admin-header">
        <h1>Blog Management</h1>
        <div className="admin-actions">
          <button 
            className="add-blog-btn"
            onClick={() => setShowForm(true)}
          >
            {editingBlog ? 'Update Blog' : 'Add New Blog'}
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Blog Form */}
      {showForm && (
        <motion.div 
          className="blog-form-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="blog-form"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="form-header">
              <h2>{editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
              <button className="close-btn" onClick={resetForm}>×</button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Content *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="15"
                  placeholder="Use HTML tags for formatting (e.g., &lt;h2&gt;, &lt;p&gt;, &lt;pre&gt;)"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Featured Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="form-group">
                  <label>Tags (comma-separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="performance, webdev, optimization"
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Author Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Author Name *</label>
                    <input
                      type="text"
                      name="author.name"
                      value={formData.author.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Author Bio</label>
                    <textarea
                      name="author.bio"
                      value={formData.author.bio}
                      onChange={handleInputChange}
                      rows="2"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Twitter URL</label>
                    <input
                      type="url"
                      name="author.twitter"
                      value={formData.author.twitter}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>LinkedIn URL</label>
                    <input
                      type="url"
                      name="author.linkedin"
                      value={formData.author.linkedin}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                  />
                  Publish immediately
                </label>
              </div>

              <div className="form-actions">
                <button type="button" onClick={resetForm} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Blogs List */}
      <div className="blogs-list">
        <h2>All Blog Posts ({blogs.length})</h2>
        <div className="blogs-grid">
          {blogs.map(blog => (
            <motion.div 
              key={blog.id} 
              className="blog-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="blog-item-header">
                <span className={`status ${blog.published ? 'published' : 'draft'}`}>
                  {blog.published ? 'Published' : 'Draft'}
                </span>
                <span className="category">{blog.category}</span>
              </div>
              
              <h3>{blog.title}</h3>
              <p className="excerpt">{blog.excerpt}</p>
              
              <div className="blog-meta">
                <span>By {blog.author.name}</span>
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="blog-actions">
                <button 
                  className="edit-btn"
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>
                <button 
                  className={`publish-btn ${blog.published ? 'unpublish' : 'publish'}`}
                  onClick={() => handleTogglePublished(blog.id)}
                >
                  {blog.published ? 'Unpublish' : 'Publish'}
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogManager; 