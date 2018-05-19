/*
    module: clear search field
    authors: Riley Mathews
    purpose: reset the value of the search input field
*/

const $ = require("jquery")

const clearSearchField = () => {
    $("#search__input").val("")
}

module.exports = clearSearchField