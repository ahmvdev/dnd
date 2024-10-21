import sequelize from "../config/db.js"

const RandomClassView = async () => {
    try {
        await sequelize.query(`
        CREATE OR REPLACE VIEW random_class AS
        SELECT name AS class, ROUND((RAND() * 20), 0) AS level
        FROM character_class
        ORDER BY RAND()
        LIMIT 1
      `);
    } catch (error) {
        console.error('error creating or replacing view random_class:', error);
    }
};

export default RandomClassView;