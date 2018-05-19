/*
    module: build game card
    authors: Riley Mathews
    purpose: build an html representation for a game object passed to it
*/

const $ = require("jquery")

const buildGameCard = (game) => {
    const card = $(
        `
            <div>
                <h3>${game.name}</h3>
                <img src="${game.image.thumb_url}" alt="image of game">
            </div>
        `
    )
    return card
}

module.exports = buildGameCard