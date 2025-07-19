import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/apiService';

// Color map for services
const SERVICE_COLORS = {
  'workflow-automation': '#0078d4',
  'data-processing': '#6f42c1',
  'security-services': '#e83e8c',
  'sales-marketing': '#fd7e14',
  'quality-management': '#20c997',
  'mobile-solutions': '#17a2b8',
  'consultation': '#ffc107',
  'implementation': '#6610f2',
  'support': '#dc3545',
  'training': '#28a745',
};

// Helper to generate .ics file for an event
function generateICS(event) {
  const pad = n => n.toString().padStart(2, '0');
  const dt = new Date(event.start);
  const dtEnd = new Date(event.end);
  const dtStr = `${dt.getUTCFullYear()}${pad(dt.getUTCMonth()+1)}${pad(dt.getUTCDate())}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}00Z`;
  const dtEndStr = `${dtEnd.getUTCFullYear()}${pad(dtEnd.getUTCMonth()+1)}${pad(dtEnd.getUTCDate())}T${pad(dtEnd.getUTCHours())}${pad(dtEnd.getUTCMinutes())}00Z`;
  return `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${dtStr}\nDTEND:${dtEndStr}\nDESCRIPTION:${event.description || ''}\nEND:VEVENT\nEND:VCALENDAR`;
}

// Popover component
function Popover({ anchor, children, open, onClose }) {
  if (!open || !anchor) return null;
  const rect = anchor.getBoundingClientRect();
  return (
    <div style={{
      position: 'fixed',
      top: rect.bottom + 6,
      left: rect.left,
      zIndex: 9999,
      background: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      padding: 16,
      minWidth: 220
    }}
      onMouseLeave={onClose}
    >
      {children}
    </div>
  );
}

// Enhanced calendar grid
function CalendarView({ events }) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [popover, setPopover] = useState({ anchor: null, event: null });
  const today = new Date();
  // Group events by date
  const grouped = events.reduce((acc, ev) => {
    const date = ev.start.split('T')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(ev);
    return acc;
  }, {});
  // Calendar helpers
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
  while (days.length % 7 !== 0) days.push(null);
  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));
  const cellBase = {
    minHeight: 56,
    borderRadius: 8,
    textAlign: 'center',
    padding: 4,
    position: 'relative',
    transition: 'background 0.2s, border 0.2s',
    cursor: 'pointer',
    fontSize: 15
  };
  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: 12, padding: 20, marginBottom: 24, background: '#fafbfc', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <button onClick={prevMonth} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#0078d4' }} aria-label="Previous Month">‹</button>
        <h3 style={{ margin: 0, fontWeight: 700, fontSize: 20 }}>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
        <button onClick={nextMonth} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#0078d4' }} aria-label="Next Month">›</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontWeight: 600, color: '#888', marginBottom: 4 }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} style={{textAlign:'center'}}>{d}</div>)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
        {days.map((day, idx) => {
          if (!day) return <div key={idx} style={{ minHeight: 56 }} />;
          const dateStr = day.toISOString().split('T')[0];
          const isToday = day.toDateString() === today.toDateString();
          const hasEvent = grouped[dateStr];
          return (
            <div
              key={dateStr}
              style={{
                ...cellBase,
                background: isToday ? '#e3f1ff' : hasEvent ? '#eafbe7' : '#fff',
                border: isToday ? '2px solid #0078d4' : hasEvent ? '2px solid #28a745' : '1px solid #e0e0e0',
                color: isToday ? '#0078d4' : hasEvent ? '#155724' : '#333',
                boxShadow: isToday ? '0 0 0 2px #b3e0ff' : undefined
              }}
            >
              <div style={{ fontWeight: 600 }}>{day.getDate()}</div>
              {hasEvent && (
                <div style={{ marginTop: 4 }}>
                  {hasEvent.map(ev => (
                    <div
                      key={ev.id}
                      style={{
                        background: SERVICE_COLORS[ev.title.split(' - ')[0].toLowerCase().replace(/ /g, '-')] || '#28a745',
                        color: '#fff',
                        borderRadius: 6,
                        fontSize: 11,
                        padding: '2px 6px',
                        marginBottom: 2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: 80,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        cursor: 'pointer',
                        border: '1px solid #fff',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
                      }}
                      onClick={e => setPopover({ anchor: e.target, event: ev })}
                    >
                      {ev.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Popover
        anchor={popover.anchor}
        open={!!popover.event}
        onClose={() => setPopover({ anchor: null, event: null })}
      >
        {popover.event && (
          <div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>{popover.event.title}</div>
            <div style={{ color: '#555', marginBottom: 4 }}>
              {new Date(popover.event.start).toLocaleDateString()}<br/>
              {new Date(popover.event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(popover.event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            {popover.event.description && <div style={{ marginBottom: 4 }}>{popover.event.description}</div>}
            <button
              style={{ background: '#0078d4', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 600, cursor: 'pointer', marginTop: 6 }}
              onClick={() => {
                const ics = generateICS(popover.event);
                const blob = new Blob([ics], { type: 'text/calendar' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${popover.event.title.replace(/\s+/g, '_')}.ics`;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }, 100);
              }}
            >
              Add to Device Calendar
            </button>
          </div>
        )}
      </Popover>
    </div>
  );
}

export default function Profile() {
  const { user } = useAuth();
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [appointmentLoading, setAppointmentLoading] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({ date: '', time: '', service: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    loadAppointments();
    loadCalendarEvents();
  }, []);

  const loadAppointments = async () => {
    setAppointmentLoading(true);
    try {
      const response = await apiService.request('/appointments/my-requests');
      setAppointments(response.appointmentRequests || []);
    } catch (err) {
      setAppointments([]);
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
      loadCalendarEvents();
    } catch (err) {
      setError(err.message || 'Failed to book appointment.');
    } finally {
      setAppointmentLoading(false);
    }
  };

  if (!user) return <div style={{ padding: 40, textAlign: 'center' }}>Loading profile...</div>;

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.08)', padding: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
        <img
          src={user.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email)}`}
          alt="Avatar"
          style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee' }}
        />
        <div>
          <h2 style={{ margin: 0 }}>{user.name || user.displayName || 'No Name'}</h2>
          <div style={{ color: '#666', marginBottom: 6 }}>{user.email}</div>
        </div>
      </div>
      <CalendarView events={calendarEvents} />
      <div style={{ marginBottom: 32 }}>
        <h3>Book New Appointment</h3>
        <form onSubmit={handleAppointmentSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label>Date:</label>
            <input
              type="date"
              value={appointmentForm.date}
              onChange={e => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label>Time:</label>
            <select
              value={appointmentForm.time}
              onChange={e => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
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
              onChange={e => setAppointmentForm({ ...appointmentForm, service: e.target.value })}
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
              onChange={e => setAppointmentForm({ ...appointmentForm, message: e.target.value })}
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
} 