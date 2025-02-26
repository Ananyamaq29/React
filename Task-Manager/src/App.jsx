// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // <-- Import the CSS file here

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the app loads
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData) => {
    const newTask = { ...taskData, id: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header>
        <h1>Smart Task Manager</h1>
      </header>

      <main>
        <section id="task-input">
          <TaskForm addTask={addTask} />
        </section>

        <section id="task-list">
          <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
