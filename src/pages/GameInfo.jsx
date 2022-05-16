import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Game from '../components/Game';
import GamePrice from '../components/GamePrice';
import Rating from '../components/Rating';

const GameInfo = ({ games, addToCart, cart }) => {
    const { id } = useParams()
    const game = games.find(game => +game.id === +id)
    const cartArray = cart

    function addBookToCart(game) {
        addToCart(game)
    }

    function bookExistsOnCart() {
        return cart.find(game => game.id === +id)
    }

    return (
        <div id="games__body">
            <main id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <Link to="/games" className='game__link'>
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/games" className='game__link'><h2 className="game__selected--title--top">Books</h2></Link>
                        </div>
                        <div className="game__selected">
                            <figure className="game__selected--figure">
                                <img src={game.url} alt="" className="game__selected--img" />
                            </figure>
                            <div className="game__selected--description">
                                <h2 className="game__selected--title">{game.title}</h2>
                                <Rating rating={game.rating}/>
                                <div className="game__selected--price">
                                    <GamePrice salePrice= {game.salePrice} originalPrice={game.originalPrice}/>
                                </div>
                                <div className="game__summary">
                                    <h3 className="game__summary--title">
                                        Summary
                                    </h3>
                                    <p className="game__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro eaque minima, soluta cum non velit iure eveniet reprehenderit praesentium earum ipsum quod facere nam adipisci hic minus deleniti aspernatur.
                                    </p>
                                    <p className="game__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro eaque minima, soluta cum non velit iure eveniet reprehenderit praesentium earum ipsum quod facere nam adipisci hic minus deleniti aspernatur.
                                    </p>
                                </div>
                                {/* <button className="btn" onClick={() => addToCart(game)}>Add To Cart</button> */}
                                {bookExistsOnCart() ? (
                                    <Link to="/cart"><button className="btn">Checkout</button></Link>) 
                                    :
                                    (<button className="btn" onClick={() => addBookToCart(game)}>Add To Cart</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="game__selected--title--top">Recommended Books</h2>
                        </div>
                        <div className="games">
                            {
                                games
                                    .filter(game => game.rating >= 4.5 && +game.id !== +id )
                                    .slice(0, 4)
                                    .map(game => <Game game = {game} key={game.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GameInfo;
