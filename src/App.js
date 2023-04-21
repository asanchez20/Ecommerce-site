import './App.css';
import { useEffect, useState } from 'react';
import Home from "./components/HomeView"
import NavBar from "./components/NavBar"

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
  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home products={products} keyWord={searchText}/>}/>
        <Route path="/saved-items" element={<ProfileView />} />
      </Routes>
    </div>
  );
}

export default App;
