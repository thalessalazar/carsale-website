/* eslint-disable arrow-body-style */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.createTable("companies", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
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
            cep: {
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
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("companies");
    },
};
