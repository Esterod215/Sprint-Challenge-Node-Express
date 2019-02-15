// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

const express = require('express');
const server = express();
const dbProjects = require('./data/helpers/projectModel');
const dbActions = require('./data/helpers/actionModel')
server.use(express.json());













server.listen(8000,()=>{
    console.log('\n*** Running on port 8000 ***\n');
})
