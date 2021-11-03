import React from 'react';
import './index.css';

export const EmployeesList = ({ list, deleteEmployee }) => {
  console.log('list', list)
  return (
    <ul>
      {list.map((employee, index) => 
        <li key={employee.id} className='listItem'>
          <button className='remove' onClick={() => deleteEmployee(index)}>&times;</button>
          <span>
            {employee.first_name}
          </span>
        </li>
      )}
    </ul>
  )
}