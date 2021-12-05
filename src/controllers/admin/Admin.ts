import {Request, Response, NextFunction} from "express";

class AdminController {
    async login(req: Request, res: Response, next: NextFunction) {
        return res.render("admin/login");
    }

    async forgotPassword(req: Request, res: Response, next: NextFunction) {
        return res.render("admin/forgotpassword");
    }

    async home(req: Request, res: Response, next: NextFunction) {
        return res.render("admin/index");
    }
}

export default new AdminController();
