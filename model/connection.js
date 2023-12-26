const mysql2=require("mysql2")

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
       user: 'root',
        port: 3306,
        password: 'admin',
        database: "flights"
    }
});

module.exports={
    knex
}
