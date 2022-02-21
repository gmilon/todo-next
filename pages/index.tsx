import type { NextPage } from "next";
import CreateTodoStore from "../src/components/todos/CreateTodo/CreateTodoStore";
import TodoListStore from "../src/components/todos/TodoList/TodoListStore";
import { Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container>
      <CreateTodoStore />
      <TodoListStore />
    </Container>
  );
};

export default Home;
