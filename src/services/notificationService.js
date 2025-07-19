export async function fetchNotifications(token) {
  const response = await fetch('/api/notifications', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok) throw new Error('Failed to fetch notifications');
  const data = await response.json();
  return data.notifications;
} 