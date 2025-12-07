import React, {useState} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Shop from './Pages/Shop';

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
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </Router>
  )
}

export default App
