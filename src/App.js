import './App.css';
import { useState } from 'react';
import TodoItem from './component/TodoItem';
import TodoForm from './component/TodoForm';
import { Routes, Router, Route, Link} from 'react-router-dom';
import AddTaskPage from './component/AddTaskPage';
import TaskPage from './component/TaskPage';

const App = () => {
  const initialValue =[
    {name: "Eat", status: "Pending"},
    {name: "Read books", status: "Pending"},
    {name: "Watch Videos", status: "Done"},
    {name: "Practice Coding", status: "Pending"},
    {name: "Review Class Videos", status: "Done"},
  ];

  const [todos, setTodo] = useState (initialValue);
  const addTodoItem = (newTodo) =>{

    const newTodoItem = {name: newTodo, status: "Pending"}
    
    //this is to add new item (create copy - update copy -update state)
    const currentTodo = todos.slice(0);
    currentTodo.push(newTodoItem);
    setTodo(currentTodo);
  }

    //this is to delete an item (create copy - update copy -update state)

   const toDeleteFunction = (name) => {

      alert(`Are you sure you want to delete : ${name}`);
      const index = todos.findIndex(todo => todo.name === name);
      const currentTodo = todos.splice(0);
      currentTodo.splice(index,1);
     setTodo(currentTodo);
    }

     //this is to mark an item as done/completed (create copy - update copy -update state)
      const handleComplete = (name) => {
        const currentTodo = [...todos];
        currentTodo.find(todo => todo.name === name).status='Done';
        console.log(currentTodo);
        setTodo(currentTodo);
      }
   
  return(
  <>
    
    <nav className='navBar'>
      <Link to=''>Home</Link>
      {/* <Link to='add'>Add New</Link>  */}
      <Link to='pending'>Pending</Link> 
      <Link to='done'>Completed</Link>  
    </nav>
  <br></br>
   <h2> <span>WHAT'S THE </span>  PLAN FOR TODAY?</h2>
   <h4> {todos && todos.length ? ' ' : 'Hmmm, no plans for today?'}</h4>
   
    <Routes>
    <Route path='/' element={ <AddTaskPage addItemFunction={addTodoItem}/>} /> 
        {/* // todos.map ( todo => <TodoItem name={ todo.name } status={ todo.status } 
        // deleteFunction={ toDeleteFunction } completeFunction={ handleComplete }/>)}/> */}

       <Route path='/add' element={ <AddTaskPage addItemFunction={addTodoItem}/>} /> 
       <Route path='/:status' element={<TaskPage todoItems={todos}  deleteFunction={ toDeleteFunction } completeFunction={ handleComplete }/>} />
    </Routes>
   
  </>
  )
}
export default App;

