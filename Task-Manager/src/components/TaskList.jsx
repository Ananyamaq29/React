import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <ul id="tasks">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
