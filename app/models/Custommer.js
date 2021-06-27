import Sequelize, { Model } from "sequelize";

class Custommer extends Model {
    static init(sequelize) {
        super.init(
            {
                full_name: Sequelize.STRING,
                cellphone: Sequelize.STRING,
                phone: Sequelize.STRING,
                email: {
                    type: Sequelize.STRING,
                },
                cep: Sequelize.STRING,
                address: Sequelize.STRING,
                instagram: Sequelize.STRING,
            },
            {
                sequelize,
                name: {
                    singular: "custommer",
                    plural: "custommers",
                },
            }
        );
    }
}

export default Custommer;
