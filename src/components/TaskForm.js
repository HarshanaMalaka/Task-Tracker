import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && deadline) {
      addTask({ task, deadline, completed: false });
      setTask('');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
