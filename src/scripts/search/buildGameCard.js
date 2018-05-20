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
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${game.image.small_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text">${game.deck}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    )
    return card
}

module.exports = buildGameCard