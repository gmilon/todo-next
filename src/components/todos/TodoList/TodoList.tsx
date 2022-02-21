import { Todo } from "../../../types/todo";
import { Box, Text } from "@chakra-ui/react";
import TodoItem from "../TodoItem/TodoItem";

export interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <Box marginTop={4}>
      {todos.length === 0 && <Text>There is no todos, please add one.</Text>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
}

export default TodoList;
