
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn("users", "provider");
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.createTable("users", "provider", {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false
    });
  }
};
