import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskCreate.css';
import Navbar from './Navbar';
import { createTask } from '../services/taskService'; // Import the createTask function

const TaskCreate = () => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  
  // State for the responsible fields
  const [responsibleId, setResponsibleId] = useState('');
  const [responsibleName, setResponsibleName] = useState('');
  const [responsibleEmail, setResponsibleEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      name: taskName,
      deadline: taskDeadline,
      description: taskDescription,
      responsible: {
        id: responsibleId,
        name: responsibleName,
        email: responsibleEmail
      }
    };

    try {
      await createTask(newTask);  // Call the createTask function to send the task to the backend
      navigate('/dashboard');  // Navigate to the dashboard after successful task creation
    } catch (error) {
      console.error('Error creating task:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-header">
          <h1>Create New Task</h1>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="taskName">Task Name</label>
              <input 
                type="text" 
                id="taskName" 
                name="taskName" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-field">
              <label htmlFor="taskDeadline">Deadline</label>
              <input 
                type="date" 
                id="taskDeadline" 
                name="taskDeadline" 
                value={taskDeadline} 
                onChange={(e) => setTaskDeadline(e.target.value)} 
                required 
              />
            </div>
            <div className="form-field">
              <label htmlFor="taskDescription">Description</label>
              <textarea 
                id="taskDescription" 
                name="taskDescription" 
                value={taskDescription} 
                onChange={(e) => setTaskDescription(e.target.value)} 
                required 
              ></textarea>
            </div>

            {/* Responsible Section */}
            <div className="form-field">
              <label htmlFor="responsibleId">Responsible ID</label>
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
              <label htmlFor="responsibleName">Responsible Name</label>
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
              <label htmlFor="responsibleEmail">Responsible Email</label>
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
              <button type="submit" className="button">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
