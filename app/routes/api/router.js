import { Router } from "express";

import company from "../../controllers/api/Company";

const routes = new Router();

routes.get("/api/companys/", company.Index);

export default routes;
