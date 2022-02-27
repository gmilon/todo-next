import { Todo } from "../../../types/todo";
import { Box, Text } from "@chakra-ui/react";
import TodoItemStore from "../TodoItem/TodoItemStore";

export interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <Box marginTop={4}>
      {todos.length === 0 && <Text>There is no todos, please add one.</Text>}
      {todos.map((todo) => (
        <TodoItemStore key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}

export default TodoList;
