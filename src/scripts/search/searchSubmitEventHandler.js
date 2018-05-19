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
    console.log(searchValue)
    APIManager.getGameByTitle(searchValue)
        .then(response => buildSearchResults(response))
}

module.exports = searchHandler