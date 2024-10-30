import sequelize from "../config/db.js"

const RandomRaceView = async () => {
    try {
        await sequelize.query(`DROP VIEW IF EXISTS random_race`);
        await sequelize.query(`
        CREATE VIEW random_race AS
        SELECT name, ROUND((RAND() * max_age), 0) AS age
        FROM race
        ORDER BY RAND()
        LIMIT 1
      `);
        console.log('view random_race created if doesnt exist.');
    } catch (error) {
        console.error('error creating or replacing view random_race:', error);
    }
};

export default RandomRaceView;