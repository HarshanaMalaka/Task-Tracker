import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
