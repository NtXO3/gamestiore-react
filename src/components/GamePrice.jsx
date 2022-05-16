import React from 'react';

const GamePrice = ({ salePrice, originalPrice }) => {
    if(salePrice) {
        return (
            <div className="game__price">
                <span className="game__price--normal">€{originalPrice.toFixed(2)}</span>€{salePrice.toFixed(2)}
            </div>
        )
    }
    return (
        <div className="game__price">
            €{originalPrice.toFixed(2)}
        </div>
    );
}

export default GamePrice;
