const express = require('express')
const chaklk = require('chalk')

const server = express();

server.get('/', (req,res) => {

    res.sendFile('./pages/home.html',{root:__dirname})

});

server.listen(3000,() => {

    console.log(chalk.green('Server Started on port 3000'))

});