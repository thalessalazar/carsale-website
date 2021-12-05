import express from "express";
import cors from "cors";
import path from "path";
// import expressSession from "./middlewares/auth/Sessions";

import adminRouter from "./routes/admin/router";
import apiRouter from "./routes/api/router";
import shopRouter from "./routes/shop/router";

// import "./database/index";

class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
        this.server.use(cors());
        // this.server.use(expressSession);
        this.server.use(express.static(path.join(__dirname, "./public")));
        this.server.set("view engine", "ejs");
        this.server.set("views", "src/views");
    }

    routes() {
        this.server.use(shopRouter);
        this.server.use(adminRouter);
        this.server.use(apiRouter);
    }
}

export default new App().server;
