import {Router} from "express";
import shop from "../../controllers/shop/Shop";

const routes = Router();

routes.get("/", shop.home);
routes.get("/contato", shop.contact);
routes.get("/sobre", shop.about);
routes.get("/carros", shop.cars);
routes.get("/carro", shop.car);

export default routes;
