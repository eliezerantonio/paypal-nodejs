'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.addColumn("Users", "plan_id", {
            type: Sequelize.DataTypes.INTEGER,
            references: {
                model: "Plans",
                key: 'id'

            },
            onDelete: "SET NULL",
            onUpdate: "CASCADE"

        })
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};