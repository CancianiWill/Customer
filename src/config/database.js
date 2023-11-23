module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "809354",
  database: "dbcrud",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
