import { Todo } from "../../../types/todo";
import { useCallback } from "react";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { todoRemoved } from "../../../store/todoSlice";

export type TodoItemStoreProps = {
  todo: Todo;
};

function TodoItemStore({ todo }: TodoItemStoreProps) {
  const dispatch = useDispatch();
  const handleDelete = useCallback(
    (todo: Todo) => {
      dispatch(todoRemoved(todo.id));
    },
    [dispatch]
  );
  return <TodoItem todo={todo} onDelete={handleDelete} />;
}

export default TodoItemStore;
