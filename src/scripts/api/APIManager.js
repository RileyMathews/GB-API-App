/*
    Module: APIManager
    Authors: Riley Mathews
    Description: object with methods to handle queries to the api
*/

const $ = require("jquery")

const APIManager = Object.create(null, {
    getGameByTitle: {
        value: function(title) {
            return $.ajax(`http://www.giantbomb.com/api/search?api_key=817e4ec0b4026b38424f3c98970b14d273226692 &format=json&query=${title}`)
        }
    }
})

module.exports = APIManager