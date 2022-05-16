import React, { useState } from 'react';
import Game from '../components/Game';

const Games = ({ games: initialGames }) => {
    const [games, setGames] = useState(initialGames)

    function filterBooks(e) {
        const filter = e.target.value
        console.log(filter)
        if (filter === "LOW_TO_HIGH") {
            setGames(games.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        } else if (filter === "HIGH_TO_LOW") {
            setGames(games.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        } else if (filter === "RATING") {
            setGames(games.slice().sort((a, b) => (b.rating) - (a.rating)))
        }
    }

    return (
        <div id="games__body">
            <main id="games__main">
                <section>
                    <div className="games__container">
                        <div className="row">
                            <div className="games__header">
                                <h2 className="section__title games__header--title">All Games</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={filterBooks}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="LOW_TO_HIGH">Price, Low to High</option>
                                    <option value="HIGH_TO_LOW">Price, High to Low</option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="games">
                                {
                                    games.map(game => <Game game={game} key={game.id} />)
                                }
                            </div>
                        </div>  
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Games;
