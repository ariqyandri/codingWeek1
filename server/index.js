const express = require('express');

const app = express();

const port = 3000;

function onListen(){
    console.log(`Listening on: ${port}`)
};

app.listen(
    port,
    onListen()
)