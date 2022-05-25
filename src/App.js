import React from 'react';
import './App.css';
import Add from './Components/Add/Add';
import ListTasks from './Components/ListTasks/ListTasks';

function App() {
  return (
    <div className="App">
      <h1>ToDoList</h1>
      <Add/>
      <ListTasks/>
      
    </div>
  );
}

export default App;
