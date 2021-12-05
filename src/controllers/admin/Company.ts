import {Request, Response, NextFunction} from "express";

import {PrismaClient} from "../../database/client";

const prisma = new PrismaClient();

class CompanyController {
    async Show(req: Request, res: Response, next: NextFunction) {
        const companyList = await prisma.company.findMany();

        const company = companyList[0];

        return res.render("admin/company/index", {
            company,
        });
    }

    async Update(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);

        const company = await prisma.company.findFirst({
            where: {
                id: Number(req.body.id),
            },
        });

        const newCompany = await prisma.company.update(req.body);

        return res.render("admin/company", {
            titlePage: "Painel Administrativo",
            breadcumbPage: "Empresa",
            company: newCompany,
        });
    }
}

export default new CompanyController();
