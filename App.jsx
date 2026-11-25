import { useState } from "react";
import "./App.css";
export default function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()==="") return;
    setTasks([...tasks,task])
    setTask("");
  };
  return (
    <div>
    <h1>My To-Do List</h1>
    <p><input type="text" value={task} placeholder="Enter a task" onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={addTask}>Add Task</button></p>
    <h3>Total Tasks: {tasks.length}</h3>
    {tasks.length===0?(<p>No tasks added yet!</p>):(
    <ul>
      {tasks.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    )}
    </div>
  );
}