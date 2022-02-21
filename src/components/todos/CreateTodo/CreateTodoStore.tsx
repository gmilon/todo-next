import CreateTodo, { TodoCreate } from "./CreateTodo";
import { todoAdded } from "../../../store/todoSlice";
import { useDispatch } from "react-redux";

function CreateTodoStore() {
  const dispatch = useDispatch();
  const onSubmit = (todo: TodoCreate) => {
    dispatch(todoAdded(todo.text));
  };
  return <CreateTodo onCreate={onSubmit} />;
}

export default CreateTodoStore;
