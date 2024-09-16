import { Sequelize } from 'sequelize';

const connection = new Sequelize('servicos', 'servicos', 'servicos@123', {
  host: 'localhost',
  dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   idle: 10000,
  // },
  // dialectOptions: {
  //   encrypt: true,
  //   ssl: {
  //     ca: require('fs').readFileSync(
  //       '../../utils/DigiCertGlobalRootCA.crt.pem'
  //     ),
  //   },
  // },
});

// const connection = mysql.createConnection({
//   host: 'orderofservice.mysql.database.azure.com',
//   user: 'orderofservice',
//   password: '{your_password}',
//   database: '{your_database}',
//   port: 3306,
//   ssl: { ca: fs.readFileSync('') },
// });

async function createConnectionDataBase() {
  try {
    await connection.authenticate();
    console.log('*******Conecxão feita no banco de dados!*******');
  } catch (error) {
    console.error('Erro ao se conectar ao banco de dados: ', error);
  }
}

export { connection, createConnectionDataBase };
