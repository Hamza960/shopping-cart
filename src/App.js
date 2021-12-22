
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import data from './data';
import {useState} from 'react';

function App() {
  
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const Add = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist){
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const Remove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1){
      setCartItems(
        cartItems.filter((x) => x.id !== product.id)
      );
    } else{
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
    }
  };

  return (
    <div>
      <Header countItems = {cartItems.length}></Header>
      <div className="container-fluid">
      <div className="row">
      <Home Add = {Add} products = {products}></Home>
      <Cart Add = {Add} Remove = {Remove} cartItems = {cartItems}></Cart>
      </div>
      </div>
    </div>
  );
}

export default App;
