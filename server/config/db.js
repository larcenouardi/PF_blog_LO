const { Pool } = require('pg')

const pool = new Pool({
  user : 'blog',
  host : 'dpg-ck7fog08elhc73acpncg-a.oregon-postgres.render.com',
  database:'blog_ukdm',
  password:'CDmW1hCTIBO0bvyy2mmJNWUDxUehG8UA',
  port:'5432',
  ssl: true,
});

module.exports = {
    query: (text, params) => {
      return pool.query(text, params)
    },
  }







