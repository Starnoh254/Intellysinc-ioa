// Content Service for managing advanced content operations
class ContentService {
  constructor() {
    this.storageKey = 'intellisync_content';
    this.versionsKey = 'intellisync_content_versions';
    this.scheduledKey = 'intellisync_scheduled_content';
    this.initializeDefaultContent();
  }

  // Initialize with default content
  initializeDefaultContent() {
    const existingContent = this.getAllContent();
    if (existingContent.length === 0) {
      const defaultContent = [
        {
          id: 1,
          title: 'Welcome to IntelliSync',
          slug: 'welcome-to-intellisync',
          excerpt: 'Discover how our intelligent automation solutions can transform your business operations.',
          content: `
# Welcome to IntelliSync

IntelliSync is your comprehensive solution for business automation and digital transformation. Our platform combines cutting-edge technology with intuitive design to help businesses of all sizes streamline their operations.

## What We Offer

### Business Intelligence
Transform your data into actionable insights with our advanced analytics platform.

### Data Automation
Automate repetitive tasks and processes to save time and reduce errors.

### Document Management
Secure, organize, and streamline your document workflows with enterprise-grade solutions.

## Get Started

Ready to begin your automation journey? [Contact us](/contact) today to learn more about how IntelliSync can help your business grow.
          `,
          metaTitle: 'Welcome to IntelliSync - Business Automation Solutions',
          metaDescription: 'Discover how IntelliSync can transform your business operations with intelligent automation solutions.',
          keywords: 'business automation, data automation, document management, business intelligence',
          language: 'en',
          status: 'published',
          publishDate: new Date().toISOString(),
          author: 'IntelliSync Team',
          category: 'Company Updates',
          tags: ['welcome', 'introduction', 'automation'],
          featuredImage: '/images/welcome-bg.jpg',
          seoScore: 85,
          readingTime: 3,
          wordCount: 120,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          version: 1
        }
      ];
      this.saveContent(defaultContent);
    }
  }

  // Get all content
  getAllContent() {
    try {
      const content = localStorage.getItem(this.storageKey);
      return content ? JSON.parse(content) : [];
    } catch (error) {
      console.error('Error loading content:', error);
      return [];
    }
  }

  // Get content by ID
  getContentById(id) {
    const content = this.getAllContent();
    return content.find(item => item.id === id);
  }

  // Get content by slug
  getContentBySlug(slug) {
    const content = this.getAllContent();
    return content.find(item => item.slug === slug);
  }

  // Create new content
  createContent(contentData) {
    const content = this.getAllContent();
    const newContent = {
      ...contentData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: 1
    };
    
    content.push(newContent);
    this.saveContent(content);
    this.saveVersion(newContent);
    return newContent;
  }

  // Update content
  updateContent(id, updates) {
    const content = this.getAllContent();
    const index = content.findIndex(item => item.id === id);
    
    if (index !== -1) {
      const updatedContent = {
        ...content[index],
        ...updates,
        updatedAt: new Date().toISOString(),
        version: content[index].version + 1
      };
      
      content[index] = updatedContent;
      this.saveContent(content);
      this.saveVersion(updatedContent);
      return updatedContent;
    }
    
    return null;
  }

  // Delete content
  deleteContent(id) {
    const content = this.getAllContent();
    const filteredContent = content.filter(item => item.id !== id);
    this.saveContent(filteredContent);
    return true;
  }

  // Get content by status
  getContentByStatus(status) {
    const content = this.getAllContent();
    return content.filter(item => item.status === status);
  }

  // Get content by category
  getContentByCategory(category) {
    const content = this.getAllContent();
    return content.filter(item => item.category === category);
  }

  // Get content by language
  getContentByLanguage(language) {
    const content = this.getAllContent();
    return content.filter(item => item.language === language);
  }

