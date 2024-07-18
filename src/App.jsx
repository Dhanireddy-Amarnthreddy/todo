import React, { useState } from 'react'
import './App.css'

function App() {
  
  const list = [];
  const [available, setAvailable] = useState(true);
  const [editIndex, setEditIndex] = useState(0);

  let html = '';
  const updateList = () => {
    if(available)
    {
      list.push(document.querySelector('.task').value);
    }
    else
    {
      document.querySelector('.add-task-button').innerHTML = "Add Task";
      list[editIndex] = document.querySelector('.task').value;
      setAvailable(true);
    }
    display();
  };

  function display() {
    html = ''
    for(let i=0; i<list.length; i++)
    {
      html += `<div> <span>${list[i]}</span> <button class='edit-button' data-index='${i}'> Edit </button> <button class='remove-button' data-index='${i}'> Remove </button> </div>`;
    }
      document.querySelector('.display-task').innerHTML = html;
      
      document.querySelectorAll('.remove-button').forEach((button, index) => {
        button.addEventListener('click', () => removeList(index));
      });

      document.querySelectorAll('.edit-button').forEach((button, index) => {
        button.addEventListener('click', () => editList(index));
      });
  };

  function removeList(index) {
    list.splice(index, 1);
    display();
  }

  function editList(index) {
    document.querySelector('.add-task-button').innerHTML = 'Update';
    document.querySelector('.task').value = list[index];
    setAvailable(false);
    setEditIndex(index);
  }

  return (
    <React.Fragment>
      <div className='main-div'>
        <h2>To do List</h2>
        <div>
          <input type="text" className='task' placeholder='Enter a task'/>
          <button onClick={() => {updateList(); document.querySelector('.task').value=''}} className='add-task-button'>Add Task</button>
        </div>
        <p className='display-task'></p>
      </div>
    </React.Fragment>
  )
}

export default App