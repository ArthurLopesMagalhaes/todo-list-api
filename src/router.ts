import { Router } from "express";
import { createTodo } from "./useCases/todo/createTodo";
import { listTodos } from "./useCases/todo/listTodo";
import { updateTodo } from "./useCases/todo/updateTodo";
import { removeTodo } from "./useCases/todo/removeTodo";

export const router: Router = Router();

router.post("/todos", createTodo);
router.get('/todos', listTodos);
router.patch('/todos/:id', updateTodo);
router.delete('/todos/:id', removeTodo);
