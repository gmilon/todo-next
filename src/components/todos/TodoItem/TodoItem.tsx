import { Todo } from "../../../types/todo";
import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { useCallback } from "react";

export type TodoItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => any;
};

function TodoItem({ todo, onDelete }: TodoItemProps) {
  const handleDelete = useCallback(() => {
    onDelete(todo);
  }, []);
  return (
    <Box borderWidth="1px" marginTop={4} borderRadius={"4px"}>
      <Flex p={4} align={"center"}>
        <Text>{todo.text}</Text>
        <Spacer />
        <CloseButton data-testid="delete-item" onClick={handleDelete} />
      </Flex>
    </Box>
  );
}

export default TodoItem;
