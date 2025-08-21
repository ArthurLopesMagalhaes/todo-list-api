import z from "zod";

export const removeTodoSchema = z.object({
  id: z.string().min(1, "ID is required"),
});
