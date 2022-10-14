import { useParams } from "react-router";
import TodoItem from "./TodoItem";
import '../App.css';

const TaskPage = ({ todoItems,  deleteFunction ,completeFunction}) => {
  const { status } = useParams();

  return(
    <>
      <h3>{ status } tasks</h3>
      { todoItems.filter( todo => todo.status.toLowerCase() === status.toLowerCase() ).map(
          todo => <TodoItem name={ todo.name } status={ todo.status }  deleteFunction={ deleteFunction} completeFunction={ completeFunction }/>
        )
      }
    </>
  )
}

export default TaskPage;