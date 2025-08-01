import React, { useState, useEffect } from 'react';
import AdminLogin from './components/AdminLogin';
import PageEditor from './components/HomePageEditor';
import BlogManager from './components/BlogManager';
import ResourceManager from './components/ResourceManager';
import MediaManager from './components/MediaManager';
import LiveChatAdmin from './components/LiveChatAdmin';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pages, setPages] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState('home');
  const [loadingPages, setLoadingPages] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newSlug, setNewSlug] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [error, setError] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [tab, setTab] = useState('pages');

  const fetchPages = () => {
    setLoadingPages(true);
    fetch('http://localhost:5000/api/pages')
      .then(res => res.json())
      .then(data => {
        setPages(data);
        if (data.length && !selectedSlug) setSelectedSlug(data[0].slug);
        setLoadingPages(false);
      })
      .catch(() => setLoadingPages(false));
  };

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') === 'true') {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchPages();
    }
  }, [loggedIn]);

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    setLoggedIn(false);
  };

  const handleCreatePage = async e => {
    e.preventDefault();
    setCreating(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: newSlug.trim(), title: newTitle.trim() })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to create page');
      }
      setNewSlug('');
      setNewTitle('');
      fetchPages();
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const handleDeletePage = async () => {
    if (!window.confirm('Are you sure you want to delete this page?')) return;
    setDeleting(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/api/pages/${selectedSlug}`, {
        method: 'DELETE'
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete page');
      }
      setSelectedSlug(pages.length > 1 ? pages.find(p => p.slug !== selectedSlug).slug : '');
      fetchPages();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  if (!loggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafd' }}>
      <header style={{ padding: 16, background: '#0078d4', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>IntelliSync Admin Dashboard</h1>
        <button onClick={handleLogout} style={{ background: '#fff', color: '#0078d4', border: 'none', borderRadius: 4, padding: '6px 16px', fontWeight: 600, cursor: 'pointer' }}>Logout</button>
      </header>
      <main style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          <button onClick={() => setTab('pages')} style={{ padding: '8px 24px', borderRadius: 4, border: 'none', fontWeight: 600, background: tab === 'pages' ? '#0078d4' : '#eee', color: tab === 'pages' ? '#fff' : '#222', cursor: 'pointer' }}>Pages</button>
          <button onClick={() => setTab('blogs')} style={{ padding: '8px 24px', borderRadius: 4, border: 'none', fontWeight: 600, background: tab === 'blogs' ? '#0078d4' : '#eee', color: tab === 'blogs' ? '#fff' : '#222', cursor: 'pointer' }}>Blogs</button>
          <button onClick={() => setTab('resources')} style={{ padding: '8px 24px', borderRadius: 4, border: 'none', fontWeight: 600, background: tab === 'resources' ? '#0078d4' : '#eee', color: tab === 'resources' ? '#fff' : '#222', cursor: 'pointer' }}>Resources</button>
          <button onClick={() => setTab('media')} style={{ padding: '8px 24px', borderRadius: 4, border: 'none', fontWeight: 600, background: tab === 'media' ? '#0078d4' : '#eee', color: tab === 'media' ? '#fff' : '#222', cursor: 'pointer' }}>Media</button>
          <button onClick={() => setTab('chat')} style={{ padding: '8px 24px', borderRadius: 4, border: 'none', fontWeight: 600, background: tab === 'chat' ? '#0078d4' : '#eee', color: tab === 'chat' ? '#fff' : '#222', cursor: 'pointer' }}>Live Chat</button>
        </div>
        {tab === 'pages' && (
          <>
            <h2>Page Management</h2>
            {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
            {loadingPages ? (
              <div>Loading pages...</div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontWeight: 600, marginRight: 8 }}>Select Page:</label>
                  <select value={selectedSlug} onChange={e => setSelectedSlug(e.target.value)} style={{ padding: 6, borderRadius: 4, marginRight: 12 }}>
                    {pages.map(page => (
                      <option key={page.slug} value={page.slug}>{page.title} ({page.slug})</option>
                    ))}
                  </select>
                  <button onClick={handleDeletePage} disabled={deleting || !selectedSlug} style={{ background: '#ffdddd', color: '#a00', border: 'none', borderRadius: 4, padding: '6px 14px', fontWeight: 600, cursor: 'pointer' }}>Delete Page</button>
                </div>
                <form onSubmit={handleCreatePage} style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input type="text" placeholder="New page slug" value={newSlug} onChange={e => setNewSlug(e.target.value)} style={{ padding: 6, borderRadius: 4 }} required pattern="[a-z0-9-]+" title="Lowercase letters, numbers, and dashes only" />
                  <input type="text" placeholder="New page title" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ padding: 6, borderRadius: 4 }} required />
                  <button type="submit" disabled={creating} style={{ background: '#e0ffe0', color: '#070', border: 'none', borderRadius: 4, padding: '6px 14px', fontWeight: 600, cursor: 'pointer' }}>Create Page</button>
                </form>
              </>
            )}
            {selectedSlug && <PageEditor slug={selectedSlug} />}
          </>
        )}
        {tab === 'blogs' && <BlogManager />}
        {tab === 'resources' && <ResourceManager />}
        {tab === 'media' && <MediaManager />}
        {tab === 'chat' && <LiveChatAdmin />}
      </main>
    </div>
  );
}

export default App;
