// Analytics Service for tracking and managing analytics data
class AnalyticsService {
  constructor() {
    this.storageKey = 'intellisync_analytics';
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.pageViews = 0;
    this.events = [];
    this.initializeTracking();
  }

  // Generate unique session ID
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Initialize tracking
  initializeTracking() {
    this.trackPageView();
    this.setupEventListeners();
    this.startHeartbeat();
  }

  // Track page view
  trackPageView() {
    const pageView = {
      type: 'pageview',
      timestamp: Date.now(),
      url: window.location.href,
      title: document.title,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      sessionId: this.sessionId
    };

    this.events.push(pageView);
    this.pageViews++;
    this.saveToStorage();
    this.sendToServer(pageView);
  }

  // Track custom events
  trackEvent(eventName, properties = {}) {
    const event = {
      type: 'event',
      name: eventName,
      properties,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      url: window.location.href
    };

    this.events.push(event);
    this.saveToStorage();
    this.sendToServer(event);
  }

  // Track user interactions
  trackClick(element, properties = {}) {
    this.trackEvent('click', {
      element: element.tagName.toLowerCase(),
      text: element.textContent?.substring(0, 50),
      href: element.href,
      ...properties
    });
  }

  // Track form submissions
  trackFormSubmission(formName, properties = {}) {
    this.trackEvent('form_submit', {
      form: formName,
      ...properties
    });
  }

  // Track downloads
  trackDownload(fileName, fileType) {
    this.trackEvent('download', {
      file: fileName,
      type: fileType
    });
  }

  // Track search queries
  trackSearch(query, results = 0) {
    this.trackEvent('search', {
      query,
      results
    });
  }