  // Search content
  searchContent(query) {
    const content = this.getAllContent();
    const searchTerm = query.toLowerCase();
    
    return content.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm) ||
      item.excerpt.toLowerCase().includes(searchTerm) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Get content statistics
  getContentStats() {
    const content = this.getAllContent();
    
    return {
      total: content.length,
      published: content.filter(item => item.status === 'published').length,
      draft: content.filter(item => item.status === 'draft').length,
      review: content.filter(item => item.status === 'review').length,
      archived: content.filter(item => item.status === 'archived').length,
      categories: [...new Set(content.map(item => item.category))].length,
      languages: [...new Set(content.map(item => item.language))].length,
      totalWords: content.reduce((sum, item) => sum + item.wordCount, 0),
      avgSeoScore: content.length > 0 ? 
        Math.round(content.reduce((sum, item) => sum + item.seoScore, 0) / content.length) : 0
    };
  }

  // Version management
  saveVersion(content) {
    try {
      const versions = this.getVersions(content.id);
      versions.push({
        ...content,
        versionId: Date.now(),
        savedAt: new Date().toISOString()
      });
      
      // Keep only last 10 versions
      if (versions.length > 10) {
        versions.splice(0, versions.length - 10);
      }
      
      localStorage.setItem(`${this.versionsKey}_${content.id}`, JSON.stringify(versions));
    } catch (error) {
      console.error('Error saving version:', error);
    }
  }

  getVersions(contentId) {
    try {
      const versions = localStorage.getItem(`${this.versionsKey}_${contentId}`);
      return versions ? JSON.parse(versions) : [];
    } catch (error) {
      console.error('Error loading versions:', error);
      return [];
    }
  }

  restoreVersion(contentId, versionId) {
    const versions = this.getVersions(contentId);
    const version = versions.find(v => v.versionId === versionId);
    
    if (version) {
      return this.updateContent(contentId, version);
    }
    
    return null;
  }

  // Scheduling functionality
  scheduleContent(contentId, publishDate) {
    const scheduled = this.getScheduledContent();
    const content = this.getContentById(contentId);
    
    if (content) {
      const scheduledItem = {
        contentId,
        publishDate,
        content: { ...content, status: 'scheduled' },
        createdAt: new Date().toISOString()
      };
      
      scheduled.push(scheduledItem);
      this.saveScheduledContent(scheduled);
      
      // Update content status
      this.updateContent(contentId, { status: 'scheduled' });
      
      return scheduledItem;
    }
    
    return null;
  }

  getScheduledContent() {
    try {
      const scheduled = localStorage.getItem(this.scheduledKey);
      return scheduled ? JSON.parse(scheduled) : [];
    } catch (error) {
      console.error('Error loading scheduled content:', error);
      return [];
    }
  }

  saveScheduledContent(scheduled) {
    try {
      localStorage.setItem(this.scheduledKey, JSON.stringify(scheduled));
    } catch (error) {
      console.error('Error saving scheduled content:', error);
    }
  }

  // Check for content to publish
  checkScheduledContent() {
    const scheduled = this.getScheduledContent();
    const now = new Date();
    const toPublish = scheduled.filter(item => new Date(item.publishDate) <= now);
    
    toPublish.forEach(item => {
      this.updateContent(item.contentId, { 
        status: 'published',
        publishDate: new Date().toISOString()
      });
    });
    
    // Remove published items from scheduled
    const remaining = scheduled.filter(item => new Date(item.publishDate) > now);
    this.saveScheduledContent(remaining);
    
    return toPublish;
  }

  // Multi-language support
  createTranslation(originalId, language, translatedContent) {
    const original = this.getContentById(originalId);
    
    if (original) {
      const translation = {
        ...translatedContent,
        originalId,
        language,
        isTranslation: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        version: 1
      };
      
      return this.createContent(translation);
    }
    
    return null;
  }

  getTranslations(originalId) {
    const content = this.getAllContent();
    return content.filter(item => item.originalId === originalId && item.isTranslation);
  }

