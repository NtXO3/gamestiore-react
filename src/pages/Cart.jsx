import React from 'react';
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
    const total = () => {
        let totalAmount = 0
        cart.forEach(item => {
            totalAmount += +(item.quantity * (item.salePrice || item.originalPrice))
        })
        return totalAmount
    }

    return (
        <div id="games__body">
            <div id="games__main">
                <div className="games__container">
                    <div className="row">
                        <div className="game__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__game">Game</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__price">Price</span>
                            </div>
                            {
                                cart.length > 0 ?
                                <div className="cart__body">
                                    {
                                        cart.map(game => {
                                            return (
                                                <div className="cart__item">
                                                    <div className="cart__game">
                                                        <img src={game.url} alt="" className="cart__game--img" />
                                                        <div className="cart__game--info">
                                                            <span className="cart__game--title">
                                                                {game.title}
                                                            </span>
                                                            <span className="cart__game--price">€{(game.salePrice || game.originalPrice).toFixed(2)}</span>
                                                            <button className="cart__game--remove" onClick={() => removeFromCart(game)}>Remove</button>
                                                        </div>
                                                    </div>
                                                    <div className="cart__quantity">
                                                        <input type="number" min={0} max={99} className="cart__input" value={game.quantity} onChange={(event) => changeQuantity(game, event.target.value)} />
                                                    </div>
                                                    <div className="cart__total">
                                                        €{(game.quantity * (game.salePrice || game.originalPrice)).toFixed(2)}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any games in your cart!</h2>
                                    <Link to="/games">
                                        <button className="btn">Browse Games</button>
                                    </Link>
                                </div>
                            }
                        </div>
                        {cart.length > 0 ?
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>€{(total() * 0.9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>€{(total() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>€{total()}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" onClick={() => alert("Checkout isn't implemented yet")}>Proceed to Checkout</button>
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
