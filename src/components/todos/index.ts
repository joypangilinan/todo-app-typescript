import express from "express";
import todosController from "./todosController";
let todosRouter = express.Router();

todosRouter.get("/todos/type/:type", todosController.todosByType);
todosRouter.post("/todos", todosController.createTodo);
todosRouter.get("/todos/:id", todosController.todo);
todosRouter.put("/todos/:id", todosController.taskCompleted);
todosRouter.delete("/todos/:id", todosController.deleteTodo);

export default todosRouter;
