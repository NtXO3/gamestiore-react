import React from 'react';
import HeaderImg from '../assets/undraw_gaming2.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>The Most Popular Games on a Single Platform</h1>
                        <h2>Find your dream game with GameStore</h2>
                        <Link to="/games">
                            <button className="btn">Browse Games</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={HeaderImg} alt="" className="header__img" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
