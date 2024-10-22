import express from 'express';
import sequelize from './config/db.js';
import Alignment from './models/Alignment.js';
import CharacterClass from './models/CharacterClass.js';
import FirstName from './models/FirstName.js';
import LastName from './models/LastName.js';
import Race from './models/Race.js';

const app = express();
const port = 3000;

sequelize.sync({ force: false })
    .then(() => {
        console.log('all tables synced.');
    })
    .catch((err) => {
        console.error('error syncing tables:', err);
    });

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
