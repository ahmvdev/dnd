import sequelize from "../config/db.js"

const RandomPersonView = async () => {
  try {
    await sequelize.query(`DROP VIEW IF EXISTS random_person`);
    await sequelize.query(`
      CREATE VIEW random_person AS
      SELECT 
        random_first_name.name AS first_name,
        random_last_name.name AS last_name,
        random_first_name.gender AS gender,
        random_race.name AS race,
        random_race.age AS age,
        random_class.class AS class,
        random_class.level AS level,
        random_alignment.name AS alignment
      FROM 
        random_last_name
      JOIN 
        random_first_name
      JOIN 
        random_race
      JOIN 
        random_class
      JOIN 
        random_alignment
    `);
    console.log('view random_person created if doesnt exist.');

  } catch (error) {
    console.error('error creating or replacing view random_person:', error);
  }
};

export default RandomPersonView;
