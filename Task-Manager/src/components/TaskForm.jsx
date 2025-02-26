import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.title && taskData.description && taskData.dueDate) {
      addTask(taskData);
      setTaskData({ title: '', description: '', dueDate: '', priority: 'Low' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={taskData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={taskData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={taskData.dueDate}
        onChange={handleChange}
        required
      />
      <select name="priority" value={taskData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
