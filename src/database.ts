import mongoose from "mongoose";
import "./lib/env";

const uri: string = process.env.DB_URL;

mongoose.connection.once("open", () => {
  console.log("successfully connected to the database!");
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
export default async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
