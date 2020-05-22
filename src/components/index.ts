import * as express from "express";
import todos from "./todos";

let router = express.Router();

router.use(todos);

export default router;
