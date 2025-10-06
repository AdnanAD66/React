import {useState} from 'react'
import './App.css'



function App() {


  const [input, setInput] = useState("")
  const [task, setTask] = useState([])

  function handleInput(e){
    e.preventDefault();
    setInput(e.target.value)

  }

  function addTask(){
    if(input.trim() === "") return;
    setTask([...task, input])
    setInput("")

  }


  function deleteTask(index){
    const updatedTask = task.filter((t, i) => i !== index)
    console.log(updatedTask);
    
    setTask(updatedTask)
  }


  function updateTask(index, newValue){
    const updatedTask = task.map((t, i) => i === index ? newValue : t)
    setTask(updatedTask)
  }

  return (
    <div className="todoApp">
      
      <h1>To Do App</h1>
      <input type="text" value={input} onChange={handleInput} placeholder='Enter Task'/>
      <div className='btn'>
        <button onClick={addTask} >Add Task</button>
      </div>
      <ul>
       {task.map( (t, index) => (

         <li key= {index} > {t} 
         <button onClick={() => deleteTask(index)}>Delete</button>
         <button onClick={() => {const newVal= prompt("Enter new Value")
          if(newVal) updateTask(index, newVal)
         }}>Update</button>
         
         </li>
       ))}
      </ul>

    </div>
  )
}

export default App
