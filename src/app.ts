import express from "express";
import apiRoutes from "./components";
import databaseConnection from "./database";
import bodyParser from "body-parser";

const app = express();

databaseConnection();

app.set("port", 3000);
app.use(bodyParser.json());

app.use(apiRoutes);

app.listen(app.get("port"), () => {
  console.log(`App is running on http://localhost:%d`, app.get("port"));
});
