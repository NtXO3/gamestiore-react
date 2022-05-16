import React from 'react';
import { games } from '../data'
import Game from './Game';

const Discounted = () => {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Games</span>
                    </h2>
                    <div className="games">
                        {games
                            .filter(game => game.salePrice)
                            .slice(0, 8)
                            .map(game =><Game game={game} key={game.id} /> ) 
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
