import { Request, Response } from "express";
import Todo from "../../models/Todo";
import httpErrors from "http-errors";

let todosController: { [key: string]: any } = {};

todosController.todosByType = async (req: Request, res: Response) => {
  const { type } = req.params;
  const todos = await Todo.find({ type });

  res.json(todos);
};

todosController.createTodo = async (req: Request, res: Response) => {
  const todoInfo = req.body;
  const todo = await Todo.create({
    ...todoInfo,
  });

  await todo.save();

  res.json(todo);
};

todosController.todo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findOne({ _id: id });

  if (!todo) throw httpErrors.NotFound();

  res.json(todo);
};

todosController.taskCompleted = async (req: Request, res: Response) => {
  const { id } = req.params;
  let todoCompleted: any = {};
  todoCompleted = await Todo.findOne({ _id: id }, { _id: 0, completed: 1 });

  if (!todoCompleted) throw httpErrors.NotFound();

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: id },
    { completed: !todoCompleted.completed },
    { new: true }
  );

  res.json(updatedTodo);
};

todosController.deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteTodo = await Todo.findOneAndDelete({ _id: id });

  if (!deleteTodo) throw httpErrors.NotFound();

  res.json(deleteTodo);
};

export default todosController;