  // SEO optimization
  generateSeoSuggestions(content) {
    const suggestions = [];
    
    // Title suggestions
    if (!content.title || content.title.length < 30) {
      suggestions.push('Add a compelling title (30-60 characters)');
    } else if (content.title.length > 60) {
      suggestions.push('Shorten your title (under 60 characters)');
    }
    
    // Meta description suggestions
    if (!content.metaDescription || content.metaDescription.length < 120) {
      suggestions.push('Add a meta description (120-160 characters)');
    } else if (content.metaDescription.length > 160) {
      suggestions.push('Shorten your meta description (under 160 characters)');
    }
    
    // Content suggestions
    if (!content.content || content.wordCount < 300) {
      suggestions.push('Add more content (at least 300 words)');
    }
    
    // Keywords suggestions
    if (!content.keywords || content.keywords.split(',').length < 3) {
      suggestions.push('Add relevant keywords (3-5 keywords)');
    }
    
    // Image suggestions
    if (!content.featuredImage) {
      suggestions.push('Add a featured image for better engagement');
    }
    
    // Tags suggestions
    if (!content.tags || content.tags.length < 2) {
      suggestions.push('Add relevant tags (2-5 tags)');
    }
    
    return suggestions;
  }

  // Content analytics
  trackContentViews(contentId) {
    const analytics = this.getContentAnalytics();
    const content = analytics.find(item => item.contentId === contentId);
    
    if (content) {
      content.views++;
      content.lastViewed = new Date().toISOString();
    } else {
      analytics.push({
        contentId,
        views: 1,
        shares: 0,
        downloads: 0,
        lastViewed: new Date().toISOString(),
        createdAt: new Date().toISOString()
      });
    }
    
    this.saveContentAnalytics(analytics);
  }

  getContentAnalytics() {
    try {
      const analytics = localStorage.getItem('intellisync_content_analytics');
      return analytics ? JSON.parse(analytics) : [];
    } catch (error) {
      console.error('Error loading content analytics:', error);
      return [];
    }
  }

  saveContentAnalytics(analytics) {
    try {
      localStorage.setItem('intellisync_content_analytics', JSON.stringify(analytics));
    } catch (error) {
      console.error('Error saving content analytics:', error);
    }
  }

  // Export/Import functionality
  exportContent(format = 'json') {
    const content = this.getAllContent();
    
    if (format === 'json') {
      return JSON.stringify(content, null, 2);
    } else if (format === 'csv') {
      return this.convertToCSV(content);
    }
    
    return null;
  }

  importContent(data, format = 'json') {
    try {
      let content;
      
      if (format === 'json') {
        content = JSON.parse(data);
      } else if (format === 'csv') {
        content = this.convertFromCSV(data);
      }
      
      if (Array.isArray(content)) {
        this.saveContent(content);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Error importing content:', error);
      return false;
    }
  }

  convertToCSV(content) {
    const headers = ['id', 'title', 'slug', 'excerpt', 'status', 'category', 'language', 'author', 'createdAt'];
    const csvContent = [headers.join(',')];
    
    content.forEach(item => {
      const row = headers.map(header => {
        const value = item[header] || '';
        return `"${value.toString().replace(/"/g, '""')}"`;
      });
      csvContent.push(row.join(','));
    });
    
    return csvContent.join('\n');
  }

  convertFromCSV(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
    const content = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.replace(/"/g, ''));
      const item = {};
      
      headers.forEach((header, index) => {
        item[header] = values[index] || '';
      });
      
      content.push(item);
    }
    
    return content;
  }

  // Utility functions
  generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  calculateReadingTime(content) {
    const words = content.split(/\s+/).filter(word => word.length > 0).length;
    return Math.ceil(words / 200); // Average reading speed
  }

  calculateWordCount(content) {
    return content.split(/\s+/).filter(word => word.length > 0).length;
  }

  // Save content to localStorage
  saveContent(content) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(content));
    } catch (error) {
      console.error('Error saving content:', error);
    }
  }
}

// Create singleton instance
const contentService = new ContentService();

export default contentService; 