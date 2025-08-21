import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";
import { removeTodoSchema } from "../../schemas/removeTodo";

export async function removeTodo(req: Request, res: Response) {
  try {
    const parseResult = removeTodoSchema.safeParse(req.params);
    if (!parseResult.success) {
      return res.status(400).json({ errors: parseResult.error.issues });
    }
    const { id } = parseResult.data;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.sendStatus(404);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
