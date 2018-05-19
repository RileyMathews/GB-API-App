/*
    module: search submit event listener
    authors: Riley Mathews
    purpose: add event listener to the search submit button
*/

const $ = require("jquery")
const searchEventHandler = require("./searchSubmitEventHandler")

const addSearchEventListener = () => {
    //get dom element
    $("#search__button__submit").click(searchEventHandler)
}

module.exports = addSearchEventListener