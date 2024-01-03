const { Pool } = require('pg');
async function conectar() {
  
  if (global.connection)
    
    return global.connection.connect();
  const pool = new Pool({
    
    connectionString: 'postgres://aluno_20201214010030.136516@177.136.201.182:5439/temp?schema=aluno_20201214010030'
  
  });
  const client = await pool.connect();
  console.log("Criou pool de conexões no PostgreSQL!");
  global.connection = pool;
  return pool;
}
module.exports = { conectar }
