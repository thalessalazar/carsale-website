class AdminController {
    async home(req, res) {
        return res.render("admin/index", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Ínicio",
        });
    }

    async company(req, res) {
        return res.render("admin/company", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Empresa",
        });
    }
}

export default new AdminController();
