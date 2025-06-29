import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, 
  FaSave, 
  FaEye, 
  FaTrash, 
  FaCalendar, 
  FaGlobe,
  FaImage,
  FaVideo,
  FaFile,
  FaLink,
  FaCode,
  FaSearch,
  FaTags,
  FaShare,
  FaDownload,
  FaUpload,
  FaUndo,
  FaRedo,
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaHeading
} from 'react-icons/fa';
import '../styles/AdvancedContentManager.css';

const AdvancedContentManager = () => {
  const [content, setContent] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    language: 'en',
    status: 'draft',
    publishDate: '',
    author: '',
    category: '',
    tags: [],
    featuredImage: '',
    seoScore: 0,
    readingTime: 0,
    wordCount: 0
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showSeoPanel, setShowSeoPanel] = useState(false);
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [contentHistory, setContentHistory] = useState([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [isSaving, setIsSaving] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const editorRef = useRef(null);

  const categories = [
    'Business Intelligence',
    'Data Automation',
    'Document Management',
    'Integrations',
    'Case Studies',
    'Tutorials',
    'News',
    'Company Updates'
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' }
  ];

  const statuses = [
    { value: 'draft', label: 'Draft', color: '#6c757d' },
    { value: 'review', label: 'In Review', color: '#ffc107' },
    { value: 'published', label: 'Published', color: '#28a745' },
    { value: 'archived', label: 'Archived', color: '#dc3545' }
  ];

  // Auto-save functionality
  useEffect(() => {
    if (autoSave && isEditing) {
      const timer = setTimeout(() => {
        saveToHistory();
      }, 30000); // Auto-save every 30 seconds

      return () => clearTimeout(timer);
    }
  }, [content, autoSave, isEditing]);

  // Calculate SEO score
  useEffect(() => {
    const score = calculateSeoScore();
    setContent(prev => ({ ...prev, seoScore: score }));
  }, [content.title, content.metaDescription, content.keywords, content.content]);

  // Calculate reading time and word count
  useEffect(() => {
    const wordCount = content.content.split(/\s+/).filter(word => word.length > 0).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed
    setContent(prev => ({ ...prev, wordCount, readingTime }));
  }, [content.content]);

  const calculateSeoScore = () => {
    let score = 0;
    
    // Title length (optimal: 50-60 characters)
    if (content.title.length >= 50 && content.title.length <= 60) score += 20;
    else if (content.title.length > 0) score += 10;

    // Meta description length (optimal: 150-160 characters)
    if (content.metaDescription.length >= 150 && content.metaDescription.length <= 160) score += 20;
    else if (content.metaDescription.length > 0) score += 10;

    // Keywords
    if (content.keywords.length > 0) score += 15;

    // Content length (minimum 300 words)
    if (content.content.length > 300) score += 25;

    // Featured image
    if (content.featuredImage) score += 10;

    // Tags
    if (content.tags.length > 0) score += 10;

    return Math.min(score, 100);
  };

  const saveToHistory = () => {
    const newHistory = [...contentHistory.slice(0, currentHistoryIndex + 1), { ...content, timestamp: Date.now() }];
    setContentHistory(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(currentHistoryIndex - 1);
      setContent(contentHistory[currentHistoryIndex - 1]);
    }
  };

  const redo = () => {
    if (currentHistoryIndex < contentHistory.length - 1) {
      setCurrentHistoryIndex(currentHistoryIndex + 1);
      setContent(contentHistory[currentHistoryIndex + 1]);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    saveToHistory();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    setIsSaving(true);
    try {
      await handleSave();
      setContent(prev => ({ ...prev, status: 'published' }));
    } finally {
      setIsSaving(false);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  const handleTitleChange = (newTitle) => {
    setContent(prev => ({
      ...prev,
      title: newTitle,
      slug: generateSlug(newTitle),
      metaTitle: newTitle
    }));
  };

  const insertMedia = (mediaType, url, alt = '') => {
    let mediaHtml = '';
    
    switch (mediaType) {
      case 'image':
        mediaHtml = `<img src="${url}" alt="${alt}" style="max-width: 100%; height: auto;" />`;
        break;
      case 'video':
        mediaHtml = `<video controls style="max-width: 100%; height: auto;"><source src="${url}" type="video/mp4">Your browser does not support the video tag.</video>`;
        break;
      case 'file':
        mediaHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer">Download File</a>`;
        break;
      default:
        mediaHtml = `<a href="${url}" target="_blank" rel="noopener noreferrer">${alt || 'Link'}</a>`;
    }

    const textArea = editorRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const newContent = content.content.substring(0, start) + '\n' + mediaHtml + '\n' + content.content.substring(end);
    
    setContent(prev => ({ ...prev, content: newContent }));
  };

  const formatText = (command) => {
    const textArea = editorRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = content.content.substring(start, end);
    
    let formattedText = '';
    switch (command) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'heading':
        formattedText = `# ${selectedText}`;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        break;
      case 'list':
        formattedText = `- ${selectedText}`;
        break;
      case 'numberedList':
        formattedText = `1. ${selectedText}`;
        break;
      default:
        formattedText = selectedText;
    }

    const newContent = content.content.substring(0, start) + formattedText + content.content.substring(end);
    setContent(prev => ({ ...prev, content: newContent }));
  };

  const SeoPanel = () => (
    <motion.div 
      className="seo-panel"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
    >
      <h3>SEO Analysis</h3>
      
      <div className="seo-score">
        <div className="score-circle">
          <span className="score-number">{content.seoScore}</span>
          <span className="score-label">SEO Score</span>
        </div>
      </div>

      <div className="seo-metrics">
        <div className="metric">
          <label>Title Length</label>
          <span className={content.title.length >= 50 && content.title.length <= 60 ? 'good' : 'warning'}>
            {content.title.length}/60
          </span>
        </div>
        
        <div className="metric">
          <label>Meta Description</label>
          <span className={content.metaDescription.length >= 150 && content.metaDescription.length <= 160 ? 'good' : 'warning'}>
            {content.metaDescription.length}/160
          </span>
        </div>

        <div className="metric">
          <label>Word Count</label>
          <span className={content.wordCount >= 300 ? 'good' : 'warning'}>
            {content.wordCount} words
          </span>
        </div>

        <div className="metric">
          <label>Reading Time</label>
          <span>{content.readingTime} min read</span>
        </div>
      </div>

      <div className="seo-suggestions">
        <h4>Suggestions</h4>
        <ul>
          {content.title.length < 50 && <li>Make your title longer (aim for 50-60 characters)</li>}
          {content.metaDescription.length < 150 && <li>Add a meta description (aim for 150-160 characters)</li>}
          {content.wordCount < 300 && <li>Add more content (aim for at least 300 words)</li>}
          {!content.featuredImage && <li>Add a featured image</li>}
          {content.tags.length === 0 && <li>Add relevant tags</li>}
        </ul>
      </div>
    </motion.div>
  );

  const MediaLibrary = () => (
    <motion.div 
      className="media-library"
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
    >
      <h3>Media Library</h3>
      
      <div className="media-upload">
        <input type="file" id="media-upload" multiple accept="image/*,video/*,.pdf,.doc,.docx" />
        <label htmlFor="media-upload" className="upload-btn">
          <FaUpload /> Upload Media
        </label>
      </div>

      <div className="media-grid">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="media-item" onClick={() => insertMedia('image', `/images/media-${index + 1}.jpg`, `Media ${index + 1}`)}>
            <img src={`/images/media-${index + 1}.jpg`} alt={`Media ${index + 1}`} />
            <div className="media-overlay">
              <FaImage />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="advanced-content-manager">
      <div className="content-header">
        <div className="header-left">
          <h1>Advanced Content Manager</h1>
          <p>Create, edit, and manage your content with advanced features</p>
        </div>
        
        <div className="header-actions">
          <button 
            className={`action-btn ${showSeoPanel ? 'active' : ''}`}
            onClick={() => setShowSeoPanel(!showSeoPanel)}
          >
            <FaSearch /> SEO
          </button>
          
          <button 
            className={`action-btn ${showMediaLibrary ? 'active' : ''}`}
            onClick={() => setShowMediaLibrary(!showMediaLibrary)}
          >
            <FaImage /> Media
          </button>
          
          <button 
            className="action-btn"
            onClick={() => setShowPreview(!showPreview)}
          >
            <FaEye /> Preview
          </button>
          
          <button 
            className="action-btn primary"
            onClick={handleSave}
            disabled={isSaving}
          >
            <FaSave /> {isSaving ? 'Saving...' : 'Save'}
          </button>
          
          <button 
            className="action-btn success"
            onClick={handlePublish}
            disabled={isSaving}
          >
            <FaShare /> Publish
          </button>
        </div>
      </div>

      <div className="content-layout">
        <div className="content-main">
          {/* Content Form */}
          <div className="content-form">
            <div className="form-row">
              <div className="form-group full-width">
                <label>Title *</label>
                <input
                  type="text"
                  value={content.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter content title..."
                  className="title-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Slug</label>
                <input
                  type="text"
                  value={content.slug}
                  onChange={(e) => setContent(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="content-slug"
                />
              </div>
              
              <div className="form-group">
                <label>Category</label>
                <select
                  value={content.category}
                  onChange={(e) => setContent(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Language</label>
                <select
                  value={content.language}
                  onChange={(e) => setContent(prev => ({ ...prev, language: e.target.value }))}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Status</label>
                <select
                  value={content.status}
                  onChange={(e) => setContent(prev => ({ ...prev, status: e.target.value }))}
                >
                  {statuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Publish Date</label>
                <input
                  type="datetime-local"
                  value={content.publishDate}
                  onChange={(e) => setContent(prev => ({ ...prev, publishDate: e.target.value }))}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Excerpt</label>
              <textarea
                value={content.excerpt}
                onChange={(e) => setContent(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the content..."
                rows="3"
              />
            </div>

            <div className="form-group">
              <label>Featured Image URL</label>
              <input
                type="url"
                value={content.featuredImage}
                onChange={(e) => setContent(prev => ({ ...prev, featuredImage: e.target.value }))}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label>Tags</label>
              <input
                type="text"
                value={content.tags.join(', ')}
                onChange={(e) => setContent(prev => ({ 
                  ...prev, 
                  tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                }))}
                placeholder="tag1, tag2, tag3"
              />
            </div>

            {/* Rich Text Editor Toolbar */}
            <div className="editor-toolbar">
              <button onClick={() => formatText('bold')} title="Bold">
                <FaBold />
              </button>
              <button onClick={() => formatText('italic')} title="Italic">
                <FaItalic />
              </button>
              <button onClick={() => formatText('underline')} title="Underline">
                <FaUnderline />
              </button>
              <div className="toolbar-separator"></div>
              <button onClick={() => formatText('heading')} title="Heading">
                <FaHeading />
              </button>
              <button onClick={() => formatText('quote')} title="Quote">
                <FaQuoteLeft />
              </button>
              <div className="toolbar-separator"></div>
              <button onClick={() => formatText('list')} title="Bullet List">
                <FaListUl />
              </button>
              <button onClick={() => formatText('numberedList')} title="Numbered List">
                <FaListOl />
              </button>
              <div className="toolbar-separator"></div>
              <button onClick={() => insertMedia('image', '/images/placeholder.jpg', 'Image')} title="Insert Image">
                <FaImage />
              </button>
              <button onClick={() => insertMedia('video', '/videos/placeholder.mp4', 'Video')} title="Insert Video">
                <FaVideo />
              </button>
              <button onClick={() => insertMedia('file', '/files/document.pdf', 'Document')} title="Insert File">
                <FaFile />
              </button>
              <button onClick={() => insertMedia('link', 'https://example.com', 'Link')} title="Insert Link">
                <FaLink />
              </button>
            </div>

            {/* Content Editor */}
            <div className="form-group">
              <label>Content *</label>
              <textarea
                ref={editorRef}
                value={content.content}
                onChange={(e) => setContent(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Write your content here... Use markdown for formatting."
                rows="20"
                className="content-editor"
              />
            </div>
          </div>

          {/* SEO Meta Fields */}
          <div className="seo-meta-section">
            <h3>SEO Meta Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Meta Title</label>
                <input
                  type="text"
                  value={content.metaTitle}
                  onChange={(e) => setContent(prev => ({ ...prev, metaTitle: e.target.value }))}
                  placeholder="SEO optimized title"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Meta Description</label>
              <textarea
                value={content.metaDescription}
                onChange={(e) => setContent(prev => ({ ...prev, metaDescription: e.target.value }))}
                placeholder="Brief description for search engines..."
                rows="3"
              />
            </div>
            
            <div className="form-group">
              <label>Keywords</label>
              <input
                type="text"
                value={content.keywords}
                onChange={(e) => setContent(prev => ({ ...prev, keywords: e.target.value }))}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Panels */}
        <div className="content-sidebar">
          {showSeoPanel && <SeoPanel />}
          {showMediaLibrary && <MediaLibrary />}
          
          {/* History Panel */}
          <div className="history-panel">
            <h3>Content History</h3>
            <div className="history-actions">
              <button onClick={undo} disabled={currentHistoryIndex <= 0}>
                <FaUndo /> Undo
              </button>
              <button onClick={redo} disabled={currentHistoryIndex >= contentHistory.length - 1}>
                <FaRedo /> Redo
              </button>
            </div>
            
            <div className="history-list">
              {contentHistory.slice(-5).reverse().map((item, index) => (
                <div key={index} className="history-item">
                  <span className="history-time">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                  <span className="history-title">
                    {item.title || 'Untitled'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-save Toggle */}
          <div className="auto-save-panel">
            <label className="auto-save-toggle">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
              />
              <span className="toggle-slider"></span>
              Auto-save every 30 seconds
            </label>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="preview-modal">
          <div className="preview-content">
            <div className="preview-header">
              <h2>Content Preview</h2>
              <button onClick={() => setShowPreview(false)}>×</button>
            </div>
            <div className="preview-body">
              <h1>{content.title}</h1>
              <p className="excerpt">{content.excerpt}</p>
              <div className="content-preview" dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedContentManager; 