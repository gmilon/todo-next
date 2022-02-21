import { Input } from "@chakra-ui/input";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  todo: string;
};

export type TodoCreate = {
  text: string;
};

type CreateTodoProps = {
  onCreate: (todo: TodoCreate) => void;
};

function CreateTodo({ onCreate }: CreateTodoProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (e) => {
    onCreate({
      text: e.todo,
    });
    reset();
  };
  return (
    <form data-testid="create-todo-form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.todo}>
        <Flex mt={4}>
          <Box mr={2} width={"100%"}>
            <Input
              size={"lg"}
              data-testid="todo-text-input"
              placeholder="Add your todo"
              {...register("todo", { required: true })}
            />
            {!!errors.todo && (
              <FormErrorMessage>Please fill your todo</FormErrorMessage>
            )}
          </Box>
          <Button size={"lg"} type="submit">
            Add
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}

export default CreateTodo;
