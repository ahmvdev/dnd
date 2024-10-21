import sequelize from "../config/db.js"

const RandomFirstNameView = async () => {
    try {
        await sequelize.query(`
        CREATE OR REPLACE VIEW random_first_name AS
        SELECT first_name_id, name, gender
        FROM first_name
        WHERE name <> ' '
        ORDER BY RAND()
        LIMIT 1
      `);
    } catch (error) {
        console.error('error creating or replacing view random_first_name:', error);
    }
};

export default RandomFirstNameView;