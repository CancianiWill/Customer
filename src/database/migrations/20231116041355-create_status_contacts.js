module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("contacts", "status", {
      type: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    });
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn("contacts", "status", { transaction });
      await queryInterface.sequelize.query("DROP TYPE enum_customers_status", { transaction });
    });
  }
};