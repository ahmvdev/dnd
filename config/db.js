import { Sequelize } from 'sequelize';
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PSWD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
export default sequelize;
