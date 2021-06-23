import { Router } from "express";

import company from "../../controllers/api/Company";

const routes = new Router();

routes.get("/api/company/", company.Index);
routes.get("/api/company/:id", company.Show);
routes.post("/api/company/", company.Create);
routes.put("/api/company/:id", company.Update);
routes.delete("/api/company/:id", company.Destroy);

export default routes;
