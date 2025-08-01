import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/resources';

function emptyResource() {
  return {
    title: '',
    slug: '',
    description: '',
    fileUrl: '',
    type: '',
    published: false
  };
}

export default function ResourceManager() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // resource object or null
  const [form, setForm] = useState(emptyResource());
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const fetchResources = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setResources(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleEdit = resource => {
    setEditing(resource._id);
    setForm({ ...resource });
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this resource?')) return;
    setDeleting(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      fetchResources();
    } catch (err) {
      setError('Failed to delete.');
    } finally {
      setDeleting(false);
    }
  };

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
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
      const payload = { ...form };
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Save failed');
      setEditing(null);
      setForm(emptyResource());
      fetchResources();
    } catch (err) {
      setError('Failed to save.');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditing(null);
    setForm(emptyResource());
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 12px #0001' }}>
      <h2>Resource Management</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <div style={{ marginBottom: 32 }}>
        <h3>{editing ? 'Edit Resource' : 'Create New Resource'}</h3>
        <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label>Title:</label>
            <input name="title" value={form.title} onChange={handleFormChange} style={{ width: '100%' }} required />
            <label>Slug:</label>
            <input name="slug" value={form.slug} onChange={handleFormChange} style={{ width: '100%' }} required pattern="[a-z0-9-]+" />
            <label>Description:</label>
            <textarea name="description" value={form.description} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>File URL:</label>
            <input name="fileUrl" value={form.fileUrl} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Type:</label>
            <input name="type" value={form.type} onChange={handleFormChange} style={{ width: '100%' }} />
            <label>Published:</label>
            <input name="published" type="checkbox" checked={form.published} onChange={handleFormChange} />
          </div>
          <div style={{ marginTop: 16 }}>
            <button type="submit" disabled={saving} style={{ background: '#0078d4', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 600, cursor: 'pointer', marginRight: 8 }}>{saving ? 'Saving...' : (editing ? 'Update' : 'Create')}</button>
            {editing && <button type="button" onClick={handleCancel} style={{ background: '#eee', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>}
          </div>
        </form>
      </div>
      <h3>All Resources</h3>
      {loading ? <div>Loading resources...</div> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f0f4fa' }}>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Title</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Slug</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Type</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Published</th>
              <th style={{ padding: 8, border: '1px solid #eee' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map(resource => (
              <tr key={resource._id}>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{resource.title}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{resource.slug}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{resource.type}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>{resource.published ? 'Yes' : 'No'}</td>
                <td style={{ padding: 8, border: '1px solid #eee' }}>
                  <button onClick={() => handleEdit(resource)} style={{ marginRight: 8, background: '#eee', border: 'none', borderRadius: 4, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDelete(resource._id)} style={{ background: '#ffdddd', color: '#a00', border: 'none', borderRadius: 4, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 