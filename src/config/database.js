module.exports = {
    dialect: 'postgresql',
    host: 'localhost',
    username: 'postgres',
    password: '809354',
    database: 'dbcrud',
    define: {
        timestamp: true, //cria duas colunas: createdAt e updatedAt
        underscored: true, //nomenclatura _ (curstomersGroup => customers_group)
        underscoredAll: true, 
    }
}