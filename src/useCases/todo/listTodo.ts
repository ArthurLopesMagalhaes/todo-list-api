import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";

export async function listTodos(req: Request, res: Response) {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
