import { Todo } from "../../../types/todo";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { todoSelector } from "../../../store/todoSlice";

function TodoListStore() {
  const todos: Todo[] = useSelector(todoSelector);
  return <TodoList todos={todos} />;
}

export default TodoListStore;
