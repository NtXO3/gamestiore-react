import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Game from './Game';
import { games } from '../data'

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Games</span>
                    </h2>
                    <div className="games">
                        {
                            games
                            .filter(game => game.rating >= 4.5)
                            .slice(0, 4)
                            .map(game => <Game 
                                key= {game.id}
                                game = {game}
                            />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
