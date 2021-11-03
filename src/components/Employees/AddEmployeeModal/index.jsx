import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css';

export const AddEmployeeModal = ({ addNewEmployee, onClose }) => {
  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');

  const onAddEmployeeHandler = () => {
    console.log('add')
    addNewEmployee({first_name: name, last_name: lastName, email: email});
    onClose();
  }

  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <button onClick={onClose} className='close'>
          &times;
        </button>
        <div>
          <input type='text' placeholder='Enter first name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor ='name'>First name</label>
        </div>
        <div>
          <input type='text' placeholder='Enter last name' id='last_name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <label htmlFor ='last_name'>Last name</label>
        </div>
        <div>
          <input type='text' placeholder='Enter email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor ='email'>Email</label>
        </div>
        <button onClick={onAddEmployeeHandler}>Добавить пользователя</button>
      </div>
    </div>
  );
};
