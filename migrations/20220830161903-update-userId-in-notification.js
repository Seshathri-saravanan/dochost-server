'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Notifications', 'userId', {
          transaction: t,
        }),
      ]);
    });
    queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Notifications', 'userId', {
          transaction: t,
        }),
      ]);
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
