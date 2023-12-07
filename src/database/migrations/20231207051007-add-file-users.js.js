module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("users", "file_id", {
      type: Sequelize.INTEGER,
      reference: {model: "files", key: "id"},
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down (queryInterface) {
    return queryInterface.removeColumn("users", "file_id")
  }}