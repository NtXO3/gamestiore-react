import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Games from "./pages/Games";
import { games } from './data'
import GameInfo from "./pages/GameInfo";
import Cart from "./pages/Cart";


function App() {
  const [cart, setCart] = useState([])

  function addToCart(game) {
    setCart([...cart, {...game, quantity: 1}])
  }
  
  function removeFromCart(game) {
    console.log(game)
    setCart(cart.filter(item => +item.id !== +game.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => counter += item.quantity)
    return counter
  }

  function changeQuantity(game, quantity) {
    setCart(cart.map(item => 
      item.id === game.id ? {
        ...item,
        quantity: +quantity
        } :
        item
    ))
  }

  // useEffect(() => {
  //   console.log(cart)
  // }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav totalQuantity={numberOfItems}/>
        <Route path="/" exact component={Home} />
        <Route path="/games" exact render={() => <Games games={games}/>} />
        <Route path="/games/:id" render={() => <GameInfo games={games} addToCart={addToCart} cart={cart}/>} />
        <Route path ="/cart" exact render={() => <Cart games={games} cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
