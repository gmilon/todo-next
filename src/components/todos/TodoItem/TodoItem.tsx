import { Todo } from "../../../types/todo";
import { Box, CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <Box borderWidth="1px" marginTop={4} borderRadius={"4px"}>
      <Flex p={4} align={"center"}>
        <Text>{todo.text}</Text>
        <Spacer />
        <CloseButton />
      </Flex>
    </Box>
  );
}

export default TodoItem;
