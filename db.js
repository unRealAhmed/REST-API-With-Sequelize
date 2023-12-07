const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'expresstasks',
  'root',
  '', {
  host: 'localhost',
  dialect: 'mysql'
}
)

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// async function connectDB() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connectDB()

module.exports = { sequelize, connectDB }