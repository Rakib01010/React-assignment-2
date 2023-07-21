
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  //here I start adding input in my setTasks array 
  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <br/>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
