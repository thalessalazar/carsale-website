import axios from "axios";

class CompanyController {
    async Show(req, res, next) {
        const company = await axios.get("/api/company/2");

        console.log(company);

        return res.render("admin/company", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Empresa",
        });
    }
}

export default new CompanyController();
