import { Request, Response } from "express";
import Todo from "../../models/Todo";
import httpErrors from "http-errors";
import joiValidator from "../../utils/joiValidator";
import todosSchema from "./todosSchema";
import todosService from "./todosService";

let todosController: { [key: string]: any } = {};

todosController.todosByType = async (req: Request, res: Response) => {
  const { type } = req.params;

  const result = await todosService.todosByType(type);

  res.json(result);
};

todosController.createTodo = async (req: Request, res: Response) => {
  const { error, value: validatedRequestBody } = joiValidator(
    req.body,
    todosSchema.createTodo
  );

  if (error) res.status(500).send(error.details);

  const todoInfo = validatedRequestBody;

  const result = await todosService.createTodo(todoInfo);

  res.json(result);
};

todosController.todo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await todosService.todo(id);

  res.json(result);
};

todosController.taskCompleted = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await todosService.taskCompleted(id);

  res.json(result);
};

todosController.deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await todosService.deleteTodo(id);

  res.json(result);
};

export default todosController;
