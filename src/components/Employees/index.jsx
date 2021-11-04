import React, { useEffect, useState } from 'react';
import { EmployeesList } from './EmployeesList';
import { AddEmployeeModal } from './AddEmployeeModal';
import './index.css';

let usersListUrl = 'https://reqres.in/api/users?per_page=12';

export const Employees = () => {
  let [employeesArray, setEmployeesArray] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  let [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(usersListUrl).then(res => res.json()).then(res => {
      if(res?.data) {
        setEmployeesArray(res.data)
      }
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoading(false));
  }, [])

  const deleteEmployee = (index) => {
    let employeesArrayCopy = [...employeesArray];
    employeesArrayCopy.splice(index, 1);
    setEmployeesArray(employeesArrayCopy);
    //mutate list in API
  }

  const addNewEmployee = (employee) => {
    employee.id = employeesArray[employeesArray.length - 1].id + 1;
    setEmployeesArray(prev => [...prev, employee]);
    //mutate list in API
  }

  return (
    <div>
      <h1>Список сотрудников</h1>
      <button onClick={() => setIsAddEmployeeModalOpen(true)}>Добавить нового пользователя</button>
      { 
        isLoading
          ? <p>Список сотрудников загружается</p>
          : error
            ? <p>Ошибка при загрузке данных: {error.message}</p>
            : employeesArray.length
              ? <EmployeesList list={employeesArray} deleteEmployee={deleteEmployee} />
              : <p>Список сотрудников пуст</p>
      }
      {
        isAddEmployeeModalOpen
          ? <AddEmployeeModal addNewEmployee={addNewEmployee} onClose={() => setIsAddEmployeeModalOpen(false)} />
          : null
      }
    </div>
  )
}