import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import Inputt  from './components/Inputt';
import  Button  from './components/button.jsx';
import Card from './components/card';


function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([])
  const addTodo = () => {
    let arr = [...todos];
    arr.push(value)
    setTodos(arr)
    setValue("")
  }
  const deleteTodo = (i) => {
    let arr = [...todos];
    arr.splice(i, 1)
    setTodos(arr)
  }
  const deleteAll = () =>{
    let arr = [];
    setTodos(arr)
  }

  return (
    <div className="App">
      <Navbar/>
      <Inputt value={value}  onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter value"  />
      <div>
      <Button onClick={addTodo} >ADD TODO </Button>  
      <Button onClick={deleteAll} >DELETTE ALL</Button>
      </div>
      
      {/* <Card/> */}
    
        {todos.map((v, i) => {
          return <Card key={i}>{v} <Button  onClick={() => deleteTodo(i)}>Delete</Button></Card>
        })}
  
  
    </div>
  );
}

export default App;
