import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";

export async function removeTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;

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
