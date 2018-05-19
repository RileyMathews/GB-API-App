// template main.js file to import bootstrap jquery
require ("bootstrap")
const APIManager = require("./api/APIManager")

APIManager.getGameByTitle("metroid prime").
    then(response => console.log(response))