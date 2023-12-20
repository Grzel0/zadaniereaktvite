import React, { useState, useEffect } from 'react';
import MyForm from './MyForm';
import Task from './Task';
import './styles.css';

  const TaskList = () => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Posprzątaj pokój', date: new Date()},
      { id: 2, text: 'Umyj naczynia', date: new Date()},
      { id: 3, text: 'Wyjdź z psem', date: new Date()}
    ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista Zadań</h2>
      <MyForm onTaskSubmit={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onTaskRemove={() => removeTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
