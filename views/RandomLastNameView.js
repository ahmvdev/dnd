import sequelize from "../config/db.js"

const RandomLastNameView = async () => {
    try {
        await sequelize.query(`DROP VIEW IF EXISTS random_last_name`);
        await sequelize.query(`
        CREATE VIEW random_last_name AS
        SELECT last_name_id, name
        FROM last_name
        ORDER BY RAND()
        LIMIT 1
      `);
        console.log('view random_lastname created if doesnt exist.');
    } catch (error) {
        console.error('error creating or replacing view random_last_name:', error);
    }
};

export default RandomLastNameView; 