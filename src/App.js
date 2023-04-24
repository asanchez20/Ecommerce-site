import './App.css';
import { useEffect, useState } from 'react';
import Home from "./components/HomeView"
import NavBar from "./components/NavBar"
import NotFound from './components/NotFound';
import CartView from './components/CartView';
import { Routes, Route } from 'react-router-dom';
function App() {

  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
              setProducts(data)
              console.log(data)
            })
        
  }, [])

  const ItemsToDisplay = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const onAdd = (ItemsToDisplay) => {
    const exist = cartItems.find(x => x.id === ItemsToDisplay.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === ItemsToDisplay.id ? {...exist, qty: exist.qty +1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...ItemsToDisplay, qty: 1}])
    }
  }
  const onRemove = (ItemsToDisplay) => {
    const exist = cartItems.find((x) => x.id === ItemsToDisplay.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== ItemsToDisplay.id))
    } else {
      setCartItems(
        cartItems.map((x) => x.id === ItemsToDisplay.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  }
  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home products={ItemsToDisplay} keyWord={searchText} onAdd={onAdd}/>}/>
        <Route path='/cart'element={<CartView cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
