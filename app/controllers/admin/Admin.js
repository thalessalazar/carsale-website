class AdminController {
    async home(req, res) {
        return res.render("admin/index", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Ínicio",
        });
    }
}

export default new AdminController();
