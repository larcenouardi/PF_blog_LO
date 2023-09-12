const { Pool } = require('pg')

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database:'blog',
    password:'0708007329',
    port:'5432'
});

module.exports = {
    query: (text, params) => {
      return pool.query(text, params)
    },
  }







