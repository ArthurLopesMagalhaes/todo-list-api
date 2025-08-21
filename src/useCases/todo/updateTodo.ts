import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";
import { updateTodoSchema } from "../../schemas/updateTodo";

export async function updateTodo(req: Request, res: Response) {
  try {
    console.log({ req: req.params })
    const parseResult = updateTodoSchema.safeParse({ ...req.params, ...req.body });
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { id, title, description, completed } = parseResult.data;

    const todo = await Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });

    if (!todo) {
      return res.sendStatus(404);
    }

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
