import React, {useState} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import MyList from './Pages/MyList';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Item searched: ", value);
  }

  return (
    <Router>
      <Header onSearch={handleSearch}/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/mylist' element={<MyList/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
