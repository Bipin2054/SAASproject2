
import { Sequelize } from "sequelize-typescript"
require('dotenv').config();


const sequelize = new Sequelize({
  database: process.env.DB_NAME, //Database name
  username: process.env.DB_USERNAME, //Database username
  password: process.env.DB_PASSWORD, //Database password
  host: process.env.DB_HOST, //database host yesko matlab locally aafnai comnputer ma database run gareko xam
  dialect: "mysql", // k database use gareko xam vanne kura ho yo
  port: Number(process.env.DB_PORT),// database ko port number
  models: [__dirname + "/models"]

})

sequelize.authenticate()
  .then(() => {
    console.log("Connection vyo")

  })
  .catch((err) => {

    console.log("Error aayo hai", err)
  })

  // Sync the models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log("Models synced with the database")
  })
  .catch((err) => {
    console.error("Error syncing models:", err)
  })


export default sequelize