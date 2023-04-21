import './App.css';
import { useEffect, useState } from 'react';
import Home from "./components/HomeView"
import NavBar from "./components/NavBar"
import NotFound from './components/NotFound';
import ProfileView from "./components/MyProfileView"
import { Routes, Route } from 'react-router-dom';
function App() {

  const [products, setProducts] = useState([])
  const [searchText, setSearchText] = useState('')
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
  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home products={ItemsToDisplay} keyWord={searchText}/>}/>
        <Route path="/saved-items" element={<ProfileView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
