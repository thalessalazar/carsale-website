import Sequelize, { Model } from "sequelize";

class Company extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                },
                facebook_user: {
                    type: Sequelize.STRING,
                },
                instagram_user: {
                    type: Sequelize.STRING,
                },
                phone: {
                    type: Sequelize.STRING,
                },
                cellphone: {
                    type: Sequelize.STRING,
                },
                email: {
                    type: Sequelize.STRING,
                },
                CEP: {
                    type: Sequelize.STRING,
                },
                address: {
                    type: Sequelize.STRING,
                },
                mission: {
                    type: Sequelize.TEXT,
                    // allowNull: false,
                },
                vision: {
                    type: Sequelize.TEXT,
                    // allowNull: false,
                },
                values: {
                    type: Sequelize.TEXT,
                    // allowNull: false,
                },
                hours_week: {
                    type: Sequelize.STRING,
                },
                hours_saturday: {
                    type: Sequelize.STRING,
                },
                hours_sunday: {
                    type: Sequelize.STRING,
                },
            },
            {
                sequelize,
                name: {
                    singular: "company",
                    plural: "companys",
                },
            }
        );
    }
}

export default Company;
