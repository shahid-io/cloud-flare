
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());



const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`http://localhost:${PORT}`);
});
