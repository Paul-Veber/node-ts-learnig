import { Router } from "express"
import * as controller from "../controllers/index"
import * as api from "../controllers/api"

export const index = Router()

index.get("/", controller.index)

// task api
index.get("/api/tasks", api.browse_tasks)
index.get("/api/task/:id", api.read_tasks)
index.post("/api/task/add", api.add_task)
index.put("/api/task/edit/:id", api.edit_task)
index.delete("api/task/delete/:id", api.delete_task)
