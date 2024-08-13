import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/events';

export const fetchEvents = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export const createEvent = async (event) => {
    try {
        const response = await axios.post(API_BASE_URL, event);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        throw error;
    }
};

export const deleteEvent = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
};
