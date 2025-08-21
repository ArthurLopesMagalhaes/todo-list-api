import { model, Schema } from "mongoose";

export const Todo = model(
  "Todo",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })
);
