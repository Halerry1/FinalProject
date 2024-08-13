import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './EventDetails.css';
import { fetchEvents, deleteEvent } from '../services/eventService';

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      try {
        await deleteEvent(id);
        setEvents(events.filter(event => event.id !== id)); // Remove deleted event from UI
        alert('Event deleted successfully!');
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Failed to delete event.');
      }
    }
  };

  const filteredEvents = events.filter(event =>
    (event.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     event.location?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (filteredEvents.length === 0) {
    return <div>No events found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="event-header">
          <h1>All Events</h1>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
        </div>
        <div className="event-section">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-item">
              <h2>{event.name}</h2>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Responsible:</strong> {event.responsible ? `${event.responsible.name} (${event.responsible.email})` : 'No responsible assigned'}</p>
              <button className="delete-button" onClick={() => handleDelete(event.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
