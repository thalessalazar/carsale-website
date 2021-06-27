import { Router } from "express";

import company from "../../controllers/api/Company";
import custommer from "../../controllers/api/Custommer";

const routes = new Router();

// companys
routes.get("/api/company/", company.Index);
routes.get("/api/company/:id", company.Show);
routes.post("/api/company/", company.Create);
routes.put("/api/company/:id", company.Update);
routes.delete("/api/company/:id", company.Destroy);

// custommer
routes.get("/api/custommer/", custommer.Index);
routes.get("/api/custommer/:id", custommer.Show);
routes.post("/api/custommer/", custommer.Create);
routes.put("/api/custommer/:id", custommer.Update);
routes.delete("/api/custommer/:id", custommer.Destroy);

export default routes;
