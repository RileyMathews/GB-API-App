/*
    module: search submit event handler
    authors: Riley Mathews
    description: provide a function to serve as an event handler for when user clicks the search button
*/

const $ = require("jquery")
const APIManager = require("../api/APIManager")
const buildSearchResults = require("./buildSearchResultsComponent")

const searchHandler = () => {
    //get dom elements
    const searchValue = $("#search__input").val()
    const output = $("#search__output")

    //clear output field of previous results
    output.empty()
    //put a waiting element in the output field
    output.append("<h3>Waiting...</h3>")
    APIManager.getGameByTitle(searchValue)
        .then(response => buildSearchResults(response))
}

module.exports = searchHandler