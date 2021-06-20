import * as Yup from "yup";
import Company from "../../models/Company";

class CompanyController {
    async Index(req, res, next) {
        const company = await Company.findAll();
        return res.status(200).json(company);
    }

    async Show(req, res, next) {
        const company = await Company.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!company) {
            return res.status(404).json();
        }

        return res.json(company);
    }

    async Create(req, res, next) {
        const Schema = Yup.object().shape({
            facebook_user: Yup.string(),
            instagram_user: Yup.string(),
            phone: Yup.string(),
            cellphone: Yup.number(),
            email: Yup.string().email(),
            cep: Yup.number(),
            address: Yup.string(),
            mission: Yup.string(),
            vision: Yup.string(),
            values: Yup.string(),
            hours_week: Yup.string(),
            hours_saturday: Yup.string(),
            hours_sunday: Yup.string(),
        });

        if (!(await Schema.isValid(req.body))) {
            return res.status(400).json({ error: "Error on validate schema" });
        }

        const company = await Company.create(req.body);

        return res.status(200).json(company);
    }

    async Update(req, res, next) {
        const Schema = Yup.object().shape({
            facebook_user: Yup.string(),
            instagram_user: Yup.string(),
            phone: Yup.string(),
            cellphone: Yup.number(),
            email: Yup.string().email(),
            cep: Yup.number(),
            address: Yup.string(),
            mission: Yup.string(),
            vision: Yup.string(),
            values: Yup.string(),
            hours_week: Yup.string(),
            hours_saturday: Yup.string(),
            hours_sunday: Yup.string(),
        });

        if (!(await Schema.isValid(req.body))) {
            return res.status(400).json({ error: "Error on validate schema" });
        }

        const company = await Company.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!company) {
            return res.status(404).json();
        }

        await company.update(req.body);

        return res.json(company);
    }

    async Destroy(req, res, next) {
        const company = await Company.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!company) {
            return res.status(404).json();
        }

        await company.destroy();

        return res.json();
    }
}

export default new CompanyController();
