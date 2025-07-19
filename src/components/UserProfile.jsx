import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/apiService';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardStyle = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  padding: '2rem',
  minWidth: 400,
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflow: 'auto',
  position: 'relative',
};

const closeBtnStyle = {
  position: 'absolute',
  top: 12,
  right: 12,
  background: 'none',
  border: 'none',
  fontSize: 22,
  cursor: 'pointer',
  color: '#888',
};

const avatarStyle = {
  width: 90,
  height: 90,
  borderRadius: '50%',
  marginBottom: 18,
  objectFit: 'cover',
  border: '2px solid #eee',
};

const avatarGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  justifyContent: 'center',
  marginBottom: 16,
};

const avatarOptionStyle = (selected) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: selected ? '3px solid #0078d4' : '2px solid #eee',
  cursor: 'pointer',
  objectFit: 'cover',
  boxShadow: selected ? '0 0 8px #0078d4' : 'none',
  transition: 'border 0.2s, box-shadow 0.2s',
});

const AVATAR_OPTIONS = [
  '/images/avatar1.png',
  '/images/avatar2.png',
  '/images/avatar3.png',
  '/images/avatar4.png',
  '/images/avatar5.png',
  '/images/avatar6.png',
  '/images/avatar7.png',
  '/images/avatar8.png',
];

