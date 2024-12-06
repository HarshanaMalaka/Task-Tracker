import React from 'react';

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.task} - {task.deadline}
      </span>
      <button onClick={() => toggleComplete(index)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};

export default TaskItem;
