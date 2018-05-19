/*
    module: build search component
    authors: Riley Mathews
    purpose: to build html components for the search functionality
*/

const $ = require("jquery")

const buildSearchComponent = () => {
    //get dom elements
    const output = $("#main__output")

    //build search input and button
    const searchComponent = $(
        `
            <div id="search" class="component">
                <div id="search__header" class="component__header">
                    <h2 class="component__title">Search</h2>
                    <input type="text" id="search__input" class="component__input">
                    <button id="search__button__submit" class="component__button">Search</button>
                </div>
                <div id="search__output" class="component__output"></div>
            </div>
        `
    )

    //append search element to dom
    output.append(searchComponent)
}

module.exports = buildSearchComponent