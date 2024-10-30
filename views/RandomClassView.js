import sequelize from "../config/db.js"

const RandomClassView = async () => {
    try {
        await sequelize.query(`DROP VIEW IF EXISTS random_class`);
        await sequelize.query(`
        CREATE VIEW random_class AS
        SELECT name AS class, ROUND((RAND() * 20), 0) AS level
        FROM character_class
        ORDER BY RAND()
        LIMIT 1
      `);
        console.log('view random_class created if doesnt exist.');

    } catch (error) {
        console.error('error creating or replacing view random_class:', error);
    }
};

export default RandomClassView;