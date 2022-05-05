import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([{id: 1, name: "Pizza"}, {id: 2, name: "Hamburger"}])    //tasks is the name of the array

  const [newItemName, setNewItemName] = useState("")

  const listItems = tasks.map(function(item) {
    return <ListItem key={item.id} itemName={item.name}/>
  })

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
        const lastItemId = tasks[tasks.length - 1].id    //our array is in numeric order
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

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input onChange={handleChange} value={newItemName} type="text"/></label>
        <input type="submit" value="submit"/>
      </form>
      <ul>
        {listItems}
      </ul>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
}

export default App;
