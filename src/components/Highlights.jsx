import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HighlightComponent from './HighlightComponent';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Why Choose<span className="purple">&nbsp;GameStore</span></h2>
                    <div className="highlight__wrapper">
                        <HighlightComponent 
                        icon = {<FontAwesomeIcon icon="bolt" />}
                        title = "Easy and Quick"
                        para = "Easily purchase your Game and get it delivered to your home."
                        />
                        <HighlightComponent 
                        icon = {<FontAwesomeIcon icon="gamepad" />}
                        title = "10,000+ Games"
                        para = "GameStore has the most popular games for Playstation, Xbox and PC."
                        />
                        <HighlightComponent 
                        icon = {<FontAwesomeIcon icon="tags" />}
                        title = "Affordable Prices"
                        para = "Get your hands on popular games for as little as €20."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
