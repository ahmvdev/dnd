import express from 'express';
import sequelize from './config/db.js';
import RandomAlignmentView from './views/RandomAlignmentView.js';
import RandomClassView from './views/RandomClassView.js';
import RandomFirstNameView from './views/RandomFirstNameView.js';
import RandomLastNameView from './views/RandomLastNameView.js';
import RandomPersonView from './views/RandomPersonView.js';
import RandomRaceView from './views/RandomRaceView.js';


const app = express();
const port = 3000;

sequelize.sync({ force: false })
    .then(() => {
        console.log('all tables synced.');
        RandomAlignmentView();
        RandomClassView();
        RandomFirstNameView();
        RandomLastNameView();
        RandomPersonView();
        RandomRaceView();
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


app.get('/random-person', async (req, res) => {
    try {
        const [result] = await sequelize.query(`SELECT * FROM random_person`);
        res.json(result);
    } catch (error) {
        console.error('Error fetching random person:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