// Simple calendar grid for confirmed appointments
function CalendarView({ events }) {
  // Group events by date
  const grouped = events.reduce((acc, ev) => {
    const date = ev.start.split('T')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(ev);
    return acc;
  }, {});
  // Get all days in current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1));
  return (
    <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 12, marginBottom: 16 }}>
      <h4 style={{ margin: '0 0 8px' }}>My Calendar ({today.toLocaleString('default', { month: 'long', year: 'numeric' })})</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {[...Array(7)].map((_, i) => (
          <div key={i} style={{ fontWeight: 600, textAlign: 'center', color: '#888' }}>
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i]}
          </div>
        ))}
        {days.map(day => {
          const dateStr = day.toISOString().split('T')[0];
          const hasEvent = grouped[dateStr];
          return (
            <div key={dateStr} style={{
              minHeight: 40,
              borderRadius: 6,
              background: hasEvent ? '#d4edda' : '#f8f9fa',
              border: hasEvent ? '2px solid #28a745' : '1px solid #eee',
              textAlign: 'center',
              fontWeight: hasEvent ? 700 : 400,
              color: hasEvent ? '#155724' : '#333',
              position: 'relative',
              padding: 4
            }}>
              {day.getDate()}
              {hasEvent && (
                <div style={{ fontSize: 10, marginTop: 2 }}>
                  {grouped[dateStr].map(ev => (
                    <div key={ev.id}>{ev.title}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const UserProfile = ({ user, onClose }) => {
  const { setUser } = useAuth();
  const [mode, setMode] = useState('view'); // 'view', 'edit', 'appointments'
  const [name, setName] = useState(user?.name || '');
  const [avatarUrl, setAvatarUrl] = useState(user?.avatarUrl || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Appointment booking state
  const [appointmentForm, setAppointmentForm] = useState({
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [appointments, setAppointments] = useState([]);
  const [appointmentLoading, setAppointmentLoading] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    if (mode === 'appointments') {
      loadAppointments();
      loadCalendarEvents();
    }
  }, [mode]);

  const loadAppointments = async () => {
    setAppointmentLoading(true);
    try {
      const response = await apiService.request('/appointments/my-requests');
      setAppointments(response.appointmentRequests || []);
    } catch (err) {
      console.error('Failed to load appointments:', err);
    } finally {
      setAppointmentLoading(false);
    }
  };

  const loadCalendarEvents = async () => {
    try {
      const response = await apiService.request('/appointments/calendar');
      setCalendarEvents(response.calendarEvents || []);
    } catch (err) {
      setCalendarEvents([]);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const updated = await apiService.request(`/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, avatarUrl }),
      });
      setUser({ ...user, name, avatarUrl });
      setSuccess('Profile updated successfully!');
      setTimeout(() => setMode('view'), 1500);
    } catch (err) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setAppointmentLoading(true);
    setError('');
    setSuccess('');
    
    try {
      await apiService.request('/appointments/request', {
        method: 'POST',
        body: JSON.stringify({
          preferredDate: appointmentForm.date,
          preferredTime: appointmentForm.time,
          service: appointmentForm.service,
          message: appointmentForm.message
        }),
      });
      setSuccess('Appointment request sent! We will contact you to confirm.');
      setAppointmentForm({ date: '', time: '', service: '', message: '' });
      loadAppointments();
    } catch (err) {
      setError(err.message || 'Failed to book appointment.');
    } finally {
      setAppointmentLoading(false);
    }
  };

  const renderViewMode = () => (
    <div style={cardStyle} onClick={e => e.stopPropagation()}>
      <button style={closeBtnStyle} onClick={onClose} aria-label="Close">×</button>
      <img
        src={user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email)}`}
        alt="Avatar"
        style={avatarStyle}
      />
      <h2 style={{ margin: '0 0 8px' }}>{user.name || user.displayName || 'No Name'}</h2>
      <div style={{ color: '#666', marginBottom: 12 }}>{user.email}</div>
      
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
        <button 
          onClick={() => setMode('appointments')}
          style={{ 
            padding: '8px 20px', 
            borderRadius: 8, 
            background: '#28a745', 
            color: '#fff', 
            border: 'none', 
            fontWeight: 600 
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );

  const renderEditMode = () => (
    <div style={cardStyle} onClick={e => e.stopPropagation()}>
      <button style={closeBtnStyle} onClick={() => setMode('view')} aria-label="Close">×</button>
      <h2>Edit Profile</h2>
      
      <form onSubmit={handleProfileUpdate}>
        <div style={avatarGridStyle}>
          {AVATAR_OPTIONS.map((url, idx) => (
            <img
              key={url}
              src={url}
              alt={`Avatar ${idx + 1}`}
              style={avatarOptionStyle(avatarUrl === url)}
              onClick={() => setAvatarUrl(url)}
            />
          ))}
        </div>
        
        <div style={{ margin: '16px 0' }}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginBottom: 12 }}
            required
          />
          <input
            type="url"
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
            placeholder="Avatar URL (optional)"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: 10 }}>{success}</div>}
        
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 8, 
              background: '#0078d4', 
              color: '#fff', 
              border: 'none', 
              fontWeight: 600 
            }}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          <button 
            type="button"
            onClick={() => setMode('view')}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 8, 
              background: '#6c757d', 
              color: '#fff', 
              border: 'none', 
              fontWeight: 600 
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderAppointmentsMode = () => (
    <div style={cardStyle} onClick={e => e.stopPropagation()}>
      <button style={closeBtnStyle} onClick={() => setMode('view')} aria-label="Close">×</button>
      <h2>Appointments</h2>
      
      {/* Calendar for confirmed appointments */}
      <CalendarView events={calendarEvents} />
      <div style={{ marginBottom: 20 }}>
        <h3>Book New Appointment</h3>
        <form onSubmit={handleAppointmentSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>Date:</label>
            <input
              type="date"
              value={appointmentForm.date}
              onChange={e => setAppointmentForm({...appointmentForm, date: e.target.value})}
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
              required
            />
          </div>
          
          <div style={{ marginBottom: 12 }}>
            <label>Time:</label>
            <select
              value={appointmentForm.time}
              onChange={e => setAppointmentForm({...appointmentForm, time: e.target.value})}
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
              required
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
          
          <div style={{ marginBottom: 12 }}>
            <label>Service:</label>
            <select
              value={appointmentForm.service}
              onChange={e => setAppointmentForm({...appointmentForm, service: e.target.value})}
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
              required
            >
              <option value="">Select service</option>
              <option value="workflow-automation">Workflow Automation</option>
              <option value="data-processing">Data Processing</option>
              <option value="security-services">Security Services</option>
              <option value="sales-marketing">Sales & Marketing</option>
              <option value="quality-management">Quality Management</option>
              <option value="mobile-solutions">Mobile Solutions</option>
              <option value="consultation">General Consultation</option>
              <option value="implementation">Implementation</option>
              <option value="support">Technical Support</option>
              <option value="training">Training</option>
            </select>
          </div>
          
          <div style={{ marginBottom: 12 }}>
            <label>Message:</label>
            <textarea
              value={appointmentForm.message}
              onChange={e => setAppointmentForm({...appointmentForm, message: e.target.value})}
              placeholder="Describe your requirements..."
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', minHeight: 80 }}
            />
          </div>
          
          {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: 10 }}>{success}</div>}
          
          <button 
            type="submit" 
            disabled={appointmentLoading}
            style={{ 
              padding: '8px 20px', 
              borderRadius: 8, 
              background: '#28a745', 
              color: '#fff', 
              border: 'none', 
              fontWeight: 600 
            }}
          >
            {appointmentLoading ? 'Booking...' : 'Book Appointment'}
          </button>
        </form>
      </div>
      
      <div>
        <h3>My Appointments</h3>
        {appointmentLoading ? (
          <div>Loading appointments...</div>
        ) : appointments.length === 0 ? (
          <div style={{ color: '#666', textAlign: 'center', padding: 20 }}>No appointments yet</div>
        ) : (
          <div style={{ maxHeight: 200, overflow: 'auto' }}>
            {appointments.map((apt, index) => (
              <div key={index} style={{ 
                border: '1px solid #eee', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 8,
                background: apt.status === 'confirmed' ? '#d4edda' : '#fff3cd'
              }}>
                <div><strong>Date:</strong> {apt.preferredDate}</div>
                <div><strong>Time:</strong> {apt.preferredTime}</div>
                <div><strong>Service:</strong> {apt.service}</div>
                <div><strong>Status:</strong> {apt.status}</div>
                {apt.message && <div><strong>Message:</strong> {apt.message}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (!user) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      {mode === 'view' && renderViewMode()}
      {mode === 'edit' && renderEditMode()}
      {mode === 'appointments' && renderAppointmentsMode()}
    </div>
  );
};

export default UserProfile; 