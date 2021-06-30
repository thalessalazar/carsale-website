import Company from "../../models/Company";

class CompanyController {
    async Show(req, res, next) {
        const companyList = await Company.findAll();

        const company = companyList[0];

        return res.render("admin/company/index", {
            company,
        });
    }

    async Update(req, res, next) {
        console.log(req.body);

        const company = await Company.findOne({
            where: {
                id: req.body.id,
            },
        });

        const newCompany = await company.update(req.body);

        return res.render("admin/company", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Empresa",
            company: newCompany,
        });
    }
}

export default new CompanyController();
