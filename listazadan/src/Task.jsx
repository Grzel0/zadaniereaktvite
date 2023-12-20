import React from 'react';

function Task({ task, onTaskRemove }) {
  return (
    <div>
      <p>{task.text}</p>
      <p>Data utworzenia: {task.date.toLocaleDateString()}</p>
      <button onClick={() => onTaskRemove(task.id)}>Usuń</button>
    </div>
  );
}

export default Task;
