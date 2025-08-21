import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";


export async function createTodo(req: Request, res: Response) {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
