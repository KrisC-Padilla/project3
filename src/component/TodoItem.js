import TodoForm from "./TodoForm";
import '../App.css';


const TodoItem=({name, status, deleteFunction, completeFunction}) =>{

  return(
    <>
      {name}  
      {name && name.length ? '': "no input"}
      <br/>
      {status ==="Pending" && 
        <button className="compBttn" onClick = {()=> completeFunction(name)}>
                Completed
        </button>
      }
        <button className="delBttn" onClick={()=> deleteFunction(name)}>
                Delete
        </button>
      <br/>
    </>

  )

}
export default TodoItem;