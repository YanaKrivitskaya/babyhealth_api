const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`app is listening at http://localhost:${port}`);
});