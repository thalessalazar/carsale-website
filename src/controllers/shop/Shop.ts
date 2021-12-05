import {Request, Response, NextFunction} from "express";

class ShopController {
  async home(req: Request, res: Response, next: NextFunction) {
    console.log("asdasd");
    return res.render("shop/index.ejs");
  }

  async contact(req: Request, res: Response, next: NextFunction) {
    return res.render("shop/contact", {
      titlePage: "Fale Conosco",
      breadcumbPage: "Fale Conosco",
    });
  }

  async about(req: Request, res: Response, next: NextFunction) {
    return res.render("shop/about", {
      titlePage: "Nossa Empresa",
      breadcumbPage: "Sobre nós",
    });
  }

  async cars(req: Request, res: Response, next: NextFunction) {
    return res.render("shop/car", {
      titlePage: "Listagem de Carros",
      breadcumbPage: "Carros",
    });
  }

  async car(req: Request, res: Response, next: NextFunction) {
    return res.render("shop/car-details", {
      titlePage: "Ver Carro",
      breadcumbPage: "Carro",
    });
  }
}

export default new ShopController();
