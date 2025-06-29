// Performance monitoring utility for Data Automation page

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      userInteractions: []
    };
    this.startTime = performance.now();
  }

  // Track page load performance
  trackPageLoad() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }

      // Track Core Web Vitals
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    }
  }

  // Track user interactions
  trackInteraction(action, element, timestamp = Date.now()) {
    this.metrics.userInteractions.push({
      action,
      element,
      timestamp,
      timeFromLoad: timestamp - this.startTime
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`User Interaction: ${action} on ${element} at ${new Date(timestamp).toISOString()}`);
    }
  }

  // Track button clicks
  trackButtonClick(buttonName) {
    this.trackInteraction('button_click', buttonName);
  }

  // Track card interactions
  trackCardInteraction(cardType, action) {
    this.trackInteraction(`${action}_card`, cardType);
  }

  // Track modal interactions
  trackModalInteraction(action, modalType) {
    this.trackInteraction(`${action}_modal`, modalType);
  }

  // Get performance metrics
  getMetrics() {
    return {
      ...this.metrics,
      totalTime: performance.now() - this.startTime
    };
  }

  // Send metrics to analytics (placeholder for real implementation)
  sendMetrics() {
    const metrics = this.getMetrics();
    
    // In a real application, you would send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }

    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metrics', {
        page_load_time: metrics.pageLoadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        total_interactions: metrics.userInteractions.length
      });
    }
  }

  // Track image load performance
  trackImageLoad(imageSrc) {
    const img = new Image();
    const startTime = performance.now();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      this.trackInteraction('image_load', imageSrc, Date.now());
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`Image loaded: ${imageSrc} in ${loadTime.toFixed(2)}ms`);
      }
    };

    img.onerror = () => {
      this.trackInteraction('image_error', imageSrc, Date.now());
      console.error(`Failed to load image: ${imageSrc}`);
    };
  }
}

// Create a singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;

// Utility functions for easy tracking
export const trackButtonClick = (buttonName) => performanceMonitor.trackButtonClick(buttonName);
export const trackCardInteraction = (cardType, action) => performanceMonitor.trackCardInteraction(cardType, action);
export const trackModalInteraction = (action, modalType) => performanceMonitor.trackModalInteraction(action, modalType);
export const trackImageLoad = (imageSrc) => performanceMonitor.trackImageLoad(imageSrc); 