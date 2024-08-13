import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import EventDetails from './components/EventDetails';
import TaskCreate from './components/TaskCreate';
import EventCreate from './components/EventCreate';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Check if user is logged in
  
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/event-details" element={<PrivateRoute><EventDetails /></PrivateRoute>} />
        <Route path="/create-task" element={<PrivateRoute><TaskCreate /></PrivateRoute>} />
        <Route path="/create-event" element={<PrivateRoute><EventCreate /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
