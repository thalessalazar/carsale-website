import { Router } from "express";
import Admin from "../../controllers/admin/Admin"

const routes = new Router();

routes.get("/admin/", Admin.home);

export default routes;
