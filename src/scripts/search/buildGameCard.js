/*
    module: build game card
    authors: Riley Mathews
    purpose: build an html representation for a game object passed to it
*/

const $ = require("jquery")

const buildGameCard = (game) => {
    console.log(game)
    const card = $(
        `
            <article class="media">
                <img class="media-left" src="${game.image.thumb_url}" alt="Card image cap">
                <div>
                    <h2 class="title is-3">${game.name}</h2>
                    <p>${game.deck}</p>
                </div>
            </article>
        `
    )
    return card
}

module.exports = buildGameCard