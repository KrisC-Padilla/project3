import TodoItem from './TodoItem';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../App.css';

const TodoForm = ({addTodoFunction, name}) => {
const [todo, updateTodo] = useState ('');

const navigate = useNavigate();

const addItemFunction = () => {
  addTodoFunction(todo);
  updateTodo();
  navigate ('/Pending');
}

  return(
    <>
    
    <form className='form'>
      <h3>Input new task : </h3> 
      <input type='text'className='input' 
             value={todo} onChange={ event => updateTodo(event.target.value)} 
      />
    </form>
      <button className='clrBttn' onClick={() => updateTodo('')}>Clear</button>
      <button className='addBttn' onClick={(e) => e.preventDefault(addItemFunction())}>Add Task</button>
    </>
  )
}


// import { useState } from "react";
// import { useNavigate } from 'react-router';

// const TodoForm = ({ addTodoFunction }) => {
//     const [ todo, updateTodo ] = useState('');

//     const navigate = useNavigate();

//     const addItemFunction = (e) => {
//         e.preventDefault();

//         // Triggers the AddTodoItem in App.js
//         addTodoFunction( todo );
//         updateTodo('');

//         // Redirect to page with all pending tasks
//         navigate('/pending');
//     }

//     // We can apply here our Two-Way binding
//     return(
//         <>
//             <form>
//                 <input type='text' value={ todo } onChange={ e => updateTodo(e.target.value) } />
//                 <button onClick={ () => updateTodo('') }>Clear</button>
//                 <button onClick={ (e) => addItemFunction(e) }>Submit</button>
//             </form>
//         </>
//     )
// }

export default TodoForm;
