import z from "zod";

export const updateTodoSchema = z.object({
  id: z.string().min(1, "'id' is required"),
  title: z.string().min(1, "'title' is required").optional(),
  description: z.string().optional(),
});
