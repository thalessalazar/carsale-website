/* eslint-disable arrow-body-style */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.createTable("company", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: false,
            },
            facebook_user: {
                type: Sequelize.STRING,
            },
            instagram_user: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cellphone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            CEP: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
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
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("company");
    },
};
