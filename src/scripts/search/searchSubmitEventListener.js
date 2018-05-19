/*
    module: search submit event listener
    authors: Riley Mathews
    purpose: add event listeners that will initiate the search
*/

const $ = require("jquery")
const searchEventHandler = require("./searchSubmitEventHandler")
const clearSearchField = require("./clearSearchField")

const addSearchEventListener = () => {
    //add listener to submit button click
    $("#search__button__submit").click(() => {
        searchEventHandler()
        clearSearchField()
    })

    //add listener for enter key on search input field
    $("#search__input").keypress((e) => {
        key = e.which
        if (key === 13) {
            searchEventHandler()
            clearSearchField()
        }
    })
}

module.exports = addSearchEventListener