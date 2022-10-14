import TodoForm  from "./TodoForm";


const AddTaskPage = ({ addItemFunction }) => {
  return(
    <>
      
      
       <TodoForm addTodoFunction={ addItemFunction } />
    </>
  )
}

export default AddTaskPage;