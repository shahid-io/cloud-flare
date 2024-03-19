const express = require('express');
const bodyParser = require('body-parser');
import models, { sequelize } from './models';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});


const eraseDatabaseOnSync = false;
const port = process.env.PORT;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    app.listen({ port: process.env.PORT }, () => {
        console.log(`http://localhost:${port}/`);
    });
}).catch((Err) => {
    throw Err;
});

// const PORT = 3000;
// app.listen(PORT, async () => {
//     console.log(`http://localhost:${PORT}`);
// });
