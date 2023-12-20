import React from 'react';

function Task({ task, onTaskRemove }) {
  return (
    <ul>
        <li>
            <div>
                <p>{task.text} - Data utworzenia: {task.date.toLocaleDateString("pl-PL")} {task.date.toLocaleTimeString("pl-PL")}</p>
                <button onClick={() => onTaskRemove(task.id)}>Usuń</button>
            </div>
        </li>
    </ul>
  );
}

export default Task;
