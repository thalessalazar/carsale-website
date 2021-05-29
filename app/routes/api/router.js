import { Router } from "express";

const routes = new Router();

routes.get("/api/cars/minmax/", (req, res, next) =>
    res.json({ min: 0.0, max: 74500.0 })
);

export default routes;
