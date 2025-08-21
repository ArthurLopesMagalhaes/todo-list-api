import type { Request, Response } from "express";
import { Todo } from "../../models/Todo";

export async function updateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!todo) {
      return res.sendStatus(404);
    }

    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
