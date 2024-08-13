import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Dashboard.css';
import { fetchEvents } from '../services/eventService';
import { fetchTasks } from '../services/taskService';
import { getUserById } from '../services/userService';

const Dashboard = () => {
  const [userName, setUserName] = useState(''); // State to hold user name
  const [events, setEvents] = useState([]); // State to hold events
  const [tasks, setTasks] = useState([]); // State to hold tasks

  useEffect(() => {
    // Fetch user data, events, and tasks from the backend
    const loadDashboardData = async () => {
      try {
        const userId = 'user-id'; // Replace with actual user ID
        const user = await getUserById(userId);
        setUserName(user.username);

        const eventsData = await fetchEvents();
        setEvents(eventsData);

        const tasksData = await fetchTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {userName}</h1>
          <Link to="/create-event" className="button">Create New Event</Link>
          <Link to="/create-task" className="button">Create New Task</Link>
        </div>
        <div className="dashboard-section">
          <h2>Upcoming Events</h2>
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="event-item">
                <p><strong>{event.name}</strong> - Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Location: {event.location}</p>
              </div>
            ))
          ) : (
            <p>No upcoming events.</p>
          )}
        </div>
        <div className="dashboard-section">
          <h2>Your Tasks</h2>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="task-item">
                <p><strong>{task.name}</strong> - Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No tasks assigned.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
