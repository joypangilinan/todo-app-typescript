import Todo from "../../models/Todo";
import httpErrors from "http-errors";

let todosService: { [key: string]: any } = {};

todosService.createTodo = async (todoInfo) => {
  const todo = await Todo.create({
    ...todoInfo,
  });

  await todo.save();

  return {
    todo,
  };
};

todosService.todosByType = async (type) => {
  const todos = await Todo.find({ type });
  return {
    todos,
  };
};

todosService.todo = async (id) => {
  const todo = await Todo.findOne({ _id: id });

  if (!todo) throw httpErrors.NotFound();

  return {
    todo,
  };
};

todosService.taskCompleted = async (id) => {
  let todoCompleted: any = {};
  todoCompleted = await Todo.findOne({ _id: id }, { _id: 0, completed: 1 });

  if (!todoCompleted) throw httpErrors.NotFound();

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: id },
    { completed: !todoCompleted.completed },
    { new: true }
  );

  return {
    updatedTodo,
  };
};

todosService.deleteTodo = async (id) => {
  const deleteTodo = await Todo.findOneAndDelete({ _id: id });

  if (!deleteTodo) throw httpErrors.NotFound();

  return {
    deleteTodo,
  };
};

export default todosService;
