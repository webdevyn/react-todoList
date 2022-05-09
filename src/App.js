import './App.css';
import ListItem from './ListItem';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])   //initial value of tasks is empty array

  const [newItemName, setNewItemName] = useState("")


  const handleChange = (event) => {
    setNewItemName(event.target.value)  //updates state with what user types in
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //get name from the state --- newItemName
    //create an object with the name
    const newTask = {
      name: newItemName
    }
    if (tasks.length === 0) {
      newTask.id = 1
    } else {
    //add an id to the object using setTasks, can't push to array
        const lastItemId = tasks[tasks.length - 1].id    //this works only if array is in numeric order
        newTask.id = lastItemId + 1
    };
  
    //make copy of current state
    const tasksCopy = [...tasks]   //spread operator makes copy of current array
    //add my object to the copy
    tasksCopy.push(newTask)
    //update the state
    setTasks(tasksCopy)
    setNewItemName("")
  }

  const clearList = () => {
    setTasks([])
  }

  const removeTask = (id) => {
    //get the tasks
    //remove the task that was clicked
    const updatedTasks= tasks.filter(task => task.id !== id)
    //update the state with the new list of tasks
    setTasks(updatedTasks)
  }

  const listItems = tasks.map(function(item) {
    return <ListItem
                 delete={()=> removeTask(item.id)} 
                 key={item.id} 
                 itemName={item.name}
                 />

  })

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Enter tasks in the field below:</h2>
      <form onSubmit={handleSubmit}>
          <input id="text" onChange={handleChange} value={newItemName} type="text" placeholder="New Task"/>
        <input disabled={!newItemName} type="submit" value="Add"/>
      </form>
      <ul>
        {listItems}
      </ul>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
}

export default App;
