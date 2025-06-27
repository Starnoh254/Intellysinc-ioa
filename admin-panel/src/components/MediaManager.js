import React, { useEffect, useState, useRef } from 'react';

const API_URL = 'http://localhost:5000/api/media';

export default function MediaManager() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInput = useRef();

  const fetchFiles = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setFiles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async e => {
    e.preventDefault();
    if (!fileInput.current.files[0]) return;
    setUploading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', fileInput.current.files[0]);
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error('Upload failed');
      fileInput.current.value = '';
      fetchFiles();
    } catch (err) {
      setError('Failed to upload.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async filename => {
    if (!window.confirm('Delete this file?')) return;
    setError('');
    try {
      const res = await fetch(`${API_URL}/${filename}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      fetchFiles();
    } catch (err) {
      setError('Failed to delete.');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 12px #0001' }}>
      <h2>Media Management</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <form onSubmit={handleUpload} style={{ marginBottom: 24 }}>
        <input type="file" ref={fileInput} />
        <button type="submit" disabled={uploading} style={{ marginLeft: 12, background: '#0078d4', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 24px', fontWeight: 600, cursor: 'pointer' }}>{uploading ? 'Uploading...' : 'Upload'}</button>
      </form>
      <h3>Uploaded Files</h3>
      {loading ? <div>Loading files...</div> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {files.map(file => (
            <div key={file.filename} style={{ border: '1px solid #eee', borderRadius: 4, padding: 8, width: 180, textAlign: 'center', background: '#fafbfc' }}>
              {file.filename.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                <img src={file.url} alt={file.filename} style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 4, marginBottom: 8 }} />
              ) : (
                <div style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: 4, marginBottom: 8 }}>
                  <span>{file.filename}</span>
                </div>
              )}
              <div style={{ fontSize: 12, marginBottom: 8 }}>{file.filename}</div>
              <button onClick={() => handleDelete(file.filename)} style={{ background: '#ffdddd', color: '#a00', border: 'none', borderRadius: 4, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 