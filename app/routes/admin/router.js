import { Router } from "express";
import Admin from "../../controllers/admin/Admin";

const routes = new Router();

routes.get("/admin/", Admin.home);
routes.get("/admin/empresa", Admin.company);

export default routes;
