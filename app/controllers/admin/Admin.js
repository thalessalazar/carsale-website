class AdminController {
    async login(req, res) {
        return res.render("admin/login");
    }

    async forgotPassword(req, res) {
        return res.render("admin/forgotpassword");
    }

    async home(req, res) {
        return res.render("admin/index");
    }
}

export default new AdminController();
