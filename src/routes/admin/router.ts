import { Router } from "express";

import Admin from "../../controllers/admin/Admin";
import Company from "../../controllers/admin/Company";
import Custommer from "../../controllers/admin/Custommer";

const routes = new Router();

routes.get("/admin/", Admin.home);
routes.get("/admin/login", Admin.login);
routes.get("/admin/forgotpassword", Admin.forgotPassword);

routes.get("/admin/empresa", Company.Show);
routes.post("/admin/empresa", Company.Update);

routes.get("/admin/clientes/", Custommer.Index);

export default routes;
