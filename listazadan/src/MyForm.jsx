import React, { useState } from 'react';
import './styles.css';

const MyForm = ({ onTaskSubmit }) => {
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      text: name,
      date: new Date(),
    };
    onTaskSubmit(newTask);
    setName('');
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="nazwa zadania" value={name} onChange={onChangeName} />
      <button type="submit">Dodaj zadanie</button>
    </form>
  );
};

export default MyForm;
