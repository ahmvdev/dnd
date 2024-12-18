import sequelize from "../config/db.js"

const RandomFirstNameView = async () => {
    try {
        await sequelize.query(`DROP VIEW IF EXISTS random_first_name`);
        await sequelize.query(`
        CREATE VIEW random_first_name AS
        SELECT first_name_id, name, gender
        FROM first_name
        WHERE name <> ' '
        ORDER BY RAND()
        LIMIT 1
      `);
        console.log('view random_firstname created if doesnt exist');
    } catch (error) {
        console.error('error creating or replacing view random_first_name:', error);
    }
};

export default RandomFirstNameView;