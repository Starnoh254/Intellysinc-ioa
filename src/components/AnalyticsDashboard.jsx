import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaChartLine, 
  FaEye, 
  FaMousePointer, 
  FaClock, 
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaTabletAlt,
  FaSearch,
  FaDownload,
  FaShare
} from 'react-icons/fa';
import '../styles/AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    userBehavior: [],
    realTimeUsers: 0
  });

  // Simulate real-time data updates
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock data based on time range
      const mockData = generateMockAnalyticsData(timeRange);
      setAnalyticsData(mockData);
      setIsLoading(false);
    };

    fetchAnalyticsData();
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(() => {
      setAnalyticsData(prev => ({
        ...prev,
        realTimeUsers: Math.floor(Math.random() * 50) + 10
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, [timeRange]);

  const generateMockAnalyticsData = (range) => {
    const multipliers = { '1d': 1, '7d': 7, '30d': 30, '90d': 90 };
    const multiplier = multipliers[range] || 7;

    return {
      pageViews: Math.floor(Math.random() * 10000 * multiplier) + 5000,
      uniqueVisitors: Math.floor(Math.random() * 5000 * multiplier) + 2000,
      bounceRate: Math.random() * 30 + 20,
      avgSessionDuration: Math.floor(Math.random() * 300) + 120,
      conversionRate: Math.random() * 5 + 1,
      realTimeUsers: Math.floor(Math.random() * 50) + 10,
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
  };

  const MetricCard = ({ title, value, icon, change, isLoading }) => (
    <motion.div 
      className="metric-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="metric-header">
        <div className="metric-icon">{icon}</div>
        <div className="metric-info">
          <h3>{title}</h3>
          {isLoading ? (
            <div className="loading-skeleton"></div>
          ) : (
            <div className="metric-value">
              {typeof value === 'number' && value > 1000 
                ? value.toLocaleString() 
                : typeof value === 'number' && value < 100 
                ? value.toFixed(1) 
                : value}
              {title.includes('Rate') && '%'}
              {title.includes('Duration') && 's'}
            </div>
          )}
        </div>
      </div>
      {change !== undefined && (
        <div className={`metric-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '+' : ''}{change.toFixed(1)}%
        </div>
      )}
    </motion.div>
  );

  const ChartCard = ({ title, children, className = '' }) => (
    <motion.div 
      className={`chart-card ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      {children}
    </motion.div>
  );

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Analytics Dashboard</h1>
          <p>Real-time insights into your website performance and user behavior</p>
        </div>
        <div className="header-controls">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-range-select"
          >
            <option value="1d">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="export-btn">
            <FaDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <MetricCard
          title="Page Views"
          value={analyticsData.pageViews}
          icon={<FaEye />}
          change={Math.random() * 20 - 10}
          isLoading={isLoading}
        />
        <MetricCard
          title="Unique Visitors"
          value={analyticsData.uniqueVisitors}
          icon={<FaUsers />}
          change={Math.random() * 20 - 10}
          isLoading={isLoading}
        />
        <MetricCard
          title="Bounce Rate"
          value={analyticsData.bounceRate}
          icon={<FaChartLine />}
          change={Math.random() * 20 - 10}
          isLoading={isLoading}
        />
        <MetricCard
          title="Avg. Session Duration"
          value={analyticsData.avgSessionDuration}
          icon={<FaClock />}
          change={Math.random() * 20 - 10}
          isLoading={isLoading}
        />
        <MetricCard
          title="Conversion Rate"
          value={analyticsData.conversionRate}
          icon={<FaMousePointer />}
          change={Math.random() * 20 - 10}
          isLoading={isLoading}
        />
        <MetricCard
          title="Real-time Users"
          value={analyticsData.realTimeUsers}
          icon={<FaGlobe />}
          isLoading={isLoading}
        />
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="charts-grid">
        {/* Top Pages */}
        <ChartCard title="Top Pages">
          <div className="pages-list">
            {analyticsData.topPages.map((page, index) => (
              <div key={index} className="page-item">
                <div className="page-info">
                  <span className="page-rank">#{index + 1}</span>
                  <span className="page-url">{page.page}</span>
                </div>
                <div className="page-stats">
                  <span className="page-views">{page.views.toLocaleString()} views</span>
                  <span className={`page-change ${page.change >= 0 ? 'positive' : 'negative'}`}>
                    {page.change >= 0 ? '+' : ''}{page.change.toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Traffic Sources */}
        <ChartCard title="Traffic Sources">
          <div className="sources-chart">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="source-item">
                <div className="source-info">
                  <span className="source-name">{source.source}</span>
                  <span className="source-percentage">{source.percentage}%</span>
                </div>
                <div className="source-bar">
                  <div 
                    className="source-progress" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Device Types */}
        <ChartCard title="Device Types">
          <div className="device-chart">
            {analyticsData.deviceTypes.map((device, index) => (
              <div key={index} className="device-item">
                <div className="device-icon">
                  {device.device === 'Desktop' && <FaDesktop />}
                  {device.device === 'Mobile' && <FaMobile />}
                  {device.device === 'Tablet' && <FaTabletAlt />}
                </div>
                <div className="device-info">
                  <span className="device-name">{device.device}</span>
                  <span className="device-percentage">{device.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* User Behavior */}
        <ChartCard title="User Behavior">
          <div className="behavior-list">
            {analyticsData.userBehavior.map((behavior, index) => (
              <div key={index} className="behavior-item">
                <div className="behavior-info">
                  <span className="behavior-action">{behavior.action}</span>
                  <span className="behavior-count">{behavior.count.toLocaleString()}</span>
                </div>
                <div className="behavior-bar">
                  <div 
                    className="behavior-progress" 
                    style={{ 
                      width: `${(behavior.count / Math.max(...analyticsData.userBehavior.map(b => b.count))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Real-time Activity Feed */}
      <ChartCard title="Real-time Activity" className="full-width">
        <div className="activity-feed">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">
                {index % 4 === 0 && <FaUsers />}
                {index % 4 === 1 && <FaSearch />}
                {index % 4 === 2 && <FaDownload />}
                {index % 4 === 3 && <FaShare />}
              </div>
              <div className="activity-content">
                <span className="activity-text">
                  {index % 4 === 0 && 'New visitor from'}
                  {index % 4 === 1 && 'User searched for'}
                  {index % 4 === 2 && 'Resource downloaded'}
                  {index % 4 === 3 && 'Page shared on'}
                </span>
                <span className="activity-detail">
                  {index % 4 === 0 && 'United States'}
                  {index % 4 === 1 && '"business automation"'}
                  {index % 4 === 2 && '"API Documentation"'}
                  {index % 4 === 3 && 'LinkedIn'}
                </span>
              </div>
              <span className="activity-time">
                {Math.floor(Math.random() * 60)}s ago
              </span>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
};

export default AnalyticsDashboard; 