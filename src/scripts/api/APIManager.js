/*
    Module: APIManager
    Authors: Riley Mathews
    Description: object with methods to handle queries to the api
*/

const $ = require("jquery")

const APIManager = Object.create(null, {
    getGameByTitle: {
        value: function(title) {
            return $.ajax({
                type: "GET",
                dataType: "jsonp",
                crossDomain: true,
                jsonp: "json_callback",
                url: `http://www.giantbomb.com/api/search?api_key=817e4ec0b4026b38424f3c98970b14d273226692&format=jsonp&query=${title}&resources=game`
            })
        }
    },
    communityDemoSearch: {
        value: function() {
            $.ajax ({
                type: "GET",
                dataType: "jsonp",
                crossDomain: true,
                jsonp: "json_callback",
                url: "http://www.giantbomb.com/api/search/?format=jsonp&api_key=817e4ec0b4026b38424f3c98970b14d273226692&query=uncharted",
                complete: function() {
                    console.log("done");
                },
                success: function(data) {
                    console.log(data);
                }
            });
        }
    }
})

module.exports = APIManager