import * as Yup from "yup";
import Custommer from "../../models/Custommer";

class CustommerController {
    async Index(req, res, next) {
        const custommers = await Custommer.findAll();
        return res.status(200).json(custommers);
    }

    async Show(req, res, next) {
        const { id } = req.params;
        const custommer = await Custommer.findByPk(id);

        if (!custommer) {
            return res.status(404).json();
        }

        return res.json(custommer);
    }

    async Create(req, res, next) {
        const Schema = Yup.object().shape({
            full_name: Yup.string().required(),
            cellphone: Yup.string().required(),
            phone: Yup.string(),
            email: Yup.string(),
            cep: Yup.string().max(8),
            address: Yup.string(),
            instagram: Yup.string(),
        });

        if (!(await Schema.isValid(req.body))) {
            return res.status(400).json({ error: "Error on validate schema" });
        }

        const custommer = await Custommer.create(req.body);

        return res.status(200).json(custommer);
    }

    async Update(req, res, next) {
        const { id } = req.params;

        const Schema = Yup.object().shape({
            full_name: Yup.string(),
            cellphone: Yup.string(),
            phone: Yup.string(),
            email: Yup.string(),
            cep: Yup.string().max(8),
            address: Yup.string(),
            instagram: Yup.string(),
        });

        if (!(await Schema.isValid(req.body))) {
            return res.status(400).json({ error: "Error on validate schema" });
        }

        const custommer = await Custommer.findByPk(id);

        if (!custommer) {
            return res.status(404).json();
        }

        const newCustommer = custommer.update(req.body);

        return res.status(201).json(newCustommer);
    }

    async Destroy(req, res, next) {
        const { id } = req.params;
        const custommer = await Custommer.findByPk(id);

        if (!custommer) {
            return res.status(404).json();
        }

        await custommer.destroy();

        return res.json();
    }
}

export default new CustommerController();
