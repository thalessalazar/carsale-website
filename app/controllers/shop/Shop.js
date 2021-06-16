class ShopController {
    async home(req, res) {
        return res.render("shop/index");
    }

    async contact(req, res) {
        return res.render("shop/contact", {
            titlePage: "Fale Conosco",
            breadcumbPage: "Fale Conosco",
        });
    }

    async about(req, res) {
        return res.render("shop/about", {
            titlePage: "Nossa Empresa",
            breadcumbPage: "Sobre nós",
        });
    }

    async cars(req, res) {
        return res.render("shop/car", {
            titlePage: "Listagem de Carros",
            breadcumbPage: "Carros",
        });
    }

    async car(req, res) {
        return res.render("shop/car-details", {
            titlePage: "Ver Carro",
            breadcumbPage: "Carro",
        });
    }
}

export default new ShopController();
