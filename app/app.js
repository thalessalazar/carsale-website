import express from "express";
import adminRouter from "./routes/admin/router";
import apiRouter from "./routes/api/router";

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(adminRouter);
        this.server.use(apiRouter);
    }
}

export default new App().server;
