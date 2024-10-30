import sequelize from "../config/db.js"

const RandomAlignmentView = async () => {
    try {
        await sequelize.query(`DROP VIEW IF EXISTS random_alignment`);
        await sequelize.query(`
      CREATE VIEW random_alignment AS
      SELECT name 
      FROM alignment
      ORDER BY RAND()
      LIMIT 1
    `);
        console.log('view random_alignment created if doesnt exist.');
    } catch (error) {
        console.error('error creating or replacing view random_alignment:', error);
    }
};

export default RandomAlignmentView;