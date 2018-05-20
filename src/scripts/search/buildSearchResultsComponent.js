/*
    module: build search results component
    authors: Riley Mathews
    purpose: take results from api search and build out response
*/

const $ = require("jquery")
const buildGameCard = require("./buildGameCard")

const buildSearchResultsComponent = (search) => {
    //get dom elements
    const output = $("#search__output")

    //create virtual jquery element
    const resultsFragment = $("<div class=\"card-columns\">")

    //clear out results field
    output.empty()

    //for each result
    search.results.forEach(result => {
        const gameCard = buildGameCard(result)
        resultsFragment.append(gameCard)
    })
    output.append(resultsFragment)
}

module.exports = buildSearchResultsComponent