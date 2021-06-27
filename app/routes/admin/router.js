import { Router } from "express";

import Admin from "../../controllers/admin/Admin";
import Company from "../../controllers/admin/Company";

const routes = new Router();

routes.get("/admin/", Admin.home);

routes.get("/admin/empresa", Company.Show);
routes.post("/admin/empresa", Company.Update);

export default routes;
