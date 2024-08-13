import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCreate.css';
import Navbar from './Navbar';
import axios from 'axios';

const EventCreate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [responsibleId, setResponsibleId] = useState('');
    const [responsibleName, setResponsibleName] = useState('');
    const [responsibleEmail, setResponsibleEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const eventData = {
            name,
            date,
            location,
            description,
            responsible: {
                id: responsibleId,
                name: responsibleName,
                email: responsibleEmail
            }
        };

        try {
            const response = await axios.post('http://localhost:8080/api/events', eventData);
            console.log('Event created successfully:', response.data); // Log the response
            navigate('/dashboard'); // Redirect after successful creation
        } catch (error) {
            console.error('There was an error creating the event!', error);
        }
        
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="form-header">
                    <h1>Create New Event</h1>
                </div>
                <div className="form-section">
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="name">Event Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-field">
                            <label htmlFor="responsibleId">Responsible User ID</label>
                            <input
                                type="text"
                                id="responsibleId"
                                name="responsibleId"
                                value={responsibleId}
                                onChange={(e) => setResponsibleId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="responsibleName">Responsible User Name</label>
                            <input
                                type="text"
                                id="responsibleName"
                                name="responsibleName"
                                value={responsibleName}
                                onChange={(e) => setResponsibleName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="responsibleEmail">Responsible User Email</label>
                            <input
                                type="email"
                                id="responsibleEmail"
                                name="responsibleEmail"
                                value={responsibleEmail}
                                onChange={(e) => setResponsibleEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <button type="submit" className="button">Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventCreate;


