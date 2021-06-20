import Company from "../../models/Company";

class CompanyController {
    async Index(req, res, next) {
        const company = await Company.findAll();
        return res.status(200).json(company);
    }
}

export default new CompanyController();
