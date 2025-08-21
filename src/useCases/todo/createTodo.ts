import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";
import { createTodoSchema } from "../../schemas/createTodo";

export async function createTodo(req: Request, res: Response) {
  try {
    const parseResult = createTodoSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { title, description } = parseResult.data;

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