  // Track scroll depth
  trackScrollDepth() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    this.trackEvent('scroll_depth', {
      percentage: scrollPercent
    });
  }

  // Track time on page
  trackTimeOnPage() {
    const timeOnPage = Date.now() - this.startTime;
    this.trackEvent('time_on_page', {
      duration: timeOnPage
    });
  }

  // Setup event listeners
  setupEventListeners() {
    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target;
      
      // Track CTA button clicks
      if (target.matches('button, a')) {
        this.trackClick(target, {
          category: 'cta',
          action: target.textContent?.substring(0, 30)
        });
      }

      // Track form submissions
      if (target.matches('form')) {
        const formName = target.getAttribute('data-form-name') || 'unknown';
        this.trackFormSubmission(formName);
      }
    });

    // Track scroll depth
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackScrollDepth();
      }, 1000);
    });

    // Track before unload
    window.addEventListener('beforeunload', () => {
      this.trackTimeOnPage();
      this.sendBatchToServer();
    });
  }

  // Start heartbeat to track session duration
  startHeartbeat() {
    setInterval(() => {
      this.trackEvent('heartbeat', {
        sessionDuration: Date.now() - this.startTime
      });
    }, 30000); // Every 30 seconds
  }

  // Save events to localStorage
  saveToStorage() {
    try {
      const existingData = localStorage.getItem(this.storageKey);
      const data = existingData ? JSON.parse(existingData) : { events: [], sessions: [] };
      
      data.events = [...data.events, ...this.events];
      data.sessions.push({
        id: this.sessionId,
        startTime: this.startTime,
        pageViews: this.pageViews,
        duration: Date.now() - this.startTime
      });

      // Keep only last 1000 events to prevent storage overflow
      if (data.events.length > 1000) {
        data.events = data.events.slice(-1000);
      }

      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.events = []; // Clear events after saving
    } catch (error) {
      console.error('Error saving analytics data:', error);
    }
  }

  // Send event to server
  async sendToServer(event) {
    try {
      const response = await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });

      if (!response.ok) {
        throw new Error('Failed to send analytics data');
      }
    } catch (error) {
      console.error('Error sending analytics data:', error);
      // Store failed events for retry
      this.failedEvents = this.failedEvents || [];
      this.failedEvents.push(event);
    }
  }

  // Send batch of events to server
  async sendBatchToServer() {
    if (this.events.length > 0) {
      try {
        const response = await fetch('/api/analytics/batch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            events: this.events,
            sessionId: this.sessionId
          })
        });

        if (response.ok) {
          this.events = [];
        }
      } catch (error) {
        console.error('Error sending batch analytics data:', error);
      }
    }
  }

  // Get analytics data
  async getAnalyticsData(timeRange = '7d') {
    try {
      const response = await fetch(`/api/analytics/data?range=${timeRange}`);
      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to fetch analytics data');
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      return this.getMockAnalyticsData(timeRange);
    }
  }

  // Get real-time data
  async getRealTimeData() {
    try {
      const response = await fetch('/api/analytics/realtime');
      if (response.ok) {
        return await response.json();
      }
      throw new Error('Failed to fetch real-time data');
    } catch (error) {
      console.error('Error fetching real-time data:', error);
      return {
        activeUsers: Math.floor(Math.random() * 50) + 10,
        currentPage: window.location.pathname,
        lastActivity: new Date().toISOString()
      };
    }
  }

  // Get mock data for development
  getMockAnalyticsData(timeRange) {
    const multipliers = { '1d': 1, '7d': 7, '30d': 30, '90d': 90 };
    const multiplier = multipliers[timeRange] || 7;

    return {
      pageViews: Math.floor(Math.random() * 10000 * multiplier) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 5000 * multiplier) + 2000,
      bounceRate: Math.random() * 30 + 20,
      avgSessionDuration: Math.floor(Math.random() * 300) + 120,
      conversionRate: Math.random() * 5 + 1,
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 2000) + 1000, change: Math.random() * 20 - 10 },
        { page: '/solutions', views: Math.floor(Math.random() * 1500) + 800, change: Math.random() * 20 - 10 },
        { page: '/pricing', views: Math.floor(Math.random() * 1200) + 600, change: Math.random() * 20 - 10 },
        { page: '/contact', views: Math.floor(Math.random() * 1000) + 400, change: Math.random() * 20 - 10 },
        { page: '/blog', views: Math.floor(Math.random() * 800) + 300, change: Math.random() * 20 - 10 }
      ],
      trafficSources: [
        { source: 'Organic Search', percentage: Math.floor(Math.random() * 40) + 30 },
        { source: 'Direct', percentage: Math.floor(Math.random() * 30) + 20 },
        { source: 'Social Media', percentage: Math.floor(Math.random() * 25) + 15 },
        { source: 'Referral', percentage: Math.floor(Math.random() * 20) + 10 },
        { source: 'Email', percentage: Math.floor(Math.random() * 15) + 5 }
      ],
      deviceTypes: [
        { device: 'Desktop', percentage: Math.floor(Math.random() * 30) + 50 },
        { device: 'Mobile', percentage: Math.floor(Math.random() * 40) + 35 },
        { device: 'Tablet', percentage: Math.floor(Math.random() * 15) + 5 }
      ],
      userBehavior: [
        { action: 'Page Views', count: Math.floor(Math.random() * 5000) + 2000 },
        { action: 'Clicks', count: Math.floor(Math.random() * 3000) + 1500 },
        { action: 'Downloads', count: Math.floor(Math.random() * 500) + 200 },
        { action: 'Form Submissions', count: Math.floor(Math.random() * 200) + 100 },
        { action: 'Chat Interactions', count: Math.floor(Math.random() * 300) + 150 }
      ]
    };
  }

  // Export analytics data
  async exportData(format = 'json', timeRange = '30d') {
    try {
      const response = await fetch(`/api/analytics/export?format=${format}&range=${timeRange}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `analytics-${timeRange}.${format}`;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error exporting analytics data:', error);
    }
  }

  // Get user properties
  getUserProperties() {
    return {
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenResolution: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      userAgent: navigator.userAgent,
      cookieEnabled: navigator.cookieEnabled,
      online: navigator.onLine
    };
  }
}

// Create singleton instance
const analyticsService = new AnalyticsService();

export default analyticsService; 