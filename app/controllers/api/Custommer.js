import * as Yup from "yup";
import { Op } from "sequelize";
import { parseISO } from "date-fns";

import Custommer from "../../models/Custommer";

class CustommerController {
    async Index(req, res, next) {
        const {
            full_name,
            createdBefore,
            createdAfter,
            updatedBefore,
            updatedAfter,
            sort,
        } = req.params;

        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        let where = {};
        let order = [];

        if (full_name) {
            where = {
                ...where,
                full_name: {
                    [Op.iLike]: `%${full_name}%`,
                },
            };
        }

        if (createdBefore) {
            where = {
                ...where,
                email: {
                    [Op.gte]: parseISO(createdBefore),
                },
            };
        }

        if (createdAfter) {
            where = {
                ...where,
                email: {
                    [Op.lte]: parseISO(createdAfter),
                },
            };
        }

        if (updatedBefore) {
            where = {
                ...where,
                email: {
                    [Op.gte]: parseISO(updatedBefore),
                },
            };
        }

        if (updatedAfter) {
            where = {
                ...where,
                email: {
                    [Op.lte]: parseISO(updatedAfter),
                },
            };
        }

        if (sort) {
            order = sort.split(",").map((item) => item.split(":"));
        }

        const data = await Custommer.findAll({
            where,
            order,
            limit,
            offset: limit * page - limit,
        });
        return res.status(200).json(data);
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
