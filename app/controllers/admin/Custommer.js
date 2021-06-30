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

        const custommerList = await Custommer.findAll({
            where,
            order,
            limit,
            offset: limit * page - limit,
        });

        return res.render("admin/custommers/custommer", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Clientes",
            query: req.query,
            custommerList,
        });
    }
}

export default new CustommerController();
