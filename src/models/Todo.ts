import mongoose, { Schema } from "mongoose";

const TodoSchema: Schema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
      enum: ["work", "personal"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Todo", TodoSchema);
