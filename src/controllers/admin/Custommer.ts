import {Request, Response, NextFunction} from "express";
import {Op} from "sequelize";
import {parseISO} from "date-fns";

import {PrismaClient} from "../../database/client";

const prisma = new PrismaClient();

class CustommerController {
    async Index(req: Request, res: Response, next: NextFunction) {
        // const {
        //     full_name,
        //     createdBefore,
        //     createdAfter,
        //     updatedBefore,
        //     updatedAfter,
        //     sort,
        // } = req.params;

        // const page = req.query.page || 1;
        // const limit = req.query.limit || 25;

        // let where = {};
        // let order: any = [];

        // if (full_name) {
        //     where = {
        //         ...where,
        //         full_name: {
        //             [Op.iLike]: `%${full_name}%`,
        //         },
        //     };
        // }

        // if (createdBefore) {
        //     where = {
        //         ...where,
        //         email: {
        //             [Op.gte]: parseISO(createdBefore),
        //         },
        //     };
        // }

        // if (createdAfter) {
        //     where = {
        //         ...where,
        //         email: {
        //             [Op.lte]: parseISO(createdAfter),
        //         },
        //     };
        // }

        // if (updatedBefore) {
        //     where = {
        //         ...where,
        //         email: {
        //             [Op.gte]: parseISO(updatedBefore),
        //         },
        //     };
        // }

        // if (updatedAfter) {
        //     where = {
        //         ...where,
        //         email: {
        //             [Op.lte]: parseISO(updatedAfter),
        //         },
        //     };
        // }

        // if (sort) {
        //     order = sort.split(",").map((item) => item.split(":"));
        // }

        // const custommerList = await prisma.customer.findMany({
        //     where,
        //     order,
        //     limit,
        //     offset: ((((limit as number) * page) as number) - limit) as number,
        // });

        return res.render("admin/custommers/custommer", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Clientes",
            query: req.query,
        });
    }
}

export default new CustommerController();
