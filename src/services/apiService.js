const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  // Set authentication token
  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  // Clear authentication token
  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  // Get auth headers
  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config = {
        headers: this.getAuthHeaders(),
        ...options
      };

      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Authentication APIs
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    this.clearToken();
    return { success: true };
  }

  // Pages APIs
  async getPage(slug) {
    return this.request(`/pages/${slug}`);
  }

  async getPages() {
    return this.request('/pages');
  }

  async createPage(pageData) {
    return this.request('/pages', {
      method: 'POST',
      body: JSON.stringify(pageData)
    });
  }

  async updatePage(slug, pageData) {
    return this.request(`/pages/${slug}`, {
      method: 'PUT',
      body: JSON.stringify(pageData)
    });
  }

  async deletePage(slug) {
    return this.request(`/pages/${slug}`, {
      method: 'DELETE'
    });
  }

  // Blogs APIs
  async getBlogs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/blogs${queryString ? `?${queryString}` : ''}`);
  }

  async getBlog(id) {
    return this.request(`/blogs/${id}`);
  }

  async createBlog(blogData) {
    return this.request('/blogs', {
      method: 'POST',
      body: JSON.stringify(blogData)
    });
  }

  async updateBlog(id, blogData) {
    return this.request(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData)
    });
  }

  async deleteBlog(id) {
    return this.request(`/blogs/${id}`, {
      method: 'DELETE'
    });
  }

  // Resources APIs
  async getResources(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/resources${queryString ? `?${queryString}` : ''}`);
  }

  async getResource(id) {
    return this.request(`/resources/${id}`);
  }

  async createResource(resourceData) {
    return this.request('/resources', {
      method: 'POST',
      body: JSON.stringify(resourceData)
    });
  }

  async updateResource(id, resourceData) {
    return this.request(`/resources/${id}`, {
      method: 'PUT',
      body: JSON.stringify(resourceData)
    });
  }

  async deleteResource(id) {
    return this.request(`/resources/${id}`, {
      method: 'DELETE'
    });
  }

  // Media APIs
  async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseURL}/media/upload`;
    const config = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      body: formData
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  }

  async getMedia() {
    return this.request('/media');
  }

  async deleteMedia(filename) {
    return this.request(`/media/${filename}`, {
      method: 'DELETE'
    });
  }

  // Analytics APIs
  async trackEvent(eventData) {
    return this.request('/analytics/track', {
      method: 'POST',
      body: JSON.stringify(eventData)
    });
  }

  async trackBatchEvents(events) {
    return this.request('/analytics/batch', {
      method: 'POST',
      body: JSON.stringify(events)
    });
  }

  async getAnalyticsData(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/analytics/data${queryString ? `?${queryString}` : ''}`);
  }

  async getRealtimeAnalytics() {
    return this.request('/analytics/realtime');
  }

  async exportAnalytics(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = `${this.baseURL}/analytics/export${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      headers: this.getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.blob();
  }

  // Search API
  async search(query, params = {}) {
    const searchParams = { query, ...params };
    const queryString = new URLSearchParams(searchParams).toString();
    return this.request(`/search${queryString ? `?${queryString}` : ''}`);
  }

  // Contact API
  async submitContact(contactData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contactData)
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }

  // Analytics tracking helper
  trackPageView(url, sessionId) {
    return this.trackEvent({
      type: 'pageview',
      url,
      sessionId,
      userAgent: navigator.userAgent,
      timestamp: new Date()
    });
  }

  trackEvent(name, properties = {}, sessionId) {
    return this.trackEvent({
      type: 'event',
      name,
      properties,
      sessionId,
      userAgent: navigator.userAgent,
      timestamp: new Date()
    });
  }
}

// Create singleton instance
const apiService = new ApiService();

export default apiService; 