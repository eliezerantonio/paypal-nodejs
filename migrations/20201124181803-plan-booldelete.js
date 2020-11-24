'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.addColumn("Plans", "deactivated", {
            type: Sequelize.DataTypes.BOOLEAN
        })
    },

    down: async(queryInterface, Sequelize) => {

    }
};