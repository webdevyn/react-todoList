import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

function App() {
  const data = [{id: 1, name: "Pizza"}, {id: 2, name: "Hamburger"}];
  const listItems = data.map(function(item) {
    return <ListItem key={item.id} itemName={item.name}/>
  })
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form>
        <label>Name: <input type="text"/></label>
        <input type="submit" value="submit"/>
      </form>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;
