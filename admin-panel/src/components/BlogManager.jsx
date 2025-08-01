import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/blogs';

function emptyBlog() {
  return {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    date: '',
    readTime: '',
    author: { name: '', avatar: '', bio: '', twitter: '', linkedin: '' },
    image: '',
    tags: '',
    published: false
  };
}

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // blog object or null
  const [form, setForm] = useState(emptyBlog());
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchBlogs = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = blog => {
    setEditing(blog._id);
    setForm({ ...blog, tags: (blog.tags || []).join(', ') });
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this blog post?')) return;
    setDeleting(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      fetchBlogs();
    } catch (err) {
      setError('Failed to delete.');
    } finally {
      setDeleting(false);
    }
  };

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('author.')) {
      setForm(f => ({ ...f, author: { ...f.author, [name.split('.')[1]]: value } }));
    } else if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const method = editing ? 'PUT' : 'POST';
      const url = editing ? `${API_URL}/${editing}` : API_URL;
      const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Save failed');
      setEditing(null);
      setForm(emptyBlog());
      fetchBlogs();
    } catch (err) {
      setError('Failed to save.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditing(null);
    setForm(emptyBlog());
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 12px #0001' }}>
      <h2>Blog Management</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <div style={{ marginBottom: 32 }}>
        <h3>{editing ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
        <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label>Title:</label>
            <input name="title" value={form.title} onChange={handleFormChange} style={{ width: '100%' }} required />
            <label>Slug:</label>
            <input name="slug" value={form.slug} onChange={handleFormChange} style={{ width: '100%' }} required pattern="[a-z0-9-]+" />
            <label>Excerpt:</label>
            <textarea name="excerpt" value={form.excerpt} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Content (HTML):</label>
            <textarea name="content" value={form.content} onChange={handleFormChange} style={{ width: '100%' }} rows={6} />
            <label>Category:</label>
            <input name="category" value={form.category} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Date:</label>
            <input name="date" value={form.date} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Read Time:</label>
            <input name="readTime" value={form.readTime} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Tags (comma separated):</label>
            <input name="tags" value={form.tags} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Image URL:</label>
            <input name="image" value={form.image} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Published:</label>
            <input name="published" type="checkbox" checked={form.published} onChange={handleFormChange} />
          </div>
          <div>
            <label>Author Name:</label>
            <input name="author.name" value={form.author.name} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Author Avatar URL:</label>
            <input name="author.avatar" value={form.author.avatar} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Author Bio:</label>
            <textarea name="author.bio" value={form.author.bio} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Author Twitter:</label>
            <input name="author.twitter" value={form.author.twitter} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Author LinkedIn:</label>
            <input name="author.linkedin" value={form.author.linkedin} onChange={handleFormChange} style={{ width: '100%' }} />
            <div style={{ marginTop: 16 }}>
              <button type="submit" disabled={saving} style={{ background: '#0078d4', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 600, cursor: 'pointer', marginRight: 8 }}>{saving ? 'Saving...' : (editing ? 'Update' : 'Create')}</button>
              {editing && <button type="button" onClick={handleCancel} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>}
            </div>
          </div>
        </form>
      </div>
      <h3>All Blog Posts</h3>
      {loading ? <div>Loading blogs...</div> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f0f4fa' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Title</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Slug</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Category</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Published</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{blog.title}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{blog.slug}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{blog.category}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{blog.published ? 'Yes' : 'No'}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>
                  <button onClick={() => handleEdit(blog)} style={{ marginRight: 8, background: '#eee', border: 'none', borderRadius: 4, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDelete(blog._id)} style={{ background: '#ffdddd', color: '#a00', border: 'none', borderRadius: 4, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 