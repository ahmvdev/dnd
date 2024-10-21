import sequelize from "../config/db.js"

const createRandomAlignmentView = async () => {
    try {
        await sequelize.query(`
      CREATE OR REPLACE VIEW random_alignment AS
      SELECT name 
      FROM alignment
      ORDER BY RAND()
      LIMIT 1
    `);
        console.log('view random_alignment created or replaced successfully.');
    } catch (error) {
        console.error('error creating or replacing view random_alignment:', error);
    }
};

export default createRandomAlignmentView;